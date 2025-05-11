import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import CountdownTimer from "../components/CountdownTimer";

export default function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent/30 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 blur-lg opacity-70 rounded-lg transform scale-105"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-primary/20 rounded-lg px-6 py-3 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                It's Time to Reclaim Your Reality
              </h2>
            </div>
          </div>
          <p className="text-lg text-neutral-darker mb-8">
            You've already shown tremendous courage by seeking solutions. The tools in this system have helped thousands of people move from confusion to clarity, from boundary violations to protected space, and from emotional depletion to renewed energy.
          </p>
          <p className="font-medium text-xl text-neutral-darkest mb-8">
            All with just <span className="minutes-highlight">15 minutes</span> of focused implementation each day.
          </p>
          
          <Card className="glassmorphism mb-8 backdrop-blur">
            <CardContent className="p-8">
              <p className="text-xl font-heading font-semibold mb-4 text-gradient">
                01 Jun - World Narcissistic Abuse Awareness Day Special Offer
              </p>
              <div className="flex items-center justify-center mb-4">
                <span className="line-through text-red-500 font-medium mr-2">$79</span>
                <span className="text-3xl font-bold text-green-600">Only $29</span>
                <Badge variant="outline" className="ml-2 bg-accent/20 text-accent-dark px-2 py-1 rounded text-sm font-medium">
                  Save 63%
                </Badge>
              </div>
              
              <p className="font-medium mb-2">Offer Expires In:</p>
              <div className="flex justify-center mb-6">
                <CountdownTimer targetDate="June 4, 2025 23:59:59" />
              </div>
              
              <Button asChild className="w-full pill-button bg-gradient-to-r from-accent to-secondary text-white py-4 px-6 font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] pulse-animation">
                <a href="/npd/checkout" className="text-sm sm:text-lg md:text-xl flex items-center justify-center whitespace-nowrap">
                  <span className="hidden sm:inline">YES, I WANT THE COMPLETE SYSTEM FOR $29</span>
                  <span className="sm:hidden">YES, GET SYSTEM NOW - $29</span>
                </a>
              </Button>
              <p className="text-sm text-neutral-darker mt-3 mb-4">
                Regular price $79 returns June 5th
              </p>
              
              <div className="flex justify-center items-center gap-3 mt-4 bg-gray-50/80 py-2 px-3 rounded-lg">
                <div className="text-xs text-gray-500">Secure Payment:</div>
                <div className="flex items-center gap-2">
                  <svg className="h-5" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" fillOpacity=".07"/>
                      <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/>
                      <path d="M4 7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7z" fill="#EB001B"/>
                      <path d="M14 7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7z" fill="#F79E1B"/>
                      <path d="M9 7.882a5.22 5.22 0 0 1 2-.428c.688 0 1.351.131 1.969.384v-.24c0-.371-.092-.74-.264-1.056a2.461 2.461 0 0 0-.708-.796 3.424 3.424 0 0 0-.997-.54 3.826 3.826 0 0 0-1.115-.164c-.393 0-.783.07-1.15.208a3.67 3.67 0 0 0-1.011.564c-.3.234-.553.52-.739.848-.186.329-.279.693-.279 1.092 0 .4.094.764.279 1.092.186.329.439.615.739.849.3.233.644.414 1.011.563a3.52 3.52 0 0 0 1.15.208c.386 0 .77-.064 1.115-.164a3.424 3.424 0 0 0 .997-.54c.3-.233.553-.464.708-.796.172-.316.264-.661.264-1.055v-.198A4.132 4.132 0 0 0 9 7.881v.001z" fill="#231F20"/>
                    </g>
                  </svg>
                  <svg className="h-5" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" fillOpacity=".07"/>
                      <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"/>
                      <path d="M21.382 9.713c0 1.668-1.521 2.65-3.909 2.65h-2.775V7.133h2.722c2.381 0 3.962.941 3.962 2.58z" fill="#003087"/>
                    </g>
                  </svg>
                  <svg className="h-4" viewBox="0 0 512 210" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                    <path d="M93.6 27.1C87.6 34.4 78 39.8 68.4 39.6c-1.2-9.6 3.5-19.8 9-26.1 6-7.3 16.5-12.5 25-12.9 1 10-2.9 19.8-8.8 26.5z" fill="#000"/>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-10 border-2 border-red-500 shadow-lg p-8 rounded-lg bg-red-50 relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>
            
            <div className="bg-red-500 text-white font-bold text-center text-2xl py-2 px-4 rounded-lg mb-6 transform rotate-1 shadow-md">
              ⚠️ WARNING ⚠️
            </div>
            
            <p className="text-lg text-neutral-darker mb-6 relative z-10">
              World Narcissistic Abuse Awareness Day (June 1st) reminds us that millions of people struggle with these relationships every day. By taking action now, you're not just helping yourself—you're part of a larger movement toward greater awareness and healing.
            </p>
            
            <p className="text-xl font-bold text-neutral-darkest mb-6 text-center relative z-10">
              Don't wait until the price returns to <span className="line-through text-red-500">$79</span> on <span className="text-red-600 font-extrabold text-2xl">June 5th</span>
            </p>
            
            <div className="text-center">
              <Button asChild className="w-full md:w-3/4 pill-button bg-gradient-to-r from-red-500 to-accent text-white py-4 px-6 font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] pulse-animation">
                <a href="/npd/checkout" className="text-sm sm:text-lg md:text-xl flex items-center justify-center whitespace-nowrap">
                  <span className="hidden sm:inline">YES, I WANT THE COMPLETE SYSTEM FOR $29</span>
                  <span className="sm:hidden">YES, GET SYSTEM NOW - $29</span>
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}