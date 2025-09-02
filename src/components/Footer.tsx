import { Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              Ranbir Kalia
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI/ML Developer & Social Media Manager passionate about creating 
              innovative solutions and building meaningful digital communities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2">
              <a 
                href="mailto:ranbirkalia@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                <Mail className="h-4 w-4" />
                ranbirkalia@gmail.com
              </a>
              <a 
                href="https://instagram.com/ranbirkalia3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                <Instagram className="h-4 w-4" />
                @ranbirkalia3
              </a>
              <a 
                href="https://instagram.com/med_studyblr_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                <Instagram className="h-4 w-4" />
                @med_studyblr_ (45K+)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Ranbir Kalia. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-muted-foreground text-sm">
            Made with <Heart className="h-4 w-4 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;