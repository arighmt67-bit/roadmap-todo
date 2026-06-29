"use client";
import { useState, useEffect } from "react";
import { CheckCircle2, Circle, ChevronDown, ChevronRight, Terminal, Trophy } from "lucide-react";
import { phases } from "./data";

export default function Home() {
  const [todoData, setTodoData] = useState(phases);
  const [expandedPhase, setExpandedPhase] = useState<string | null>(phases[0].id);
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

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a23] text-gray-200 font-sans selection:bg-blue-500/30 pb-20">
      
      {/* HEADER FCC STYLE */}
      <header className="bg-[#0a0a23] border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="font-bold text-2xl tracking-tight text-white flex items-center gap-3">
            <Terminal className="text-blue-500" />
            Switch Career Roadmap
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-12">
        
        {/* INTRO HERO */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">IT Support to SRE / DevOps / Backend</h2>
          <p className="text-xl text-gray-400">Follow this 24-month curriculum to transition into Cloud & Backend roles.</p>
        </div>

        {/* CURRICULUM LIST (FCC ACCORDION STYLE) */}
        <div className="space-y-4">
          {todoData.map((phase, index) => {
            
            const tasksTotal = phase.tasks.length;
            const tasksDone = phase.tasks.filter(t => t.done).length;
            const isCompleted = tasksTotal > 0 && tasksTotal === tasksDone;
            const isExpanded = expandedPhase === phase.id;

            return (
              <div key={phase.id} className="bg-[#1b1b32] rounded-none border border-gray-700 overflow-hidden">
                
                {/* ACCORDION HEADER */}
                <button 
                  onClick={() => setExpandedPhase(isExpanded ? null : phase.id)}
                  className="w-full flex items-center justify-between p-5 bg-[#2a2a40] hover:bg-[#3b3b4f] transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      {isExpanded ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      <p className="text-sm text-gray-300 mt-1">Project: <span className="font-mono bg-black/30 px-1.5 py-0.5 rounded">{phase.project}</span></p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 shrink-0">
                    <span className="text-sm font-bold">{tasksDone}/{tasksTotal}</span>
                    {isCompleted ? <Trophy className="w-5 h-5 text-yellow-400" /> : <Circle className="w-5 h-5 text-gray-500" />}
                  </div>
                </button>

                {/* ACCORDION CONTENT (TASKS) */}
                {isExpanded && (
                  <div className="p-0 border-t border-gray-700">
                    <div className="p-5 bg-[#0a0a23] text-gray-400 text-sm border-b border-gray-700">
                      {phase.description}
                    </div>
                    <ul className="divide-y divide-gray-700/50">
                      {phase.tasks.map((task) => (
                        <li key={task.id}>
                          <button
                            onClick={() => toggleTask(phase.id, task.id)}
                            className={`w-full flex items-start gap-4 p-5 text-left transition-colors hover:bg-[#2a2a40] ${task.done ? 'bg-[#1b1b32]/50' : 'bg-[#1b1b32]'}`}
                          >
                            <div className="shrink-0 mt-0.5">
                              {task.done ? (
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                              ) : (
                                <Circle className="w-6 h-6 text-gray-500" />
                              )}
                            </div>
                            <span className={`text-base flex-1 ${task.done ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                              {task.title.includes('🎯') ? (
                                <span className={task.done ? 'text-gray-500' : 'text-yellow-400 font-semibold'}>{task.title}</span>
                              ) : (
                                task.title
                              )}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}