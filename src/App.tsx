import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Shield, Cpu, Menu, X, CheckCircle, Lock, Server, ChevronDown, Users, BookOpen, Building, ArrowUp, TrendingUp, Layers } from 'lucide-react';

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#architecture', label: 'The Product' },
    { href: '#in-practice', label: 'In Practice' },
    { href: '#references', label: 'References' },
    { href: '#academic', label: 'Foundation' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <button
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
          className="font-mono font-semibold text-xl tracking-tighter text-slate-900 hover:opacity-80 transition-opacity"
        >
          svrn_alpha
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className="bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <button className="lg:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-lg"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-slate-900 text-white px-5 py-3 text-sm font-medium text-center mt-4 flex items-center justify-center gap-2">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:items-start">
        <motion.div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600 mb-8"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            svrnAlphaOS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-[1.1] text-slate-900 mb-8 tracking-tight"
          >
            We ship the sovereign <span className="italic text-slate-600">AI Operating System</span> for Institutional Finance.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.2 }}
          >
            <p className="text-lg text-slate-600 mb-4 max-w-xl leading-relaxed">
              The agentic operating system for institutional finance. Highly autonomous AI agents that execute real work — researching, modeling, reporting, filing, distributing — across your entire institution. Not a chatbot. Not a copilot. An operating system.
            </p>
            <p className="text-base text-slate-800 mb-8 max-w-xl leading-relaxed">
              Your agents run 24/7. They hold institutional context. They operate within your rules. They deliver finished outcomes. And when a decision requires human judgment, the governance engine escalates — because autonomy is the default, not the exception.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {['Context-aware', 'Skills as plugins', 'Sovereign by architecture', 'Zero vendor lock-in', 'MCP-native', 'EU AI Act ready'].map(tag => (
                <span key={tag} className="font-mono text-[11px] px-3 py-1.5 border border-slate-200 rounded-[3px] text-slate-600 tracking-[0.04em] bg-white">{tag}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-slate-900 text-white px-6 py-3.5 text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 w-fit">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3, delay: 0.4 }}
          className="relative lg:mt-[60px]"
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="absolute inset-0 bg-slate-900 transform translate-x-3 translate-y-3 -z-10"></div>
            <div className="bg-white border border-slate-200 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-8 relative z-10">
                <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">The Inversion</span>
                <span className="font-mono text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-300 px-2 py-1 tracking-wider">svrnAlphaOS</span>
              </div>

              <div className="space-y-8 relative z-10">
                {/* Legacy Model */}
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-3">Legacy</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-100 border border-slate-200 px-4 py-3 text-center">
                      <span className="font-mono text-xs text-slate-500 block mb-0.5">Human</span>
                      <span className="text-sm font-semibold text-slate-700">executes</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                    <div className="flex-1 bg-slate-100 border border-slate-200 px-4 py-3 text-center">
                      <span className="font-mono text-xs text-slate-500 block mb-0.5">Software</span>
                      <span className="text-sm font-semibold text-slate-700">captures</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                    <div className="flex-1 bg-slate-100 border border-slate-200 px-4 py-3 text-center">
                      <span className="font-mono text-xs text-slate-400 block mb-0.5">Output</span>
                      <span className="text-sm text-slate-500">recorded</span>
                    </div>
                  </div>
                </div>

                {/* Inversion Arrow */}
                <div className="flex items-center justify-center gap-3">
                  <div className="flex-1 h-px bg-slate-200"></div>
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 h-px bg-slate-200"></div>
                </div>

                {/* svrnAlphaOS Model */}
                <div>
                  <span className="font-mono text-[10px] text-slate-900 tracking-widest block mb-3 font-bold">svrnAlphaOS</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-900 border border-slate-900 px-4 py-3 text-center">
                      <span className="font-mono text-xs text-slate-400 block mb-0.5">Agent</span>
                      <span className="text-sm font-semibold text-white">executes</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-900 shrink-0" />
                    <div className="flex-1 bg-white border-2 border-slate-900 px-4 py-3 text-center">
                      <span className="font-mono text-xs text-slate-500 block mb-0.5">Human</span>
                      <span className="text-sm font-semibold text-slate-900">judges</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-900 shrink-0" />
                    <div className="flex-1 bg-slate-900 border border-slate-900 px-4 py-3 text-center">
                      <span className="font-mono text-xs text-slate-400 block mb-0.5">Outcome</span>
                      <span className="text-sm font-semibold text-white">delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// WHY — THE PROBLEM (merged Thesis + Paradox)
// ─────────────────────────────────────────────
const ProblemSection = () => {
  const [activeTab, setActiveTab] = useState<Record<number, 'problem' | 'solution'>>({ 0: 'problem', 1: 'problem', 2: 'problem' });

  const cards = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'The Tooling Fallacy',
      problem: 'Institutions bolt AI copilots onto Bloomberg, add chatbots to their CRM, embed LLMs into existing compliance workflows. They treat AI as a feature upgrade for existing software. The result: marginal efficiency gains that never justify the investment.',
      solution: 'The operating system replaces the patchwork. Agents don\'t assist your tools — they execute the workflows those tools were built for. Research production, client reporting, regulatory filing: end-to-end, not feature-by-feature.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Unstructured Workflows',
      problem: 'Layering AI onto legacy processes creates a \'jet engine on a bicycle\' scenario. If your research team still produces reports on a monthly cycle, your compliance team still files quarterly, and your client team still assembles RFPs manually — you\'re competing against firms running daily, compounding autonomous cycles.',
      solution: 'Redesign workflows around agent capabilities. Move from monthly reporting to continuous production. From quarterly compliance to real-time monitoring. From manual RFPs to autonomous assembly. Humans set direction, agents compound results.',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'The Scale Trap',
      problem: 'Committing your institutional infrastructure to a single AI provider — whether OpenAI, Google, or Anthropic — sacrifices sovereign control. When regulation shifts, when a provider changes pricing, when geopolitics restricts data flows: you are locked in.',
      solution: 'Build sovereign, model-agnostic architecture. Route between providers without code changes. Your data stays in your jurisdiction. Your competitive advantage is architectural — not a vendor relationship.',
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Thesis */}
        <div className="max-w-4xl mb-16">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-6 block">WHY</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8">
            Institutional finance software is dead.
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            It was built for a world where humans did the work and software organized it. The terminal organizes data. The model organizes calculations. The CRM organizes relationships. The compliance tool organizes rules. At every step, a human executes — and the software captures what happened.
          </p>
          <p className="text-xl text-slate-200 leading-relaxed font-medium">
            svrnAlphaOS inverts this. The system holds the context. The agents do the work. Your team makes the decisions that matter.
          </p>
        </div>

        {/* The Paradox — integrated as evidence */}
        <div className="border-t border-slate-700 pt-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 mb-4">
            <span className="font-serif text-5xl md:text-6xl text-white font-bold">70%</span>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              of institutional AI initiatives fail. Not because of the technology — because institutions ask the wrong question. They ask "How do we integrate AI into our product?" instead of "How do we integrate AI agents into our org chart?"
            </p>
          </div>
        </div>

        {/* Before / After cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-700 mb-16">
          {[
            {
              icon: <Users className="w-5 h-5" />,
              label: 'Research & Analysis',
              before: 'An analyst spends 65% of their day on data extraction, model population, and formatting.',
              after: 'Agents handle extraction, population, and formatting autonomously. The analyst architects and judges.',
            },
            {
              icon: <Building className="w-5 h-5" />,
              label: 'Client & Distribution',
              before: 'Client reports, RFP responses, and performance attributions are assembled manually every cycle.',
              after: 'The system knows the client, the portfolio, the template, and the compliance rules. It produces the report.',
            },
            {
              icon: <Shield className="w-5 h-5" />,
              label: 'Compliance & Reporting',
              before: 'Compliance teams manually cross-reference trades, flag exceptions, and file regulatory reports.',
              after: 'Agents monitor continuously, flag in real time, and prepare filings. Compliance reviews the edge cases.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-900 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-slate-800 flex items-center justify-center text-slate-400">
                  {item.icon}
                </div>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">{item.label}</span>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-2">Before</span>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.before}</p>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <span className="font-mono text-[10px] text-[#0F6E56] uppercase tracking-widest block mb-2">After</span>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Three problem cards — on dark background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="border border-slate-700 bg-slate-800/50 p-8 flex flex-col">
              <div className="w-12 h-12 bg-slate-800 flex items-center justify-center text-slate-400 mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{card.title}</h3>
              <div className="flex gap-0 mb-6">
                <button
                  onClick={() => setActiveTab(prev => ({ ...prev, [i]: 'problem' }))}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-colors ${activeTab[i] === 'problem' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-slate-400 border-slate-600 hover:border-slate-500'}`}
                >
                  Problem
                </button>
                <button
                  onClick={() => setActiveTab(prev => ({ ...prev, [i]: 'solution' }))}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border border-l-0 transition-colors ${activeTab[i] === 'solution' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-slate-400 border-slate-600 hover:border-slate-500'}`}
                >
                  Solution
                </button>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed flex-1">
                {activeTab[i] === 'problem' ? card.problem : card.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// THE TRANSFORMATION — Three Pillars → Product (integrated)
// ─────────────────────────────────────────────
const TransformationSection = () => {
  return (
    <section id="architecture" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200">
      {/* Budget Inversion — the headline insight */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
        <div>
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-6 block">OUR APPROACH</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-[1.1] text-slate-900 mb-8">
            The Budget Inversion.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Banks typically allocate 90% of their AI transformation budget to technology and 10% to change management. This allocation is precisely backwards. The Three-Pillar Model corrects this inversion to an optimal 25/30/45 split (first year).
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-3">Industry Standard (70% Failure Rate)</span>
            <div className="flex h-14 overflow-hidden border border-slate-300">
              <div className="bg-slate-400 text-white text-xs font-mono flex items-center justify-center" style={{ width: '10%' }}>
                10%
              </div>
              <div className="bg-slate-700 text-white text-sm font-mono flex items-center justify-center flex-1">
                Technology (90%)
              </div>
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-3">The Three-Pillar Model (Optimal)</span>
            <div className="flex h-14 overflow-hidden border border-slate-300">
              <div className="bg-slate-300 text-slate-800 text-xs font-mono flex items-center justify-center" style={{ width: '25%' }}>
                Edu (25%)
              </div>
              <div className="bg-slate-500 text-white text-xs font-mono flex items-center justify-center" style={{ width: '30%' }}>
                Process (30%)
              </div>
              <div className="bg-slate-800 text-white text-xs font-mono flex items-center justify-center" style={{ width: '45%' }}>
                Tech (45%)
              </div>
            </div>
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mt-2 text-right">* First Year Allocation</span>
          </div>
        </div>
      </div>

      {/* Three Pillar Cards — Pillar III transitions into the product */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div className="border border-slate-200 p-8">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-3">Pillar I</span>
          <h4 className="text-xl font-serif text-slate-900 mb-1">Education</h4>
          <span className="text-sm font-mono text-slate-500 block mb-4">Strategic Fluency</span>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">Your team learns to think in feedback loops, not feature requests. From executing boilerplate to architecting autonomous workflows. The shift from operator to architect is the highest-leverage investment you can make.</p>
          <div className="pt-4 border-t border-slate-100">
            <span className="font-mono text-2xl font-semibold text-slate-900">25%</span>
            <span className="text-xs text-slate-400 ml-2">first-year allocation</span>
          </div>
        </div>
        <div className="border border-slate-200 p-8">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-3">Pillar II</span>
          <h4 className="text-xl font-serif text-slate-900 mb-1">Process</h4>
          <span className="text-sm font-mono text-slate-500 block mb-4">Roles & Workflows</span>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">Redesign the org chart around agent capabilities. Define which decisions require human judgment, which processes run autonomously, and where governance gates sit. The workflow is the product.</p>
          <div className="pt-4 border-t border-slate-100">
            <span className="font-mono text-2xl font-semibold text-slate-900">30%</span>
            <span className="text-xs text-slate-400 ml-2">first-year allocation</span>
          </div>
        </div>
        <div className="border-2 border-slate-900 p-8 bg-slate-50">
          <span className="font-mono text-xs text-slate-900 uppercase tracking-wider block mb-3">Pillar III</span>
          <h4 className="text-xl font-serif text-slate-900 mb-1">Technology</h4>
          <span className="text-sm font-mono text-slate-500 block mb-4">Sovereign Infrastructure</span>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">Model-agnostic, deployment-flexible, compliance-native. The platform layer that makes Education and Process compound. Technology is the enabler — not the starting point.</p>
          <div className="pt-4 border-t border-slate-300">
            <span className="font-mono text-2xl font-semibold text-slate-900">45%</span>
            <span className="text-xs text-slate-400 ml-2">first-year allocation</span>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-300">
            <p className="text-sm text-slate-900 font-medium italic">Here's what it looks like ↓</p>
          </div>
        </div>
      </div>

      {/* THE PRODUCT — flows from Pillar III */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">THE PRODUCT</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">You don't buy software.<br />We build your operating system.</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          svrnAlphaOS is three layers, deployed inside your sovereign infrastructure. Each layer has a distinct role. Together, they form your operating system — starting minimal and growing to fit your institution.
        </p>
      </div>

      {/* Architecture Diagram */}
      <div className="relative mb-24">
        {/* Customer Sovereign Infrastructure envelope */}
        <div className="border-2 border-dashed border-slate-300 rounded-2xl p-4 md:p-8 relative">
          <span className="absolute -top-3 left-6 bg-white px-3 font-mono text-[10px] text-slate-400 uppercase tracking-widest">Customer Sovereign Infrastructure</span>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-6">
            <div className="flex flex-col gap-3">

              {/* Layer 1: Collaboration Workspace */}
              <div className="rounded-xl p-6 md:p-8 bg-[#F3EFFA] border border-[#D4CCE8] relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold tracking-widest uppercase text-[#6B4FA0]">Collaboration workspace</div>
                  <span className="font-mono text-[9px] font-bold text-[#6B4FA0] uppercase tracking-wider bg-white/80 border border-[#D4CCE8] px-2.5 py-1 rounded-full">The Software</span>
                </div>
                <p className="text-sm text-slate-600 mb-5">Where humans and agents work together — not through prompts, but through a structured feedback loop. You set the intention. Agents surface their work for review. When an agent encounters a decision it can't make, it escalates. The human decides.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: 'Intent setting', desc: 'Direction, scope' },
                    { title: 'Review + release', desc: 'Approve, redirect' },
                    { title: 'Escalations', desc: 'Agent asks human' },
                  ].map(c => (
                    <div key={c.title} className="rounded-lg p-4 border bg-white/70 border-[#D4CCE8]">
                      <div className="text-sm font-bold mb-1 text-[#6B4FA0]">{c.title}</div>
                      <div className="text-xs text-slate-500">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bidirectional Arrow */}
              <div className="flex justify-center py-1 text-slate-300">
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                  <path d="M12 2v28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 6l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 26l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Layer 2: Platform Core */}
              <div className="rounded-xl p-6 md:p-8 bg-[#E1F5EE] border border-[#9FE1CB]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold tracking-widest uppercase text-[#0F6E56]">Platform core</div>
                  <span className="font-mono text-[9px] font-bold text-[#0F6E56] uppercase tracking-wider bg-white/80 border border-[#9FE1CB] px-2.5 py-1 rounded-full">The Moat</span>
                </div>
                <p className="text-sm text-slate-600 mb-5">The moat. Sits between every human decision and every agent action. Nothing bypasses it. Every action is either permitted, escalated, or blocked before it executes.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                  {[
                    { title: 'Orchestration', desc: 'Agent routing' },
                    { title: 'Compliance gate', desc: 'MAR, MiFID II' },
                    { title: 'Audit trail', desc: 'Full provenance' },
                  ].map(c => (
                    <div key={c.title} className="rounded-lg p-4 border bg-white/70 border-[#9FE1CB]">
                      <div className="text-sm font-bold mb-1 text-[#0F6E56]">{c.title}</div>
                      <div className="text-xs text-slate-500">{c.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg p-4 border bg-[#E1F5EE] border-[#9FE1CB]">
                  <div className="text-xs font-bold mb-2 text-[#0F6E56]">Institutional context — theses, rules, templates, memory</div>
                  <p className="text-xs text-slate-500">The layer that compounds. Every workflow adds to institutional memory. When a senior analyst leaves, their judgment stays. Encoded here.</p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-1 text-slate-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4v16m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>

              {/* Layer 3: Agent Execution */}
              <div className="rounded-xl p-6 md:p-8 bg-[#FAECE7] border border-[#F5C4B3]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold tracking-widest uppercase text-[#993C1D]">Agent execution</div>
                  <span className="font-mono text-[9px] font-bold text-[#993C1D] uppercase tracking-wider bg-white/80 border border-[#F5C4B3] px-2.5 py-1 rounded-full">The Sovereignty</span>
                </div>
                <p className="text-sm text-slate-600 mb-5">Each agent runs in an isolated environment inside your infrastructure. Agents execute autonomously within the boundaries set by the platform core. They can't exceed their compliance scope.</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { title: 'Research Agent' },
                    { title: 'Compliance Agent' },
                    { title: 'Client Report Agent' },
                    { title: 'Agent N — Custom' },
                  ].map(c => (
                    <div key={c.title} className="rounded-lg p-3 border bg-white/70 border-[#F5C4B3] text-center">
                      <div className="text-xs font-bold text-[#993C1D]">{c.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LLM Tokens Bubble + Arrow */}
              <div className="flex items-center justify-center gap-4 py-2">
                <div className="flex-1 h-px bg-slate-200"></div>
                <div className="inline-flex items-center gap-2 border border-[#BA7517] rounded-full px-4 py-2 bg-[#FAEEDA]">
                  <span className="font-mono text-[10px] font-bold text-[#854F0B]">LLM tokens</span>
                  <span className="text-[10px] text-[#854F0B] opacity-70">Pluggable · Any provider</span>
                </div>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-1 text-slate-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4v16m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>

              {/* Layer 4: MCP Connectors */}
              <div className="rounded-xl p-5 md:p-6 bg-[#F5F4F0] border border-dashed border-slate-300">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">MCP connectors</div>
                <div className="flex flex-wrap gap-2">
                  {['Bloomberg', 'SAP', 'Simcorp', 'Salesforce', '…'].map(t => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded border bg-white border-slate-200 text-slate-600 font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Annotations */}
            <div className="hidden lg:flex flex-col justify-between py-4">
              <div className="text-right">
                <span className="font-mono text-[10px] font-bold text-[#6B4FA0] uppercase tracking-wider block">The Software</span>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Self-developed. Where humans and agents meet.</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] font-bold text-[#0F6E56] uppercase tracking-wider block">The Moat</span>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Orchestration, compliance, audit, institutional context. Compounds daily.</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] font-bold text-[#993C1D] uppercase tracking-wider block">The Sovereignty</span>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Isolated execution. Your infra, your models, your data. You decide.</p>
              </div>
              <div className="text-right mt-4">
                <div className="inline-block border border-[#BA7517] rounded-full px-4 py-2 bg-[#FAEEDA]">
                  <span className="font-mono text-[10px] font-bold text-[#854F0B] block">LLM tokens</span>
                  <span className="text-[10px] text-[#854F0B]">Pluggable</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Any provider</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organism Model — Deployment Timeline */}
      <div id="in-practice" className="border-t border-slate-200 pt-20 mb-24">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">THE ORGANISM MODEL</span>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Deployed in days, not months.</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            The system doesn't scale by adding seats. It scales by growing capabilities — new agents, new skills, new connectors — each one governed by the same platform core, each one compounding institutional knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              time: 'Week 1',
              title: 'First deployment',
              desc: 'One team, one workflow, producing real outcomes inside the compliance boundary.',
            },
            {
              time: 'Month 1',
              title: 'First expansion',
              desc: 'Additional agents, connected to your first external systems via MCP.',
            },
            {
              time: 'Month 6',
              title: 'Continuous cycles',
              desc: 'Autonomous cycles across research, reporting, and compliance. Daily compounding.',
            },
            {
              time: 'Year 1',
              title: 'Full adaptation',
              desc: 'A fully adapted operating system shaped by your institution, not by a product roadmap.',
            },
          ].map(step => (
            <div key={step.time} className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-3">{step.time}</span>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Configurations */}
      <div className="border-t border-slate-200 pt-20">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">IN PRACTICE</span>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Same platform. Your business model.</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every deployment looks different because every institution is different. The platform core and sovereignty layer are identical. Everything above them is configured to your workflow, your templates, your compliance rules.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Sell-side boutique',
              sub: 'Research + origination',
              items: [
                { color: '#0F6E56', label: 'Research production' },
                { color: '#0F6E56', label: 'Financial modeling' },
                { color: '#0F6E56', label: 'Screening & signals' },
                { color: '#993C1D', label: 'MAR & insider' },
                { color: '#6B7280', label: 'Doc production' },
              ],
            },
            {
              title: 'Asset manager',
              sub: 'Portfolio + distribution',
              items: [
                { color: '#534AB7', label: 'Portfolio construction' },
                { color: '#534AB7', label: 'Risk monitoring' },
                { color: '#993556', label: 'Client reporting' },
                { color: '#993556', label: 'RFP & sales' },
                { color: '#993C1D', label: 'ESG & SFDR' },
              ],
            },
            {
              title: 'Family office',
              sub: 'Lean team, broad scope',
              items: [
                { color: '#534AB7', label: 'Portfolio construction' },
                { color: '#534AB7', label: 'Risk monitoring' },
                { color: '#993556', label: 'Client reporting' },
                { color: '#993556', label: 'CRM intelligence' },
                { color: '#6B7280', label: 'Data extraction' },
              ],
            },
            {
              title: 'Full-service bank',
              sub: 'Full stack + custom',
              items: [
                { color: '#0F6E56', label: 'All research agents' },
                { color: '#534AB7', label: 'All portfolio agents' },
                { color: '#993556', label: 'All client agents' },
                { color: '#993C1D', label: 'All compliance agents' },
                { color: '#185FA5', label: 'Custom agent development' },
              ],
            },
          ].map(cfg => (
            <div key={cfg.title} className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:border-slate-300 transition-colors">
              <div className="text-base md:text-lg font-semibold mb-1 text-slate-900">{cfg.title}</div>
              <div className="text-xs md:text-sm text-slate-500 mb-6 font-mono">{cfg.sub}</div>
              <ul className="space-y-0">
                {cfg.items.map(item => (
                  <li key={item.label} className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
                    {item.label}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100">+ custom skills for their workflow</div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-8 mt-10 text-center shadow-sm">
          <p className="text-slate-700">These are examples, not a product list. Your deployment will look different — <em className="text-[#0F6E56] not-italic font-medium">because your institution is different.</em></p>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// REFERENCES
// ─────────────────────────────────────────────
const ReferenceCaseSection = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200" id="references">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">REFERENCES</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Proven in Production</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            svrnAlphaOS is deployed in highly regulated institutional environments. The results are measurable, auditable, and repeatable.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider mb-6 block">CLIENT & BACKED BY</span>
              <img
                src="https://www.mp-capitalmarkets.com/fileadmin/resourcen/mpcm/MPCM_Logo.svg"
                alt="MP Capital Markets"
                className="h-12 w-auto mb-8"
                referrerPolicy="no-referrer"
              />
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                The svrnAlphaOS framework was developed and validated in close collaboration with <a href="https://www.mp-capitalmarkets.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-4 transition-colors font-medium">MP Capital Markets</a>.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                By deploying the Context → Rules → Agents → Outcomes framework across their research and client workflows, they have successfully transitioned from manual execution to autonomous cycles — with measurable results.
              </p>

              <div className="bg-white border border-slate-200 p-6 shadow-sm">
                <h4 className="font-mono text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-widest border-b border-slate-100 pb-3">Measured</h4>
                <div className="space-y-0">
                  {[
                    { value: '~80%', label: 'Reduction in Boilerplate Execution' },
                    { value: '24/7', label: 'Autonomous Agent Cycles' },
                    { value: 'Days', label: 'From First Idea to Productive Agent' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-50 last:border-0 last:pb-0 first:pt-0">
                      <div className="w-24 shrink-0 font-serif text-lg text-slate-900 tracking-tight">{item.value}</div>
                      <div className="text-xs font-medium text-slate-600 leading-snug">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <h4 className="font-mono text-[10px] font-bold text-slate-500 mb-3 uppercase tracking-widest">By Design</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Sovereign architecture', 'Zero vendor lock-in', 'EU AI Act compliant'].map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 border border-slate-200 text-slate-600 font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-sm font-semibold text-slate-900 mb-6 uppercase">The Deployment Model</h4>
              <div className="space-y-8">
                {[
                  {
                    phase: '1',
                    title: 'CONTEXT ARCHITECTURE',
                    desc: 'Structured workshops to map and encode institutional context — investment theses, compliance rules, client profiles, styleguides — into the platform.',
                  },
                  {
                    phase: '2',
                    title: 'RULES & GOVERNANCE',
                    desc: 'Workflow redesign establishing which agent actions are fully autonomous, which require a compliance gate, and which require human release.',
                  },
                  {
                    phase: '3',
                    title: 'AGENTS & OUTCOMES',
                    desc: 'Agentic infrastructure deployed in sovereign configuration. Agents go live on real workflows. Outcomes are measured, audited, and compounded.',
                  },
                ].map(p => (
                  <div key={p.phase} className="flex gap-4">
                    <div className="w-8 h-8 shrink-0 bg-slate-900 text-white flex items-center justify-center font-mono text-xs">{p.phase}</div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-1">{p.title}</h5>
                      <p className="text-sm text-slate-600">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// ACADEMIC FOUNDATION
// ─────────────────────────────────────────────
const AcademicSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const principles = [
    {
      id: '01',
      title: 'Context Before Commands',
      description: 'An agent without institutional context is a very fast intern on their first day. The investment thesis, the client relationship, the compliance framework, the styleguide — all of this must be encoded before any agent can act meaningfully. Context is the foundation.',
    },
    {
      id: '02',
      title: 'Sovereign Means You Decide',
      description: 'Sovereign does not mean EU-hosted. It means model-agnostic per use case — run Claude, Mistral, Llama, or a proprietary model. It means deployment-agnostic — your infrastructure, any cloud, hybrid. It means you change a configuration, not a vendor.',
    },
    {
      id: '03',
      title: 'Autonomy by Default. Escalation by Design.',
      description: 'Autonomy is the goal, not a risk to manage. The governance engine defines precisely when human judgment is required — and when it is not. Requiring human review at every step defeats the purpose. HITL is an architectural decision encoded in the Rules layer, not a safety net sprayed everywhere.',
    },
    {
      id: '04',
      title: 'Evidence Over Claims',
      description: 'Capacity flip. Measurable outcomes. If we cannot measure it, we do not claim it. Every deployment produces an audit trail — not just for compliance, but for continuous improvement.',
    },
    {
      id: '05',
      title: 'Compliance is Architecture, Not a Feature',
      description: 'EU AI Act, MiFID II, MAR, SFDR — built directly into the platform core. Not a compliance module you add later. Not a toggle. The system cannot route around governance. Every agent action passes through the compliance gate.',
    },
  ];

  return (
    <section id="academic" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">ACADEMIC FOUNDATION</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Founded on Academic Rigour.<br />Engineered for Reality.</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          After 10+ years of published research on digital transformation, Prof. Dr. Tobias Blask founded SVRN ALPHA to bridge the gap between academic theory and institutional execution.
        </p>
      </div>

      <div className="max-w-3xl border-t border-slate-200">
        {principles.map((principle, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={principle.id} className="border-b border-slate-200">
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <div className="flex items-center gap-6">
                  <span className={`font-mono text-xl transition-colors ${isExpanded ? 'text-blue-600' : 'text-slate-300 group-hover:text-slate-400'}`}>
                    {principle.id}
                  </span>
                  <h3 className={`text-xl font-serif transition-colors ${isExpanded ? 'text-blue-600' : 'text-slate-900 group-hover:text-slate-600'}`}>
                    {principle.title}
                  </h3>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600 transition-colors"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-[3.25rem] pr-4">
                      <p className="text-slate-600 leading-relaxed">{principle.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// FOUNDER
// ─────────────────────────────────────────────
const FounderSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
            <img
              src="/images/tobias-blask.jpg"
              alt="Prof. Dr. Tobias Blask"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-slate-900"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-slate-900"></div>
        </div>

        <div className="lg:col-span-7 lg:pl-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">LEADERSHIP</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Prof. Dr. Tobias Blask</h2>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              With over a decade of research on digital transformation and AI integration, Prof. Dr. Tobias Blask bridges the critical gap between academic theory and institutional execution.
            </p>
            <p>
              As the founder of SVRN ALPHA, he developed the Context → Rules → Agents → Outcomes framework to ensure that AI deployments across the institutional finance vertical are not just technologically advanced, but structurally sound, compliant, and sovereign.
            </p>
            <p>
              His work focuses on the intersection of human expertise and machine intelligence — where autonomy is the goal, and governance is what makes it possible.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <blockquote className="font-serif text-2xl text-slate-900 italic leading-snug mb-6">
              "Intelligence can be outsourced. Judgement cannot. Sovereign AI is the architecture that protects and amplifies institutional judgement."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-slate-900"></div>
              <span className="font-mono text-xs text-slate-900 uppercase tracking-wider font-semibold">The SVRN Mandate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Your institution.<br /><span className="italic text-slate-600">Built for what comes next.</span></h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10">
            Whether you are a sell-side boutique, an asset manager, a family office, or a full-service bank — if your institution runs on institutional finance workflows, we can deploy svrnAlphaOS for your specific model.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-full">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Secure & Confidential</h4>
                <p className="text-sm text-slate-500">All engagements are strictly confidential.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-full">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Institutional Grade</h4>
                <p className="text-sm text-slate-500">Built for regulated financial environments.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-serif text-white mb-2">Schedule a Consultation</h3>
            <p className="text-slate-400 mb-8 text-sm">Fill out the form below and our team will get back to you promptly.</p>

            {status === 'success' ? (
              <div className="bg-emerald-900/30 border border-emerald-800 text-emerald-300 p-6 rounded-lg flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <div>
                  <h4 className="font-medium text-lg text-emerald-100">Message Sent Successfully</h4>
                  <p className="text-sm mt-1">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="bg-red-900/30 border border-red-800 text-red-300 p-4 text-sm">{errorMessage}</div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Name</label>
                    <input type="text" id="name" name="name" required disabled={status === 'loading'} value={formData.name} onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-none px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors disabled:opacity-50"
                      placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</label>
                    <input type="email" id="email" name="email" required disabled={status === 'loading'} value={formData.email} onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-none px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors disabled:opacity-50"
                      placeholder="jane@institution.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Subject</label>
                  <input type="text" id="subject" name="subject" required disabled={status === 'loading'} value={formData.subject} onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-none px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors disabled:opacity-50"
                    placeholder="Inquiry regarding svrnAlphaOS" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Message</label>
                  <textarea id="message" name="message" required disabled={status === 'loading'} rows={4} value={formData.message} onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-none px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none disabled:opacity-50"
                    placeholder="How can we help your institution?"></textarea>
                </div>
                <button type="submit" disabled={status === 'loading'}
                  className="w-full bg-white text-slate-900 px-8 py-4 text-sm font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Sending...' : (<>Send Message <ArrowRight className="w-4 h-4" /></>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <span className="font-mono font-semibold text-xl tracking-tighter text-slate-900 mb-4 block">svrn_alpha</span>
          <p className="text-sm text-slate-600 max-w-sm">
            The agentic operating system for institutional finance. Context. Rules. Agents. Outcomes.
          </p>
        </div>
        <div>
          <h4 className="font-mono text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">PLATFORM</h4>
          <ul className="space-y-2">
            <li><a href="#framework" className="text-sm text-slate-600 hover:text-slate-900">Framework</a></li>
            <li><a href="#architecture" className="text-sm text-slate-600 hover:text-slate-900">Architecture</a></li>
            <li><a href="#in-practice" className="text-sm text-slate-600 hover:text-slate-900">In Practice</a></li>
            <li><a href="#references" className="text-sm text-slate-600 hover:text-slate-900">References</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">CONTACT & IMPRESSUM</h4>
          <address className="not-italic text-sm text-slate-600 space-y-1">
            <p>svrn alpha GmbH</p>
            <p>Palmaille 71</p>
            <p>22767 Hamburg</p>
            <p className="pt-2">Tel.: +49 40 380 22-1000</p>
            <p>hello@svrn-alpha.com</p>
            <p className="pt-2">Geschäftsführung:</p>
            <p>Thorsten Rehmeyer</p>
          </address>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500">© 2026 svrn alpha GmbH. All rights reserved.</p>
        <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Hamburg & Frankfurt</p>
      </div>
    </footer>
  );
};

// ─────────────────────────────────────────────
// SCROLL TO TOP
// ─────────────────────────────────────────────
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────
function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <TransformationSection />
        <ReferenceCaseSection />
        <AcademicSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
