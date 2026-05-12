import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Cpu, ArrowRight, ShieldCheck, Eye, Activity, Video, ScanEye, Binary, FileSpreadsheet,
  Home, HeartPulse, Building2, ShoppingBag, CheckCircle2, Scan, UserX, Truck, Airplay,
  ShieldAlert, Scale, BadgeCheck, ChevronDown, Check, MapPin, Navigation, Award, Sparkles,
  Eye as EyeIcon, Lightbulb, Heart, Wrench, Users, Layers,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SMC Ltda. — Seguridad Privada con IA y Control en Tiempo Real" },
      { name: "description", content: "Seguridad Moderna Colombiana: vigilancia humana + analítica con IA, LPR, validación facial, minutas virtuales y monitoreo 24/7 para residencial, clínicas, empresas y centros comerciales." },
      { property: "og:title", content: "SMC Ltda. — Inteligencia Proactiva & Seguridad Moderna" },
      { property: "og:description", content: "Esquemas de seguridad inteligentes con IA y respaldo legal en Colombia." },
    ],
  }),
});

const SECTORS = {
  residencial: {
    icon: Home,
    label: "Residencial",
    title: "Tranquilidad para residentes. Control total para la administración.",
    desc: "Un conjunto residencial necesita más que vigilancia tradicional: saber quién entra, quién sale, qué ocurre en zonas comunes y reaccionar rápido ante cualquier situación sospechosa.",
    items: [
      { h: "Validación facial automatizada", p: "Ingreso autorizado de residentes sin contacto y sin retrasos." },
      { h: "Lectura LPR de placas", p: "Identificación automática de vehículos autorizados y alertas de placas no registradas." },
      { h: "IA de protección perimetral", p: "Detección de cruce de línea en muros, accesos y zonas restringidas." },
      { h: "Minutas virtuales digitales", p: "Trazabilidad de ingresos, rondas, visitantes y novedades operativas." },
    ],
    mockup: { title: "ACCESO PEATONAL NORTE", status: "Online", icon: Scan, color: "var(--accent)" },
    href: "/sectores/residencial" as const,
  },
  clinicas: {
    icon: HeartPulse,
    label: "Clínicas y Centros Médicos",
    title: "Seguridad discreta en entornos sensibles",
    desc: "Una clínica privada debe proteger pacientes, personal médico, medicamentos, equipos y zonas restringidas sin afectar la experiencia de atención.",
    items: [
      { h: "Restricción biométrica de áreas críticas", p: "Farmacia, laboratorios, archivo clínico y salas técnicas." },
      { h: "Control LPR de ambulancias y proveedores", p: "Registro automatizado y priorización de vehículos médicos." },
      { h: "Analítica de video con IA", p: "Detección de movimientos irregulares y comportamientos sospechosos." },
      { h: "Alarmas y reacción inmediata", p: "Integración con supervisión permanente y tiempos de respuesta cortos." },
    ],
    mockup: { title: "ÁREA RESTRINGIDA · FARMACIA", status: "Alerta de Acceso", icon: UserX, color: "#ef4444" },
    href: "/sectores/clinicas" as const,
  },
  empresas: {
    icon: Building2,
    label: "Empresas e Industrias",
    title: "Blindaje operativo y continuidad del negocio",
    desc: "Cada empresa tiene riesgos distintos. Diseñamos esquemas de seguridad adaptados al tipo de operación, activos críticos y personal.",
    items: [
      { h: "Control de accesos con validación facial", p: "Empleados, contratistas y visitantes con registro automatizado." },
      { h: "Protección perimetral con IA", p: "Cruce de línea en bodegas, patios y zonas restringidas." },
      { h: "Lectura LPR para flotas", p: "Trazabilidad total de vehículos autorizados y accesos logísticos." },
      { h: "Monitoreo remoto 24/7", p: "Alarmas integradas, vigilancia física y reacción coordinada." },
    ],
    mockup: { title: "PORTÓN VEHICULAR DE CARGA", status: "LPR Activo", icon: Truck, color: "var(--accent)" },
    href: "/sectores/empresas" as const,
  },
  comercio: {
    icon: ShoppingBag,
    label: "Centros Comerciales",
    title: "Vigilancia inteligente en espacios de gran afluencia",
    desc: "Miles de movimientos diarios — vehículos, visitantes, empleados y proveedores — que requieren control constante y reacción inmediata.",
    items: [
      { h: "Analítica de video con IA", p: "Identificación de aglomeraciones, accesos indebidos y comportamientos anómalos." },
      { h: "Control vehicular con LPR", p: "Automatización de parqueaderos, proveedores y carga/descarga." },
      { h: "Control peatonal inteligente", p: "Validación facial y registro digital en áreas administrativas y operativas." },
      { h: "Minutas virtuales", p: "Documentación digital de toda la operación para auditoría y supervisión." },
    ],
    mockup: { title: "SALA DE MONITOREO PRINCIPAL", status: "Grabando", icon: Airplay, color: "var(--accent)" },
    href: "/sectores/centros-comerciales" as const,
  },
};

