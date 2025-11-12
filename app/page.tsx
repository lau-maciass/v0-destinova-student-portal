"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Compass, FileText, GraduationCap } from "lucide-react"
import { OfertaAcademica } from "@/components/oferta-academica"
import { OrientacionVocacional } from "@/components/orientacion-vocacional"
import { TramitesYFechas } from "@/components/tramites-y-fechas"

type Tab = "inicio" | "oferta" | "orientacion" | "tramites"

export default function DestinovaPortal() {
  const [activeTab, setActiveTab] = useState<Tab>("inicio")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Destinova</h1>
                <p className="text-sm text-muted-foreground">Red Universitaria UDG</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex flex-wrap gap-2">
              <Button
                onClick={() => setActiveTab("inicio")}
                variant={activeTab === "inicio" ? "default" : "outline"}
                className="rounded-2xl px-6 h-12 font-medium"
              >
                Inicio
              </Button>
              <Button
                onClick={() => setActiveTab("oferta")}
                variant={activeTab === "oferta" ? "default" : "outline"}
                className="rounded-2xl px-6 h-12 font-medium"
              >
                Oferta Académica
              </Button>
              <Button
                onClick={() => setActiveTab("orientacion")}
                variant={activeTab === "orientacion" ? "default" : "outline"}
                className="rounded-2xl px-6 h-12 font-medium"
              >
                Orientación Vocacional
              </Button>
              <Button
                onClick={() => setActiveTab("tramites")}
                variant={activeTab === "tramites" ? "default" : "outline"}
                className="rounded-2xl px-6 h-12 font-medium"
              >
                Trámites y Fechas
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === "inicio" && <InicioContent setActiveTab={setActiveTab} />}
        {activeTab === "oferta" && <OfertaAcademica />}
        {activeTab === "orientacion" && <OrientacionVocacional />}
        {activeTab === "tramites" && <TramitesYFechas />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Fuentes: sitios oficiales UDG enlazados</p>
        </div>
      </footer>
    </div>
  )
}

function InicioContent({ setActiveTab }: { setActiveTab: (tab: Tab) => void }) {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
          Bienvenido a tu futuro universitario
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
          Explora las carreras de la Universidad de Guadalajara, descubre tu vocación y conoce los pasos para tu
          ingreso. Todo en un solo lugar.
        </p>
      </div>

      {/* Quick Access Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          className="p-6 rounded-3xl border-2 hover:shadow-lg transition-all cursor-pointer group"
          onClick={() => setActiveTab("oferta")}
        >
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Oferta Académica</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consulta todas las carreras disponibles en los centros universitarios de la UDG
              </p>
            </div>
          </div>
        </Card>

        <Card
          className="p-6 rounded-3xl border-2 hover:shadow-lg transition-all cursor-pointer group"
          onClick={() => setActiveTab("orientacion")}
        >
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center group-hover:bg-secondary/40 transition-colors">
              <Compass className="w-7 h-7 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Test Vocacional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Descubre qué áreas de estudio se ajustan mejor a tus intereses y habilidades
              </p>
            </div>
          </div>
        </Card>

        <Card
          className="p-6 rounded-3xl border-2 hover:shadow-lg transition-all cursor-pointer group"
          onClick={() => setActiveTab("tramites")}
        >
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-info/30 flex items-center justify-center group-hover:bg-info/40 transition-colors">
              <FileText className="w-7 h-7 text-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Trámites y Fechas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conoce los pasos para tu ingreso y las fechas importantes del calendario
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Info Section */}
      <Card className="p-8 rounded-3xl bg-primary/5 border-primary/20">
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-foreground">¿Listo para comenzar?</h3>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Navega por las secciones para explorar tu camino universitario. Toda la información está actualizada y
            enlazada a fuentes oficiales de la UDG.
          </p>
        </div>
      </Card>
    </div>
  )
}
