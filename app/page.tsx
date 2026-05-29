"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Atom, Cpu, Layers, Mail, Menu, Microscope, Shield, Sparkles, X } from "lucide-react";
import Image from "next/image";

const navItems = ["Home", "Technology", "Applications", "Validation", "Vision", "Team", "Contact"];

const applications = [
  {
    title: "Fusion tritium barriers",
    subtitle: "Dense ceramic diffusion barriers designed to reduce hydrogen isotope permeation in breeding blankets and primary circuits.",
    icon: Atom,
  },  {
    title: "Accident tolerant fuel claddings",
    subtitle: "PLD-engineered multilayer coatings for fuel cladding protection in advanced fission environments.",
    icon: Shield,
  },
  {
    title: "LFR & molten metal protection",
    subtitle: "Protective nanoceramic layers for structural steels exposed to molten lead and aggressive liquid-metal environments.",
    icon: Shield,
  },
];

const validation = [
  { value: ">10³", label: "demonstrated PRF range" },
  { value: "10⁵", label: "target optimized barrier performance" },
  { value: "8,000 h", label: "long-term corrosion testing" },
  { value: "TRL 5→6", label: "startup stage toward demonstration" },
];

const visionPoints = [
  "Enable safer and more durable nuclear systems through multifunctional protective coatings.",
  "Bridge laboratory-scale thin film science with industrial nuclear deployment.",
  "Develop scalable ALD and PLD coating platforms for next-generation reactors.",
  "Become a strategic materials partner for fusion and advanced fission ecosystems.",
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
              Xeradia develops multifunctional nanoceramic coatings for both fusion and advanced fission reactors, combining ALD and PLD technologies for tritium barriers, corrosion-resistant claddings and high-temperature protection.
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
          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">Two deposition routes, one nuclear coating platform.</h2>
          <p className="mt-6 leading-8 text-slate-300">
            Xeradia combines Atomic Layer Deposition and Pulsed Laser Deposition to address different nuclear geometries and reactor environments. ALD enables conformal diffusion barriers on complex surfaces, while PLD provides dense multilayer coatings for high-temperature and corrosive conditions. Together, they form a flexible coating platform for fusion and advanced fission systems.
          </p>
        </div>

        <div className="space-y-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <Microscope className="h-4 w-4" /> Atomic Layer Deposition
              </div>
              <h3 className="text-4xl font-semibold text-cyan-50 md:text-5xl">ALD for conformal tritium permeation barriers.</h3>
              <p className="mt-6 leading-8 text-slate-300">
                ALD grows ceramic films by sequential, self-limiting surface reactions. This makes it especially valuable for coating complex and internal surfaces such as heat exchanger tubes, blanket channels, manifolds and coolant-facing components where uniformity is essential.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {["Conformal coating on complex 3D surfaces", "Dense diffusion barrier against hydrogen isotopes", "Low-temperature processing compatible with steels", "Relevant for breeding blankets and primary circuits"].map((item) => (
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
                <h3 className="mt-4 text-4xl font-semibold text-white">Tritium barrier in fusion blankets</h3>
                <p className="mt-4 text-lg leading-8 text-slate-300">Conformal ceramic diffusion barrier for reducing tritium transport through structural materials.</p>
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
                <p className="mt-4 text-lg leading-8 text-slate-300">Dense protective ceramic architecture for steel cladding exposed to lead coolant and high-temperature corrosion.</p>
              </div>
            </div>
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-300/10 px-4 py-2 text-sm text-indigo-100">
                <Cpu className="h-4 w-4" /> Pulsed Laser Deposition
              </div>
              <h3 className="text-4xl font-semibold text-indigo-50 md:text-5xl">PLD for dense multilayer protection in fission environments.</h3>
              <p className="mt-6 leading-8 text-slate-300">
                PLD enables compact, adherent ceramic and ceramic-metal multilayers with strong control over composition and interfaces. For advanced fission systems, this supports protective coating architectures for fuel claddings and structural materials exposed to liquid metals, steam oxidation and severe thermal transients.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {["Dense ceramic multilayers", "Strong adhesion to metallic substrates", "Corrosion and mass-transfer mitigation", "Relevant for LFR and advanced cladding protection"].map((item) => (
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
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">A unified coating platform for fusion and advanced fission reactors.</h2>
            <p className="mt-6 leading-8 text-slate-300">AAdvanced ceramic coatings engineered for extreme fusion and advanced fission environments. Xeradia develops ALD and PLD barrier architectures for tritium retention, molten metal corrosion protection and high-temperature structural stability. The platform targets breeding blankets, advanced fuel claddings and liquid-metal reactor components exposed to severe thermal and chemical stresses. By combining conformal diffusion barriers with dense multilayer protection, Xeradia aims to enhance material durability, reactor safety and component lifetime in next-generation nuclear systems..</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {applications.map((item) => <Card key={item.title} className="group rounded-3xl border border-cyan-300/15 bg-slate-950/70 text-white transition hover:-translate-y-1 hover:border-cyan-200/40"><EnergyCard><CardContent className="p-7"><div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-100"><item.icon className="h-7 w-7" /></div><h3 className="text-2xl font-semibold">{item.title}</h3><p className="mt-4 leading-7 text-slate-300">{item.subtitle}</p></CardContent></EnergyCard></Card>)}
          </div>
        </div>
      </section>

      <section id="validation" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Validation</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Validated across fusion and advanced fission environments.</h2><p className="mt-6 leading-8 text-slate-300">The technology originates from research and validation campaigns across harsh nuclear environments, including fusion-relevant tritium systems and advanced fission materials testing. Coating architectures have been investigated under high-temperature exposure, corrosive liquid-metal conditions and long-term diffusion challenges representative of next-generation reactor operation. The platform builds on multidisciplinary expertise in thin-film deposition, nuclear materials and surface engineering, with a focus on translating laboratory-scale validation into future industrial nuclear applications.</p></div>
          <div className="grid gap-5 sm:grid-cols-2">{validation.map((item) => <Card key={item.value} className="rounded-3xl border border-cyan-300/15 bg-white/[0.04] text-white"><CardContent className="p-7"><div className="text-4xl font-semibold text-cyan-100">{item.value}</div><p className="mt-4 leading-7 text-slate-300">{item.label}</p></CardContent></Card>)}</div>
        </div>
      </section>

      <section id="vision" className="relative z-10 border-y border-cyan-300/10 bg-slate-900/40 px-6 py-24 backdrop-blur-sm lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"><div><p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Vision</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Building the material layer for the next nuclear era.</h2><p className="mt-6 leading-8 text-slate-300">Xeradia is currently at TRL 5–6, transitioning from laboratory-scale validation toward early industrial demonstration and reactor-relevant qualification. Current efforts focus on scaling deposition processes, validating long-term coating stability and demonstrating reproducibility on representative nuclear components and geometries. The company’s roadmap targets future integration with advanced fusion and fission supply chains through pilot-scale coating capability, industrial partnerships and reactor-oriented materials testing campaigns.</p></div><div className="space-y-4">{visionPoints.map((step, index) => <motion.div key={step} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-3xl border border-cyan-300/15 bg-slate-950/70 p-5"><div className="flex gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-sm text-cyan-100">0{index + 1}</span><p className="text-slate-200">{step}</p></div></motion.div>)}</div></div>
      </section>

      <section id="team" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Team</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">A multidisciplinary team bridging materials science and nuclear engineering.</h2><p className="mt-6 leading-8 text-slate-300">A multidisciplinary team combining expertise in thin-film deposition, nuclear materials science and advanced surface engineering. Xeradia brings together competencies in ALD and PLD technologies, high-temperature materials behaviour, corrosion science and reactor-oriented coating development. The team operates at the intersection of research and industrial innovation, with the objective of translating advanced coating science into scalable solutions for next-generation fusion and fission energy systems.</p></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{["Thin Film & ALD", "Nuclear Materials", "PLD & Surface Engineering"].map((role) => <Card key={role} className="overflow-hidden rounded-3xl border border-cyan-300/15 bg-white/[0.04] text-white"><div className="aspect-[4/5] bg-gradient-to-br from-cyan-300/10 via-slate-800 to-indigo-500/10" /><CardContent className="p-6"><h3 className="text-2xl font-semibold">Team Member</h3><p className="mt-2 text-cyan-200">{role}</p><p className="mt-4 leading-7 text-slate-300">Short bio placeholder.</p></CardContent></Card>)}</div></div>
      </section>

      
      <section id="contact" className="relative z-10 border-t border-cyan-300/10 bg-slate-950/90 px-6 py-24 backdrop-blur-sm lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-ls uppercase tracking-[0.35em] text-cyan-200">Contact</p><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Let’s build the next generation of nuclear materials together.</h2><p className="mt-6 leading-8 text-slate-300">As the world enters a new era of nuclear energy development, advanced materials are becoming a critical enabling technology for both fusion and next-generation fission systems. Xeradia aims to contribute to this nuclear renaissance through high-performance nanoceramic coatings designed for extreme reactor environments. We welcome reactor developers, industrial partners, research institutions and investors interested in accelerating the deployment of safer, more durable and more efficient nuclear technologies.</p></div><Card className="rounded-3xl border border-cyan-300/15 bg-white/[0.04] text-white"><CardContent className="p-7"><form className="grid gap-4"><input className="rounded-2xl border border-cyan-300/15 bg-slate-950/70 px-5 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-200" placeholder="Name and company" /><input className="rounded-2xl border border-cyan-300/15 bg-slate-950/70 px-5 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-200" placeholder="Email" /><textarea className="min-h-36 rounded-2xl border border-cyan-300/15 bg-slate-950/70 px-5 py-4 outline-none placeholder:text-slate-500 focus:border-cyan-200" placeholder="Tell us about your project, collaboration or investment interest" /><Button className="rounded-full bg-cyan-300 px-7 py-4 text-base text-slate-950 hover:bg-cyan-200"><Mail className="mr-2 inline h-4 w-4" /> Send request</Button></form></CardContent></Card></div>
      </section>
      <footer className="border-t border-cyan-300/10 py-6 text-center text-ls tracking-wide text-slate-500">
        xeradia s.r.l. - Sede legale: Via I. Rosellini 1, 20140 Milano (Italy) – P. IVA 17700991007
      </footer>
    </main>
  );
}
