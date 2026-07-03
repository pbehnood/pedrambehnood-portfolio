import Link from "next/link";
import Image from "next/image";

const researchFindings = [
  "Most people shifted to two-handed use as soon as they needed to reach the top corners of larger iPhones.",
  "Several users changed their grip, crawled their thumb upward, or used accessories just to feel secure while stretching.",
  "Apple's built-in accessibility features helped, but they still interrupted the flow or felt awkward in everyday use.",
];

const conceptIdeas = [
  {
    title: "Scaled mini-screen",
    description:
      "Project the interface into a smaller active area so the whole screen behaves like a smaller phone.",
  },
  {
    title: "Bring target area closer",
    description:
      "Let users summon a reachable section of the screen without shrinking the interface itself.",
  },
  {
    title: "Directional screen movement",
    description:
      "Use gestures in an idle side area to slide the screen toward the thumb, making distant corners reachable.",
  },
];

const principles = [
  "Keep the interaction aligned with Apple's native motion and gesture language.",
  "Support both right-handed and left-handed use through mirrored behavior.",
  "Reduce finger strain without adding visual clutter or a steep learning curve.",
];

const reachabilityImages = [
  "/case-studies/one-handed-iphone/case1.webp",
  "/case-studies/one-handed-iphone/case2.webp",
  "/case-studies/one-handed-iphone/case3.webp",
  "/case-studies/one-handed-iphone/case4.webp",
];

const conceptPrototypeImages = [
  "/case-studies/one-handed-iphone/prototype1.webp",
  "/case-studies/one-handed-iphone/prototype2.webp",
  "/case-studies/one-handed-iphone/prototype3.webp",
];

