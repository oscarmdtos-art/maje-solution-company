import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Contacto", href: "#contacto" },
      { label: "Carreras", href: "#" },
    ],
    services: [
      { label: "Electrónica", href: "#servicios" },
      { label: "Manufactura Textil", href: "#servicios" },
      { label: "Transporte", href: "#servicios" },
      { label: "Consultoría", href: "#servicios" },
    ],
    legal: [
      { label: "Términos y Condiciones", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Política de Cookies", href: "#" },
      { label: "Cumplimiento", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-secondary-foreground font-bold text-lg leading-tight tracking-tight">
                  MAJE SOLUTION
                </span>
                <span className="text-secondary-foreground/70 text-xs uppercase tracking-wider">Company</span>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed max-w-sm">
              Soluciones corporativas integrales en electrónica, manufactura textil y servicios logísticos.
              Transformando empresas desde 2012.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group"
                >
                  <social.icon
                    className="text-secondary-foreground group-hover:text-accent-foreground transition-colors"
                    size={18}
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © {currentYear} MAJE SOLUTION COMPANY. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-secondary-foreground/70">
              <span>CIIU 4652 • 1392 • 5221</span>
              <span>NIT: 123-456789-0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
