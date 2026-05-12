import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse } from "lucide-react";
import { SectorPage } from "@/components/SectorPage";

export const Route = createFileRoute("/sectores/clinicas")({
  component: () => (
    <SectorPage
      icon={HeartPulse}
      badge="Clínicas y Centros Médicos"
      title="Seguridad especializada para entornos sensibles"
      intro={[
        "Una clínica privada necesita equilibrio. Debe proteger pacientes, personal médico, medicamentos, equipos y zonas restringidas sin afectar la experiencia de atención.",
        "En SMC Ltda diseñamos esquemas de seguridad discretos, eficientes y apoyados en tecnología inteligente.",
      ]}
      sections={[
        { h: "Control de acceso con validación facial", body: ["Restringimos ingresos a áreas críticas como farmacia, laboratorios, salas técnicas, archivo clínico y áreas administrativas."] },
        { h: "Monitoreo inteligente con IA", body: ["La analítica de video detecta movimientos irregulares, accesos indebidos y comportamientos sospechosos."] },
        { h: "Protección perimetral", body: ["La detección de cruce de línea fortalece la seguridad externa en horarios sensibles y accesos secundarios."] },
        { h: "Lectura LPR para vehículos autorizados", body: ["Control automatizado de ambulancias, proveedores, personal médico y parqueaderos internos."] },
        { h: "Minutas virtuales y trazabilidad", body: ["Cada incidente o novedad queda documentado digitalmente para seguimiento y control administrativo."] },
        { h: "Alarmas y reacción inmediata", body: ["Integramos sistemas conectados a supervisión permanente para acelerar tiempos de respuesta."] },
      ]}
      benefits={[
        "Protección de pacientes y personal",
        "Control de accesos sensibles",
        "Mayor capacidad de reacción",
        "Evidencia digital organizada",
        "Prevención de incidentes internos",
        "Seguridad discreta y eficiente",
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Seguridad para Clínicas y Centros Médicos — SMC Ltda." },
      { name: "description", content: "Seguridad especializada para clínicas: validación facial, control de áreas restringidas, LPR y reacción inmediata." },
    ],
  }),
});
