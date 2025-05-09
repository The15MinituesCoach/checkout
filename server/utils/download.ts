import crypto from 'crypto';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// ES Module replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Store temporary download tokens with expiration time 
interface DownloadToken {
  productId: string;
  filePath: string;
  expiresAt: Date;
  customerEmail: string;
  used: boolean;
}

// In-memory storage for download tokens (would be replaced with database in production)
const downloadTokens: Map<string, DownloadToken> = new Map();

/**
 * Generate a secure download token
 * @param productId - ID of the purchased product
 * @param customerEmail - Email of the customer
 * @param filePath - Path to the PDF file
 * @param expirationHours - Hours until token expires (default: 24)
 * @returns Secure download token
 */
export function generateDownloadToken(
  productId: string,
  customerEmail: string,
  filePath: string,
  expirationHours: number = 24
): string {
  // Generate a unique token
  const token = crypto.randomBytes(32).toString('hex');
  
  // Calculate expiration time
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + expirationHours);
  
  // Store token with metadata
  downloadTokens.set(token, {
    productId,
    filePath,
    expiresAt,
    customerEmail,
    used: false
  });
  
  return token;
}

/**
 * Verify download token and retrieve file information
 * @param token - Download token to verify
 * @returns File information if token is valid, null otherwise
 */
export function verifyDownloadToken(token: string): { 
  filePath: string;
  fileName: string;
} | null {
  // Check if token exists
  const downloadToken = downloadTokens.get(token);
  if (!downloadToken) {
    return null;
  }
  
  // Check if token is expired
  if (downloadToken.expiresAt < new Date()) {
    // Clean up expired token
    downloadTokens.delete(token);
    return null;
  }
  
  // Check if token has already been used (optional - remove for multiple downloads)
  // if (downloadToken.used) {
  //   return null;
  // }
  
  // Mark token as used (optional - remove for multiple downloads)
  // downloadToken.used = true;
  
  // Get file name from path
  const fileName = path.basename(downloadToken.filePath);
  
  return {
    filePath: downloadToken.filePath,
    fileName
  };
}

/**
 * Clean up expired download tokens
 */
export function cleanupExpiredTokens(): void {
  const now = new Date();
  
  // Use Array.from to convert entries to an array for compatibility
  Array.from(downloadTokens.entries()).forEach(([token, metadata]) => {
    if (metadata.expiresAt < now) {
      downloadTokens.delete(token);
    }
  });
}

// Run cleanup every hour
setInterval(cleanupExpiredTokens, 60 * 60 * 1000);

/**
 * Generate a download URL for a purchased product
 * @param productId - ID of the purchased product 
 * @param customerEmail - Email of the customer
 * @param baseUrl - Base URL of the application
 * @returns Download URL with secure token
 */
export function generateDownloadUrl(
  productId: string,
  customerEmail: string,
  baseUrl: string
): string {
  // Map product IDs to file paths
  const productFilePaths: Record<string, string> = {
    'narcissism-survival-guide': path.resolve(__dirname, '../../protected-assets/narcissism-survival-guide.pdf'),
    // Add more products as needed
  };
  
  // Get file path for the product
  const filePath = productFilePaths[productId];
  if (!filePath) {
    throw new Error(`Product not found: ${productId}`);
  }
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`Product file not found: ${filePath}`);
  }
  
  // Generate download token
  const token = generateDownloadToken(productId, customerEmail, filePath);
  
  // Generate download URL
  return `${baseUrl}/api/download/${token}`;
}