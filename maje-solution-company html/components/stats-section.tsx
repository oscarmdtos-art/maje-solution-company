import { TrendingUp, Users, Award, Globe } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "145%",
    label: "Crecimiento Promedio",
    description: "de nuestros clientes",
  },
  {
    icon: Users,
    value: "200+",
    label: "Clientes Activos",
    description: "en toda la región",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfacción",
    description: "índice de retención",
  },
  {
    icon: Globe,
    value: "15",
    label: "Países",
    description: "con presencia comercial",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background border-t-4 border-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance text-foreground">
            Resultados que Hablan por Sí Mismos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Nuestro compromiso con la excelencia se refleja en cada proyecto, generando valor tangible y sostenible para
            nuestros clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-primary" size={24} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-primary">{stat.value}</div>
              <div className="text-base font-semibold mb-1 text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
