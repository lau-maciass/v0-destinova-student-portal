"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Search } from "lucide-react"

// Sample data - in production this would come from an API or database
const carreras = [
  { id: 1, nombre: "Ingeniería en Computación", centro: "CUCEI", area: "Ingeniería", url: "https://www.udg.mx" },
  { id: 2, nombre: "Medicina", centro: "CUCS", area: "Salud", url: "https://www.udg.mx" },
  { id: 3, nombre: "Derecho", centro: "CUCSH", area: "Sociales", url: "https://www.udg.mx" },
  { id: 4, nombre: "Arquitectura", centro: "CUAAD", area: "Arte y Diseño", url: "https://www.udg.mx" },
  {
    id: 5,
    nombre: "Administración de Empresas",
    centro: "CUCEA",
    area: "Económico-Administrativa",
    url: "https://www.udg.mx",
  },
  { id: 6, nombre: "Psicología", centro: "CUCSH", area: "Sociales", url: "https://www.udg.mx" },
  { id: 7, nombre: "Ingeniería Civil", centro: "CUCEI", area: "Ingeniería", url: "https://www.udg.mx" },
  { id: 8, nombre: "Enfermería", centro: "CUCS", area: "Salud", url: "https://www.udg.mx" },
  { id: 9, nombre: "Diseño Gráfico", centro: "CUAAD", area: "Arte y Diseño", url: "https://www.udg.mx" },
  {
    id: 10,
    nombre: "Contaduría Pública",
    centro: "CUCEA",
    area: "Económico-Administrativa",
    url: "https://www.udg.mx",
  },
  { id: 11, nombre: "Ingeniería Industrial", centro: "CUCEI", area: "Ingeniería", url: "https://www.udg.mx" },
  { id: 12, nombre: "Nutrición", centro: "CUCS", area: "Salud", url: "https://www.udg.mx" },
]

const centros = ["Todos", "CUCEI", "CUCS", "CUCSH", "CUAAD", "CUCEA"]

export function OfertaAcademica() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCentro, setSelectedCentro] = useState("Todos")

  const filteredCarreras = useMemo(() => {
    return carreras.filter((carrera) => {
      const matchesSearch = carrera.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCentro = selectedCentro === "Todos" || carrera.centro === selectedCentro
      return matchesSearch && matchesCentro
    })
  }, [searchTerm, selectedCentro])

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Oferta Académica</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Explora las carreras disponibles en los diferentes centros universitarios de la UDG
        </p>
      </div>

      {/* Filters */}
      <Card className="p-6 rounded-3xl space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Search */}
          <div className="space-y-2">
            <Label htmlFor="search" className="text-sm font-medium">
              Buscar carrera
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="search"
                type="text"
                placeholder="Ej: Ingeniería, Medicina..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-2xl h-12"
              />
            </div>
          </div>

          {/* Centro Filter */}
          <div className="space-y-2">
            <Label htmlFor="centro" className="text-sm font-medium">
              Centro Universitario
            </Label>
            <select
              id="centro"
              value={selectedCentro}
              onChange={(e) => setSelectedCentro(e.target.value)}
              className="w-full h-12 px-4 rounded-2xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {centros.map((centro) => (
                <option key={centro} value={centro}>
                  {centro}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Mostrando {filteredCarreras.length} {filteredCarreras.length === 1 ? "carrera" : "carreras"}
        </div>
      </Card>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredCarreras.map((carrera) => (
          <Card key={carrera.id} className="p-6 rounded-3xl hover:shadow-lg transition-all">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{carrera.nombre}</h3>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="rounded-xl px-3 py-1">
                    {carrera.centro}
                  </Badge>
                  <Badge variant="outline" className="rounded-xl px-3 py-1">
                    {carrera.area}
                  </Badge>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full rounded-2xl h-11 bg-transparent">
                <a
                  href={carrera.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Ver información oficial UDG
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredCarreras.length === 0 && (
        <Card className="p-12 rounded-3xl text-center">
          <p className="text-muted-foreground">No se encontraron carreras con los filtros seleccionados</p>
        </Card>
      )}
    </div>
  )
}
