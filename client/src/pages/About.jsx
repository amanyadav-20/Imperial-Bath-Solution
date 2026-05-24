import { Award, Handshake, MapPin, ShieldCheck } from "lucide-react";
import CTA from "../components/CTA";
import FeatureCard from "../components/FeatureCard";
import SectionHeader from "../components/SectionHeader";
import StatsBar from "../components/StatsBar";
import { stats } from "../assets/placeholderData";

const values = [
  {
    title: "Transparent Planning",
    text: "Use this block for clear project guidance and requirement notes."
  },
  {
    title: "Reliable Execution",
    text: "Placeholder copy for installation, delivery, and service confidence."
  },
  {
    title: "Premium Finish",
    text: "A concise card for product quality and brand positioning."
  }
];

const About = ({ onQuoteClick }) => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Marcus Bath</span>
          <h1>Made in India. Made Well.</h1>
          <p>
            Premium wellness products shaped around thoughtful planning,
            reliable execution, and long-term service.
          </p>
        </div>
      </section>

      <StatsBar items={stats} />

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeader
              eyebrow="Mission and values"
              title="A Trust Page That Feels Real"
              text="Built around clear communication, practical guidance, and refined wellness outcomes."
            />
          </div>
          <div className="feature-grid">
            {values.map((value) => (
              <FeatureCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeader
            eyebrow="Why choose us"
            title="Clear Product Thinking"
            text="Every project benefits from product clarity, planning support, and dependable service."
          />
          <div className="trust-grid">
            <article>
              <Award size={24} />
              <h3>Experience</h3>
              <p>Placeholder for years, projects, and capability.</p>
            </article>
            <article>
              <Handshake size={24} />
              <h3>Direct Support</h3>
              <p>Placeholder for consultation and planning guidance.</p>
            </article>
            <article>
              <MapPin size={24} />
              <h3>Pan India</h3>
              <p>Placeholder for delivery and project reach.</p>
            </article>
            <article>
              <ShieldCheck size={24} />
              <h3>After Care</h3>
              <p>Placeholder for service and maintenance confidence.</p>
            </article>
          </div>
        </div>
      </section>

      <CTA onQuoteClick={onQuoteClick} />
    </>
  );
};

export default About;