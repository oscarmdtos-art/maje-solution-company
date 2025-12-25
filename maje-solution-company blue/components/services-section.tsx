import { Card } from "@/components/ui/card"
import { Cpu, Package, Truck, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Cpu,
    code: "4652",
    title: "Electrónica y Telecomunicaciones",
    subtitle: "Actividad Principal",
    description:
      "Distribución mayorista de equipos, componentes y sistemas electrónicos de última generación. Soluciones integrales en telecomunicaciones para empresas.",
    features: [
      "Equipos electrónicos certificados",
      "Componentes especializados",
      "Sistemas de telecomunicaciones",
      "Soporte técnico especializado",
    ],
  },
  {
    icon: Package,
    code: "1392",
    title: "Manufactura Textil Industrial",
    subtitle: "Actividad Principal",
    description:
      "Fabricación de artículos confeccionados con materiales textiles de alta calidad para uso industrial, corporativo y especializado.",
    features: [
      "Textiles industriales premium",
      "Fabricación personalizada",
      "Control de calidad riguroso",
      "Certificaciones internacionales",
    ],
  },
  {
    icon: Truck,
    code: "5221",
    title: "Servicios de Transporte",
    subtitle: "Actividad Principal",
    description:
      "Servicios logísticos y de transporte terrestre especializados, garantizando entregas seguras y puntuales en toda la región.",
    features: ["Logística especializada", "Flota moderna y eficiente", "Rastreo en tiempo real", "Cobertura nacional"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nuestras Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Soluciones Integrales para Cada Sector
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Combinamos experiencia multisectorial con tecnología de vanguardia para ofrecer servicios de consultoría que
            impulsan el crecimiento sostenible de su organización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/50 group bg-card relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors"></div>

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} strokeWidth={2} />
                </div>

                <div className="mb-4">
                  <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                    CIIU {service.code}
                  </span>
                  <span className="text-xs text-accent ml-2 font-medium">{service.subtitle}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 text-balance">{service.title}</h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors flex items-center gap-2 group/btn">
                  Más información
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