type SectorKey = keyof typeof SECTORS;

const VALUES = [
  { icon: Heart, h: "Compromiso", p: "Asumimos cada servicio con responsabilidad, disciplina y atención permanente." },
  { icon: BadgeCheck, h: "Integridad", p: "Trabajamos con transparencia, ética y respeto en cada operación." },
  { icon: Award, h: "Profesionalismo", p: "Personal capacitado y procesos orientados a un servicio de calidad." },
  { icon: Lightbulb, h: "Innovación", p: "Integramos tecnología e IA para fortalecer prevención y control." },
  { icon: EyeIcon, h: "Prevención", p: "Anticipamos riesgos y actuamos antes de que ocurran incidentes." },
  { icon: Users, h: "Servicio", p: "Atención cercana, soluciones adaptadas y acompañamiento constante." },
];

const MODALITIES = [
  {
    h: "Seguridad con Arma",
    p: "Protección para entornos que requieren mayor capacidad de reacción y control disuasivo.",
    items: ["Personal capacitado y autorizado", "Protocolos de reacción auditados", "Supervisión permanente", "Integración con tecnología y monitoreo"],
  },
  {
    h: "Seguridad sin Arma",
    p: "Control preventivo, atención profesional y manejo eficiente de accesos y protocolos. Ideal para conjuntos, oficinas, clínicas y centros comerciales.",
    items: ["Excelente presentación corporativa", "Control de visitantes", "Minutas virtuales", "Apoyo tecnológico"],
  },
  {
    h: "Operadores de Medios Tecnológicos",
    p: "Monitoreo inteligente con apoyo de IA y vigilancia en tiempo real, operado por personal entrenado.",
    items: ["Cámaras inteligentes", "Lectura de placas LPR", "Validación facial", "Alarmas y monitoreo remoto", "Detección de cruce de línea"],
  },
  {
    h: "Servicios de Escolta",
    p: "Protección especializada para personas, rutas y activos estratégicos con operación discreta y profesional.",
    items: ["Personal autorizado", "Planeación de riesgos", "Comunicación permanente", "Acompañamiento estratégico"],
  },
];

