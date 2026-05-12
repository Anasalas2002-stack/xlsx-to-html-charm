import { Link } from "@tanstack/react-router";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`smc-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo-area">
          <Shield className="logo-icon" />
          <span>SMC <span style={{ color: "var(--accent)" }}>LTDA</span></span>
        </Link>
        <ul className="nav-menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sectores/residencial">Residencial</Link></li>
          <li><Link to="/sectores/centros-comerciales">Comerciales</Link></li>
          <li><Link to="/sectores/empresas">Empresas</Link></li>
          <li><Link to="/sectores/clinicas">Clínicas</Link></li>
        </ul>
        <Link to="/" hash="contacto" className="btn-tech btn-secondary" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>
          Contacto Directo
        </Link>
      </div>
    </header>
  );
}
