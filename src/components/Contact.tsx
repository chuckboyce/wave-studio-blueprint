import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-white">
              Let's Build Your Business for the Future
            </h2>
            <p className="text-xl text-white/80">
              Ready to transform your technology? Get in touch and let's discuss how we can help you grow.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="font-heading text-2xl font-bold text-white">Send a Message</h3>
              </div>

              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    aria-label="Your name"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    aria-label="Your email address"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone (Optional)"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    aria-label="Your phone number"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    aria-label="Project details"
                    required
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 shadow-wave group" aria-label="Submit contact form">
                  Start the Conversation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <h3 className="font-heading text-2xl font-bold text-white">Direct Contact</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Prefer to reach out directly? We're here to help.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/60 mb-1">Email</p>
                    <a
                      href="mailto:hello@foundrywave.studio"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      hello@foundrywave.studio
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-primary hover:text-primary/80 font-medium">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary/20 backdrop-blur-lg rounded-2xl p-8 border border-primary/30">
                <h4 className="font-heading text-lg font-bold text-white mb-3">What happens next?</h4>
                <ul className="space-y-3 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    We'll review your inquiry within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    Schedule a free consultation call
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    Receive a customized proposal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    Start building your future together
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
