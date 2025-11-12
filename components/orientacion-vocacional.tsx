"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight } from "lucide-react"

const preguntas = [
  { id: 1, texto: "Me gusta resolver problemas matemáticos y lógicos", area: "Ingeniería" },
  { id: 2, texto: "Disfruto ayudar a las personas y cuidar su bienestar", area: "Salud" },
  { id: 3, texto: "Me interesa entender cómo funciona la sociedad", area: "Sociales" },
  { id: 4, texto: "Soy creativo y me gusta expresarme artísticamente", area: "Arte y Diseño" },
  { id: 5, texto: "Me atrae el mundo de los negocios y las finanzas", area: "Económico-Administrativa" },
  { id: 6, texto: "Me gusta trabajar con tecnología y computadoras", area: "Ingeniería" },
  { id: 7, texto: "Me interesa la investigación científica", area: "Salud" },
  { id: 8, texto: "Disfruto debatir y argumentar ideas", area: "Sociales" },
  { id: 9, texto: "Me gusta diseñar y crear cosas visuales", area: "Arte y Diseño" },
  { id: 10, texto: "Soy bueno organizando y planificando", area: "Económico-Administrativa" },
  { id: 11, texto: "Me interesa construir y diseñar estructuras", area: "Ingeniería" },
  { id: 12, texto: "Me gusta trabajar en equipo y liderar proyectos", area: "Económico-Administrativa" },
]

const carrerasPorArea: Record<string, string[]> = {
  Ingeniería: ["Ingeniería en Computación", "Ingeniería Civil", "Ingeniería Industrial"],
  Salud: ["Medicina", "Enfermería", "Nutrición"],
  Sociales: ["Derecho", "Psicología", "Trabajo Social"],
  "Arte y Diseño": ["Arquitectura", "Diseño Gráfico", "Artes Visuales"],
  "Económico-Administrativa": ["Administración de Empresas", "Contaduría Pública", "Economía"],
}

export function OrientacionVocacional() {
  const [respuestas, setRespuestas] = useState<Record<number, number>>({})
  const [mostrarResultados, setMostrarResultados] = useState(false)

  const handleRespuesta = (preguntaId: number, valor: number) => {
    setRespuestas((prev) => ({ ...prev, [preguntaId]: valor }))
  }

  const calcularResultados = () => {
    const puntajesPorArea: Record<string, number> = {}

    preguntas.forEach((pregunta) => {
      const respuesta = respuestas[pregunta.id] || 0
      puntajesPorArea[pregunta.area] = (puntajesPorArea[pregunta.area] || 0) + respuesta
    })

    const areasOrdenadas = Object.entries(puntajesPorArea)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 2)

    return areasOrdenadas
  }

  const handleSubmit = () => {
    const todasRespondidas = preguntas.every((p) => respuestas[p.id] !== undefined)
    if (todasRespondidas) {
      setMostrarResultados(true)
    } else {
      alert("Por favor responde todas las preguntas")
    }
  }

  const reiniciar = () => {
    setRespuestas({})
    setMostrarResultados(false)
  }

  if (mostrarResultados) {
    const resultados = calcularResultados()

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tus Resultados</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Basado en tus respuestas, estas son las áreas que mejor se ajustan a tu perfil
          </p>
        </div>

        <Card className="p-8 rounded-3xl bg-success/10 border-success/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-success/30 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-foreground" />
            </div>
            <div className="space-y-6 flex-1">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Áreas Sugeridas</h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  {resultados.map(([area]) => (
                    <Badge key={area} className="rounded-xl px-4 py-2 text-base">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground">Carreras Relacionadas</h4>
                {resultados.map(([area]) => (
                  <div key={area} className="space-y-2">
                    <p className="font-medium text-foreground">{area}:</p>
                    <div className="flex flex-wrap gap-2">
                      {carrerasPorArea[area].map((carrera) => (
                        <Badge key={carrera} variant="outline" className="rounded-xl px-3 py-1">
                          {carrera}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="flex gap-4">
          <Button onClick={reiniciar} variant="outline" className="rounded-2xl px-6 h-12 bg-transparent">
            Realizar test nuevamente
          </Button>
          <Button asChild className="rounded-2xl px-6 h-12">
            <a href="#oferta">Ver oferta académica completa</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Orientación Vocacional</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Responde estas 12 preguntas para descubrir qué áreas de estudio se ajustan mejor a ti
        </p>
      </div>

      <Card className="p-6 rounded-3xl bg-info/10 border-info/30">
        <p className="text-sm text-foreground leading-relaxed">
          <strong>Instrucciones:</strong> Califica cada afirmación del 1 al 5, donde 1 es "Totalmente en desacuerdo" y 5
          es "Totalmente de acuerdo"
        </p>
      </Card>

      <div className="space-y-6">
        {preguntas.map((pregunta, index) => (
          <Card key={pregunta.id} className="p-6 rounded-3xl">
            <div className="space-y-4">
              <Label className="text-base font-medium text-foreground">
                {index + 1}. {pregunta.texto}
              </Label>
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4, 5].map((valor) => (
                  <Button
                    key={valor}
                    onClick={() => handleRespuesta(pregunta.id, valor)}
                    variant={respuestas[pregunta.id] === valor ? "default" : "outline"}
                    className="rounded-2xl w-12 h-12 text-base font-medium"
                  >
                    {valor}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button onClick={handleSubmit} className="w-full md:w-auto rounded-2xl px-8 h-12 text-base" size="lg">
        Ver sugerencias
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  )
}
