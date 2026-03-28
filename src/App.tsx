import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Shield, Database, Cpu, Menu, X, CheckCircle, Lock, Server, FileText, ChevronRight, ChevronDown, BarChart3, Users, BookOpen, Download, Building, LineChart, Scale, ArrowUp } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const performanceData = [
  { month: 'Jan', portfolio: 100, benchmark: 100 },
  { month: 'Feb', portfolio: 102, benchmark: 101 },
  { month: 'Mar', portfolio: 105, benchmark: 102 },
  { month: 'Apr', portfolio: 104, benchmark: 103 },
  { month: 'May', portfolio: 108, benchmark: 104 },
  { month: 'Jun', portfolio: 110, benchmark: 105 },
  { month: 'Jul', portfolio: 112, benchmark: 106 },
  { month: 'Aug', portfolio: 115, benchmark: 108 },
  { month: 'Sep', portfolio: 114, benchmark: 109 },
  { month: 'Oct', portfolio: 118, benchmark: 110 },
  { month: 'Nov', portfolio: 122, benchmark: 112 },
  { month: 'Dec', portfolio: 125, benchmark: 114 },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="font-mono font-semibold text-xl tracking-tighter text-slate-900 hover:opacity-80 transition-opacity"
          >
            svrn_alpha
          </button>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          <a href="#education" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Education</a>
          <a href="#process" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Process</a>
          <a href="#technology" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Technology</a>
          <a href="#architecture" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Architecture</a>
          <a href="#references" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">References</a>
          <a href="#academic" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Academic Foundation</a>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-lg origin-top"
          >
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">Education</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">Process</a>
            <a href="#technology" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">Technology</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">Architecture</a>
            <a href="#references" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">References</a>
            <a href="#academic" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">Academic Foundation</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-slate-900 text-white px-5 py-3 text-sm font-medium text-center mt-4 flex items-center justify-center gap-2">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:items-start">
        <motion.div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600 mb-8"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            svrnAlphaOS
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-[1.1] text-slate-900 mb-8 tracking-tight"
          >
            We ship the sovereign <span className="italic text-slate-600">AI Operating System</span> for Institutional Finance.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
          >
            <p className="text-lg text-slate-600 mb-4 max-w-xl leading-relaxed">
              The agentic operating system for institutional finance. Highly autonomous AI agents that execute real work — monitoring, analyzing, building, reporting — across your entire investment workflow. Not a chatbot. Not a copilot. An operating system.
            </p>
            <p className="text-base text-slate-800 mb-8 max-w-xl leading-relaxed">
              Your agents run 24/7. They discover and use skills autonomously. They connect to any system via pluggable connectors. They get better the longer they work with your team. And when a decision requires human judgment, the governance engine escalates — automatically, not because autonomy was never the plan.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="flex gap-2.5 flex-wrap max-w-xl">
              {['Highly autonomous', 'Skills as plugins', 'Sovereign by architecture', 'Zero vendor lock-in', 'MCP-native', 'EU AI Act ready'].map(tag => (
                <span key={tag} className="font-mono text-[11px] px-3 py-1.5 border border-slate-200 rounded-[3px] text-slate-600 tracking-[0.04em] bg-white">
                  {tag}
                </span>
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
          transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.4 }}
          className="relative lg:mt-[60px]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
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
                  { value: 'Measurable', label: 'Alpha Generation' },
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

const ParadoxSection = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">THE PARADOX</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The AI Transformation Paradox.</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every major investment bank has an AI initiative, yet the industry-wide failure rate hovers around 70%. Why? Because institutions are asking the wrong question. They ask "How do we integrate AI into our product?" instead of "How do we integrate AI agents into our org chart?"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-slate-200 flex flex-col">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-serif text-slate-900 mb-4">The Tooling Fallacy</h3>
            
            <div className="flex items-center w-full sm:w-auto gap-1 mb-4 bg-slate-100 p-1 rounded-md self-start">
              <button 
                onClick={() => setShowSolution(false)}
                className={`flex-1 sm:flex-none px-3 py-1.5 text-xs font-mono uppercase rounded-sm transition-colors ${!showSolution ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Problem
              </button>
              <button 
                onClick={() => setShowSolution(true)}
                className={`flex-1 sm:flex-none px-3 py-1.5 text-xs font-mono uppercase rounded-sm transition-colors ${showSolution ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Solution
              </button>
            </div>

            <div className="relative flex-grow min-h-[120px] sm:min-h-[100px]">
              {!showSolution ? (
                <motion.p 
                  key="problem"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-slate-600 leading-relaxed"
                >
                  Treating AI as a plug-and-play software tool for existing two-week sprints. This ignores the new physics of software engineering and results in low adoption.
                </motion.p>
              ) : (
                <motion.p 
                  key="solution"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-slate-600 leading-relaxed"
                >
                  Treat AI as a fundamental architectural shift. Build a tight, deterministic feedback loop where AI agents handle the boilerplate, and humans handle the architecture.
                </motion.p>
              )}
            </div>
          </div>
          
          <div className="bg-white p-8 border border-slate-200">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-6">
              <LineChart className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-serif text-slate-900 mb-4">Unrestructured Workflows</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Layering AI onto legacy processes creates a 'jet engine on a bicycle' scenario. If your engineering team is still doing quarterly roadmapping, you are competing against companies operating on daily, compounding autonomous cycles.
            </p>
          </div>
          
          <div className="bg-white p-8 border border-slate-200">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-serif text-slate-900 mb-4">The Scale Trap</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Believing that brute-force compute is the moat. Scale isn't the moat; architecture is. Committing to a single provider sacrifices sovereign control and exposes you to geopolitical risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PillarEducation = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">PILLAR I : ARCHITECTURAL THINKING</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The Budget Inversion</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Banks typically allocate 90% of their AI transformation budget to technology and 10% to change management. This allocation is precisely backwards. The Three-Pillar Model corrects this inversion to an optimal 25/30/50 split (first year).
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-slate-900" />
              <span className="text-slate-700">Build strategic fluency: from execution to architecture.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-slate-900" />
              <span className="text-slate-700">Transform professionals: humans stop executing boilerplate and start designing deterministic feedback loops.</span>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 border border-slate-200 p-8">
          <h3 className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-6">INDUSTRY STANDARD (70% FAILURE RATE)</h3>
          <div className="flex h-12 w-full mb-10">
            <div className="w-[10%] bg-slate-300 flex items-center justify-center text-xs font-mono">10%</div>
            <div className="w-[90%] bg-slate-800 flex items-center justify-center text-xs font-mono text-white">Technology (90%)</div>
          </div>
          
          <h3 className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-6">THE THREE-PILLAR MODEL (OPTIMAL)</h3>
          <div className="flex h-12 w-full">
            <div className="w-[25%] bg-slate-300 flex items-center justify-center text-xs font-mono">Edu (25%)</div>
            <div className="w-[30%] bg-slate-400 flex items-center justify-center text-xs font-mono">Process (30%)</div>
            <div className="w-[45%] bg-slate-800 flex items-center justify-center text-xs font-mono text-white">Tech (45%)</div>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-right font-mono">* First Year Allocation</p>
        </div>
      </div>
    </section>
  );
};

const PillarProcess = () => {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 block">PILLAR II : AUTONOMOUS CYCLES</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">The Capacity Flip</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Layering AI onto legacy processes creates a 'jet engine on a bicycle' effect. True transformation requires redesigning workflows from first principles to invert professional time allocation and enable daily, compounding autonomous cycles.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-800 bg-slate-900/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900">
                <th className="py-5 px-6 font-mono text-[10px] text-slate-500 uppercase tracking-widest w-1/4">Task Category</th>
                <th className="py-5 px-6 font-mono text-[10px] text-slate-500 uppercase tracking-widest w-1/6">Before (Typical)</th>
                <th className="py-5 px-6 font-mono text-[10px] text-slate-300 uppercase tracking-widest w-1/6 bg-slate-800/30">After (Target)</th>
                <th className="py-5 px-6 font-mono text-[10px] text-slate-500 uppercase tracking-widest">AI Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              <tr className="hover:bg-slate-800/20 transition-colors">
                <td className="py-5 px-6 font-medium text-sm text-slate-300">Data extraction & Formatting</td>
                <td className="py-5 px-6 font-mono text-sm text-slate-500">~40%</td>
                <td className="py-5 px-6 font-mono text-sm text-white bg-slate-800/30">~10%</td>
                <td className="py-5 px-6 text-sm text-slate-400">Autonomously handled by SVRN ALPHA service</td>
              </tr>
              <tr className="hover:bg-slate-800/20 transition-colors">
                <td className="py-5 px-6 font-medium text-sm text-slate-300">Model population</td>
                <td className="py-5 px-6 font-mono text-sm text-slate-500">~15%</td>
                <td className="py-5 px-6 font-mono text-sm text-white bg-slate-800/30">~5%</td>
                <td className="py-5 px-6 text-sm text-slate-400">Autonomously mapped by SVRN ALPHA service</td>
              </tr>
              <tr className="hover:bg-slate-800/20 transition-colors">
                <td className="py-5 px-6 font-medium text-sm text-slate-300">Cross-referencing</td>
                <td className="py-5 px-6 font-mono text-sm text-slate-500">~10%</td>
                <td className="py-5 px-6 font-mono text-sm text-white bg-slate-800/30">~5%</td>
                <td className="py-5 px-6 text-sm text-slate-400">Autonomously cross-referenced with human validation</td>
              </tr>
              <tr className="hover:bg-slate-800/20 transition-colors border-t-2 border-slate-700">
                <td className="py-5 px-6 font-medium text-sm text-white">Strategic analysis & Advisory</td>
                <td className="py-5 px-6 font-mono text-sm text-slate-500">~30%</td>
                <td className="py-5 px-6 font-mono text-lg text-white bg-slate-800/30">~75%</td>
                <td className="py-5 px-6 text-sm text-slate-300">Human-led, applying proprietary institutional judgment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const PillarTechnology = () => {
  return (
    <section id="technology" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">PILLAR III : SOVEREIGN ARCHITECTURE</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The Sovereign Data Fortress</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Models are interchangeable commodities. Scale isn't the moat; architecture is. Your proprietary knowledge—protected by an agent-driven, model-agnostic architecture—is your only defensible moat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-slate-200 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 border-l border-b border-slate-200 flex items-center justify-center">
            <span className="font-mono text-xs text-slate-400">01</span>
          </div>
          <h3 className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4">OUTER LAYER</h3>
          <h4 className="text-xl font-serif text-slate-900 mb-4">Model Agnosticism</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Connects to any AI model (US closed, Chinese open, European) via standardized APIs. Zero lock-in guarantees geopolitical resilience.
          </p>
        </div>

        <div className="border border-slate-200 p-8 relative overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white border-l border-b border-slate-200 flex items-center justify-center">
            <span className="font-mono text-xs text-slate-400">02</span>
          </div>
          <h3 className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4">MIDDLE LAYER</h3>
          <h4 className="text-xl font-serif text-slate-900 mb-4">Institutional Control</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Orchestration, data pipelines, and architectural Human-in-the-Loop checkpoints owned exclusively by the institution, ensuring full EU AI Act auditability.
          </p>
        </div>

        <div className="border border-slate-900 bg-slate-900 text-white p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-slate-800 border-l border-b border-slate-700 flex items-center justify-center">
            <span className="font-mono text-xs text-slate-400">03</span>
          </div>
          <h3 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4">INNER LAYER</h3>
          <h4 className="text-xl font-serif mb-4">Proprietary Knowledge</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            The institutional memory, research archives, and client insights that generate alpha. Fully protected from external access.
          </p>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">THE SOLUTION</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The New Physics of Velocity.</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The bottleneck is no longer execution—it's strategic velocity. Integrate agentic workflows into your org chart to achieve daily, compounding autonomous cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 flex items-center justify-center">
              <Users className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">Agents Handle Boilerplate, Humans Handle Architecture</h3>
              <p className="text-slate-600 leading-relaxed">Establish a tight, deterministic feedback loop. AI agents handle data extraction, synthesis, and formatting, freeing your team to focus purely on alpha generation and review.</p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 flex items-center justify-center">
              <LineChart className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">Compounding Autonomous Cycles</h3>
              <p className="text-slate-600 leading-relaxed">Quarterly roadmaps and two-week sprints are obsolete. Set a strategic mandate and let the AI Operating System run continuous, autonomous cycles. Review the results, not the process.</p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 flex items-center justify-center">
              <Server className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">Architecture is the New Moat</h3>
              <p className="text-slate-600 leading-relaxed">Scale and brute-force compute are no longer competitive advantages. True velocity comes from a sovereign, agent-driven architecture designed specifically for institutional workflows.</p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 flex items-center justify-center">
              <Shield className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">Ship Your 2027 Roadmap Next Tuesday</h3>
              <p className="text-slate-600 leading-relaxed">Deployed securely inside your sovereign firewall. No vendor lock-in. Transform your organizational velocity without compromising institutional data control or compliance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
          <div className="text-xs font-bold tracking-widest uppercase text-[#185FA5] mb-2">Interfaces</div>
          <div className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Role-based access — you choose the channels</div>
          <div className="text-sm md:text-base text-slate-700 mb-5">Each persona sees the agents and outputs relevant to their function</div>
          <div className="flex flex-wrap gap-2">
            {['Desktop agent', 'Mobile dispatch', 'Terminal embed', 'Teams / Slack', 'API / headless'].map(t => (
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
            <div className="rounded-lg p-4 md:p-5 border bg-[#E1F5EE] border-[#9FE1CB]">
              <div className="text-sm md:text-base font-bold mb-2 text-[#0F6E56]">Agents</div>
              <div className="text-sm leading-relaxed opacity-90 text-[#085041]">Autonomous units that execute multi-step workflows end-to-end. Own tools, memory, permissions scope.</div>
            </div>
            <div className="rounded-lg p-4 md:p-5 border bg-[#E1F5EE] border-[#9FE1CB]">
              <div className="text-sm md:text-base font-bold mb-2 text-[#0F6E56]">Skills</div>
              <div className="text-sm leading-relaxed opacity-90 text-[#085041]">Reusable capabilities agents draw on. Templates, validation, output formats, domain knowledge. Composable.</div>
            </div>
            <div className="rounded-lg p-4 md:p-5 border bg-[#E1F5EE] border-[#9FE1CB]">
              <div className="text-sm md:text-base font-bold mb-2 text-[#0F6E56]">Connectors</div>
              <div className="text-sm leading-relaxed opacity-90 text-[#085041]">MCP adapters to any system. New data source? New connector. Not a platform rewrite.</div>
            </div>
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
          <div className="text-sm md:text-base text-slate-700 mb-5">The non-negotiable layer — same for every client, every agent, every skill</div>
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
          <div className="text-sm md:text-base text-slate-700 mb-6">No single-vendor lock-in. No single-jurisdiction dependency. No single point of failure.</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg p-4 md:p-5 border bg-[#FAEEDA] border-[#FAC775]">
              <div className="text-sm md:text-base font-bold mb-2 text-[#854F0B]">Model routing</div>
              <div className="text-sm leading-relaxed opacity-90 text-[#633806]">Run any model. Switch providers without code changes. Automatic fallback if one goes down.</div>
            </div>
            <div className="rounded-lg p-4 md:p-5 border bg-[#FAEEDA] border-[#FAC775]">
              <div className="text-sm md:text-base font-bold mb-2 text-[#854F0B]">Deployment choice</div>
              <div className="text-sm leading-relaxed opacity-90 text-[#633806]">Your data center. Any cloud. Hybrid. Move between them. Your call, your timeline.</div>
            </div>
            <div className="rounded-lg p-4 md:p-5 border bg-[#FAEEDA] border-[#FAC775]">
              <div className="text-sm md:text-base font-bold mb-2 text-[#854F0B]">Data residency</div>
              <div className="text-sm leading-relaxed opacity-90 text-[#633806]">Choose where every byte lives. Change it when circumstances change. A config change, not a migration.</div>
            </div>
          </div>
        </div>

        {/* Layer 5: Client ecosystem */}
        <div className="rounded-xl p-6 md:p-8 border-l-[4px] border-dashed transition-transform hover:translate-x-1 bg-[#F5F4F0] border-[#D4D3CD]">
          <div className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Client ecosystem — we connect, not replace</div>
          <div className="text-sm md:text-base text-slate-700 mb-5">Your existing infrastructure remains exactly where it is</div>
          <div className="flex flex-wrap gap-2">
            {['Market data', 'PMS / OMS', 'CRM', 'DMS', 'ERP', 'Regulatory feeds', '…'].map(t => (
              <span key={t} className="text-xs md:text-sm px-3 py-1.5 rounded border bg-[#F5F4F0] border-slate-300 text-slate-600 font-medium">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-32 mb-16 max-w-3xl">
        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">IN PRACTICE</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Same platform. Your business model.</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Every deployment looks different because every business is different. The platform core and sovereignty layer are identical. Everything above them is configured to your workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Config 1 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:border-slate-300 transition-colors">
          <div className="text-base md:text-lg font-semibold mb-1 text-slate-900">Sell-side boutique</div>
          <div className="text-xs md:text-sm text-slate-500 mb-6 font-mono">Research + origination</div>
          <ul className="space-y-0">
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0F6E56] shrink-0"></span> Research production
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0F6E56] shrink-0"></span> Financial modeling
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0F6E56] shrink-0"></span> Screening & signals
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#993C1D] shrink-0"></span> MAR & insider
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0"></span> Doc production
            </li>
          </ul>
          <div className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100">+ custom skills for their workflow</div>
        </div>

        {/* Config 2 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:border-slate-300 transition-colors">
          <div className="text-base md:text-lg font-semibold mb-1 text-slate-900">Asset manager</div>
          <div className="text-xs md:text-sm text-slate-500 mb-6 font-mono">Portfolio + distribution</div>
          <ul className="space-y-0">
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#534AB7] shrink-0"></span> Portfolio construction
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#534AB7] shrink-0"></span> Risk monitoring
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#993556] shrink-0"></span> Client reporting
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#993556] shrink-0"></span> RFP & sales
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#993C1D] shrink-0"></span> ESG & SFDR
            </li>
          </ul>
          <div className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100">+ custom skills for their workflow</div>
        </div>

        {/* Config 3 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:border-slate-300 transition-colors">
          <div className="text-base md:text-lg font-semibold mb-1 text-slate-900">Family office</div>
          <div className="text-xs md:text-sm text-slate-500 mb-6 font-mono">Lean team, broad scope</div>
          <ul className="space-y-0">
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#534AB7] shrink-0"></span> Portfolio construction
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#534AB7] shrink-0"></span> Risk monitoring
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#993556] shrink-0"></span> Client reporting
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#993556] shrink-0"></span> CRM intelligence
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0"></span> Data extraction
            </li>
          </ul>
          <div className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100">+ custom skills for their workflow</div>
        </div>

        {/* Config 4 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:border-slate-300 transition-colors">
          <div className="text-base md:text-lg font-semibold mb-1 text-slate-900">Full-service bank</div>
          <div className="text-xs md:text-sm text-slate-500 mb-6 font-mono">Full stack + custom</div>
          <ul className="space-y-0">
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0F6E56] shrink-0"></span> All research agents
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#534AB7] shrink-0"></span> All portfolio agents
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#993556] shrink-0"></span> All client agents
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#993C1D] shrink-0"></span> All compliance agents
            </li>
            <li className="text-sm py-2.5 border-t border-slate-100 text-slate-600 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#185FA5] shrink-0"></span> Custom agent development
            </li>
          </ul>
          <div className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100">+ dedicated engineering support</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-8 mt-10 text-center shadow-sm">
        <p className="text-slate-700">These are examples, not a product list. Your deployment will look different — <em className="text-[#0F6E56] not-italic font-medium">because your business is different.</em></p>
      </div>
    </section>
  );
};

const ReferenceCaseSection = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200" id="references">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">REFERENCES</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Proven in Production</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't just build theory. Our agentic operating systems are deployed in highly regulated institutional environments, driving measurable velocity.
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
                The SVRN ALPHA framework was developed and validated in close collaboration with <a href="https://www.mp-capitalmarkets.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-4 transition-colors font-medium">MP Capital Markets</a> — our central first client and founding investor.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                By implementing our proprietary 3-stage model, they have successfully transitioned from manual execution to autonomous cycles. The results prove the power of this architecture in practice—it works extremely well.
              </p>
              
              <div className="bg-white border border-slate-200 p-6 shadow-sm">
                <h4 className="font-mono text-[10px] font-bold text-slate-500 mb-4 uppercase tracking-widest border-b border-slate-100 pb-3">Validated Results</h4>
                <div className="space-y-0">
                  {[
                    { value: '78%', label: 'Reduction in Boilerplate Execution' },
                    { value: '100%', label: 'Sovereign Architecture' },
                    { value: 'Measurable', label: 'Alpha Generation' },
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
              <h4 className="font-mono text-sm font-semibold text-slate-900 mb-6 uppercase">The 3-Stage Deployment Model</h4>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 bg-slate-900 text-white flex items-center justify-center font-mono text-xs">1</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">PHASE 1 : ARCHITECTURAL THINKING</h5>
                    <p className="text-sm text-slate-600">Structured workshops driving the mindset shift from manual execution to designing deterministic feedback loops.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 bg-slate-900 text-white flex items-center justify-center font-mono text-xs">2</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">PHASE 2 : AUTONOMOUS CYCLES</h5>
                    <p className="text-sm text-slate-600">Granular workflow redesign routing routine extractions to AI agents, embedding humans solely for architectural review.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 shrink-0 bg-slate-900 text-white flex items-center justify-center font-mono text-xs">3</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">PHASE 3 : SOVEREIGN ARCHITECTURE</h5>
                    <p className="text-sm text-slate-600">Agentic, model-agnostic infrastructure deployed locally, ensuring zero data leakage and full AI Act compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AcademicSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const principles = [
    {
      id: "01",
      title: "Education Before Technology",
      description: "No technology deployment until organizational readiness is established."
    },
    {
      id: "02",
      title: "Sovereign Means You Decide",
      description: "Model-agnostic per use case. Evaluate US, Chinese, or European. Never locked in."
    },
    {
      id: "03",
      title: "Human-in-the-Loop Always",
      description: "AI assists. Humans decide. Architectural, not a feature toggle."
    },
    {
      id: "04",
      title: "Evidence Over Claims",
      description: "Capacity flip. Measurable alpha. If we can't measure it, we don't claim it."
    },
    {
      id: "05",
      title: "Compliance by Design",
      description: "EU AI Act, MiFID II, MAR built directly into the architecture."
    }
  ];

  return (
    <section id="academic" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">ACADEMIC FOUNDATION</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Founded on Academic Rigour.<br/>Engineered for Reality.</h2>
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-[3.25rem] pr-4">
                      <p className="text-slate-600 leading-relaxed">
                        {principle.description}
                      </p>
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

const FounderSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
            <img 
              src="https://github.com/TobiasBlask/svrn_alpha_website/blob/main/2026-01-28_10-18-59.jpg?raw=true" 
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
              As the founder of SVRN ALPHA, he developed the proprietary Three-Pillar Model (Education, Process, Technology) to ensure that AI deployments in highly regulated environments are not just technologically advanced, but structurally sound, compliant, and sovereign.
            </p>
            <p>
              His work focuses on the intersection of human expertise and machine intelligence, advocating for a "Human-in-the-Loop" architecture that empowers rather than replaces financial professionals.
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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Your institution.<br/><span className="italic text-slate-600">Reborn for the AI Age.</span></h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10">
            Discover our AI-native Investor Relations and Dispute Resolution services. We execute the intelligence loop, so you can execute the trade.
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
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-serif text-white mb-2">Schedule a Consultation</h3>
            <p className="text-slate-400 mb-8 text-sm">Fill out the form below and our team will get back to you promptly.</p>
            
            {status === 'success' ? (
              <div className="bg-emerald-900/30 border border-emerald-800 text-emerald-300 p-6 rounded-lg flex flex-col items-center justify-center text-center space-y-3 animate-in fade-in zoom-in duration-300">
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <div>
                  <h4 className="font-medium text-lg text-emerald-100">Message Sent Successfully</h4>
                  <p className="text-sm mt-1">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="bg-red-900/30 border border-red-800 text-red-300 p-4 rounded-none text-sm">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      disabled={status === 'loading'}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-none px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors disabled:opacity-50"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      disabled={status === 'loading'}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-none px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors disabled:opacity-50"
                      placeholder="jane@institution.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    required
                    disabled={status === 'loading'}
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-none px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors disabled:opacity-50"
                    placeholder="Inquiry regarding AI Integration"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-slate-400 uppercase tracking-wider">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    disabled={status === 'loading'}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-none px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none disabled:opacity-50"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-white text-slate-900 px-8 py-4 text-sm font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : (
                    <>Send Message <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <span className="font-mono font-semibold text-xl tracking-tighter text-slate-900 mb-4 block">svrn_alpha</span>
          <p className="text-sm text-slate-600 max-w-sm">
            Sovereign AI enablement and organizational transformation for investment banking.
          </p>
        </div>
        
        <div>
          <h4 className="font-mono text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">COMPANY</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-slate-600 hover:text-slate-900">About</a></li>
            <li><a href="#architecture" className="text-sm text-slate-600 hover:text-slate-900">Architecture</a></li>
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

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ParadoxSection />
        <PillarEducation />
        <PillarProcess />
        <PillarTechnology />
        <FeaturesSection />
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
