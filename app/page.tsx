type Project = {
  title: string;
  category: string;
  summary: string;
  outcome: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Presentation",
    category: "UX Portfolio",
    summary:
      "A presentation-style portfolio showcasing selected design work, visual thinking, and a structured storytelling approach.",
    outcome: "View the interactive Figma prototype.",
    href: "https://www.figma.com/proto/83vrONnaAPPQcIDEIi1HIl/Presentation?page-id=0%3A1&node-id=1-2&viewport=113%2C251%2C0.06&t=DO0dKMkUe9ypVL3m-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2",
  },
  {
    title: "Case Study Collection",
    category: "UX Case Studies",
    summary:
      "A placeholder section for your upcoming case studies, product redesigns, research work, and interaction design projects.",
    outcome: "Replace this with your next featured project.",
    href: "https://www.behance.net/pedrambehnood",
  },
  {
    title: "Professional Profile",
    category: "Experience",
    summary:
      "A space to connect your design portfolio with your professional background, experience, and collaborations.",
    outcome: "See your LinkedIn profile.",
    href: "https://www.linkedin.com/in/pbehnood/",
  },
];

const skills = [
  "UX Research",
  "Wireframing",
  "Interaction Design",
  "User Flows",
  "Prototyping",
  "Usability Testing",
  "Information Architecture",
  "Design Systems",
  "Responsive Design",
  "Figma",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-extrabold tracking-wide">
            Pedram Behnood / UX
          </a>

          <nav className="hidden gap-8 md:flex">
            <a href="#work" className="text-sm text-slate-600 hover:text-slate-900">
              Work
            </a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">
              About
            </a>
            <a href="#skills" className="text-sm text-slate-600 hover:text-slate-900">
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            UX Designer • Product Thinker • Portfolio
          </span>

          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
            Designing thoughtful digital experiences with clarity, structure, and intent.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m Pedram Behnood, a UX designer focused on simplifying complex
            products and shaping user-centered digital experiences. Explore my work,
            professional background, and portfolio presentation below.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
            >
              View Projects
            </a>
            <a
              href="https://www.behance.net/pedrambehnood"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5"
            >
              View Behance
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {[
              ["1", "Live portfolio prototype"],
              ["2", "Professional profiles"],
              ["10", "Core skills"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <div className="text-xl font-bold">{value}</div>
                <div className="text-sm text-slate-600">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-xl">
            <div className="grid gap-4 rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-5 text-white">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-white/70">
                  Featured Project
                </div>
                <div className="text-2xl font-bold">Figma Portfolio Presentation</div>
                <div className="mt-3 text-sm leading-6 text-white/85">
                  An interactive portfolio prototype that presents selected work,
                  visual direction, and structured storytelling.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-4 text-slate-900">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Platform
                  </div>
                  <div className="mt-2 text-lg font-bold">Figma Prototype</div>
                </div>
                <div className="rounded-2xl bg-white p-4 text-slate-900">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Explore
                  </div>
                  <div className="mt-2 text-lg font-bold">Behance + LinkedIn</div>
                </div>
              </div>

              <a
                href="https://www.figma.com/proto/83vrONnaAPPQcIDEIi1HIl/Presentation?page-id=0%3A1&node-id=1-2&viewport=113%2C251%2C0.06&t=DO0dKMkUe9ypVL3m-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/10 p-4 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/15"
              >
                Open Figma portfolio →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Selected Work</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          A starting point for showing your live portfolio, design presence, and future case studies.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {project.category}
              </span>
              <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{project.summary}</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{project.outcome}</p>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block font-semibold text-slate-900"
              >
                Open link →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-6 px-6 py-20 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-4 leading-8 text-slate-600">
            I design digital products with a focus on clarity, usability, and business
            impact. My process starts with understanding users, mapping pain points,
            and turning complex requirements into clear, effective experiences.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            This site is a clean portfolio base connected to my Behance, LinkedIn,
            and Figma presentation so it can grow into a fuller case-study portfolio over time.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <h3 className="text-2xl font-bold">Where to find more of my work</h3>
          <ul className="mt-5 space-y-3 text-white/85">
            <li>
              • Behance:{" "}
              <a
                href="https://www.behance.net/pedrambehnood"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                behance.net/pedrambehnood
              </a>
            </li>
            <li>
              • LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/pbehnood/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                linkedin.com/in/pbehnood
              </a>
            </li>
            <li>
              • Figma:{" "}
              <a
                href="https://www.figma.com/proto/83vrONnaAPPQcIDEIi1HIl/Presentation?page-id=0%3A1&node-id=1-2&viewport=113%2C251%2C0.06&t=DO0dKMkUe9ypVL3m-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Portfolio prototype
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Tools & Skills</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[32px] bg-slate-900 px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">Let’s connect</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/80">
            You can reach me through LinkedIn, explore my visual work on Behance,
            or view my portfolio presentation on Figma.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/pbehnood/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/pedrambehnood"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold"
            >
              Behance
            </a>
            <a
              href="https://www.figma.com/proto/83vrONnaAPPQcIDEIi1HIl/Presentation?page-id=0%3A1&node-id=1-2&viewport=113%2C251%2C0.06&t=DO0dKMkUe9ypVL3m-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A2"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold"
            >
              Figma Portfolio
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-center text-sm text-slate-500">
        © 2026 Pedram Behnood. All rights reserved.
      </footer>
    </main>
  );
}