import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Shield, Database, Cpu, Menu, X, CheckCircle, Lock, Server, FileText, ChevronRight, BarChart3, Users, BookOpen, Download, Building, LineChart, Scale, ArrowUp } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
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
          <a href="#case-studies" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Case Studies</a>
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
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-600 hover:text-slate-900">Case Studies</a>
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
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const yCard = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div style={{ y: yText, opacity: opacityText }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600 mb-8"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Academic Rigour. Institutional Impact.
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-[1.1] text-slate-900 mb-8 tracking-tight"
          >
            We ship the AI<br />
            <span className="italic text-slate-600">Operating System for</span><br />
            Institutional Finance.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed"
          >
            Stop building chatbots. We develop, deploy, and ship the sovereign technological foundation for the Age of AI — across your entire value chain. Built for alpha generation. Engineered to ship.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="bg-slate-900 text-white px-6 py-3.5 text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#paper" className="bg-white text-slate-900 border border-slate-300 px-6 py-3.5 text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
              Download Founding Paper
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: yCard }}
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-slate-50 transform translate-x-4 translate-y-4 -z-10 border border-slate-200"></div>
            <div className="bg-white border border-slate-200 p-8 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">System Architecture</span>
              <span className="font-mono text-xs text-green-600 bg-green-50 px-2 py-1">DEPLOYMENT READY</span>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-slate-900 mb-1">70% → 30%</h3>
                  <p className="text-sm text-slate-600">Capacity Flip (Routine vs. Strategic)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-slate-900 mb-1">100%</h3>
                  <p className="text-sm text-slate-600">EU AI Act Compliant Architecture</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-semibold text-slate-900 mb-1">Zero</h3>
                  <p className="text-sm text-slate-600">Vendor Lock-in (Model-Agnostic)</p>
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