export default function OneHandedIphoneUsePage() {
  return (
    <main className="paper-site relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
        <div className="grid-overlay" />
        <div className="vignette-overlay" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/45 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.28em] text-white/90 uppercase"
          >
            Pedram Behnood
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/#work"
              className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.1]"
            >
              Back to work
            </Link>
            <a
              href="https://medium.com/design-bootcamp/interaction-design-enhancing-one-handed-iphone-use-2fc90ea7c825"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Read on Medium
            </a>
          </div>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <span className="section-label">Case Study</span>
          <h1 className="mt-5 font-[family-name:var(--font-sora)] text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-balance md:text-6xl">
            Enhancing one-handed iPhone use through interaction design.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A concept case study exploring how larger iPhones can feel easier,
            safer, and more intuitive to use with one hand.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
              <div className="text-xs tracking-[0.2em] text-slate-400 uppercase">Role</div>
              <div className="mt-2 text-lg font-semibold text-white">UX Designer</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
              <div className="text-xs tracking-[0.2em] text-slate-400 uppercase">Focus</div>
              <div className="mt-2 text-lg font-semibold text-white">Interaction Design</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
              <div className="text-xs tracking-[0.2em] text-slate-400 uppercase">Published</div>
              <div className="mt-2 text-lg font-semibold text-white">July 5, 2023</div>
            </div>
          </div>
        </div>

        <div className="panel-shell overflow-hidden rounded-[2rem] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <div className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-slate-950/70">
            <Image
              src="/case-studies/one-handed-iphone/hero-gif.gif"
              alt="Animated demonstration of the one-handed iPhone use concept"
              width={2560}
              height={1440}
              unoptimized
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl gap-6 px-6 py-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="panel-shell rounded-[2rem] p-8">
          <span className="section-label">The Problem</span>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
            Phones are getting bigger, but thumb reach is not.
          </h2>
        </div>

        <div className="panel-shell rounded-[2rem] p-8">
          <p className="text-base leading-8 text-slate-300">
            This project started from a personal frustration: larger iPhones
            made everyday actions feel awkward. Reaching the corners required
            grip changes, finger stretching, or a second hand, which added
            friction to something that should feel natural and effortless.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300">
            The goal was to explore whether interaction design could make
            one-handed use feel more comfortable without fighting Apple&apos;s
            existing mental models.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="panel-shell rounded-[2rem] p-8 md:p-10">
          <span className="section-label">Research</span>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
                Observing how people adapt to large-screen phones
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                The research combined observation with a small reachability
                exercise on right-handed users to map where the thumb could
                comfortably travel while holding the phone naturally with one hand.
              </p>
            </div>

            <div className="space-y-4">
              {researchFindings.map((finding) => (
                <div
                  key={finding}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="leading-7 text-slate-200">{finding}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {reachabilityImages.map((src, index) => (
              <div
                key={src}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]"
              >
                <Image
                  src={src}
                  alt={`Reachability study frame ${index + 1}`}
                  width={640}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel-shell rounded-[2rem] p-8">
            <span className="section-label">Existing Patterns</span>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
              Reviewing Apple&apos;s current solutions
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Reachability, AssistiveTouch, and Siri already help reduce
              effort, but each one changes the flow in a different way. That
              opened the opportunity to look for a solution that feels more
              continuous inside the normal interface.
            </p>
          </div>

          <div className="panel-shell rounded-[2rem] p-8">
            <span className="section-label">Design Principles</span>
            <div className="mt-4 space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-[1.4rem] border border-cyan-300/15 bg-cyan-300/8 p-5"
                >
                  <p className="leading-7 text-cyan-50">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="panel-shell rounded-[2rem] p-8 md:p-10">
          <span className="section-label">Ideation</span>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
            Three directions were explored before selecting the final concept.
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {conceptIdeas.map((idea, index) => (
              <article
                key={idea.title}
                className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="text-sm tracking-[0.18em] text-cyan-100 uppercase">
                  Idea 0{index + 1}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-sora)] text-2xl font-semibold text-white">
                  {idea.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{idea.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {conceptPrototypeImages.map((src, index) => (
              <div
                key={src}
                className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04]"
              >
                <Image
                  src={src}
                  alt={`Concept exploration visual ${index + 1}`}
                  width={640}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.7rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
            <div className="text-sm tracking-[0.18em] text-cyan-100 uppercase">
              Chosen direction
            </div>
            <p className="mt-3 text-base leading-8 text-cyan-50">
              The swipe-based directional movement felt the most intuitive and
              the closest to Apple&apos;s interaction language, so it became the
              concept taken into prototyping.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-shell rounded-[2rem] p-8 md:p-10">
            <span className="section-label">Prototype</span>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
              From Figma frames to motion-led prototyping in After Effects
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The concept began in Figma, but the richer motion and screen
              transitions were better demonstrated in Adobe After Effects. That
              shift helped communicate how the screen could slide toward the
              thumb while preserving orientation and context.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The approach also extended well to mirrored left-handed use and
              offered flexibility for users with limited range of motion by
              combining directional moves.
            </p>

            <div className="mt-8 overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04]">
              <Image
                src="/case-studies/one-handed-iphone/hifi-protorype.webp"
                alt="High-fidelity prototype of the one-handed iPhone interaction"
                width={720}
                height={405}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="panel-shell rounded-[2rem] p-8">
            <span className="section-label">Outcome</span>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This was a concept project rather than a shipped feature, but it
              demonstrates a clear UX process: notice friction, observe
              behavior, test multiple ideas, and prototype the most promising
              interaction in a way that users can understand.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              It also shows how accessibility and convenience can overlap,
              creating value for a broader range of users rather than a narrow
              edge case.
            </p>

            <div className="mt-8 overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04]">
              <Image
                src="/case-studies/one-handed-iphone/final-gif.gif"
                alt="Final animated prototype for one-handed iPhone use"
                width={1280}
                height={720}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel-shell rounded-[2rem] p-8">
            <span className="section-label">Prototype Testing</span>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
              Communicating the idea through motion and high-fidelity visuals
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Your visuals make the interaction much easier to understand than
              words alone. Showing the transition states helps explain how the
              screen shifts while preserving orientation and confidence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="panel-shell overflow-hidden rounded-[2rem] p-4">
              <Image
                src="/case-studies/one-handed-iphone/Testing-prototype.webp"
                alt="Prototype testing visual"
                width={720}
                height={720}
                className="h-full w-full rounded-[1.4rem] object-cover"
              />
            </div>
            <div className="panel-shell overflow-hidden rounded-[2rem] p-4">
              <Image
                src="/case-studies/one-handed-iphone/final-prototype.webp"
                alt="Final prototype screen"
                width={720}
                height={405}
                className="h-full w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="panel-shell rounded-[2.2rem] px-8 py-12 text-center md:px-12">
          <span className="section-label justify-center">Source</span>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-4xl font-semibold tracking-[-0.04em] text-white">
            Want the original long-form article too?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-300">
            This case study is presented here as part of my portfolio. If you
            want the published article version, you can also read it on Medium.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://medium.com/design-bootcamp/interaction-design-enhancing-one-handed-iphone-use-2fc90ea7c825"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Read the Medium article
            </a>
            <Link
              href="/#work"
              className="rounded-full border border-white/12 bg-white/[0.05] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.1]"
            >
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
