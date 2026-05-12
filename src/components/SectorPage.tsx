import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "./SiteLayout";

export interface SectorSection {
  h: string;
  body: string[];
}

export interface SectorBenefit {
  text: string;
}

export interface SectorPageProps {
  badge: string;
  title: string;
  intro: string[];
  sections: SectorSection[];
  benefits: string[];
  icon: LucideIcon;
  coverImage?: string;
  coverAlt?: string;
}

export function SectorPage({ badge, title, intro, sections, benefits, icon: Icon, coverImage, coverAlt }: SectorPageProps) {
  return (
    <SiteLayout>
      <section className="subpage-hero">
        <Link to="/" className="btn-tech btn-secondary" style={{ marginBottom: 24, padding: "8px 16px", fontSize: "0.85rem" }}>
          <ArrowLeft style={{ width: 16, height: 16 }} /> Volver al inicio
        </Link>
        <div className="hero-badge"><Icon style={{ width: 16, height: 16 }} /> {badge}</div>
        <h1>{title}</h1>
        {intro.map((p, i) => (
          <p key={i} style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: 820, marginBottom: 16 }}>{p}</p>
        ))}
      </section>

      {coverImage && (
        <div className="subpage-cover">
          <div className="subpage-cover-inner">
            <img src={coverImage} alt={coverAlt ?? title} />
          </div>
        </div>
      )}

      <section className="subpage-content">
        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: 24, color: "var(--accent)" }}>Soluciones que implementamos</h2>
          {sections.map((s) => (
            <div className="card-cyber" key={s.h} style={{ marginBottom: 20 }}>
              <h3>{s.h}</h3>
              {s.body.map((b, i) => (
                <p key={i} style={{ marginTop: i === 0 ? 8 : 6 }}>{b}</p>
              ))}
            </div>
          ))}
        </div>

        <div>
          <div className="system-mockup" style={{ padding: 40 }}>
            <h3 style={{ marginBottom: 24, color: "var(--accent)" }}>Beneficios</h3>
            <div className="solutions-checklist">
              {benefits.map((b) => (
                <div className="checklist-item" key={b}>
                  <CheckCircle2 className="checklist-item-icon" />
                  <div><h5 style={{ marginBottom: 0 }}>{b}</h5></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <a href="/#contacto" className="btn-tech" style={{ width: "100%", justifyContent: "center" }}>
                Solicitar análisis
                <ArrowRight style={{ width: 16, height: 16 }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