const ParadoxSection = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The AI Transformation Paradox.</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every major investment bank has an AI initiative, yet the industry-wide failure rate hovers around 70%. The problem isn't the technology—it's the sequence of implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-slate-200 flex flex-col">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-serif text-slate-900 mb-4">The Technology-First Fallacy</h3>
            
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
                  Deploying institutional LLM subscriptions before establishing the 'Creator-to-Curator' mindset inevitably results in low adoption rates. Education must precede technology.
                </motion.p>
              ) : (
                <motion.p 
                  key="solution"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-slate-600 leading-relaxed"
                >
                  Establish a comprehensive 'Creator-to-Curator' education program first. Build strategic fluency across the organization before investing heavily in technology infrastructure.
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
              Layering AI onto legacy processes creates a 'jet engine on a bicycle' scenario. Without deep workflow redesign, the structural Capacity Flip cannot be achieved.
            </p>
          </div>
          
          <div className="bg-white p-8 border border-slate-200">
            <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-serif text-slate-900 mb-4">The Vendor Lock-in Trap</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Committing your architecture to a single US provider sacrifices sovereign control and exposes the institution to geopolitical risk and shifting AI Act compliance gaps.
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
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">PILLAR I : EDUCATION</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The Budget Inversion</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Banks typically allocate 90% of their AI transformation budget to technology and 10% to change management. This allocation is precisely backwards. The Three-Pillar Model corrects this inversion to an optimal 25/30/50 split (first year).
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-slate-900" />
              <span className="text-slate-700">Build strategic fluency before deploying technology.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-slate-900" />
              <span className="text-slate-700">Transform professionals from content creators to insight curators.</span>
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
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 block">PILLAR II : PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">The Capacity Flip</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Layering AI onto legacy processes creates a 'jet engine on a bicycle' effect. True transformation requires redesigning workflows from first principles to invert professional time allocation.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-4 px-4 font-mono text-xs text-slate-400 uppercase tracking-wider">TASK CATEGORY</th>
                <th className="py-4 px-4 font-mono text-xs text-slate-400 uppercase tracking-wider">BEFORE (TYPICAL)</th>
                <th className="py-4 px-4 font-mono text-xs text-slate-400 uppercase tracking-wider">AFTER (TARGET)</th>
                <th className="py-4 px-4 font-mono text-xs text-slate-400 uppercase tracking-wider">AI ROLE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="py-6 px-4 font-medium">Data extraction & Formatting</td>
                <td className="py-6 px-4 text-slate-400">~40% of time</td>
                <td className="py-6 px-4 font-mono text-green-400">~10% of time</td>
                <td className="py-6 px-4 text-sm text-slate-300">Autonomously handled by SVRN ALPHA service</td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-medium">Model population</td>
                <td className="py-6 px-4 text-slate-400">~15% of time</td>
                <td className="py-6 px-4 font-mono text-green-400">~5% of time</td>
                <td className="py-6 px-4 text-sm text-slate-300">Autonomously mapped by SVRN ALPHA service</td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-medium">Cross-referencing</td>
                <td className="py-6 px-4 text-slate-400">~10% of time</td>
                <td className="py-6 px-4 font-mono text-green-400">~5% of time</td>
                <td className="py-6 px-4 text-sm text-slate-300">Autonomously cross-referenced with human validation</td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-medium">Strategic analysis & Advisory</td>
                <td className="py-6 px-4 text-slate-400">~30% of time</td>
                <td className="py-6 px-4 font-mono text-blue-400 text-lg">~75% of time</td>
                <td className="py-6 px-4 text-sm text-slate-300">Human-led, applying proprietary institutional judgment</td>
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
        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">PILLAR III : TECHNOLOGY</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The Sovereign Data Fortress</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Models are interchangeable commodities. Your proprietary knowledge—protected by a model-agnostic architecture—is your only defensible moat.
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Built for Shipping.</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Everything your institution needs to go from strategic brief to executed alpha — autonomously, securely, and at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">Watch the OS work in real time</h3>
              <p className="text-slate-600 leading-relaxed">Live dashboard tracking data ingestion, model processing, and compliance review.</p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 flex items-center justify-center">
              <Server className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">Ship while you sleep</h3>
              <p className="text-slate-600 leading-relaxed">Set a mandate on Friday. The AI Operating System runs the financials over the weekend. Review the draft on Monday.</p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">Ship in half the time</h3>
              <p className="text-slate-600 leading-relaxed">Parallel processing. The fast local model extracts data while the frontier model synthesizes the narrative. Zero bottlenecks.</p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="w-12 h-12 shrink-0 bg-white border border-slate-200 flex items-center justify-center">
              <Shield className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-slate-900 mb-3">Your infrastructure. Your data.</h3>
              <p className="text-slate-600 leading-relaxed">The OS lives securely inside your sovereign firewall. No vendor lock-in. Your alpha stays yours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">What We Are Building.</h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          We do not build theoretical AI. We engineer sovereign infrastructure that drives measurable outcomes. Here are the core applications we are currently deploying with our institutional partners.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="bg-slate-900 text-white p-8 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
            <span className="font-mono text-xs text-slate-400 flex items-center gap-2"><Lock className="w-3 h-3" /> SaaS IR Dashboard · Protected Session</span>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-4 border border-slate-700">
              <h4 className="font-mono text-xs text-slate-400 uppercase mb-3">Aura Assistant (Sovereign Core)</h4>
              <div className="space-y-3">
                <div className="bg-slate-700/50 p-3 text-sm text-slate-200 rounded-sm">
                  Summarize the Q3 attribution for European Equities.
                </div>
                <div className="bg-blue-900/30 border border-blue-800/50 p-3 text-sm text-slate-300 rounded-sm">
                  The +4.2% outperformance was primarily driven by overweight positioning in Industrials (Siemens, Schneider) and strong stock selection in Financials.
                  <div className="mt-2 pt-2 border-t border-blue-800/30 font-mono text-xs text-blue-400">
                    Source: Q3_Attribution_Internal.pdf
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 border border-slate-700">
                <span className="block font-mono text-xs text-slate-400 mb-1">AUM (EUR)</span>
                <span className="block text-2xl font-serif">€2.4B</span>
              </div>
              <div className="bg-slate-800/50 p-4 border border-slate-700">
                <span className="block font-mono text-xs text-slate-400 mb-1">YTD Return</span>
                <span className="block text-2xl font-serif text-green-400">+4.2%</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-4 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-slate-400 uppercase">Performance Trajectory vs Benchmark</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Portfolio</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Benchmark</span>
                  </div>
                </div>
              </div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis hide domain={['dataMin - 2', 'dataMax + 2']} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', fontSize: '12px', color: '#f8fafc' }}
                      itemStyle={{ color: '#f8fafc' }}
                    />
                    <Area type="monotone" dataKey="portfolio" stroke="#4ade80" strokeWidth={2} fillOpacity={1} fill="url(#colorPortfolio)" name="Portfolio" />
                    <Line type="monotone" dataKey="benchmark" stroke="#94a3b8" strokeWidth={2} strokeDasharray="4 4" dot={false} name="Benchmark" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-3">AI-Native IR Service</h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              Currently deploying a system that autonomously generates quarterly earnings narratives, competitive peer tear-downs, and LP updates.
            </p>
            <p className="text-sm font-medium text-slate-900 bg-slate-50 p-3 border-l-2 border-slate-900">
              <span className="font-mono text-xs uppercase text-slate-500 block mb-1">Impact</span>
              Drastically reduces routine drafting time, enabling teams to focus entirely on judgment and strategic alignment.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-3">Specialized Dispute Resolution</h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              Developing autonomous mapping of claims against complex credit agreements, covering M&A earn-outs and covenant breaches.
            </p>
            <p className="text-sm font-medium text-slate-900 bg-slate-50 p-3 border-l-2 border-slate-900">
              <span className="font-mono text-xs uppercase text-slate-500 block mb-1">Impact</span>
              Provides immediate first-pass dispute analysis, giving banking teams a decisive informational advantage entering negotiations.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-3">Sovereign Institutional Memory</h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              Engineering the structural encoding of proprietary firm knowledge into the core AI layer with model-agnostic deployment.
            </p>
            <p className="text-sm font-medium text-slate-900 bg-slate-50 p-3 border-l-2 border-slate-900">
              <span className="font-mono text-xs uppercase text-slate-500 block mb-1">Impact</span>
              Secures institutional DNA against vendor lock-in and compounds proprietary knowledge into a permanent competitive moat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReferenceCaseSection = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">REFERENCE CASE</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">MP Capital Markets:<br/>Sovereign AI Enablement Validated</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The SVRN ALPHA framework was developed and validated in close collaboration with MP Capital Markets — our founding investor. The results prove the Three-Pillar Model in practice.
            </p>
            
            <div className="bg-white border border-slate-200 p-6 mb-8">
              <h3 className="font-mono text-sm font-semibold text-slate-900 mb-4 uppercase">Validated Results</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-green-600" /> Capacity Flip Achieved</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-green-600" /> Zero Data Leakage</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-green-600" /> Measurable Alpha Generation</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-green-600" /> Zero Vendor Lock-in</li>
                <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-green-600" /> Full EU Compliance (AI Act, GDPR)</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-mono text-sm font-semibold text-slate-900 mb-6 uppercase">The Deployment Approach</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 shrink-0 bg-slate-900 text-white flex items-center justify-center font-mono text-xs">1</div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">PHASE 1 : EDUCATION</h4>
                  <p className="text-sm text-slate-600">Structured AI fluency workshops driving the Creator-to-Curator mindset shift across the entire analyst team.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 shrink-0 bg-slate-900 text-white flex items-center justify-center font-mono text-xs">2</div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">PHASE 2 : PROCESS</h4>
                  <p className="text-sm text-slate-600">Granular workflow redesign routing routine extractions to AI, embedding Human-in-the-Loop checkpoints by default.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 shrink-0 bg-slate-900 text-white flex items-center justify-center font-mono text-xs">3</div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">PHASE 3 : TECHNOLOGY</h4>
                  <p className="text-sm text-slate-600">Sovereign, model-agnostic infrastructure deployed locally, ensuring zero data leakage and full AI Act compliance.</p>
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
  return (
    <section id="academic" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">ACADEMIC FOUNDATION</span>
        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Founded on Academic Rigour.<br/>Engineered for Reality.</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          After 10+ years of published research on digital transformation, Prof. Dr. Tobias Blask founded SVRN ALPHA to bridge the gap between academic theory and institutional execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border border-slate-200 p-8">
          <span className="font-mono text-2xl text-slate-300 block mb-4">01</span>
          <h3 className="text-xl font-serif text-slate-900 mb-3">Education Before Technology</h3>
          <p className="text-sm text-slate-600">No technology deployment until organizational readiness is established.</p>
        </div>
        <div className="border border-slate-200 p-8">
          <span className="font-mono text-2xl text-slate-300 block mb-4">02</span>
          <h3 className="text-xl font-serif text-slate-900 mb-3">Sovereign Means You Decide</h3>
          <p className="text-sm text-slate-600">Model-agnostic per use case. Evaluate US, Chinese, or European. Never locked in.</p>
        </div>
        <div className="border border-slate-200 p-8">
          <span className="font-mono text-2xl text-slate-300 block mb-4">03</span>
          <h3 className="text-xl font-serif text-slate-900 mb-3">Human-in-the-Loop Always</h3>
          <p className="text-sm text-slate-600">AI assists. Humans decide. Architectural, not a feature toggle.</p>
        </div>
        <div className="border border-slate-200 p-8">
          <span className="font-mono text-2xl text-slate-300 block mb-4">04</span>
          <h3 className="text-xl font-serif text-slate-900 mb-3">Evidence Over Claims</h3>
          <p className="text-sm text-slate-600">Capacity flip. Measurable alpha. If we can't measure it, we don't claim it.</p>
        </div>
        <div className="border border-slate-200 p-8">
          <span className="font-mono text-2xl text-slate-300 block mb-4">05</span>
          <h3 className="text-xl font-serif text-slate-900 mb-3">Compliance by Design</h3>
          <p className="text-sm text-slate-600">EU AI Act, MiFID II, MAR built directly into the architecture.</p>
        </div>
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
            {/* TODO: Replace this placeholder with the actual uploaded image of Prof. Dr. Tobias Blask */}
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Prof. Dr. Tobias Blask" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-slate-900"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-slate-900"></div>
        </div>
        
        <div className="lg:col-span-7 lg:pl-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-4 block">FOUNDER & CEO</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Prof. Dr. Tobias Blask</h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              With over a decade of published research on digital transformation and AI integration in the financial sector, Prof. Dr. Tobias Blask bridges the critical gap between academic theory and institutional execution.
            </p>
            <p>
              As the founder of SVRN ALPHA, he developed the proprietary Three-Pillar Model (Education, Process, Technology) to ensure that AI deployments in highly regulated environments are not just technologically advanced, but structurally sound, compliant, and sovereign.
            </p>
            <p>
              His work focuses on the intersection of human expertise and machine intelligence, advocating for a "Human-in-the-Loop" architecture that empowers rather than replaces financial professionals.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-slate-900">10+</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">Years Research</span>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif text-slate-900">3</span>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">Pillar Framework</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FoundingPaperSection = () => {
  return (
    <section id="paper" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 block">FOUNDING PAPER</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-6">The Three-Pillar Model:<br/>A Framework for Sovereign AI</h2>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          44 pages of research, methodology, and evidence. Discover why 70% of banking AI initiatives fail, and the architectural shift required to succeed.
        </p>
        <button className="bg-white text-slate-900 px-8 py-4 text-sm font-medium hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
          <Download className="w-4 h-4" /> Download the Founding Paper
        </button>
        <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span>PDF Format</span>
          <span>•</span>
          <span>44 pages</span>
          <span>•</span>
          <span>No Reg. Required</span>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
      <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6">Your institution.<br/><span className="italic text-slate-600">Reborn for the AI Age.</span></h2>
      <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
        Discover our AI-native Investor Relations and Dispute Resolution services. We execute the intelligence loop, so you can execute the trade.
      </p>
      <button className="bg-slate-900 text-white px-8 py-4 text-sm font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
        Schedule Consultation <ArrowRight className="w-4 h-4" />
      </button>
      <p className="mt-6 text-sm text-slate-500">Engagements are bespoke, confidential, and scoped to your institution's priorities.</p>
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
            <li><a href="#case-studies" className="text-sm text-slate-600 hover:text-slate-900">Case Studies</a></li>
            <li><a href="#paper" className="text-sm text-slate-600 hover:text-slate-900">Founding Paper</a></li>
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
        <CaseStudiesSection />
        <ReferenceCaseSection />
        <AcademicSection />
        <FounderSection />
        <FoundingPaperSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
