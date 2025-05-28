import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CountdownTimer from "@/components/CountdownTimer";
import { ShieldCheck, FileText, Lock, MessageSquare } from "@/components/ui/icons";

export default function Hero() {
  return (
<section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 pb-8 w-full">
      <div className="pt-8 px-2 sm:px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start">
          <div>
            <div className="relative my-4 max-w-lg mx-auto">
              <div className="relative bg-white py-3 px-4 border-2 border-gray-300 rounded-md text-center shadow-md">
                <div className="flex items-center justify-center mb-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#234E52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 12L10.5 15L16.5 9" stroke="#234E52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-primary-dark font-bold text-sm uppercase tracking-wider">Official Partnership</span>
                </div>
                <p className="font-serif">
                  <span className="text-primary-dark font-bold text-lg">In Collaboration with</span>
                  <br/>
                  <span className="text-accent-dark font-black text-xl">Mental Health & Trauma Research</span>
                </p>
                <div className="absolute right-2 top-2 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded transform rotate-6">
                  VERIFIED
                </div>
              </div>
            </div>
          
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4 text-gradient text-center">
              <span>RECLAIM YOUR REALITY IN</span>
              <br className="hidden sm:block" />
              <div className="flex justify-center">
                <span className="bg-accent/30 text-accent-dark px-4 py-2 rounded-lg font-extrabold inline-block mb-2 whitespace-nowrap">JUST 15 MINUTES A DAY</span>
              </div>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-heading font-medium text-neutral-darker mb-4 text-center">
              The Complete Narcissism Survival System
              <br/>
              <span className="text-lg">Includes 32 Proven Tools for Healing, Boundaries & Emotional Clarity</span>
            </h2>
            
            <div className="glassmorphism rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-accent/20 transition-all duration-500 relative overflow-hidden group mb-4">
              
              <div className="absolute right-0 top-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700"></div>
              <div className="absolute left-0 bottom-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
              
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-0">
                <div className="order-1 h-full">
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-4 rounded-lg border border-primary/20 shadow-sm h-full flex flex-col">
                    <div className="bg-gradient-to-r from-purple-600 via-primary to-accent mb-3 p-0.5 rounded-lg shadow-md">
                      <div className="flex items-center justify-center bg-white/90 px-2 py-2 rounded-md relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-white/30"></div>
                        <div className="absolute left-0 top-0 bg-purple-500 text-white text-xs font-bold py-0.5 px-2 rounded-br-lg">01 JUN</div>
                        <p className="font-medium text-primary-dark text-center mx-auto pl-12 relative z-10">
                          <span className="text-purple-600 font-bold">World Narcissistic Abuse</span> <span className="text-accent font-bold">Awareness Day</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-primary-dark font-bold mb-3 flex items-center justify-center md:justify-start">
                      <span className="mr-2 text-secondary">🔥</span>
                      <span>Special Limited-Time Offer:</span>
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start mb-5">
                      <span className="line-through text-red-500 font-medium mr-2">$79</span>
                      <span className="text-2xl font-bold text-green-600">Only $29</span>
                      <Badge variant="outline" className="ml-2 bg-accent/20 text-accent-dark px-2 py-1 rounded text-sm font-medium">
                        Save 63%
                      </Badge>
                    </div>
                    
                    <div className="mb-6">
                      <p className="font-medium mb-2 text-center md:text-left">Offer Expires In:</p>
                      <div className="flex justify-center md:justify-start">
                        <CountdownTimer targetDate="June 4, 2025 23:59:59" />
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap justify-center gap-3 text-xs md:text-xs border-t border-b border-primary/10 py-2 bg-white/50">
                        <div className="flex items-center whitespace-nowrap">
                          <Lock className="h-3 w-3 mr-1 text-secondary" />
                          <span>Secure Payment</span>
                        </div>
                        <div className="flex items-center whitespace-nowrap">
                          <ShieldCheck className="h-3 w-3 mr-1 text-secondary" />
                          <span>60-Day Guarantee</span>
                        </div>
                        <div className="flex items-center whitespace-nowrap">
                          <MessageSquare className="h-3 w-3 mr-1 text-secondary" />
                          <span>Priority Assistance</span>
                        </div>
                        <div className="flex items-center whitespace-nowrap">
                          <FileText className="h-3 w-3 mr-1 text-secondary" />
                          <span>Immediate Access</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-2 h-full">
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-4 rounded-lg border border-primary/20 shadow-sm h-full">
                    <p className="text-lg text-primary-dark font-bold mb-3 flex items-center justify-center md:justify-start">
                      <span className="mr-2 text-secondary">✅</span>
                      <span>Why It Works?</span>
                    </p>
                    <ul className="space-y-[10px] text-sm">
                      <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2 text-primary flex-shrink-0 text-base mt-0.5">🔬</span>
                        <span className="text-neutral-darker font-medium">Built on Brain Science</span>
                      </li>
                        <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2 text-primary flex-shrink-0 text-base mt-0.5">🛡️</span>
                        <span className="text-neutral-darker font-medium">Recovery-Tested Methods</span>
                      </li>
                           <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2 text-primary flex-shrink-0 text-base mt-0.5">📈</span>
                        <span className="text-neutral-darker font-medium">Evidence-Based Frameworks</span>
                      </li>
                      <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2 text-primary flex-shrink-0 text-base mt-0.5">📖</span>
                        <span className="text-neutral-darker font-medium">Trauma Research-Informed</span>
                      </li>
                      <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2 text-primary flex-shrink-0 text-base mt-0.5">🧠</span>
                        <span className="text-neutral-darker font-medium">Neuroscience-Based Healing</span>
                      </li>
                      <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2 text-primary flex-shrink-0 text-base mt-0.5">📊</span>
                        <span className="text-neutral-darker font-medium">10+ Years of Clinical Insights</span>
                      </li>
                      <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2 text-primary flex-shrink-0 text-base mt-0.5">⏱️</span>
                        <span className="text-neutral-darker font-medium">Designed for 15 Minutes a Day</span>
                      </li>
                      <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2 text-primary flex-shrink-0 text-base mt-0.5">📚</span>
                        <span className="text-neutral-darker font-medium">Psychological Research-Backed</span>
                      </li>
                      <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2 text-primary flex-shrink-0 text-base mt-0.5">🧍‍♀️</span>
                        <span className="text-neutral-darker font-medium">Feedback from 1,500+ Survivors</span>
                      </li>
                      <li className="flex items-start transform hover:translate-x-1 transition-transform duration-300">
                        <span className="mr-2 text-primary flex-shrink-0 text-base mt-0.5">🧩</span>
                        <span className="text-neutral-darker font-medium">Cognitive Behavioural Techniques</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-span-1 md:col-span-2 order-3 mt-3">
                  <div className="flex justify-center items-center bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 p-4 rounded-xl mb-3 border border-accent/10">
                    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md w-full">
                      <div className="flex justify-between mb-2 divide-x divide-primary/10">
                        <div className="flex-1 text-center px-2">
                          <div className="text-2xl font-bold text-accent">3</div>
                          <div className="text-xs uppercase tracking-wider text-primary-dark">Guides</div>
                        </div>
                        <div className="flex-1 text-center px-2">
                          <div className="text-2xl font-bold text-accent">32</div>
                          <div className="text-xs uppercase tracking-wider text-primary-dark">Tools</div>
                        </div>
                        <div className="flex-1 text-center px-2">
                          <div className="text-2xl font-bold text-accent">6</div>
                          <div className="text-xs uppercase tracking-wider text-primary-dark">Pillars</div>
                        </div>
                      </div>
                      <div className="text-center font-bold text-primary-dark text-sm border-t border-primary/10 pt-2">
                        Yours for Less Than a Therapy Session
                      </div>
                    </div>
                  </div>
                  <Button asChild className="w-full pill-button bg-gradient-to-r from-accent to-secondary text-white text-center py-4 px-6 font-medium text-lg transition-all duration-300 pulse-animation hover:scale-[1.02] hover:shadow-lg">
                    <a href="/checkout">
                      Get Instant Access Now – $29 Only</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex flex-col h-full">
            <div className="flex flex-col space-y-4 items-center mt-4 px-2 max-w-full">
              <div className="relative w-full overflow-hidden mb-1">
                <Badge variant="secondary" className="relative z-10 px-2 py-1 bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 text-white rounded-lg font-bold text-xs sm:text-sm shadow-lg animate-pulse border-2 border-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="whitespace-nowrap">01 Jun - World Narcissistic Abuse Awareness Day Special</span>
                </Badge>
               <div className="absolute inset-0 bg-purple-500/20 blur-lg rounded-xl -z-10"></div>
              </div>
              
              <div className="w-full md:max-w-sm text-center italic mb-1 text-primary-dark/90 px-4 py-3 rounded-lg border border-primary/10 shadow-sm backdrop-blur-sm relative overflow-hidden glassmorphism">
  <div className="absolute right-0 top-0 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute left-0 bottom-0 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <p className="text-lg md:text-xl font-medium mb-1">"I am not what happened to me, I am what I choose to become."</p>
                  <p className="text-xs font-medium">💬 Carl Jung, Father of Analytical Psychology</p>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block mt-[60px]">
              <div className="relative z-10">
                <img 
                  src="/npd/attached_assets/Main.png" 
                  alt="Woman reading by window - healing journey" 
                  className="rounded-lg shadow-lg object-cover h-[550px] w-full hover:scale-[1.03] transition-transform duration-500"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80"; }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-20 max-w-xs">
                <img 
                  src="/npd/attached_assets/Second.png" 
                  alt="Healing tools" 
                  className="rounded-lg shadow-lg border-4 border-white"
                />
              </div>
              <div className="absolute -top-6 -left-6 z-0 h-full w-full rounded-lg bg-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}