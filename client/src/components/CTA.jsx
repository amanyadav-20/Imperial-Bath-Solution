import { MessageCircle } from "lucide-react";

const CTA = ({ onQuoteClick }) => {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <span className="eyebrow">Start your discussion</span>
        <h2>Planning a Premium Wellness Project?</h2>
        <p>
          Keep this section as your reusable call-to-action block for product,
          service, and detail pages.
        </p>
        <button className="btn btn--primary" onClick={onQuoteClick}>
          <MessageCircle size={18} />
          Request a quote
        </button>
      </div>
    </section>
  );
};

export default CTA;