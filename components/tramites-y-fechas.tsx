"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, CheckCircle2 } from "lucide-react"

const pasos = [
  {
    id: 1,
    titulo: "Registro en línea",
    descripcion: "Crea tu cuenta en el sistema de admisiones de la UDG y completa tu solicitud",
    url: "https://www.udg.mx",
  },
  {
    id: 2,
    titulo: "Pago de ficha",
    descripcion: "Realiza el pago correspondiente para obtener tu ficha de examen",
    url: "https://www.udg.mx",
  },
  {
    id: 3,
    titulo: "Examen de admisión",
    descripcion: "Presenta el examen en la fecha y sede asignada",
    url: "https://www.udg.mx",
  },
  {
    id: 4,
    titulo: "Consulta de resultados",
    descripcion: "Revisa si fuiste aceptado en el portal oficial",
    url: "https://www.udg.mx",
  },
  {
    id: 5,
    titulo: "Inscripción",
    descripcion: "Completa tu inscripción y entrega documentación requerida",
    url: "https://www.udg.mx",
  },
]

const fechas = [
  {
    id: 1,
    titulo: "Convocatoria calendario A",
    categoria: "Registro",
    fecha: "Enero - Febrero 2025",
    url: "https://www.udg.mx",
  },
  {
    id: 2,
    titulo: "Examen de admisión calendario A",
    categoria: "Examen",
    fecha: "Marzo 2025",
    url: "https://www.udg.mx",
  },
  {
    id: 3,
    titulo: "Publicación de resultados calendario A",
    categoria: "Resultados",
    fecha: "Abril 2025",
    url: "https://www.udg.mx",
  },
  {
    id: 4,
    titulo: "Convocatoria calendario B",
    categoria: "Registro",
    fecha: "Junio - Julio 2025",
    url: "https://www.udg.mx",
  },
  {
    id: 5,
    titulo: "Examen de admisión calendario B",
    categoria: "Examen",
    fecha: "Agosto 2025",
    url: "https://www.udg.mx",
  },
  {
    id: 6,
    titulo: "Publicación de resultados calendario B",
    categoria: "Resultados",
    fecha: "Septiembre 2025",
    url: "https://www.udg.mx",
  },
]

const categoriaBadgeColor = (categoria: string) => {
  switch (categoria) {
    case "Registro":
      return "bg-primary/20 text-primary-foreground border-primary/30"
    case "Examen":
      return "bg-alert/30 text-foreground border-alert/40"
    case "Resultados":
      return "bg-success/30 text-foreground border-success/40"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function TramitesYFechas() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Pasos Section */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Pasos para tu Ingreso</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sigue estos pasos para completar tu proceso de admisión a la UDG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pasos.map((paso, index) => (
            <Card key={paso.id} className="p-6 rounded-3xl hover:shadow-lg transition-all">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground mb-2">{paso.titulo}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{paso.descripcion}</p>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full rounded-2xl bg-transparent">
                  <a
                    href={paso.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Más información
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Fechas Section */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Calendario de Fechas</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mantente al tanto de las fechas importantes del proceso de admisión
          </p>
        </div>

        <div className="space-y-4">
          {fechas.map((fecha) => (
            <Card key={fecha.id} className="p-6 rounded-3xl hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground mb-1">{fecha.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{fecha.fecha}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={`rounded-xl px-3 py-1 ${categoriaBadgeColor(fecha.categoria)}`}>
                    {fecha.categoria}
                  </Badge>
                  <Button asChild variant="outline" size="sm" className="rounded-2xl bg-transparent">
                    <a href={fecha.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Ver detalles
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <Card className="p-8 rounded-3xl bg-info/10 border-info/30">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">Información Importante</h3>
            <p className="text-muted-foreground leading-relaxed">
              Las fechas pueden variar según el calendario escolar. Te recomendamos consultar regularmente el sitio
              oficial de la UDG para confirmar las fechas exactas y cualquier actualización del proceso de admisión.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
