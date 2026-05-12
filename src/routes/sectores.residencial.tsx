import { createFileRoute } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { SectorPage } from "@/components/SectorPage";
import { imgGuardiaResidencial } from "@/assets/smc";

export const Route = createFileRoute("/sectores/residencial")({
  component: () => (
    <SectorPage
      icon={Home}
      coverImage={imgGuardiaResidencial}
      coverAlt="Guardia SMC con uniforme Seguridad Privada Moderna en conjunto residencial"
      badge="Seguridad Residencial"
      title="Tranquilidad para residentes. Control total para la administración."
      intro={[
        "Un conjunto residencial necesita más que vigilancia tradicional. Necesita saber quién entra, quién sale, qué ocurre en zonas comunes y cómo reaccionar rápido ante cualquier situación sospechosa.",
        "En SMC Ltda integramos seguridad física con herramientas inteligentes que mejoran el control diario y reducen riesgos para residentes, visitantes y administración.",
      ]}
      sections={[
        { h: "Control de acceso con validación facial", body: ["Los residentes autorizados ingresan mediante reconocimiento facial, reduciendo riesgos de suplantación y mejorando la velocidad de acceso."] },
        { h: "Lectura de placas LPR", body: ["El sistema identifica automáticamente vehículos autorizados y genera alertas cuando detecta placas no registradas o movimientos sospechosos."] },
        { h: "IA para protección perimetral", body: ["La analítica inteligente detecta cruces de línea en zonas restringidas, perímetros, muros o accesos no autorizados.", "La cámara ya no solo graba: ahora interpreta comportamientos."] },
        { h: "Minutas virtuales y control digital", body: ["Toda novedad queda registrada digitalmente: ingresos, rondas, visitantes, incidentes, entregas y novedades operativas."] },
        { h: "Alarmas y cercado eléctrico monitoreado", body: ["Integramos sistemas de reacción inmediata conectados a vigilancia y supervisión remota."] },
      ]}
      benefits={[
        "Mayor tranquilidad para residentes",
        "Reducción de ingresos no autorizados",
        "Evidencia digital organizada",
        "Control más eficiente para portería",
        "Prevención temprana de incidentes",
        "Supervisión permanente de zonas críticas",
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Seguridad Residencial con IA — SMC Ltda." },
      { name: "description", content: "Validación facial, LPR, minutas virtuales y monitoreo perimetral para conjuntos residenciales." },
    ],
  }),
});
