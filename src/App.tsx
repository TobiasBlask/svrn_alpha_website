import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Shield, Cpu, Menu, X, CheckCircle, Lock, Server, ChevronDown, Users, BookOpen, Building, ArrowUp } from 'lucide-react';

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
    { href: '#framework', label: 'Platform' },
    { href: '#architecture', label: 'Architecture' },
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
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                  <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">Validated Results</span>
                </div>
                <span className="font-mono text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-300 px-2 py-1 uppercase tracking-wider">Production Ready</span>
              </div>
              <div className="space-y-0 relative z-10">
                {[
                  { value: '78%', label: 'Reduction in Boilerplate Execution' },
                  { value: '100%', label: 'Sovereign Architecture' },
                  { value: 'Measurable', label: 'Outcome Improvement' },
                  { value: 'Zero', label: 'Vendor Lock-in' },
                  { value: 'Full', label: 'EU Compliance (AI Act, GDPR)' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0 last:pb-0 first:pt-0">
                    <div className="w-32 shrink-0 font-serif text-xl sm:text-2xl text-slate-900 tracking-tight">{item.value}</div>
                    <div className="text-sm font-medium text-slate-600 leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// INVERSION — THE THESIS
// ─────────────────────────────────────────────
const InversionSection = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-20">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-6 block">THE THESIS</span>
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

        <div className="border-t border-slate-700 pt-16 mb-16">
          <p className="text-2xl md:text-3xl font-serif text-slate-200 leading-snug max-w-3xl italic">
            "Your team's expertise is your edge — not the hours they spend formatting reports and cross-referencing data. svrnAlphaOS gives that time back."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-700">
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
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// FRAMEWORK — CONTEXT → RULES → AGENTS → OUTCOMES
// ─────────────────────────────────────────────
const FrameworkSection = () => {
  const steps = [
    {
      id: '01',
      label: 'Context',
      title: 'The system holds everything your institution knows.',
      body: 'Investment theses. Portfolio positions. Client relationships. Compliance frameworks. Historical decisions. Styleguides. Approval chains. Every piece of institutional knowledge the agents need to act — without asking.',
      callout: 'When a senior analyst leaves, their judgment used to leave with them. With svrnAlphaOS, their knowledge becomes a skill. It stays. It compounds.',
      color: '#185FA5',
      bg: '#E6F1FB',
      border: '#B5D4F4',
      textDark: '#0C447C',
      examples: ['Investment theses', 'Portfolio data', 'Client history', 'Compliance rules', 'Templates & styleguides', 'Approval chains'],
    },
    {
      id: '02',
      label: 'Rules',
      title: 'Governance that enables autonomy. Not restricts it.',
      body: 'Compliance requirements, risk limits, MAR obligations, SFDR rules, HITL triggers — all encoded into the platform core. Agents know what they can do, what requires escalation, and what is never permitted. Rules are architecture, not a feature toggle.',
      callout: 'The governance engine decides when your team needs to be in the loop. Not you. Not the agent. The rules.',
      color: '#D85A30',
      bg: '#FAECE7',
      border: '#F5C4B3',
      textDark: '#712B13',
      examples: ['EU AI Act (High-Risk)', 'MiFID II', 'MAR & insider', 'SFDR / ESG mandates', 'Risk limits', 'Custom approval chains'],
    },
    {
      id: '03',
      label: 'Agents',
      title: 'Autonomous execution. Proactive. Self-extending.',
      body: 'Agents run 24/7 — not when prompted. They monitor, prepare, produce, and escalate. They discover and use skills autonomously. When they need a capability they don\'t have, they build it. They get better the longer they work with your institution.',
      callout: 'If a human must review every step, you have built a very expensive autocomplete. Autonomy is the default. Escalation is the exception.',
      color: '#0F6E56',
      bg: '#E1F5EE',
      border: '#9FE1CB',
      textDark: '#085041',
      examples: ['Run 24/7 & proactively', 'Discover skills', 'Write new skills', 'Persistent memory', 'Multi-agent routing', 'Escalate when required'],
    },
    {
      id: '04',
      label: 'Outcomes',
      title: 'Finished work. Not tool access.',
      body: 'The client report doesn\'t get produced because someone writes a prompt. It gets produced because the system knows it\'s end of month, knows which funds the client holds, knows their preferred attribution format, and produces the report autonomously. The portfolio manager reviews and releases.',
      callout: 'Revenue model: outcome-based. Not seats. Not platform licenses. Your ESG reporting runs. Your client reports are produced. Your RFPs are answered.',
      color: '#534AB7',
      bg: '#EEEDFB',
      border: '#C5C2F0',
      textDark: '#3C3489',
      examples: ['Research reports', 'Client reports', 'Compliance filings', 'RFP responses', 'Risk alerts', 'Reg. filings'],
    },
  ];

  return (
    <section id="framework" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">THE FRAMEWORK</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Context. Rules. Agents. Outcomes.</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Four layers. Every deployment across every client type runs on this architecture. The platform core and sovereignty layer are identical for all. Everything else is configured to your institution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-8 border rounded-xl"
            style={{ backgroundColor: step.bg, borderColor: step.border }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: step.color }}>{step.id}</span>
              <span className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: step.color }}>{step.label}</span>
            </div>
            <h3 className="text-xl font-serif text-slate-900 mb-4">{step.title}</h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-6">{step.body}</p>
            <div className="p-4 bg-white/60 rounded-lg mb-6">
              <p className="text-sm leading-relaxed italic" style={{ color: step.textDark }}>{step.callout}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {step.examples.map(e => (
                <span key={e} className="text-xs px-2.5 py-1 rounded border font-medium bg-white/50" style={{ borderColor: step.border, color: step.textDark }}>{e}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Capacity Flip Table */}
      <div className="border-t border-slate-200 pt-20">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">IN NUMBERS</span>
          <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">The Capacity Flip</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Layering AI onto legacy processes creates a 'jet engine on a bicycle' effect. svrnAlphaOS redesigns the workflow from first principles — inverting where institutional talent spends its time.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-5 px-6 font-mono text-[10px] text-slate-500 uppercase tracking-widest w-1/4">Task Category</th>
                <th className="py-5 px-6 font-mono text-[10px] text-slate-500 uppercase tracking-widest w-1/6">Before</th>
                <th className="py-5 px-6 font-mono text-[10px] text-slate-900 uppercase tracking-widest w-1/6 bg-slate-100">After</th>
                <th className="py-5 px-6 font-mono text-[10px] text-slate-500 uppercase tracking-widest">Agent Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { task: 'Data extraction & formatting', before: '~40%', after: '~5%', agent: 'Fully autonomous' },
                { task: 'Model population & cross-referencing', before: '~25%', after: '~5%', agent: 'Fully autonomous with validation gate' },
                { task: 'Report production & filing', before: '~20%', after: '~5%', agent: 'Autonomous, human releases' },
                { task: 'Strategic analysis & judgment', before: '~15%', after: '~85%', agent: 'Human-led', highlight: true },
              ].map((row, i) => (
                <tr key={i} className={`hover:bg-slate-50 transition-colors ${row.highlight ? 'border-t-2 border-slate-300' : ''}`}>
                  <td className={`py-5 px-6 text-sm ${row.highlight ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>{row.task}</td>
                  <td className="py-5 px-6 font-mono text-sm text-slate-400">{row.before}</td>
                  <td className={`py-5 px-6 font-mono text-sm bg-slate-50 ${row.highlight ? 'text-lg text-slate-900 font-bold' : 'text-slate-900'}`}>{row.after}</td>
                  <td className={`py-5 px-6 text-sm ${row.highlight ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>{row.agent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// ARCHITECTURE — PLATFORM STACK
// ─────────────────────────────────────────────
const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">ARCHITECTURE</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Platform stack</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Your existing systems at the base. Our platform core in the center. Your agents, skills, and connectors on top. Every action passes through governance. Every dependency is replaceable.
        </p>
      </div>

      <div className="flex flex-col gap-3 max-w-5xl">
        {/* Layer 1: Interfaces */}
        <div className="rounded-xl p-6 md:p-8 border-l-[4px] transition-transform hover:translate-x-1 bg-[#E6F1FB] border-[#185FA5]">
          <div className="text-xs font-bold tracking-widest uppercase text-[#185FA5] mb-2">Channels</div>
          <div className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Role-based access — you choose where agents surface</div>
          <div className="text-sm md:text-base text-slate-700 mb-5">Each persona sees the agents and outputs relevant to their function. Including scheduled / cron — agents that run without being asked.</div>
          <div className="flex flex-wrap gap-2">
            {['Desktop agent', 'Mobile dispatch', 'Terminal embed', 'Teams / Slack', 'API / headless', 'Scheduled / cron'].map(t => (
              <span key={t} className="text-xs md:text-sm px-3 py-1.5 rounded border bg-[#E6F1FB] border-[#B5D4F4] text-[#0C447C] font-medium">{t}</span>
            ))}
          </div>
        </div>

        {/* Layer 2: Agents */}
        <div className="rounded-xl p-6 md:p-8 border-l-[4px] transition-transform hover:translate-x-1 bg-[#E1F5EE] border-[#0F6E56]">
          <div className="text-xs font-bold tracking-widest uppercase text-[#0F6E56] mb-2">Agents · Skills · Connectors</div>
          <div className="text-lg md:text-xl font-semibold text-slate-900 mb-2">As many as your business needs. Not more, not less.</div>
          <div className="text-sm md:text-base text-slate-700 mb-6">svrnAlphaOS is not a fixed module catalog. It is a platform on which you build, configure, and deploy the agents, skills, and connectors that your specific business model requires.</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Agents', desc: 'Autonomous units that execute multi-step workflows end-to-end. Own tools, memory, permissions scope. Run proactively.' },
              { title: 'Skills', desc: 'Reusable capabilities agents draw on. Templates, validation, output formats, domain knowledge. Composable. Self-extending.' },
              { title: 'Connectors', desc: 'MCP adapters to any system. Bloomberg. Simcorp. Salesforce. SAP. SharePoint. New data source? New connector — not a platform rewrite.' },
            ].map(c => (
              <div key={c.title} className="rounded-lg p-4 md:p-5 border bg-[#E1F5EE] border-[#9FE1CB]">
                <div className="text-sm md:text-base font-bold mb-2 text-[#0F6E56]">{c.title}</div>
                <div className="text-sm leading-relaxed opacity-90 text-[#085041]">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="text-xs font-bold tracking-wider uppercase text-[#0F6E56] mt-8 mb-3 opacity-80">Examples — what clients have built</div>
          <div className="flex flex-wrap gap-2">
            {['Financial modeling', 'Research production', 'Due diligence', 'Screening & signals', 'Portfolio construction', 'Risk monitoring', 'Client reporting', 'RFP & sales', 'CRM intelligence', 'MAR & insider', 'AML screening', 'ESG & SFDR', 'Performance attribution', 'Reg. reporting', '…'].map(t => (
              <span key={t} className="text-xs px-2.5 py-1 rounded border border-[#9FE1CB] text-[#085041] bg-white/50 font-medium">{t}</span>
            ))}
          </div>
        </div>

        {/* Layer 3: Platform core */}
        <div className="rounded-xl p-6 md:p-8 border-l-[4px] transition-transform hover:translate-x-1 bg-[#FAECE7] border-[#D85A30]">
          <div className="text-xs font-bold tracking-widest uppercase text-[#993C1D] mb-2">Platform core</div>
          <div className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Orchestration, governance, audit</div>
          <div className="text-sm md:text-base text-slate-700 mb-5">The non-negotiable layer — same for every client, every agent, every skill. Compliance is not a feature. It is how the system works.</div>
          <div className="flex flex-wrap gap-2">
            {['Multi-agent routing', 'Compliance gate', 'Human-in-the-loop', 'Full-provenance audit', 'Scoped memory', 'Role-based permissions'].map(t => (
              <span key={t} className="text-xs md:text-sm px-3 py-1.5 rounded border bg-[#FAECE7] border-[#F5C4B3] text-[#712B13] font-medium">{t}</span>
            ))}
          </div>
        </div>

        {/* Layer 4: Sovereignty layer */}
        <div className="rounded-xl p-6 md:p-8 border-l-[4px] transition-transform hover:translate-x-1 bg-[#FAEEDA] border-[#BA7517]">
          <div className="text-xs font-bold tracking-widest uppercase text-[#854F0B] mb-2">Sovereignty layer</div>
          <div className="text-lg md:text-xl font-semibold text-slate-900 mb-2">You decide. About everything. At any time. Reversibly.</div>
          <div className="text-sm md:text-base text-slate-700 mb-6">Sovereign does not mean "hosted in the EU". It means you are in the driver's seat — over your models, your infrastructure, your data. Whatever geopolitics or regulation demands, you adapt. A configuration change, not a migration project.</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Model routing', desc: 'Run any model. Switch providers without code changes. Automatic fallback if one goes down. Claude today, Mistral tomorrow, local Llama if required.' },
              { title: 'Deployment choice', desc: 'Your data center. Any cloud. Hybrid. Move between them whenever circumstances change. Your call, your timeline.' },
              { title: 'Data residency', desc: 'Choose where every byte lives. Change it when regulation or geopolitics demands it. One config change — not a migration.' },
            ].map(c => (
              <div key={c.title} className="rounded-lg p-4 md:p-5 border bg-[#FAEEDA] border-[#FAC775]">
                <div className="text-sm md:text-base font-bold mb-2 text-[#854F0B]">{c.title}</div>
                <div className="text-sm leading-relaxed opacity-90 text-[#633806]">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 5: Client ecosystem */}
        <div className="rounded-xl p-6 md:p-8 border-l-[4px] border-dashed transition-transform hover:translate-x-1 bg-[#F5F4F0] border-[#D4D3CD]">
          <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Client ecosystem — we connect, not replace</div>
          <div className="text-sm md:text-base text-slate-700 mb-5">Your existing infrastructure remains exactly where it is. svrnAlphaOS does not replace a single system. It makes them all intelligent.</div>
          <div className="flex flex-wrap gap-2">
            {['Market data', 'PMS / OMS', 'CRM', 'DMS', 'ERP', 'Regulatory feeds', '…'].map(t => (
              <span key={t} className="text-xs md:text-sm px-3 py-1.5 rounded border bg-[#F5F4F0] border-slate-300 text-slate-600 font-medium">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Configurations */}
      <div id="in-practice" className="mt-32 mb-16 max-w-3xl">
        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">IN PRACTICE</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Same platform. Your business model.</h2>
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
                The svrnAlphaOS framework was developed and validated in close collaboration with <a href="https://www.mp-capitalmarkets.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-4 transition-colors font-medium">MP Capital Markets</a> — our central first client and founding investor.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                By deploying the Context → Rules → Agents → Outcomes framework across their research and client workflows, they have successfully transitioned from manual execution to autonomous cycles — with measurable results.
              </p>

              <div className="bg-white border border-slate-200 p-6 shadow-sm">
                <h4 className="font-mono text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-widest border-b border-slate-100 pb-3">Validated Results</h4>
                <div className="space-y-0">
                  {[
                    { value: '78%', label: 'Reduction in Boilerplate Execution' },
                    { value: '100%', label: 'Sovereign Architecture' },
                    { value: 'Measurable', label: 'Outcome Improvement' },
                    { value: 'Zero', label: 'Vendor Lock-in' },
                    { value: 'Full', label: 'EU Compliance (AI Act, GDPR)' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-50 last:border-0 last:pb-0 first:pt-0">
                      <div className="w-24 shrink-0 font-serif text-lg text-slate-900 tracking-tight">{item.value}</div>
                      <div className="text-xs font-medium text-slate-600 leading-snug">{item.label}</div>
                    </div>
                  ))}
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
        <InversionSection />
        <FrameworkSection />
        <ArchitectureSection />
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
