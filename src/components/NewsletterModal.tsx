import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface NewsletterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsletterModal = ({ open, onOpenChange }: NewsletterModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in both name and email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { name: name.trim(), email: email.trim() },
      });

      if (error) throw error;

      toast({
        title: "Welcome aboard! 🎉",
        description: "You've been added to our newsletter.",
      });
      
      setName("");
      setEmail("");
      onOpenChange(false);
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">Join Our Newsletter</DialogTitle>
          <DialogDescription>
            Get exclusive insights on web design, AI automation, and growing your business smarter.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="newsletter-name">Name</Label>
            <Input
              id="newsletter-name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newsletter-email">Email</Label>
            <Input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
