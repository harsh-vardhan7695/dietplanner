
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You've been added to our waitlist!");
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-secondary/10">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Our Waitlist
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Be the first to know when DietPlanner launches
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                required
              />
            </div>
            <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            By joining our waitlist, you'll receive updates about our launch and early access opportunities.
            We respect your privacy and will never share your information.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
