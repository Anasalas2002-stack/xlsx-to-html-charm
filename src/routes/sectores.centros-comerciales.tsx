import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { SectorPage } from "@/components/SectorPage";

export const Route = createFileRoute("/sectores/centros-comerciales")({
  component: () => (
    <SectorPage
      icon={ShoppingBag}
      badge="Centros Comerciales"
      title="Vigilancia inteligente para espacios de gran afluencia"
      intro={[
        "Un centro comercial tiene miles de movimientos diarios: vehículos, visitantes, empleados, proveedores y operaciones simultáneas que requieren control constante.",
        "En SMC Ltda implementamos soluciones de seguridad diseñadas para espacios de alto tráfico, donde la velocidad de reacción y la prevención hacen toda la diferencia.",
      ]}
      sections={[
        { h: "Analítica de video con IA", body: ["Identificamos comportamientos inusuales, aglomeraciones, accesos indebidos y movimientos sospechosos en tiempo real."] },
        { h: "Control vehicular con lectura LPR", body: ["Automatizamos el ingreso de vehículos autorizados y fortalecemos el monitoreo de parqueaderos.", "Ideal para empleados, proveedores, carga y descarga, y visitantes frecuentes."] },
        { h: "Control peatonal inteligente", body: ["Validación facial y registro digital para áreas restringidas, accesos administrativos y zonas operativas."] },
        { h: "Protección perimetral con cruce de línea", body: ["La IA detecta ingresos no autorizados en horarios críticos o zonas restringidas."] },
        { h: "Minutas virtuales", body: ["Toda la operación queda documentada digitalmente para supervisión y control administrativo."] },
      ]}
      benefits={[
        "Mayor control operativo",
        "Respuesta rápida ante incidentes",
        "Reducción de riesgos de hurto",
        "Supervisión inteligente 24/7",
        "Evidencia organizada para investigaciones",
        "Mejor experiencia de seguridad para visitantes",
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Seguridad para Centros Comerciales — SMC Ltda." },
      { name: "description", content: "Analítica con IA, LPR y monitoreo 24/7 para centros comerciales y espacios de alto tráfico." },
    ],
  }),
});
