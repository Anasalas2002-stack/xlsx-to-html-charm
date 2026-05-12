import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { SectorPage } from "@/components/SectorPage";

export const Route = createFileRoute("/sectores/empresas")({
  component: () => (
    <SectorPage
      icon={Building2}
      badge="Seguridad para Empresas"
      title="Protección integral para operaciones, activos y personal"
      intro={[
        "Cada empresa tiene riesgos distintos. Algunas necesitan controlar accesos. Otras proteger mercancía, información, personal o infraestructura crítica.",
        "En SMC Ltda desarrollamos esquemas de seguridad adaptados al tipo de operación de cada organización.",
      ]}
      sections={[
        { h: "Control de acceso inteligente", body: ["Validación facial y registro automatizado de ingresos para empleados, contratistas y visitantes."] },
        { h: "Seguridad perimetral con IA", body: ["La detección de cruce de línea identifica movimientos sospechosos en bodegas, patios, zonas restringidas y horarios no autorizados."] },
        { h: "Lectura inteligente de placas", body: ["Control total sobre flotas, vehículos autorizados y accesos logísticos."] },
        { h: "Minutas virtuales y supervisión digital", body: ["Toda la operación de vigilancia queda registrada en tiempo real, permitiendo trazabilidad, auditoría, control operativo, seguimiento de novedades y reportes inmediatos."] },
        { h: "Alarmas integradas y monitoreo remoto", body: ["Los sistemas de alarma se conectan con vigilancia física y monitoreo inteligente para acelerar la reacción."] },
      ]}
      benefits={[
        "Reducción de pérdidas",
        "Mejor control interno",
        "Protección de activos críticos",
        "Mayor trazabilidad operativa",
        "Prevención de riesgos internos y externos",
        "Información centralizada y organizada",
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Seguridad para Empresas — SMC Ltda." },
      { name: "description", content: "Esquemas de seguridad corporativos con IA, LPR, control de accesos y monitoreo remoto." },
    ],
  }),
});
