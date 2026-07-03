import Image from "next/image";
import Link from "next/link";

const studioOpportunities = [
  {
    title: "Rethinking credits",
    description:
      "Make credits feel like a universal currency so users can clearly understand what they can book and studios can offer more flexible class access.",
  },
  {
    title: "Workshops",
    description:
      "Extend the product beyond recurring classes by supporting workshops that deepen engagement and create more value for studios.",
  },
  {
    title: "Marketing through Bruce",
    description:
      "Give studios stronger ways to present themselves inside the app through richer media and clearer promotional surfaces.",
  },
];

const userExperienceIdeas = [
  {
    title: "Redesigning the Home tab",
    description:
      "Introduce more personalized recommendations based on attendance history, favorite studios, and relevant nearby classes.",
  },
  {
    title: "Profile tab",
    description:
      "Replace the fragmented account/friends pattern with a clearer profile area for subscriptions, credits, friends, activity, and settings.",
  },
  {
    title: "In-app chat",
    description:
      "Support class-specific conversations and friend messaging so users can ask questions, coordinate, and respond to invitations naturally.",
  },
  {
    title: "Practice history",
    description:
      "Turn attendance stats into a more meaningful progress view with routines, hours practiced, calorie burn, goals, and trends.",
  },
  {
    title: "Gamification with badges",
    description:
      "Reward consistency and milestones with badges, recognition, and small perks that reinforce habit-building.",
  },
];

const competitorImages = [
  {
    src: "/case-studies/bruce-case1/direct-competitores.webp",
    alt: "Direct competitors analysis for Bruce app",
  },
  {
    src: "/case-studies/bruce-case1/indirect-competitors.webp",
    alt: "Indirect competitors analysis for Bruce app",
  },
];

const uiScreens = [
  {
    src: "/case-studies/bruce-case1/home-tab-hifi.webp",
    alt: "Bruce app home tab redesign",
  },
  {
    src: "/case-studies/bruce-case1/profile-hifi.webp",
    alt: "Bruce app profile tab redesign",
  },
  {
    src: "/case-studies/bruce-case1/in-app-chat-hifi.webp",
    alt: "Bruce app in-app chat redesign",
  },
  {
    src: "/case-studies/bruce-case1/practive-hifi.webp",
    alt: "Bruce app practice history redesign",
  },
  {
    src: "/case-studies/bruce-case1/gamification-hifi.webp",
    alt: "Bruce app gamification and badges redesign",
  },
  {
    src: "/case-studies/bruce-case1/workshop-hifi.webp",
    alt: "Bruce app workshop feature redesign",
  },
];

