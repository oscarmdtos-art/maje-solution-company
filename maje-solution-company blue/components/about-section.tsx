import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const values = [
  "Compromiso con la excelencia operativa",
  "Innovación constante en nuestros procesos",
  "Integridad y transparencia empresarial",
  "Enfoque centrado en el cliente",
  "Responsabilidad social corporativa",
  "Mejora continua y adaptabilidad",
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Quiénes Somos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Líderes en Consultoría Multisectorial
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">MAJE SOLUTION COMPANY</strong> es una firma de consultoría
              especializada que integra tres sectores estratégicos de la economía moderna: tecnología electrónica,
              manufactura textil y servicios logísticos.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nuestra experiencia de más de una década nos posiciona como el socio estratégico ideal para empresas que
              buscan optimizar sus operaciones, expandir sus capacidades y alcanzar nuevos niveles de eficiencia.
              Trabajamos con estándares internacionales y un enfoque personalizado que garantiza resultados medibles.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="font-medium">
              Conocer Más Sobre Nosotros
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/800x600?text=Modern+corporate+office+with+professional+team+collaborating+on+strategic+business+solutions+in+elegant+meeting+room"
                alt="Modern corporate office with professional team collaborating on strategic business solutions in elegant meeting room"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-2xl shadow-2xl max-w-xs hidden lg:block">
              <div className="text-4xl font-bold mb-2">12+</div>
              <p className="text-sm text-primary-foreground/90">
                Años transformando empresas con soluciones innovadoras
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
