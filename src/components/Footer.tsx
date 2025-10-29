import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3 text-foreground">About SmartHire</h3>
            <p className="text-muted-foreground text-sm">
              AI-powered resume screening platform designed to streamline your recruitment process and identify top talent efficiently.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contact@smarthire.ai
              </p>
              <p>Support available 24/7</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-base">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-base">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-base">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SmartHire Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
