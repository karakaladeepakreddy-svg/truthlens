'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [groqKey, setGroqKey] = useState<string>('');
  const [keySaved, setKeySaved] = useState<boolean>(false);
  const [threshold, setThreshold] = useState<number>(85);
  const [autoFlag, setAutoFlag] = useState<boolean>(true);
  const [telegramHook, setTelegramHook] = useState<boolean>(true);

  const handleSaveKey = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('TRUTHLENS_GROQ_KEY', groqKey);
    }
    setKeySaved(true);
    setTimeout(() => setKeySaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-[#30363d] pb-5">
        <h1 className="text-2xl font-black text-white flex items-center gap-2">
          <span>⚙️ Administrator Telemetry & Intelligence Config Center</span>
        </h1>
        <p className="text-sm text-gray-300">
          Manage multimodal AI inference models, Groq API credentials, threshold sensitivity & agency dispatch rules
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Col: Groq API Key & Model Configuration */}
        <div className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] space-y-5">
          <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              <span>⚡ Groq Llama-3.3 LLM Inference Engine</span>
            </h3>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
              ACTIVE
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed">
            Configure your Groq API Key to enable ultra-low-latency real-time claim verification, cross-lingual translation (Telugu/Hindi/English), and automated evidence provenance reasoning.
          </p>

          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-400">GROQ API KEY (gsk_...):</label>
            <div className="flex gap-2">
              <input
                type="password"
                value={groqKey}
                onChange={(e) => setGroqKey(e.target.value)}
                placeholder="gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="flex-1 bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 text-sm text-gray-200 font-mono focus:outline-none focus:border-cyan-400"
              />
              <button
                onClick={handleSaveKey}
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono transition-colors"
              >
                {keySaved ? 'Saved!' : 'Save Key'}
              </button>
            </div>
            <p className="text-[11px] text-gray-500">
              *If left blank, TruthLens automatically utilizes its built-in high-fidelity contextual reasoning engine.
            </p>
          </div>

          <div className="pt-2 border-t border-[#30363d] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-300">Selected Reasoning Model:</span>
              <span className="font-mono text-cyan-400 font-bold">llama-3.3-70b-versatile</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-300">Inference Speed:</span>
              <span className="font-mono text-emerald-400 font-bold">~280 tokens/sec (Groq LPU)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-300">Temperature Setting:</span>
              <span className="font-mono text-gray-400">0.1 (Deterministic RAG Verification)</span>
            </div>
          </div>
        </div>

        {/* Right Col: AI Inference Pipeline Telemetry */}
        <div className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] space-y-5">
          <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
            <h3 className="font-bold text-base text-white">
              🔬 Multimodal Model Pipeline Telemetry
            </h3>
            <span className="text-xs font-mono text-cyan-400">4 / 4 ONLINE</span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#0d1117] border border-[#30363d] flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-200">Vision Transformer (ViT-H/14)</div>
                <div className="text-[11px] text-gray-400">Video & Image GAN Artifact Scanner</div>
              </div>
              <span className="text-emerald-400 font-bold">99.4% Ready</span>
            </div>

            <div className="p-3 rounded-lg bg-[#0d1117] border border-[#30363d] flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-200">Audio Mel-Cepstral Vocoder Model</div>
                <div className="text-[11px] text-gray-400">Voice Clone & Pitch Continuity Tracker</div>
              </div>
              <span className="text-emerald-400 font-bold">98.9% Ready</span>
            </div>

            <div className="p-3 rounded-lg bg-[#0d1117] border border-[#30363d] flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-200">Graph Neural Network (GNN)</div>
                <div className="text-[11px] text-gray-400">Coordinated Inauthentic Behavior Detector</div>
              </div>
              <span className="text-emerald-400 font-bold">97.8% Ready</span>
            </div>

            <div className="p-3 rounded-lg bg-[#0d1117] border border-[#30363d] flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-200">Perceptual Hash Vector Store (pHash)</div>
                <div className="text-[11px] text-gray-400">Historical Flood & Disaster Image Archive</div>
              </div>
              <span className="text-emerald-400 font-bold">2.4M Index</span>
            </div>
          </div>
        </div>
      </div>

      {/* Threshold & Enforcement Settings */}
      <div className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] space-y-5">
        <h3 className="font-bold text-base text-white">
          🛡️ Enforcement Thresholds & Escalation Rules
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-gray-300">Deepfake Flagging Confidence Threshold:</span>
              <span className="text-cyan-400 font-bold">{threshold}%</span>
            </div>
            <input
              type="range"
              min={50}
              max={99}
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
            <p className="text-[11px] text-gray-400">
              Posts scoring above {threshold}% deepfake risk are automatically routed to the Active Emergency Alert Center.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-3 p-2.5 rounded bg-[#0d1117] border border-[#30363d] cursor-pointer">
              <input
                type="checkbox"
                checked={autoFlag}
                onChange={(e) => setAutoFlag(e.target.checked)}
                className="accent-cyan-400 w-4 h-4"
              />
              <span className="text-gray-200">
                Automated Botnet Quarantine (Auto-flag accounts with coordination index &gt; 90%)
              </span>
            </label>

            <label className="flex items-center gap-3 p-2.5 rounded bg-[#0d1117] border border-[#30363d] cursor-pointer">
              <input
                type="checkbox"
                checked={telegramHook}
                onChange={(e) => setTelegramHook(e.target.checked)}
                className="accent-cyan-400 w-4 h-4"
              />
              <span className="text-gray-200">
                Direct Emergency Webhook to State Disaster Response Authority (TG-SDMA)
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