export default function BruceAppUxPage() {
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
              href="https://medium.com/design-bootcamp/a-case-study-on-improving-the-bruce-app-user-experience-6709397268be"
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
            Improving the Bruce app experience for both studios and users.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A product UX case study exploring how Bruce could increase
            engagement, improve clarity, and create stronger value on both sides
            of its fitness marketplace.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
              <div className="text-xs tracking-[0.2em] text-slate-400 uppercase">Role</div>
              <div className="mt-2 text-lg font-semibold text-white">UX Designer</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
              <div className="text-xs tracking-[0.2em] text-slate-400 uppercase">Product</div>
              <div className="mt-2 text-lg font-semibold text-white">Fitness marketplace</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
              <div className="text-xs tracking-[0.2em] text-slate-400 uppercase">Published</div>
              <div className="mt-2 text-lg font-semibold text-white">March 24, 2023</div>
            </div>
          </div>
        </div>

        <div className="panel-shell overflow-hidden rounded-[2rem] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
          <div className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-slate-950/70">
            <Image
              src="/case-studies/bruce-case1/hero-img.webp"
              alt="Bruce app case study hero image"
              width={1400}
              height={788}
              className="h-[520px] w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-6xl gap-6 px-6 py-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="panel-shell rounded-[2rem] p-8">
          <span className="section-label">Project Brief</span>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
            Keeping users engaged while making the platform more useful for studios.
          </h2>
        </div>

        <div className="panel-shell rounded-[2rem] p-8">
          <p className="text-base leading-8 text-slate-300">
            Bruce helps users book fitness classes across different studios
            through memberships and credits. This case study explores how the
            product could create a better experience for both sides of the
            ecosystem: users who want clearer, more motivating journeys and
            studios that need stronger participation and visibility.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300">
            The work focused on identifying opportunities that could improve
            engagement, simplify choices, and make the app feel more complete as
            a fitness companion rather than only a booking tool.
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="panel-shell rounded-[2rem] p-8 md:p-10">
          <span className="section-label">Competitor Analysis</span>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
                Looking at both direct and indirect competitors
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                The analysis separated products Bruce directly competes with
                from products that offer adjacent behavior, motivation, or
                tracking features. That helped frame opportunities not only for
                booking, but also for retention and habit-building.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="leading-7 text-slate-200">
                  Direct competitors showed how class access and memberships are
                  currently positioned in the market.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="leading-7 text-slate-200">
                  Indirect competitors like activity and habit apps revealed
                  stronger patterns for progress tracking, motivation, and user engagement.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {competitorImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel-shell rounded-[2rem] p-8">
            <span className="section-label">Studio Perspective</span>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
              Features that make Bruce more attractive for studios
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Part of improving the app experience meant strengthening the value
              proposition for partner studios, especially around flexibility,
              discoverability, and new booking behaviors.
            </p>
          </div>

          <div className="space-y-4">
            {studioOpportunities.map((item) => (
              <div
                key={item.title}
                className="panel-shell rounded-[1.7rem] p-6"
              >
                <h3 className="font-[family-name:var(--font-sora)] text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-shell overflow-hidden rounded-[2rem] p-4">
            <Image
              src="/case-studies/bruce-case1/marketing-hifi.webp"
              alt="Bruce app marketing concept"
              width={1200}
              height={675}
              className="h-full w-full rounded-[1.4rem] object-cover"
            />
          </div>
          <div className="panel-shell overflow-hidden rounded-[2rem] p-4">
            <Image
              src="/case-studies/bruce-case1/workshop-hifi.webp"
              alt="Bruce app workshop feature concept"
              width={1200}
              height={675}
              className="h-full w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="panel-shell rounded-[2rem] p-8 md:p-10">
          <span className="section-label">User Perspective</span>
          <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
            Redesign ideas focused on clarity, motivation, and connection.
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {userExperienceIdeas.map((idea) => (
              <article
                key={idea.title}
                className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="font-[family-name:var(--font-sora)] text-2xl font-semibold text-white">
                  {idea.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{idea.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {uiScreens.map((screen) => (
            <div
              key={screen.src}
              className="panel-shell overflow-hidden rounded-[2rem] p-4"
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                width={1200}
                height={675}
                className="h-full w-full rounded-[1.4rem] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel-shell overflow-hidden rounded-[2rem] p-4">
            <Image
              src="/case-studies/bruce-case1/lofi-design.webp"
              alt="Low-fidelity design exploration for Bruce app"
              width={1200}
              height={675}
              className="h-full w-full rounded-[1.4rem] object-cover"
            />
          </div>

          <div className="panel-shell rounded-[2rem] p-8">
            <span className="section-label">Outcome</span>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-semibold tracking-[-0.04em] text-white">
              A broader vision for Bruce as a more engaging fitness product
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This work framed Bruce as more than a class-booking utility. The
              proposed improvements aimed to make the app more useful for
              studios, more motivating for users, and more differentiated from
              simpler booking competitors.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Together, the concepts point toward a product experience that
              better supports discovery, communication, progress, and long-term
              engagement.
            </p>
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
              href="https://medium.com/design-bootcamp/a-case-study-on-improving-the-bruce-app-user-experience-6709397268be"
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
