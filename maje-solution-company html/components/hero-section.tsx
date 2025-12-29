import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary/90">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium backdrop-blur-sm border border-accent/30">
              Soluciones Corporativas de Excelencia
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
            Impulsamos el Crecimiento de su Empresa
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed text-pretty">
            Expertos en electrónica y telecomunicaciones, manufactura textil industrial y servicios logísticos. Más de
            una década transformando desafíos en oportunidades.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-xl text-base px-8 py-6 h-auto group"
            >
              Explorar Servicios
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 backdrop-blur-sm text-base px-8 py-6 h-auto bg-transparent"
            >
              Contáctenos
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-2">12+</div>
              <div className="text-sm text-primary-foreground/95 font-medium">Años de Experiencia</div>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <div className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-2">200+</div>
              <div className="text-sm text-primary-foreground/95 font-medium">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-2">98%</div>
              <div className="text-sm text-primary-foreground/95 font-medium">Tasa de Éxito</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