function Index() {
  const [sector, setSector] = useState<SectorKey>("residencial");
  const [openAcc, setOpenAcc] = useState(0);
  const active = SECTORS[sector];
  const ActiveIcon = active.mockup.icon;

  return (
    <SiteLayout><main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <Cpu style={{ width: 16, height: 16 }} />
              Sistemas Predictivos de Seguridad
            </div>
            <h1 className="hero-title">Seguridad Privada con Inteligencia Artificial y Control en Tiempo Real</h1>
            <p className="hero-desc">
              En seguridad no basta con reaccionar — la diferencia está en anticiparse. Fusionamos vigilancia
              humana, monitoreo inteligente y tecnología con IA para detectar riesgos antes de que se conviertan
              en problemas.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn-tech">
                Cotizar mi esquema
                <ArrowRight style={{ width: 18, height: 18 }} />
              </a>
              <a href="#sectores" className="btn-tech btn-secondary">Explorar sectores</a>
            </div>
          </div>

          <div className="hero-interactive">
            <div className="shield-container">
              <div className="shield-inner">
                <div className="shield-core">
                  <ShieldCheck style={{ width: 64, height: 64 }} />
                </div>
              </div>
            </div>
            <div className="tech-tag" style={{ top: "10%", left: "5%" }}>
              <Eye style={{ color: "var(--accent)", width: 16, height: 16 }} />
              Detección Perimetral
            </div>
            <div className="tech-tag" style={{ bottom: "15%", right: "5%", animationDelay: "-3s" }}>
              <Activity style={{ color: "var(--accent)", width: 16, height: 16 }} />
              Monitoreo IA Activo
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIONES */}
      <section className="tech-showcase" id="soluciones">
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: 12, textAlign: "center" }}>Ecosistema Tecnológico de Control</h2>
          <p style={{ color: "var(--text-muted)", textAlign: "center", maxWidth: 640, margin: "0 auto 50px" }}>
            Mientras otros solo ponen cámaras, en SMC Ltda usamos tecnología capaz de identificar comportamientos
            sospechosos, validar accesos y generar alertas automáticas en segundos.
          </p>

          <div className="tech-grid">
            {[
              { icon: Video, h: "Analítica de Video con IA", p: "Detección automática de comportamientos sospechosos e intrusiones perimetrales en tiempo real." },
              { icon: ScanEye, h: "Validación Facial", p: "Reconocimiento biométrico instantáneo para acceso fluido, rápido y sin llaves físicas." },
              { icon: Binary, h: "Lectura de Placas (LPR)", p: "Identificación automatizada de vehículos con registro en bases de datos en la nube." },
              { icon: FileSpreadsheet, h: "Minutas Virtuales", p: "Digitalización de ingresos y novedades, auditable desde cualquier terminal remota." },
              { icon: ShieldAlert, h: "Cercado Eléctrico Monitoreado", p: "Sistemas de reacción inmediata conectados a supervisión 24/7." },
              { icon: Layers, h: "Control de Visitantes", p: "Validación de proveedores, registro digital y trazabilidad completa." },
              { icon: Wrench, h: "Alarmas Inteligentes", p: "Integración con vigilancia física y monitoreo remoto coordinado." },
              { icon: Sparkles, h: "Supervisión Remota 24/7", p: "Control total de la operación desde cualquier lugar y en cualquier momento." },
            ].map(({ icon: Ic, h, p }) => (
              <div className="card-cyber" key={h}>
                <div className="card-cyber-icon"><Ic /></div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES INTERACTIVOS */}
      <section className="interactive-sectors" id="sectores">
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: 12 }}>Sectores con Esquemas Especializados</h2>
        <p style={{ color: "var(--text-muted)", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          No aplicamos el mismo esquema para todo. Entendemos las dinámicas operativas de cada infraestructura.
        </p>

        <div className="sectors-tab-list">
          {(Object.keys(SECTORS) as SectorKey[]).map((k) => {
            const Ic = SECTORS[k].icon;
            return (
              <div
                key={k}
                className={`tab-trigger ${sector === k ? "active" : ""}`}
                onClick={() => setSector(k)}
              >
                <Ic className="tab-trigger-icon" />
                <h4>{SECTORS[k].label}</h4>
              </div>
            );
          })}
        </div>

        <div className="sector-content-panel">
          <div className="sector-info">
            <h3>{active.title}</h3>
            <p>{active.desc}</p>
            <div className="solutions-checklist">
              {active.items.map((it) => (
                <div className="checklist-item" key={it.h}>
                  <CheckCircle2 className="checklist-item-icon" />
                  <div>
                    <h5>{it.h}</h5>
                    <p>{it.p}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 30 }}>
              <Link to={active.href} className="btn-tech btn-secondary">
                Ver subpágina del sector <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
            </div>
          </div>
          <div className="system-mockup">
            <div className="mockup-header">
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 700 }}>{active.mockup.title}</span>
              <div className="mockup-status" style={{ color: active.mockup.color }}>
                <span className="pulse-dot" style={{ backgroundColor: active.mockup.color }}></span>
                {active.mockup.status}
              </div>
            </div>
            <div style={{ background: "#111a2e", height: 220, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.05)" }}>
              <ActiveIcon style={{ width: 64, height: 64, color: active.mockup.color, opacity: 0.6 }} />
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL / TRUST */}
      <section className="legal-trust">
        <div className="trust-grid">
          <div>
            <div className="hero-badge" style={{ background: "rgba(15,98,254,0.06)", color: "var(--primary)", borderColor: "rgba(15,98,254,0.2)" }}>
              Respaldo Legal Absoluto
            </div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: 24 }}>¿Por qué elegir una empresa legalmente habilitada?</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: 30 }}>
              En Colombia, operar bajo el cumplimiento estricto de la ley es la única garantía de respaldo civil,
              técnico y operativo. SMC Ltda. cuenta con la habilitación de la Superintendencia de Vigilancia y
              Seguridad Privada.
            </p>
            <div className="trust-feature">
              <div className="trust-icon-box"><ShieldAlert /></div>
              <div>
                <h4>Personal Acreditado</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Operadores y guardias con capacitación certificada y pruebas de confianza vigentes.</p>
              </div>
            </div>
            <div className="trust-feature">
              <div className="trust-icon-box"><Scale /></div>
              <div>
                <h4>Soporte y Respaldo Legal</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Protección jurídica completa mediante pólizas activas y procesos auditados.</p>
              </div>
            </div>
          </div>
          <div className="system-mockup" style={{ padding: 40 }}>
            <h3 style={{ marginBottom: 24, color: "var(--accent)" }}>Garantías de Cumplimiento</h3>
            <div className="solutions-checklist">
              {[
                ["Personal acreditado", "Vigencia de pruebas de confianza."],
                ["Procesos supervisados", "Auditorías regulares de monitoreo y respuesta."],
                ["Cobertura y respaldo legal", "Pólizas activas y soporte jurídico."],
                ["Calidad en el servicio", "Estándares operativos medibles."],
                ["Trazabilidad", "Sistemas digitales transparentes para auditoría del cliente."],
              ].map(([h, p]) => (
                <div className="checklist-item" key={h} style={{ marginBottom: 6 }}>
                  <BadgeCheck style={{ color: "var(--accent)" }} />
                  <div>
                    <h5>{h}</h5>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section className="tech-showcase" id="modalidades">
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: 12 }}>Modalidades de Seguridad</h2>
        <p style={{ color: "var(--text-muted)", textAlign: "center", maxWidth: 640, margin: "0 auto 0" }}>
          Soluciones adaptadas a cada nivel de riesgo, con respaldo humano y tecnológico.
        </p>

        <div className="modalities-container">
          {MODALITIES.map((m, i) => (
            <div className={`accordion-item ${openAcc === i ? "active" : ""}`} key={m.h}>
              <button className="accordion-trigger" onClick={() => setOpenAcc(openAcc === i ? -1 : i)}>
                <h3>{m.h}</h3>
                <ChevronDown className="accordion-chevron" />
              </button>
              <div className="accordion-content">
                <p style={{ color: "var(--text-muted)" }}>{m.p}</p>
                <div className="modalities-check-list">
                  {m.items.map((it) => (
                    <div className="checklist-item" key={it}>
                      <Check style={{ color: "var(--accent)" }} /> {it}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALORES */}
      <section className="interactive-sectors" id="valores">
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: 12 }}>Nuestros Valores</h2>
        <p style={{ color: "var(--text-muted)", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          Lo que guía cada decisión y cada operación de SMC Ltda.
        </p>
        <div className="tech-grid" style={{ marginTop: 40 }}>
          {VALUES.map(({ icon: Ic, h, p }) => (
            <div className="card-cyber" key={h}>
              <div className="card-cyber-icon"><Ic /></div>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPACIDAD */}
      <section className="legal-trust" id="capacidad">
        <div className="trust-grid">
          <div>
            <div className="hero-badge">Capacidad Operativa</div>
            <h2 style={{ fontSize: "2.5rem", marginBottom: 24 }}>Seguridad diseñada según la realidad de cada cliente</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: 20 }}>
              No todas las operaciones necesitan el mismo modelo. Analizamos cada entorno, identificamos riesgos y
              construimos soluciones alineadas a las necesidades reales y al presupuesto de cada cliente.
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              La clave no es gastar más. Es implementar un modelo de seguridad que realmente funcione.
            </p>
          </div>
          <div className="system-mockup" style={{ padding: 40 }}>
            <h3 style={{ marginBottom: 24, color: "var(--accent)" }}>Integramos</h3>
            <div className="solutions-checklist">
              {[
                "Seguridad física",
                "Tecnología inteligente",
                "Monitoreo remoto",
                "Telemetría y control operativo",
                "Analítica con IA",
                "Supervisión en tiempo real",
              ].map((t) => (
                <div className="checklist-item" key={t}>
                  <Check style={{ color: "var(--accent)" }} />
                  <div><h5 style={{ marginBottom: 0 }}>{t}</h5></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section className="coverage-interactive" id="cobertura">
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: 12 }}>Cobertura Operativa</h2>
        <p style={{ color: "var(--text-muted)", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          Capacidad operativa y respaldo tecnológico para atender servicios en diferentes regiones del país.
        </p>

        <div className="coverage-visual-grid">
          <div className="map-interactive-container">
            <div className="radar-wave"></div>
            <div className="map-node" style={{ top: "45%", left: "45%" }}>
              <div className="node-tooltip">Central Principal: Bogotá D.C.</div>
            </div>
            <div className="map-node" style={{ top: "65%", left: "30%" }}>
              <div className="node-tooltip">Sede Regional: Cali</div>
            </div>
            <div className="map-node" style={{ top: "15%", left: "60%" }}>
              <div className="node-tooltip">Sede Norte: Riohacha</div>
            </div>
            <div className="map-node" style={{ top: "40%", left: "50%" }}>
              <div className="node-tooltip">Sabana Norte (Chía, Cajicá, Zipaquirá)</div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.2)", fontWeight: 800, fontSize: "1.2rem" }}>RED OPERATIVA</p>
          </div>

          <div>
            <h3 style={{ fontSize: "1.8rem", marginBottom: 20, color: "var(--accent)" }}>Presencia y respuesta integrada</h3>
            <p style={{ color: "var(--text-muted)", marginBottom: 30 }}>
              Seguridad física, control tecnológico y capacidad de respuesta integrados en una sola operación, con
              supervisión en tiempo real.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div className="trust-feature" style={{ marginBottom: 0 }}>
                <div className="trust-icon-box"><MapPin /></div>
                <div>
                  <h5>Nacional</h5>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Bogotá · Cali · Riohacha</p>
                </div>
              </div>
              <div className="trust-feature" style={{ marginBottom: 0 }}>
                <div className="trust-icon-box"><Navigation /></div>
                <div>
                  <h5>Cundinamarca</h5>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Zipaquirá, Gachancipá, Tocancipá, Chía, Cajicá, Mosquera, Nemocón, Facatativá</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main></SiteLayout>
  );
}
