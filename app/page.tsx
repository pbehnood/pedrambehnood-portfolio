import Image from "next/image";
import Link from "next/link";

const metrics = [
  { value: "12+", label: "Product launches" },
  { value: "4 yrs", label: "Designing for growth" },
  { value: "92%", label: "Usability clarity score" },
];

const projects = [
  {
    title: "Enhancing One-Handed iPhone Use",
    role: "Interaction design",
    outcome: "A motion-led concept for making large iPhones easier to control.",
    description:
      "Research, reachability mapping, concept exploration, and high-fidelity motion prototyping for a more comfortable one-handed interaction.",
    image: "/case-studies/one-handed-iphone/img2.webp",
    href: "/work/one-handed-iphone-use",
    color: "bg-[#ffe872]",
    tags: ["Research", "Gesture design", "Prototype"],
  },
  {
    title: "Improving the Bruce App Experience",
    role: "Product UX",
    outcome: "A broader product vision for discovery, motivation, and studio value.",
    description:
      "A marketplace UX case study focused on engagement, clearer flows, and stronger product value for both users and fitness studios.",
    image: "/case-studies/bruce-case1/Cover.png",
    href: "/work/bruce-app-ux",
    color: "bg-[#a8f0d4]",
    tags: ["Strategy", "Mobile UX", "Retention"],
  },
  {
    title: "Next case study",
    role: "Web application",
    outcome: "A placeholder board for the next product story.",
    description:
      "A future case-study slot for another piece of design work, framed around context, process, evidence, and product outcome.",
    image: "/case-studies/bruce-case1/lofi-design.webp",
    href: "#contact",
    color: "bg-[#ffb49a]",
    tags: ["Systems", "Interface", "Storytelling"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Frame",
    description:
      "Turn a fuzzy brief into product, user, and evidence questions worth answering.",
  },
  {
    number: "02",
    title: "Map",
    description:
      "Lay out journeys, decision points, assumptions, and places where people get stuck.",
  },
  {
    number: "03",
    title: "Prototype",
    description:
      "Create enough fidelity to test behavior, hierarchy, language, and product flow.",
  },
  {
    number: "04",
    title: "Measure",
    description:
      "Ship with learning goals, success signals, and a clear next iteration.",
  },
];

const skills = [
  "Figma",
  "Product strategy",
  "User research",
  "Journey mapping",
  "Wireframing",
  "Prototyping",
  "Design systems",
  "Usability testing",
  "Information architecture",
  "Responsive UX",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf4] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-[#111111]/10 bg-[#fbfaf4]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-md border-2 border-[#111111] bg-white font-black shadow-[5px_5px_0_#111111]">
              PB
            </span>
            <span>Pedram Behnood</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-[#4a4a4a] md:flex">
            <a className="transition hover:text-[#111111]" href="#work">
              Work
            </a>
            <a className="transition hover:text-[#111111]" href="#process">
              Process
            </a>
            <a className="transition hover:text-[#111111]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#111111]" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="mailto:yourname@email.com"
            className="solid-button solid-button-dark px-4 py-2 text-sm font-semibold"
          >
            Email me
          </a>
        </div>
      </header>

      <section
        id="top"
        className="canvas-grid relative overflow-hidden border-b border-[#111111]/10 px-5 py-12 sm:px-8 lg:py-16"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-md border-2 border-[#111111] bg-[#9ed9ff] px-3 py-1 text-sm font-bold shadow-[5px_5px_0_#111111]">
              Product designer / UX researcher
            </p>
            <h1 className="text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              Product decisions made visible.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4a4a4a] sm:text-xl">
              I shape product experiences by making the path visible:
              research, assumptions, interface decisions, prototypes, and the
              evidence that helps teams move with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="solid-button solid-button-dark px-5 py-3 text-center font-semibold"
              >
                View case studies
              </a>
              <a
                href="#process"
                className="solid-button bg-white px-5 py-3 text-center font-semibold"
              >
                See process
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="board-card p-5">
                  <div className="text-3xl font-black leading-none">
                    {metric.value}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-[#4a4a4a]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="whiteboard-stage" aria-label="Portfolio board preview">
            <div className="connector connector-one" />
            <div className="connector connector-two" />
            <div className="cursor-tag cursor-one">Research lead</div>
            <div className="cursor-tag cursor-two">Product team</div>

            <div className="artifact-card artifact-main">
              <p className="text-sm font-bold text-[#4a4a4a]">
                Case study frame
              </p>
              <h2 className="mt-2 text-2xl font-black">Problem to proof</h2>
              <div className="mt-5 space-y-3">
                <div className="h-3 w-5/6 rounded-sm bg-[#111111]/80" />
                <div className="h-3 w-2/3 rounded-sm bg-[#111111]/35" />
                <div className="h-3 w-4/5 rounded-sm bg-[#111111]/20" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <span className="h-14 rounded-md bg-[#ffe872]" />
                <span className="h-14 rounded-md bg-[#a8f0d4]" />
                <span className="h-14 rounded-md bg-[#cfc4ff]" />
              </div>
            </div>

            <div className="sticky-note note-a">
              Start with what changed for the user.
            </div>
            <div className="sticky-note note-b">Show the messy middle.</div>
            <div className="sticky-note note-c">Outcome before artifact.</div>
            <div className="stamp-card">
              <span className="stamp-dot bg-[#ffb49a]" />
              <span className="stamp-dot bg-[#9ed9ff]" />
              <span className="stamp-dot bg-[#a8f0d4]" />
              <strong>Evidence wins</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#4a4a4a]">
                Selected work
              </p>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">
                Case studies with clear product evidence.
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-[#4a4a4a]">
              Each project is structured around context, role, process, and the
              artifact decisions that make the product direction easier to
              understand.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-[#111111]/20"
              >
                <article className="board-card flex h-full flex-col items-start gap-2 p-[22px] transition hover:-translate-y-1">
                  <div
                    className={`relative h-40 w-full shrink-0 overflow-hidden rounded-md border-2 border-[#111111] ${project.color} p-[18px]`}
                  >
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, calc(100vw - 84px)"
                      className="object-cover object-center"
                    />
                    <span className="relative z-10 w-max rounded-md border-2 border-[#111111] bg-white px-2.5 py-1.5 text-sm font-black">
                      {project.role}
                    </span>
                  </div>
                  <p className="w-full pt-3 text-sm font-black text-[#4a4a4a]">
                    {project.role}
                  </p>
                  <h3 className="w-full text-2xl font-black">
                    {project.title}
                  </h3>
                  <p className="w-full pb-3 pt-1 text-xl leading-7 text-[#4a4a4a]">
                    {project.description}
                  </p>
                  <p className="w-full rounded-md border-2 border-[#111111] bg-[#fff36d] px-[14px] py-2.5 text-xl font-black leading-6">
                    {project.outcome}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#111111]/20 bg-white px-3 py-[5px] text-sm text-[#4a4a4a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="canvas-grid border-y border-[#111111]/10 px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#4a4a4a]">
              Process
            </p>
            <h2 className="mt-2 text-4xl font-black sm:text-5xl">
              From open question to useful product decision.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number} className="board-card p-5">
                <span className="text-sm font-black text-[#4a4a4a]">
                  {step.number}
                </span>
                <h3 className="mt-5 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#4a4a4a]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#4a4a4a]">
              About
            </p>
            <h2 className="mt-2 text-4xl font-black sm:text-5xl">
              A practical designer for ambiguous product spaces.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="board-card bg-[#cfc4ff] p-6">
              <h3 className="text-2xl font-black">Design point of view</h3>
              <p className="mt-4 leading-7">
                I like shaping products from the inside out: understanding
                behavior, simplifying the flow, and giving the final interface
                a strong sense of rhythm and precision.
              </p>
            </article>

            <article className="board-card p-6">
              <h3 className="text-2xl font-black">Toolkit</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border-2 border-[#111111] bg-white px-3 py-2 text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-[#111111]/10 bg-[#111111] px-5 py-16 text-white sm:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/70">
              Contact
            </p>
            <h2 className="mt-2 max-w-2xl text-4xl font-black sm:text-5xl">
              Ready to turn the next ambiguous brief into a clearer experience.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:yourname@email.com"
              className="solid-button-light bg-white px-5 py-3 text-center font-semibold text-[#111111]"
            >
              yourname@email.com
            </a>
            <a
              href="#"
              className="solid-button-light px-5 py-3 text-center font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] px-5 pb-8 text-center text-sm text-white/65 sm:px-8">
        © 2026 Pedram Behnood. Portfolio work with clear evidence and useful
        product artifacts.
      </footer>
    </main>
  );
}
