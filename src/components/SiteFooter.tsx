import { Shield, PhoneCall, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="smc-footer" id="contacto">
      <div className="footer-grid">
        <div>
          <a href="#" className="logo-area" style={{ marginBottom: 30 }}>
            <Shield className="logo-icon" />
            <span>SMC <span style={{ color: "var(--accent)" }}>LTDA</span></span>
          </a>
          <h2 style={{ fontSize: "2.4rem", lineHeight: 1.2, marginTop: 24, marginBottom: 20 }}>
            La seguridad cambió.<br />Tu operación también debería hacerlo.
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 500, marginBottom: 40 }}>
            En SMC Ltda combinamos experiencia operativa, personal capacitado y tecnología con inteligencia artificial para crear esquemas de seguridad modernos, medibles y realmente efectivos.
          </p>
          <div className="checklist-item" style={{ marginBottom: 16 }}>
            <PhoneCall className="checklist-item-icon" />
            <div>
              <h5 style={{ color: "var(--text-muted)" }}>Soporte Inmediato</h5>
              <p style={{ color: "var(--text-main)", fontSize: "1rem", fontWeight: 700 }}>+57 (1) 8000-SMC-LTDA</p>
            </div>
          </div>
          <div className="checklist-item">
            <MapPin className="checklist-item-icon" />
            <div>
              <h5 style={{ color: "var(--text-muted)" }}>Cobertura</h5>
              <p style={{ color: "var(--text-main)", fontSize: "0.95rem" }}>
                Bogotá · Cali · Riohacha · Sabana de Cundinamarca
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3 style={{ fontSize: "1.6rem", marginBottom: 30 }}>Solicitar Análisis de Riesgos</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("¡Gracias por elegir SMC Ltda! Su solicitud está siendo procesada.");
            }}
          >
            <div className="input-group">
              <label htmlFor="name">Nombre Completo o Copropiedad</label>
              <input type="text" id="name" placeholder="Ej. Conjunto San Jerónimo / Carlos Díaz" required />
            </div>
            <div className="form-group-grid">
              <div className="input-group">
                <label htmlFor="email">Correo Corporativo</label>
                <input type="email" id="email" placeholder="ejemplo@smc.com" required />
              </div>
              <div className="input-group">
                <label htmlFor="sector">Sector de Interés</label>
                <select id="sector" required style={{ appearance: "none" }}>
                  <option value="residencial">Conjunto Residencial</option>
                  <option value="clinica">Clínica / Centro Médico</option>
                  <option value="empresa">Empresa u Oficina</option>
                  <option value="comercio">Centro Comercial</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message">Mensaje Adicional</label>
              <textarea id="message" rows={4} placeholder="Háblenos de los accesos o perímetros que desea asegurar..." />
            </div>
            <button type="submit" className="btn-tech" style={{ width: "100%", justifyContent: "center" }}>
              Iniciar Análisis de Riesgo Seguro
            </button>
          </form>
        </div>
      </div>

      <div style={{ maxWidth: 1300, margin: "80px auto 0", paddingTop: 30, borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
          © 2026 SMC Ltda. — Seguridad Moderna Colombiana Ltda. Todos los derechos reservados.<br />
          Vigilados por la Superintendencia de Vigilancia y Seguridad Privada de Colombia.
        </p>
      </div>
    </footer>
  );
}
