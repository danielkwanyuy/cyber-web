/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Terminal, 
  Network, 
  Lock, 
  Database, 
  Search, 
  ChevronRight, 
  ExternalLink,
  Github,
  Cpu,
  Activity,
  AlertCircle,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { PROJECTS, Project } from './types';
import { cn } from './lib/utils';

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeProject = PROJECTS.find(p => p.id === activeProjectId);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-cyber-bg text-text-primary selection:bg-cyber-accent selection:text-black flex flex-col">
      {/* Header */}
      <header className="cyber-header sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-cyber-accent" />
          <div className="font-mono font-bold text-cyber-accent tracking-widest text-sm">MENTOR_SYSTEM [v2.4]</div>
        </div>
        <div className="hidden md:flex items-center text-[11px] font-mono text-text-secondary">
          <span className="cyber-status-dot"></span> NETWORK_CONNECTED // NODE_01
        </div>
        <button onClick={toggleSidebar} className="lg:hidden p-2 text-cyber-accent">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </header>

      <div className="flex flex-1 relative overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 cyber-sidebar transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-[calc(100vh-64px)]",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <nav className="py-6 h-full overflow-y-auto">
            <div 
              onClick={() => { setActiveProjectId(null); setIsSidebarOpen(false); }}
              className={cn(
                "cyber-nav-item",
                activeProjectId === null ? "cyber-nav-item-active" : "hover:bg-white/5"
              )}
            >
              <span className="nav-id text-[10px] font-mono text-cyber-accent opacity-70 uppercase">System</span>
              <span className="nav-title text-sm font-medium">Overview</span>
            </div>

            <div className="px-8 py-4 mt-4">
              <span className="text-[10px] font-mono text-text-secondary uppercase tracking-[0.2em]">Core Projects</span>
            </div>

            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                onClick={() => { setActiveProjectId(project.id); setIsSidebarOpen(false); }}
                className={cn(
                  "cyber-nav-item",
                  activeProjectId === project.id ? "cyber-nav-item-active" : "hover:bg-white/5"
                )}
              >
                <span className="nav-id text-[10px] font-mono text-cyber-accent opacity-70 uppercase">Project_0{index + 1}</span>
                <span className="nav-title text-sm font-medium truncate">{project.title}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <AnimatePresence mode="wait">
            {!activeProjectId ? (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-4xl space-y-12"
              >
                <section className="space-y-6">
                  <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tighter">
                    Cybersecurity <br />
                    <span className="text-cyber-accent">Mastery Curriculum</span>
                  </h2>
                  <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
                    A high-impact curriculum featuring 7 hands-on projects designed to be completed in 7 days using open-source tools.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      onClick={() => setActiveProjectId(PROJECTS[0].id)}
                      className="px-6 py-3 bg-cyber-accent text-black font-bold rounded hover:opacity-90 transition-opacity flex items-center gap-2"
                    >
                      INITIALIZE_LAB
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'EST. TIME', value: '7 DAYS' },
                    { title: 'DIFFICULTY', value: 'INTERMEDIATE' },
                    { title: 'IMPACT', value: 'HIGH // SEC-OPS' }
                  ].map((stat, i) => (
                    <div key={i} className="cyber-card">
                      <span className="cyber-card-label">{stat.title}</span>
                      <div className="text-2xl font-mono font-bold text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white uppercase tracking-widest">Project Pipeline</h3>
                    <div className="h-px flex-1 mx-6 bg-cyber-border" />
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {PROJECTS.map((project, index) => (
                      <div 
                        key={project.id}
                        onClick={() => setActiveProjectId(project.id)}
                        className="cyber-card hover:border-cyber-accent/30 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-mono text-cyber-accent/40">0{index + 1}</span>
                            <h4 className="text-lg font-bold text-white group-hover:text-cyber-accent transition-colors">{project.title}</h4>
                          </div>
                          <ChevronRight className="w-5 h-5 text-text-secondary group-hover:text-cyber-accent transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            ) : (
              <motion.div
                key={activeProject?.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="max-w-5xl space-y-10"
              >
                <div className="space-y-4">
                  <button 
                    onClick={() => setActiveProjectId(null)}
                    className="text-[10px] font-mono text-cyber-accent hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest"
                  >
                    <ChevronRight className="w-3 h-3 rotate-180" />
                    System Overview
                  </button>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    {activeProject?.title}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {activeProject?.techStack.map(tech => (
                      <span key={tech} className="cyber-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-10">
                    <section className="space-y-4">
                      <h3 className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em]">Objective</h3>
                      <p className="text-text-secondary leading-relaxed max-w-2xl">
                        {activeProject?.objective}
                      </p>
                    </section>

                    <div className="cyber-card">
                      <span className="cyber-card-label">Implementation Guide</span>
                      <div className="space-y-8 mt-4">
                        {activeProject?.steps.map((step, i) => (
                          <div key={i} className="flex gap-6">
                            <span className="font-mono text-cyber-accent font-bold text-sm">
                              {(i + 1).toString().padStart(2, '0')}
                            </span>
                            <div className="space-y-2">
                              <p className="text-sm text-text-primary leading-relaxed">{step}</p>
                              {i === 0 && activeProject.id === 'vulnerability-scanner' && (
                                <div className="cyber-code-block">pip install python-nmap</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="cyber-card">
                      <span className="cyber-card-label">Learning Outcomes</span>
                      <ul className="mt-4">
                        {activeProject?.learningOutcomes.map((outcome, i) => (
                          <li key={i} className="cyber-outcome-item">
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 bg-cyber-surface/50 border border-cyber-border rounded-xl space-y-4">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="w-4 h-4 text-cyber-accent" />
                        <h3 className="text-[10px] font-bold text-white uppercase tracking-widest">Security Protocol</h3>
                      </div>
                      <p className="text-[11px] text-text-secondary leading-relaxed italic">
                        Authorized testing only. Ensure all environments are isolated (Docker/VM) before execution.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

