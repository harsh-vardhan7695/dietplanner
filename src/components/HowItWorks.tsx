
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How DietPlanner Works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Simple steps to your personalized nutrition plan
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="relative">
            <div className="feature-card h-full">
              <div className="absolute -top-10 left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Share Your Details</h3>
              <p className="text-muted-foreground">
                Tell us about your health goals, dietary restrictions, medical conditions, and food preferences.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 -mr-4 transform translate-x-1/2">
              <ArrowRight className="h-8 w-8 text-primary/50" />
            </div>
          </div>
          
          <div className="relative">
            <div className="feature-card h-full">
              <div className="absolute -top-10 left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4">AI Creates Your Plan</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your information and generates a customized meal plan optimized for your specific needs.
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 -mr-4 transform translate-x-1/2">
              <ArrowRight className="h-8 w-8 text-primary/50" />
            </div>
          </div>
          
          <div className="relative">
            <div className="feature-card h-full">
              <div className="absolute -top-10 left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Eat Smarter, Live Better</h3>
              <p className="text-muted-foreground">
                Follow your personalized plan, track your progress, and adjust as your needs change over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
