"use client";
import { useState, useEffect } from "react";
import { CheckCircle2, Circle, Terminal, Code, ExternalLink, Library } from "lucide-react";
import { phases } from "./data";

export default function Home() {
  const [todoData, setTodoData] = useState(phases);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("roadmap-progress");
    if (saved) {
      try {
        setTodoData(JSON.parse(saved));
      } catch (e) { }
    }
  }, []);

  const toggleTask = (phaseId: string, taskId: string) => {
    const newData = todoData.map((phase) => {
      if (phase.id === phaseId) {
        return {
          ...phase,
          tasks: phase.tasks.map((task) =>
            task.id === taskId ? { ...task, done: !task.done } : task
          ),
        };
      }
      return phase;
    });
    setTodoData(newData);
    localStorage.setItem("roadmap-progress", JSON.stringify(newData));
  };

  const getProgress = () => {
    let total = 0;
    let done = 0;
    todoData.forEach((p) => {
      p.tasks.forEach((t) => {
        total++;
        if (t.done) done++;
      });
    });
    return Math.round((done / total) * 100) || 0;
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30 pb-20">
      <header className="border-b border-slate-800 bg-slate-900/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Terminal className="text-slate-950 w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight text-white leading-tight">DevOps & Backend Roadmap</h1>
              <p className="text-sm text-emerald-400 font-medium">Inspired by roadmap.sh</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-900 px-4 py-2 rounded-full border border-slate-800 w-fit">
            <span className="text-sm text-slate-400 font-medium hidden md:block">Completion</span>
            <div className="w-24 md:w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-cyan-500 transition-all duration-500" 
                style={{ width: `${getProgress()}%` }}
              />
            </div>
            <span className="text-sm font-bold text-white">{getProgress()}%</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12 space-y-8">
        {todoData.map((phase) => (
          <div key={phase.id} className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 transition-colors hover:border-emerald-500/50 hover:bg-slate-900/60 relative">
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-slate-400">{phase.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end shrink-0">
                <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center gap-1.5 pointer-events-none">
                  <Code className="w-3.5 h-3.5" />
                  {phase.goals}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-3 relative z-10">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Checklist Tasks</h4>
                {phase.tasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(phase.id, task.id)}
                    className={`w-full flex items-start gap-4 p-4 rounded-xl border text-left transition-all ${
                      task.done 
                        ? 'bg-emerald-500/5 border-emerald-500/30 text-slate-300' 
                        : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 text-slate-200'
                    }`}
                  >
                    <div className="shrink-0 mt-0.5 pointer-events-none">
                      {task.done ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-600" />
                      )}
                    </div>
                    <span className={`flex-1 font-medium pointer-events-none ${task.done ? 'line-through decoration-emerald-500/30' : ''}`}>
                      {task.title.includes('🏆') || task.title.includes('🎯') ? (
                        <span className="text-yellow-400">{task.title}</span>
                      ) : (
                        task.title
                      )}
                    </span>
                  </button>
                ))}
              </div>

              {/* SECTION RESOURCES WITH FIX Z-INDEX AND CLICKABILITY */}
              <div className="lg:col-span-1 space-y-4 relative z-50">
                <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-700 h-full">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Library className="w-4 h-4 text-emerald-400" />
                    Study Resources
                  </h4>
                  <div className="flex flex-col gap-3 pointer-events-auto">
                    {phase.resources?.map((res, i) => (
                      <a 
                        key={i}
                        href={res.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-slate-800 transition-colors border border-slate-800 relative z-50"
                      >
                        <ExternalLink className="w-4 h-4 shrink-0" />
                        <span className="underline-offset-4 hover:underline">{res.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
