"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Atom, Cpu, Layers, Mail, Menu, Microscope, Shield, Sparkles, X } from "lucide-react";
import Image from "next/image";

const navItems = ["Home", "Technology", "Applications", "Validation", "Vision", "Team", "Contact"];

const applications = [
  {
    title: "Tritium barriers for fusion reactors",
    subtitle: "Our patented coating formulation is engineered to reduce hydrogen isotope permeation in breeding blankets and primary circuits, supporting safety and tritium economy.",
    icon: Atom,
  },  {
    title: "Accident-tolerant fuel for III-Gen fission reactors",
    subtitle: "Our patented coating solution enhances the resilience of fuel cladding under accident conditions, extending the safety response window.",
    icon: Shield,
  },
  {
    title: "Molten-metal protection for IV-Gen fission reactors",
    subtitle: "Our patented coating composition improve the performance and safety of steel cladding exposed to high-temperature lead-based coolants.",
    icon: Shield,
  },
];

const validation = [
  { value: ">10³", label: "demostrated Permeation Reduction Factor (PRF)" },
  { value: "30 DPA at 800°C", label: "High-temperature radiation tolerance" },
  { value: "8,000 h", label: "long-term corrosion resistance" },
  { value: ">200 GPa", label: "Elastic modulus" },
];

const visionPoints = [
  "Engineering multifunctional coating solutions to enhance the performance, economics, and safety of nuclear systems.",
  "Developing more efficient and reliable ALD and PLD coating systems to enable scaling-up.",
  "Bridging laboratory-scale thin-film science with industrial nuclear deployment.",
  "Becoming a strategic materials partner for fusion and fission ecosystems.",
];

const teamMembers = [
  {
    name: "Paolo",
    surname: "Mutti",
    role: "CEO & Founder",
    image: "/images/paolo.png",
  },
  {
    name: "Fabio",
    surname: "Di Fonzo",
    role: "CTO & Founder",
    image: "/images/fabio.jpg",
  },
  {
    name: "Andrea",
    surname: "Stinchelli",
    role: "Nuclear engineering",
    image: "/images/andrea.png",
  },
  {
    name: "Giulio",
    surname: "Fierli",
    role: "Equipment design",
    image: "/images/giulio.png",
  },
  {
    name: "Gioele",
    surname: "Tornaghi",
    role: "Characterization and testing",
    image: "/images/gioele.png",
  },
  {
    name: "Gabriele",
    surname: "Caldarini",
    role: "Materials Science",
    image: "/images/gabriele.png",
  },
];

function Button({ children, className = "", asChild = false, ...props }: any) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: `${(children.props as any).className || ""} ${className}`.trim(),
      ...props,
    });
  }
  return <button className={className} {...props}>{children}</button>;
}

