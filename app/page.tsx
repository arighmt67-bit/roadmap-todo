"use client";
import { useState, useEffect } from "react";
import { CheckCircle2, Circle, Trophy, Terminal, Code, Cloud, Blocks, BookOpen } from "lucide-react";
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
    return Math.round((done / total) * 100);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">
      <header className="border-b border-slate-800 bg-slate-900/50 sticky top-0 z-10 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Terminal className="text-slate-950 w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight text-white">Switch Career Roadmap</h1>
              <p className="text-sm text-emerald-400 font-medium">IT Support to SRE/DevOps and Backend</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
            <span className="text-sm text-slate-400 font-medium">Overall Progress</span>
            <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-cyan-500 transition-all duration-500" 
                style={{ width: `${getProgress()}%` }}
              />
            </div>
            <span className="text-sm font-bold text-white">{getProgress()}%</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="text-emerald-400" />
              Strategi Belajar
            </h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">1.</span> Python dulu biar gampang scripting, lanjut JS dan Go buat cloud-native, baru Java buat standar Enterprise.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">2.</span> Konsistensi 1 jam/hari lebih ngaruh daripada ngebut marathon weekend.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">3.</span> Build in public: Pamerin progress Github/LinkedIn tiap minggu.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          {todoData.map((phase, i) => (
            <div key={phase.id} className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 transition-colors hover:border-emerald-500/50 hover:bg-slate-900/60">
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-slate-400">{phase.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" />
                    {phase.goals}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full flex items-center gap-1.5">
                    <Blocks className="w-3.5 h-3.5" />
                    {phase.project}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
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
                    <div className="shrink-0 mt-0.5">
                      {task.done ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-600" />
                      )}
                    </div>
                    <span className={`flex-1 font-medium ${task.done ? 'line-through decoration-emerald-500/30' : ''}`}>
                      {task.title.includes('🏆') ? (
                        <span className="text-yellow-400">{task.title}</span>
                      ) : (
                        task.title
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
