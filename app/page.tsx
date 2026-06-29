"use client";
import { useState, useEffect } from "react";
import { CheckCircle2, Circle, ChevronDown, ChevronRight, Terminal, Trophy, Landmark } from "lucide-react";
import { phases } from "./data";
import { bcaPhases } from "./bca-data";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"general" | "bca">("general");
  const [generalData, setGeneralData] = useState(phases);
  const [bcaData, setBcaData] = useState(bcaPhases);
  const [expandedPhase, setExpandedPhase] = useState<string | null>(phases[0].id);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedGeneral = localStorage.getItem("roadmap-progress-v3");
    if (savedGeneral) {
      try { setGeneralData(JSON.parse(savedGeneral)); } catch (e) { }
    } else {
      localStorage.removeItem("roadmap-progress-v2");
      localStorage.setItem("roadmap-progress-v3", JSON.stringify(phases));
    }
    
    const savedBca = localStorage.getItem("roadmap-bca-v1");
    if (savedBca) {
      try { setBcaData(JSON.parse(savedBca)); } catch (e) { }
    } else {
      localStorage.setItem("roadmap-bca-v1", JSON.stringify(bcaPhases));
    }
  }, []);

  const currentData = activeTab === "general" ? generalData : bcaData;

  const toggleTask = (phaseId: string, taskId: string) => {
    const setData = activeTab === "general" ? setGeneralData : setBcaData;
    const storageKey = activeTab === "general" ? "roadmap-progress-v3" : "roadmap-bca-v1";

    const newData = currentData.map((phase) => {
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
    setData(newData);
    localStorage.setItem(storageKey, JSON.stringify(newData));
  };

  const handleTabChange = (tab: "general" | "bca") => {
    setActiveTab(tab);
    const firstId = tab === "general" ? phases[0].id : bcaPhases[0].id;
    setExpandedPhase(firstId);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a23] text-gray-200 font-sans selection:bg-blue-500/30 pb-20">
      
      <header className="bg-[#0a0a23] border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-center">
          <h1 className="font-bold text-2xl tracking-tight text-white flex items-center gap-3">
            <Terminal className="text-blue-500" />
            Switch Career Roadmap
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">IT Support to SRE / DevOps / Backend</h2>
          <p className="text-xl text-gray-400">Follow this 24-month curriculum to transition into Cloud & Backend roles.</p>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-700 bg-[#1b1b32] p-1">
            <button
              onClick={() => handleTabChange("general")}
              className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "general"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Terminal className="w-4 h-4" />
              General Roadmap
            </button>
            <button
              onClick={() => handleTabChange("bca")}
              className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "bca"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Landmark className="w-4 h-4" />
              BCA Digital Track
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {currentData.map((phase) => {
            const tasksTotal = phase.tasks.length;
            const tasksDone = phase.tasks.filter(t => t.done).length;
            const isCompleted = tasksTotal > 0 && tasksTotal === tasksDone;
            const isExpanded = expandedPhase === phase.id;

            return (
              <div key={phase.id} className="bg-[#1b1b32] rounded-none border border-gray-700 overflow-hidden">
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

                {isExpanded && (
                  <div className="p-0 border-t border-gray-700">
                    <div className="p-5 bg-[#0a0a23] text-gray-400 text-sm border-b border-gray-700">
                      {phase.description}
                    </div>
                    <ul className="divide-y divide-gray-700/50">
                      {phase.tasks.map((task) => (
                        <li key={task.id} className={`transition-colors ${task.done ? 'bg-[#1b1b32]/50' : 'bg-[#1b1b32]'}`}>
                          <div className="flex items-start gap-4 p-5">
                            <button onClick={() => toggleTask(phase.id, task.id)} className="shrink-0 mt-0.5">
                              {task.done ? (
                                <CheckCircle2 className="w-6 h-6 text-green-500 hover:text-green-400 transition-colors" />
                              ) : (
                                <Circle className="w-6 h-6 text-gray-500 hover:text-gray-400 transition-colors" />
                              )}
                            </button>
                            
                            <div className="flex-1">
                              <span className={`text-lg font-bold block mb-2 ${task.done ? 'text-gray-500 line-through' : 'text-gray-100'}`}>
                                {task.title.includes('🎯') ? (
                                  <span className={task.done ? 'text-gray-500' : 'text-yellow-400'}>{task.title}</span>
                                ) : task.title.includes('🚀') ? (
                                  <span className={task.done ? 'text-gray-500' : 'text-blue-400'}>{task.title}</span>
                                ) : (
                                  task.title
                                )}
                              </span>
                              
                              {task.details && task.details.length > 0 && (
                                <ul className={`list-disc pl-5 space-y-1.5 text-sm ${task.done ? 'text-gray-600' : 'text-gray-300'}`}>
                                  {task.details.map((detail, idx) => (
                                    <li key={idx} className="pl-1 leading-relaxed">{detail}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
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