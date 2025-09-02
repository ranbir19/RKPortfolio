import { Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-6 px-2 sm:py-12 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
          {/* Brand */}
          <div className="space-y-2 sm:space-y-4">
            <h3 className="font-display font-bold text-lg sm:text-xl bg-gradient-primary bg-clip-text text-transparent">
              Ranbir Kalia
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              AI/ML Developer & Social Media Manager passionate about creating 
              innovative solutions and building meaningful digital communities.
            </p>
          {/* End Brand section */}
            </div>

          {/* Quick Links Section Restored */}
          <div className="space-y-2 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Quick Links</h4>
            <nav className="space-y-1 sm:space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' }
              ].map(link => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-xs sm:text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Get In Touch</h4>
            <div className="space-y-1 sm:space-y-2">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ranbirkalia@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-xs sm:text-sm"
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
        <div className="border-t border-border mt-4 sm:mt-8 pt-4 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {currentYear} Ranbir Kalia. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-muted-foreground text-xs sm:text-sm">
            Made with <Heart className="h-4 w-4 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;