import {ArrowRight,Bath,Check,Gem,Maximize2,Ruler,ShieldCheck,Sparkles,ThermometerSun} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { images } from "../data/siteData";
import { productApi, testimonialApi } from "../api/http";
import AnimatedSection from "../components/AnimatedSection";
import FAQAccordion from "../components/FAQAccordion";
import LoadingSpinner from "../components/LoadingSpinner";
import PortfolioGrid from "../components/PortfolioGrid";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import TestimonialCarousel from "../components/TestimonialCarousel";
import {choosingTips,fallbackProducts,fallbackTestimonials,faqs,images,projects,stats,team} from "../data/siteData";

const tipIcons = [Ruler, ThermometerSun, Sparkles, ShieldCheck];

const Home = () => {
  const [products, setProducts] = useState(fallbackProducts);
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await productApi.getProducts();
        setProducts(response.data.length ? response.data : fallbackProducts);
      } catch {
        setProducts(fallbackProducts);
      } finally {
        setIsLoadingProducts(false);
      }
    };

    const loadTestimonials = async () => {
      try {
        const response = await testimonialApi.getTestimonials();
        setTestimonials(
          response.data.length ? response.data : fallbackTestimonials
        );
      } catch {
        setTestimonials(fallbackTestimonials);
      } finally {
        setIsLoadingTestimonials(false);
      }
    };

    loadProducts();
    loadTestimonials();
  }, []);

  return (
    <>
      <section className="relative min-h-[88svh] overflow-hidden bg-ink text-white">
        <img
          src={images.hero}
          alt="Luxury bathroom with premium Jacuzzi bathtub"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/72 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="container-shell relative flex min-h-[88svh] items-center py-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Black / Gold / White Bath Luxury</p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
             Luxury Wellness Redefined
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Premium Jacuzzi bathtubs and spa-style bathroom concepts for
              homes, hotels, villas, and resort retreats.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#jacuzzi" className="btn-primary">
                Explore Collection <ArrowRight size={18} />
              </a>
              <Link to="/contact" className="btn-secondary">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink pb-10 text-white">
        <div className="container-shell grid gap-4 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              {/* <p className="font-display text-4xl font-bold text-champagne">
                {item.value}
              </p> */}
              {/* <p className="mt-2 text-sm leading-6 text-white/55">{item.label}</p> */}
            </div>
          ))}
        </div>
      </section>

      <AnimatedSection id="about" className="section-padding bg-ivory">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Luxury wellness, planned with architectural discipline."
              text="Imperial luxury designs premium Jacuzzi bathtub experiences for refined homes and hospitality spaces. Every recommendation balances bathing comfort, visual restraint, technical planning, and long-term service access."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Curated luxury bathtub catalog",
                "Site-ready installation planning",
                "Premium finishes and mood lighting",
                "Hospitality-grade support"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold text-ink/70">
                  <Check size={18} className="mt-1 shrink-0 text-gold" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-5 -top-5 hidden h-full w-full border border-gold/45 lg:block" />
            <img
              src={images.about}
              alt="Premium Jacuzzi bathtub in a luxury bathroom"
              className="relative aspect-[4/5] w-full object-cover shadow-luxe"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="jacuzzi" className="section-padding bg-white">
        <div className="container-shell">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Jacuzzi Bath Tubs"
              title="Six signature models for private spa rituals."
              text="Browse premium bathtub formats built for statement bathrooms, compact apartments, outdoor decks, and boutique hospitality suites."
            />
            <Link to="/contact" className="btn-primary self-start lg:self-end">
              Request Pricing <ArrowRight size={18} />
            </Link>
          </div>
          {isLoadingProducts ? (
            <LoadingSpinner label="Loading collection" />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.slice(0, 6).map((product) => (
                <ProductCard key={product._id || product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-ink text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Buying Guide"
              title="How to choose the right Jacuzzi bathtub."
              text="The best model is not just the biggest or the most decorative one. It should fit the room, support the desired bathing experience, and make maintenance practical."
              tone="dark"
            />
            <div className="mt-8 flex items-center gap-4 text-white/55">
              <Bath className="text-champagne" />
              <span className="text-sm uppercase tracking-[0.24em]">
                Comfort / Size / Jets / Service
              </span>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {choosingTips.map((tip, index) => {
              const Icon = tipIcons[index];
              return (
                <article
                  key={tip.title}
                  className="border border-white/10 bg-white/[0.03] p-6"
                >
                  <Icon className="text-champagne" size={28} />
                  <h3 className="mt-5 font-display text-2xl font-bold">
                    {tip.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{tip.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="projects" className="section-padding bg-charcoal text-white">
        <div className="container-shell">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Projects / Portfolio"
              title="Bathroom atmospheres with a resort-level finish."
              text="Filter through modern, classic, and spa-inspired bathroom concepts designed around premium tubs and calm material palettes."
              tone="dark"
            />
            <div className="flex items-center gap-3 text-white/45">
              <Gem className="text-champagne" />
              <span className="text-sm uppercase tracking-[0.24em]">
                Crafted for visual impact
              </span>
            </div>
          </div>
          <PortfolioGrid projects={projects} />
        </div>
      </AnimatedSection>

      <AnimatedSection id="testimonials" className="section-padding bg-ivory">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by homeowners, designers, and hospitality teams."
            text="Real-world feedback shaped into a clean carousel experience for premium social proof."
          />
          <div className="mt-10">
            {isLoadingTestimonials ? (
              <LoadingSpinner label="Loading reviews" />
            ) : (
              <TestimonialCarousel testimonials={testimonials} />
            )}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="team" className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Team"
            title="A focused team for design-led bath projects."
            text="From selection and specification to site readiness and installation coordination, the team keeps luxury practical."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="group bg-ivory">
                <div className="aspect-[4/5] overflow-hidden bg-ink">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold">
                    {member.role}
                  </p>
                  <div className="mt-5 flex gap-3">
                    {["In", "Ig"].map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="grid h-10 w-10 place-items-center border border-ink/15 text-xs font-bold text-ink/65 transition hover:border-gold hover:text-gold"
                        aria-label={`${member.name} social profile`}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="faq" className="section-padding bg-ivory">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers before your first consultation."
            text="Quick clarity on installation timing, customization, service planning, and enquiry flow."
          />
          <FAQAccordion items={faqs} />
        </div>
      </AnimatedSection>

      {/* <section className="bg-ink py-16 text-white">
        <div className="container-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow mb-3">Start The Project</p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Bring a private spa into your next bathroom.
            </h2>
          </div>
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section> */}
    </>
  );
};

export default Home;