function Card({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}

function GlowOrb({ className = "" }: any) {
  return <div className={`absolute rounded-full blur-3xl opacity-30 ${className}`} />;
}

function EnergyFlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-[-20%] h-[140%] w-px -translate-x-1/2 rotate-[18deg] bg-gradient-to-b from-transparent via-cyan-200/50 to-transparent"
        animate={{ opacity: [0.15, 0.7, 0.15] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full border border-cyan-200/40 bg-cyan-200/20 shadow-[0_0_28px_rgba(103,232,249,0.7)]"
          style={{
            left: `${8 + ((i * 19) % 84)}%`,
            top: `${10 + ((i * 31) % 78)}%`,
            width: `${7 + (i % 4) * 3}px`,
            height: `${7 + (i % 4) * 3}px`,
          }}
          animate={{ scale: [0, 1.8, 4.2], opacity: [0, 0.8, 0], filter: ["blur(0px)", "blur(0px)", "blur(3px)"] }}
          transition={{ duration: 3.4 + (i % 5) * 0.35, repeat: Infinity, delay: i * 0.35, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function EnergyCard({ children }: any) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
      />
      {children}
    </div>
  );
}

function HeroRenderPreview() {
  return (
    <div className="relative mx-auto max-w-[620px] overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/60 shadow-2xl shadow-cyan-950/40 backdrop-blur">

      <img
        src="/images/xeradia-plasma-hero.jpeg"
        alt="Xeradia plasma reactor"
        className="block h-[460px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

    </div>
  );
}


export default function XeradiaWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const particles = useMemo(() => Array.from({ length: 28 }, (_, i) => i), []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.055]"
          style={{
          backgroundImage:
          "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <EnergyFlow />

      <section className="relative z-10 min-h-screen border-b border-cyan-300/10">
        <GlowOrb className="top-20 -left-24 h-80 w-80 bg-cyan-400" />
        <GlowOrb className="bottom-12 -right-32 h-96 w-96 bg-indigo-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_38%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        {particles.map((p) => (
          <motion.span
            key={p}
            className="absolute h-1 w-1 rounded-full bg-cyan-200/70"
            style={{ left: `${8 + ((p * 37) % 88)}%`, top: `${12 + ((p * 53) % 78)}%` }}
            animate={{ opacity: [0.15, 0.9, 0.15], scale: [1, 1.8, 1] }}
            transition={{ duration: 3 + (p % 5), repeat: Infinity, delay: p * 0.18 }}
          />
        ))}

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-lg shadow-cyan-500/10">
              <Layers className="h-5 w-5 text-cyan-200" />
            </div>
            <div>
              
              <div className="flex items-center">
                  <img
                    src="/images/xeradia-logo.png"
                    alt="Xeradia"
                    width={90}
                    height={90}
                    className="h-14 w-auto object-contain"
                  />
              </div>

              <div className="text-sm uppercase tracking-[0.32em] text-cyan-200/70 ml-9">COATINGS MADE CLEAR</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {navItems.map((item) => <a key={item} href={item === "Home" ? "#top" : `#${item.toLowerCase()}`} className="transition hover:text-cyan-200">{item}</a>)}
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">{menuOpen ? <X /> : <Menu />}</button>
        </header>

        {menuOpen && (
          <div className="relative z-30 mx-6 rounded-3xl border border-cyan-300/20 bg-slate-900/95 p-5 md:hidden">
            {navItems.map((item) => <a key={item} href={item === "Home" ? "#top" : `#${item.toLowerCase()}`} className="block py-3 text-slate-200" onClick={() => setMenuOpen(false)}>{item}</a>)}
          </div>
        )}

        <div id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Advanced nanoceramic coatings for next-generation fusion and fission reactors.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Xeradia develops multifunctional coatings designed to enhance efficiency and accelerate the deployment of next-generation fusion and fission reactors By combining Atomic Layer Deposition (ALD) and Pulsed Laser Deposition (PLD) technologies, our high performance coatings provide excellent tritium barrier capabilities and corrosion resistance.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-cyan-300 px-7 py-4 text-base text-slate-950 hover:bg-cyan-200" asChild>
                <a href="#contact">Discuss your coating challenge <ArrowRight className="ml-2 inline h-4 w-4" /></a>
              </Button>
              <Button className="rounded-full border border-cyan-300/30 bg-white/5 px-7 py-4 text-base text-cyan-100 hover:bg-cyan-300/10" asChild>
                <a href="#technology">Explore technology</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative">
            <HeroRenderPreview />
          </motion.div>
        </div>
      </section>

      <section id="technology" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Technology</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">Two deposition techniques, infinite possibilities</h2>
          <p className="mt-6 leading-8 text-slate-300">
            Xeradia employs both ALD and PLD to meet the diverse requirements of nuclear system. ALD provides precise conformal protection of complex geometry. Whereas, PLD is particularly suited for dense thin film for highly stressing condition. This dual approach allows us to engineer tailored coating solution to overcome current challenges.
          </p>
        </div>

        <div className="space-y-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h3 className="text-4xl font-semibold text-cyan-50 md:text-5xl">Atomic Layer Deposition (ALD)</h3>
              <p className="mt-6 leading-8 text-slate-300">
                ALD is capable of producing a layer-by-layer coating exploiting the subsequent selflimiting reactions occurring on the surface. This process was selected to enable coating deposition in areas inaccessible to conventional technologies. Typical applications include tubes and internal cavities, heat exchangers, welded joints, breeding blanket channels, manifolds, and storage tanks. The result is uniform, pinhole-free protection across complex geometries, ensuring reliable performance wherever protection is needed, without the need for plasma-assisted processes.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {["Conformal coating on complex 3D surfaces", "Pure thermal ALD process", "Suitable for multiple substrates", "High throughput via parallelized production"].map((item) => (
                  <div key={item} className="rounded-2xl border border-cyan-300/15 bg-slate-900/60 p-4 text-sm leading-6 text-slate-200">{item}</div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/70 shadow-2xl shadow-cyan-950/30">
                <img src="/images/tritium-render.png" alt="Fusion breeding blanket tritium permeation barrier" className="block w-full object-cover" />
              </div>
              <div className="rounded-[2rem] border border-cyan-300/20 bg-slate-950/70 p-8 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">ALD CASE APPLICATION</div>
                <h3 className="mt-4 text-4xl font-semibold text-white">Tritium barrier in breeding blankets</h3>
                <p className="mt-4 text-lg leading-8 text-slate-300">Tritium management remains one of the most critical challenges to the future commercialization of fusion energy. Any tritium loss represents both a safety risk and an economic burden. Xeradia addresses this challenge by applying its patented coating technology to fusion reactor breeding blankets, reducing tritium transport through structural materials while mitigating material degradation, embrittlement, and environmental dispersion.</p>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/70 shadow-2xl shadow-cyan-950/30">
                <img src="/images/lfr-render.png" alt="LFR cladding protected by Xeradia coating" className="block w-full object-cover" />
              </div>
              <div className="rounded-[2rem] border border-cyan-300/20 bg-slate-950/70 p-8 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">PLD CASE APPLICATION</div>
                <h3 className="mt-4 text-4xl font-semibold text-white">LFR cladding in molten lead</h3>
                <p className="mt-4 text-lg leading-8 text-slate-300">Today, no structural material can provide long-term protection against corrosion in high-temperature liquid lead environments, representing a major obstacle to the deployment of Lead-cooled Fast Reactors (LFRs). Xeradia addresses this challenge by coating fuel cladding components with its patented ceramic materials, which combine chemical inertness with irradiation stability. This approach enhances the durability, safety, and overall performance of the reactor core under the most demanding operating conditions.</p>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-semibold text-indigo-50 md:text-5xl">Pulsed Layer Deposition (PLD)</h3>
              <p className="mt-6 leading-8 text-slate-300">
                PLD relies on the interaction between a high-energy laser and a target material, generating an ablation plume that deposits onto a substrate maintained at near-room temperature. Xeradia has specialized this process for advanced ceramic materials, producing dense, amorphous thin films with exceptional adhesion and structural integrity. These coatings exhibit outstanding resistance to mechanical, thermal, and irradiation-induced stresses. Furthermore, the precise control of coating composition enables the engineering of multifunctional multilayer architectures for corrosion protection, permeation barriers, and electrical insulation applications.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {["Dense amorphous thin films", "Strong adhesion to metallic substrates", "High temperature corrosion resistance", "Polifunctional multilayer architectures"].map((item) => (
                  <div key={item} className="rounded-2xl border border-indigo-300/15 bg-slate-900/60 p-4 text-sm leading-6 text-slate-200">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="relative z-10 border-y border-cyan-300/10 bg-slate-900/40 px-6 py-24 backdrop-blur-sm lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Applications</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">A viable solution for present and future nuclear challenges</h2>
            <p className="mt-6 leading-8 text-slate-300">Xeradia solutions are designed to address some of the most critical challenges across current and next-generation nuclear power systems. Xeradia’s patented coating formulations target three key applications: accident-tolerant fuel claddings for today’s reactors, corrosion-resistant steel components for molten-metal cooled fast reactors, and tritium barriers for future fusion power plants.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {applications.map((item) => <Card key={item.title} className="group rounded-3xl border border-cyan-300/15 bg-slate-950/70 text-white transition hover:-translate-y-1 hover:border-cyan-200/40"><EnergyCard><CardContent className="p-7"><div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-100"><item.icon className="h-7 w-7" /></div><h3 className="text-2xl font-semibold">{item.title}</h3><p className="mt-4 leading-7 text-slate-300">{item.subtitle}</p></CardContent></EnergyCard></Card>)}
          </div>
        </div>
      </section>

      <section id="validation" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Validation</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Validation across fission and fusion environments</h2><p className="mt-6 leading-8 text-slate-300">The technology originates from research and validation campaigns conducted in harsh nuclear environments, including testing relevant to both fission and fusion systems. Coated samples have been studied under high-temperature exposure, corrosive liquid-metal conditions, long-term hydrogen exposure, and heavy ion irradiation, under operating conditions and geometries representative of next-generation reactor designs.</p></div>
          <div className="grid gap-5 sm:grid-cols-2">{validation.map((item) => <Card key={item.value} className="rounded-3xl border border-cyan-300/15 bg-white/[0.04] text-white"><CardContent className="p-7"><div className="text-4xl font-semibold text-cyan-100">{item.value}</div><p className="mt-4 leading-7 text-slate-300">{item.label}</p></CardContent></Card>)}</div>
        </div>
      </section>

      <section id="vision" className="relative z-10 border-y border-cyan-300/10 bg-slate-900/40 px-6 py-24 backdrop-blur-sm lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><div><p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Vision</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Building the invisible layer to safeguard the future of nuclear energy</h2><p className="mt-6 leading-8 text-slate-300">Xeradia is currently transitioning from laboratory-scale validation toward early-stage industrial demonstration and reactor-relevant qualification. The company’s roadmap targets future integration into advanced fusion and fission supply chains through pilot-scale coating capabilities, industrial partnerships, and reactor-oriented materials testing campaigns.</p></div><div className="space-y-4">{visionPoints.map((step, index) => <motion.div key={step} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-3xl border border-cyan-300/15 bg-slate-950/70 p-5"><div className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-sm text-cyan-100">0{index + 1}</span><p className="text-slate-200">{step}</p></div></motion.div>)}</div></div>
      </section>

      <section id="team" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Team</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">A multidisciplinary team bridging materials science and nuclear engineering</h2><p className="mt-6 leading-8 text-slate-300">Xeradia brings together competencies in ALD and PLD technologies, nuclear materials science, reactor-oriented coating engineering. The team operates at the intersection of research and industrial innovation, with the objective of translating advanced coating science into scalable solutions for next-generation fusion and fission energy systems.</p></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="overflow-hidden rounded-3xl border border-cyan-300/15 bg-white/[0.04] text-white"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full object-cover"
                />

                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="mt-2 text-cyan-200">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div></div>
      </section>

      
      <section id="contact" className="relative z-10 border-t border-cyan-300/10 bg-slate-950/90 px-6 py-24 backdrop-blur-sm lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-ls uppercase tracking-[0.35em] text-cyan-200">Contact</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Let’s build the next generation of nuclear materials together.</h2><p className="mt-6 leading-8 text-slate-300">As the world enters a new era of nuclear energy development, advanced materials are becoming a critical enabling technology for both fusion and next-generation fission systems. Xeradia aims to contribute to this nuclear renaissance through high-performance nanoceramic coatings designed for extreme reactor environments. We welcome reactor developers, industrial partners, research institutions and investors interested in accelerating the deployment of safer, more durable and more efficient nuclear technologies.</p></div><Card className="rounded-3xl border border-cyan-300/15 bg-white/[0.04] text-white"><CardContent className="p-7"><form className="grid gap-4"><input className="rounded-2xl border border-cyan-300/15 bg-slate-950/70 px-5 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-200" placeholder="Name and company" /><input className="rounded-2xl border border-cyan-300/15 bg-slate-950/70 px-5 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-200" placeholder="Email" /><textarea className="min-h-36 rounded-2xl border border-cyan-300/15 bg-slate-950/70 px-5 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-200" placeholder="Tell us about your project, collaboration or investment interest" /><Button className="rounded-full bg-cyan-300 px-7 py-4 text-base text-slate-950 hover:bg-cyan-200"><Mail className="mr-2 inline h-4 w-4" /> Send request</Button></form></CardContent></Card></div>
      </section>
      <footer className="border-t border-cyan-300/10 py-6 text-center text-ls tracking-wide text-slate-500">
        xeradia s.r.l. - Sede legale: Via I. Rosellini 1, 20124 Milano (Italy) – P. IVA 17700991007
      </footer>
    </main>
  );
}
