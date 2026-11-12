'use client';

import { useState, useRef, useEffect } from 'react';
import { NETWORK_NODES, NETWORK_EDGES } from '@/lib/mock-data';
import { NetworkNode } from '@/types';

export default function NetworkPage() {
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(NETWORK_NODES[0]);
  const [filterRole, setFilterRole] = useState<string>('all');
  const [hoveredNode, setHoveredNode] = useState<NetworkNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const filteredNodes = NETWORK_NODES.filter(
    (n) => filterRole === 'all' || n.role === filterRole
  );

  // Draw Interactive Canvas Network Graph
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw cluster background glow
      ctx.save();
      const grad = ctx.createRadialGradient(centerX - 80, centerY, 10, centerX - 80, centerY, 220);
      grad.addColorStop(0, 'rgba(239, 68, 68, 0.15)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX - 80, centerY, 220, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Authority cluster glow
      ctx.save();
      const gradAuth = ctx.createRadialGradient(centerX + 180, centerY, 10, centerX + 180, centerY, 140);
      gradAuth.addColorStop(0, 'rgba(16, 185, 129, 0.15)');
      gradAuth.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradAuth;
      ctx.beginPath();
      ctx.arc(centerX + 180, centerY, 140, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Node coordinate calculation
      const nodePositions: { [id: string]: { x: number; y: number; node: NetworkNode } } = {};

      filteredNodes.forEach((node, index) => {
        let x = centerX;
        let y = centerY;

        if (node.role === 'authentic_authority') {
          const a = (index / 3) * Math.PI * 2 + 0.5;
          x = centerX + 180 + Math.cos(a) * 65;
          y = centerY + Math.sin(a) * 65;
        } else if (node.role === 'ringleader') {
          const a = (index * Math.PI) + 0.3;
          x = centerX - 80 + Math.cos(a) * 55;
          y = centerY + Math.sin(a) * 55;
        } else if (node.role === 'amplifier') {
          const a = (index * 1.8) + angle * 0.1;
          x = centerX - 80 + Math.cos(a) * 110;
          y = centerY + Math.sin(a) * 110;
        } else if (node.role === 'bot') {
          const a = (index * 1.2) + angle * 0.05;
          x = centerX - 80 + Math.cos(a) * 165;
          y = centerY + Math.sin(a) * 165;
        } else {
          x = centerX + 40;
          y = centerY - 140;
        }

        nodePositions[node.id] = { x, y, node };
      });

      // Draw Edges
      NETWORK_EDGES.forEach((edge) => {
        const from = nodePositions[edge.source];
        const to = nodePositions[edge.target];
        if (!from || !to) return;

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle =
          edge.interactionType === 'retweet'
            ? 'rgba(239, 68, 68, 0.4)'
            : edge.interactionType === 'cross_post'
            ? 'rgba(245, 158, 11, 0.4)'
            : 'rgba(56, 189, 248, 0.3)';
        ctx.lineWidth = edge.weight > 4 ? 2 : 1;
        ctx.stroke();
      });

      // Draw Nodes
      filteredNodes.forEach((node) => {
        const pos = nodePositions[node.id];
        if (!pos) return;

        const isSelected = selectedNode?.id === node.id;
        const isHovered = hoveredNode?.id === node.id;
        const radius = (node.role === 'ringleader' ? 16 : node.role === 'authentic_authority' ? 14 : 10) + (isHovered ? 4 : 0);

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);

        if (node.role === 'authentic_authority') {
          ctx.fillStyle = '#10b981';
        } else if (node.role === 'ringleader') {
          ctx.fillStyle = '#ef4444';
        } else if (node.role === 'amplifier') {
          ctx.fillStyle = '#f59e0b';
        } else if (node.role === 'bot') {
          ctx.fillStyle = '#f87171';
        } else {
          ctx.fillStyle = '#6b7280';
        }
        ctx.fill();

        if (isSelected || isHovered) {
          ctx.lineWidth = 3;
          ctx.strokeStyle = '#22d3ee';
          ctx.stroke();
        }

        // Label
        ctx.fillStyle = '#e6edf3';
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, pos.x, pos.y + radius + 14);
      });

      angle += 0.01;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [filteredNodes, selectedNode, hoveredNode]);

  // Click on canvas to select node
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Check proximity to any node
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < filteredNodes.length; i++) {
      const node = filteredNodes[i];
      let x = centerX;
      let y = centerY;
      if (node.role === 'authentic_authority') {
        const a = (i / 3) * Math.PI * 2 + 0.5;
        x = centerX + 180 + Math.cos(a) * 65;
        y = centerY + Math.sin(a) * 65;
      } else if (node.role === 'ringleader') {
        const a = (i * Math.PI) + 0.3;
        x = centerX - 80 + Math.cos(a) * 55;
        y = centerY + Math.sin(a) * 55;
      } else if (node.role === 'amplifier') {
        x = centerX - 80 + Math.cos(i * 1.8) * 110;
        y = centerY + Math.sin(i * 1.8) * 110;
      } else if (node.role === 'bot') {
        x = centerX - 80 + Math.cos(i * 1.2) * 165;
        y = centerY + Math.sin(i * 1.2) * 165;
      }

      const dist = Math.hypot(clickX - x, clickY - y);
      if (dist < 25) {
        setSelectedNode(node);
        break;
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#30363d] pb-5">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <span>🕸️ Coordinated Inauthentic Behavior (CIB) Network Graph</span>
          </h1>
          <p className="text-sm text-gray-300">
            Graph Neural Network (GNN) clustering detecting synchronized narrative propagation & bot rings
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-gray-400">FILTER ROLE:</span>
          {['all', 'ringleader', 'bot', 'amplifier', 'authentic_authority'].map((role) => (
            <button
              key={role}
              onClick={() => setFilterRole(role)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                filterRole === role
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-[#161b22] text-gray-400 hover:text-white border border-[#30363d]'
              }`}
            >
              {role === 'authentic_authority' ? 'Authority' : role.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive Canvas Graph + Node Telemetry Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Canvas View */}
        <div className="lg:col-span-2 rounded-xl bg-[#161b22] border border-[#30363d] p-4 flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-red-400">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                Ringleader / Bot
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                Amplifier
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                Authentic Authority
              </span>
            </div>
            <div className="text-xs text-gray-400 font-mono">
              GNN Modularity: <span className="text-cyan-400">0.82 (High Cohesion)</span>
            </div>
          </div>

          <div className="relative rounded-lg bg-[#0a0a0f] border border-[#30363d] overflow-hidden">
            <canvas
              ref={canvasRef}
              width={750}
              height={440}
              onClick={handleCanvasClick}
              className="w-full h-[440px] cursor-pointer"
            />
          </div>

          {/* Temporal Synchronization Indicator */}
          <div className="p-3 rounded-lg bg-[#0d1117] border border-red-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-red-400 font-bold">⏱️ Coordinated Burst Anomaly:</span>
              <span className="text-gray-300">
                8 bot accounts retweeted the dam collapse narrative within <strong>42.4 seconds</strong> of the seed tweet.
              </span>
            </div>
            <span className="text-red-400 font-mono font-bold">p &lt; 0.0001 (Non-organic)</span>
          </div>
        </div>

        {/* Right 1 Col: Account Dossier & Forensics */}
        <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-5 space-y-5">
          <h3 className="font-bold text-sm text-white flex items-center justify-between">
            <span>Account Forensic Dossier</span>
            <span className="text-xs font-mono text-cyan-400">Click Any Node to Inspect</span>
          </h3>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap gap-1.5">
            {filteredNodes.map((n) => (
              <button
                key={n.id}
                onClick={() => setSelectedNode(n)}
                className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                  selectedNode?.id === n.id
                    ? 'bg-cyan-500 text-black font-bold'
                    : 'bg-[#0d1117] text-gray-400 border border-[#30363d] hover:text-white'
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>

          {selectedNode && (
            <div className="space-y-4 pt-2 border-t border-[#30363d]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-base text-gray-100">{selectedNode.label}</div>
                  <div className="text-xs text-gray-400 font-mono">{selectedNode.accountHandle}</div>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold font-mono border ${
                  selectedNode.riskScore > 70
                    ? 'bg-red-500/10 text-red-400 border-red-500/30'
                    : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                }`}>
                  Risk: {selectedNode.riskScore}%
                </span>
              </div>

              {/* Forensic Metrics */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-[#0d1117] border border-[#30363d]">
                  <div className="text-gray-400 text-[11px]">Coordination Index</div>
                  <div className="text-base font-bold text-red-400 mt-0.5">{selectedNode.coordinationIndex}%</div>
                </div>
                <div className="p-2.5 rounded bg-[#0d1117] border border-[#30363d]">
                  <div className="text-gray-400 text-[11px]">Account Age</div>
                  <div className="text-base font-bold text-gray-200 mt-0.5">{selectedNode.accountAgeDays} days</div>
                </div>
                <div className="p-2.5 rounded bg-[#0d1117] border border-[#30363d]">
                  <div className="text-gray-400 text-[11px]">Primary Language</div>
                  <div className="text-base font-bold text-cyan-400 mt-0.5">{selectedNode.language}</div>
                </div>
                <div className="p-2.5 rounded bg-[#0d1117] border border-[#30363d]">
                  <div className="text-gray-400 text-[11px]">Cluster Group</div>
                  <div className="text-base font-bold text-indigo-400 mt-0.5">Cluster #{selectedNode.clusterId}</div>
                </div>
              </div>

              {/* Behavior Analysis */}
              <div className="p-3 rounded-lg bg-[#0d1117] border border-[#30363d] space-y-1.5 text-xs">
                <div className="font-semibold text-gray-200">Behavioral Heuristic:</div>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {selectedNode.role === 'ringleader'
                    ? 'Serves as the primary content seeder. Employs multi-language variants to initiate rapid cross-platform saturation.'
                    : selectedNode.role === 'bot'
                    ? 'Automated profile created 4 days ago. Zero personal interactions. Only retweets identical payload hashes within 5 seconds.'
                    : selectedNode.role === 'authentic_authority'
                    ? 'Verified institutional account. Publishes ground-truth sensor updates and official press bulletins.'
                    : 'Amplifier account with high follower base used to launder synthetic media into mainstream feeds.'}
                </p>
              </div>

              {/* Enforcement Action Button */}
              {selectedNode.role !== 'authentic_authority' && (
                <button className="w-full py-2 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-red-600/30 text-xs font-mono font-bold transition-all">
                  🚨 Flag Account to Cyber Crime Cell
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
