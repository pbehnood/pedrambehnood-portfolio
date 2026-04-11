import Image from "next/image";

const metrics = [
  { value: "12+", label: "Product launches" },
  { value: "4 yrs", label: "Designing for growth" },
  { value: "92%", label: "Usability clarity score" },
];

const projects = [
  {
    title: "Banking App Redesign",
    tag: "Fintech UX",
    description:
      "Redesigned onboarding, account setup, and first-use moments to make trust and progress feel immediate.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Health Data Dashboard",
    tag: "Data Experience",
    description:
      "Translated dense reporting into a calmer decision dashboard with stronger hierarchy and role-based actions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Shopping Flow Optimization",
    tag: "Commerce UX",
    description:
      "Improved the browse-to-buy journey across mobile and desktop with simpler comparison and checkout moments.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
];

const skills = [
  "Figma",
  "Product Strategy",
  "User Research",
  "Journey Mapping",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Usability Testing",
  "Information Architecture",
  "Responsive UX",
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
        <div className="grid-overlay" />
        <div className="vignette-overlay" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/45 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-sm font-semibold tracking-[0.28em] text-white/90 uppercase">
            Pedram Behnood
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#work" className="text-sm text-white/65 transition hover:text-white">
              Work
            </a>
            <a href="#about" className="text-sm text-white/65 transition hover:text-white">
              About
            </a>
            <a href="#skills" className="text-sm text-white/65 transition hover:text-white">
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cyan-300/35 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/10"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-cyan-100 uppercase shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            UX Portfolio 2026
          </span>

          <h1 className="mt-7 max-w-4xl font-[family-name:var(--font-sora)] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-balance md:text-7xl">
            Designing digital products that feel sharp, calm, and unmistakably modern.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I design product experiences that turn complexity into momentum.
            From research and systems thinking to polished interface design, I
            focus on flows that feel effortless for people and valuable for teams.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/14 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Start a Conversation
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/[0.045] px-5 py-5 shadow-[0_18px_60px_rgba(3,8,25,0.28)] backdrop-blur-xl"
              >
                <div className="text-3xl font-semibold tracking-[-0.04em] text-white">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="hero-glow absolute inset-x-12 inset-y-16 rounded-full blur-3xl" />

          <div className="relative w-full max-w-xl">
            <div className="animate-float-soft absolute -left-4 top-10 rounded-full border border-white/12 bg-slate-950/70 px-4 py-2 text-xs font-medium tracking-[0.18em] text-cyan-100 uppercase backdrop-blur-xl">
              Research-led flows
            </div>

            <div className="panel-shell overflow-hidden rounded-[2rem] border border-white/12 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-slate-950/70">
                <Image
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80"
                  alt="Workspace showing UX design process"
                  width={1200}
                  height={900}
                  className="h-[540px] w-full object-cover"
                  priority
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                  <div className="text-xs tracking-[0.25em] text-slate-400 uppercase">
                    Signature approach
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    Human insight, sharp hierarchy, and interface systems built
                    to scale across product teams.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <div className="text-xs tracking-[0.25em] text-cyan-100 uppercase">
                    Current focus
                  </div>
                  <p className="mt-3 text-sm leading-7 text-cyan-50">
                    UX for fintech, dashboards, AI tools, and premium digital brands.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-float-delayed absolute -bottom-4 right-2 rounded-[1.4rem] border border-white/12 bg-slate-950/75 px-5 py-4 text-sm font-medium text-slate-100 backdrop-blur-xl">
              Web, mobile, systems, and strategy
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-0.04em] text-white">
              Case studies with clarity, motion, and product depth.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-400">
            A curated set of projects focused on usability, product trust, and
            visual systems that help teams ship with confidence.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-white/18 hover:bg-white/[0.07]"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-cyan-100 uppercase">
                  {project.tag}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-sora)] text-2xl font-semibold tracking-[-0.03em] text-white">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex text-sm font-semibold tracking-[0.16em] text-white uppercase transition group-hover:text-cyan-100"
                >
                  View Case Study
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8"
      >
        <div className="panel-shell rounded-[2rem] p-5">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Creative workspace"
            width={1200}
            height={900}
            className="h-full rounded-[1.6rem] object-cover"
          />
        </div>

        <div className="panel-shell rounded-[2rem] p-8 md:p-10">
          <span className="section-label">About</span>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-0.04em] text-white">
            I build thoughtful experiences where the product story is as clear as the interface.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300">
            My process starts with understanding behavior, friction, and decision-making.
            I like shaping products from the inside out: framing the problem,
            simplifying the flow, and giving the final interface a strong sense
            of rhythm and precision.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300">
            I work across discovery, wireframes, prototypes, and polished systems,
            always aiming for experiences that feel premium without losing clarity.
          </p>
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="panel-shell rounded-[2rem] p-8 md:p-10">
          <span className="section-label">Tools & Expertise</span>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-0.04em] text-white">
            A UX toolkit shaped around research, systems, and visual precision.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="panel-shell relative overflow-hidden rounded-[2.2rem] px-8 py-12 text-center md:px-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
          <span className="section-label justify-center">Contact</span>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-0.04em] text-white">
            Let&apos;s build something meaningful and visually unforgettable.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Available for freelance collaborations, product design roles, and
            UX partnerships. Replace the placeholder links below with your real contact details.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:yourname@email.com"
              className="rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              yourname@email.com
            </a>
            <a
              href="#"
              className="rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.1]"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.1]"
            >
              Behance
            </a>
          </div>
        </div>
      </section>

      <footer className="relative mx-auto max-w-7xl px-6 pb-10 text-center text-sm text-slate-500 lg:px-8">
        © 2026 Pedram Behnood. Designed for clarity, movement, and modern product storytelling.
      </footer>
    </main>
  );
}