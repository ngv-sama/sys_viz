import React, { useState, useEffect, useMemo } from 'react';
import { Principle } from '../data/principles';

interface VisualizationProps {
  principle: Principle;
  isHovered: boolean;
}

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  size: number;
}

interface Connection {
  from: string;
  to: string;
  animated?: boolean;
}

const generateVisualization = (principle: Principle): { nodes: Node[]; connections: Connection[] } => {
  const patterns: Record<string, () => { nodes: Node[]; connections: Connection[] }> = {
    'Load Balancing': () => ({
      nodes: [
        { id: 'lb', x: 150, y: 40, label: 'LB', size: 24 },
        { id: 's1', x: 60, y: 120, label: 'S1', size: 18 },
        { id: 's2', x: 150, y: 120, label: 'S2', size: 18 },
        { id: 's3', x: 240, y: 120, label: 'S3', size: 18 },
      ],
      connections: [
        { from: 'lb', to: 's1', animated: true },
        { from: 'lb', to: 's2', animated: true },
        { from: 'lb', to: 's3', animated: true },
      ],
    }),
    'Horizontal Scaling': () => ({
      nodes: [
        { id: 'n1', x: 50, y: 80, label: 'N1', size: 18 },
        { id: 'n2', x: 110, y: 80, label: 'N2', size: 18 },
        { id: 'n3', x: 170, y: 80, label: 'N3', size: 18 },
        { id: 'n4', x: 230, y: 80, label: '+', size: 18 },
      ],
      connections: [
        { from: 'n1', to: 'n2' },
        { from: 'n2', to: 'n3' },
        { from: 'n3', to: 'n4', animated: true },
      ],
    }),
    'Database Sharding': () => ({
      nodes: [
        { id: 'db', x: 150, y: 30, label: 'DB', size: 22 },
        { id: 's1', x: 50, y: 100, label: 'A-H', size: 16 },
        { id: 's2', x: 150, y: 100, label: 'I-P', size: 16 },
        { id: 's3', x: 250, y: 100, label: 'Q-Z', size: 16 },
      ],
      connections: [
        { from: 'db', to: 's1', animated: true },
        { from: 'db', to: 's2', animated: true },
        { from: 'db', to: 's3', animated: true },
      ],
    }),
    'Caching': () => ({
      nodes: [
        { id: 'client', x: 50, y: 80, label: 'C', size: 18 },
        { id: 'cache', x: 150, y: 80, label: '$', size: 22 },
        { id: 'db', x: 250, y: 80, label: 'DB', size: 18 },
      ],
      connections: [
        { from: 'client', to: 'cache', animated: true },
        { from: 'cache', to: 'db' },
      ],
    }),
    'Message Queues': () => ({
      nodes: [
        { id: 'p1', x: 50, y: 60, label: 'P', size: 16 },
        { id: 'p2', x: 50, y: 110, label: 'P', size: 16 },
        { id: 'q', x: 150, y: 85, label: 'Q', size: 24 },
        { id: 'c1', x: 250, y: 60, label: 'C', size: 16 },
        { id: 'c2', x: 250, y: 110, label: 'C', size: 16 },
      ],
      connections: [
        { from: 'p1', to: 'q', animated: true },
        { from: 'p2', to: 'q', animated: true },
        { from: 'q', to: 'c1', animated: true },
        { from: 'q', to: 'c2', animated: true },
      ],
    }),
    'Microservices Architecture': () => ({
      nodes: [
        { id: 'api', x: 150, y: 30, label: 'API', size: 20 },
        { id: 's1', x: 60, y: 90, label: 'Auth', size: 14 },
        { id: 's2', x: 150, y: 90, label: 'User', size: 14 },
        { id: 's3', x: 240, y: 90, label: 'Order', size: 14 },
        { id: 's4', x: 105, y: 140, label: 'Pay', size: 14 },
        { id: 's5', x: 195, y: 140, label: 'Ship', size: 14 },
      ],
      connections: [
        { from: 'api', to: 's1' },
        { from: 'api', to: 's2' },
        { from: 'api', to: 's3' },
        { from: 's2', to: 's4', animated: true },
        { from: 's3', to: 's5', animated: true },
      ],
    }),
    'Circuit Breaker': () => ({
      nodes: [
        { id: 'client', x: 50, y: 80, label: 'C', size: 18 },
        { id: 'cb', x: 150, y: 80, label: 'CB', size: 24 },
        { id: 'service', x: 250, y: 80, label: 'S', size: 18 },
      ],
      connections: [
        { from: 'client', to: 'cb', animated: true },
        { from: 'cb', to: 'service' },
      ],
    }),
    'CDN (Content Delivery Network)': () => ({
      nodes: [
        { id: 'origin', x: 150, y: 30, label: 'Origin', size: 18 },
        { id: 'e1', x: 50, y: 100, label: 'Edge', size: 14 },
        { id: 'e2', x: 150, y: 100, label: 'Edge', size: 14 },
        { id: 'e3', x: 250, y: 100, label: 'Edge', size: 14 },
        { id: 'u1', x: 50, y: 150, label: 'U', size: 12 },
        { id: 'u2', x: 150, y: 150, label: 'U', size: 12 },
        { id: 'u3', x: 250, y: 150, label: 'U', size: 12 },
      ],
      connections: [
        { from: 'origin', to: 'e1' },
        { from: 'origin', to: 'e2' },
        { from: 'origin', to: 'e3' },
        { from: 'e1', to: 'u1', animated: true },
        { from: 'e2', to: 'u2', animated: true },
        { from: 'e3', to: 'u3', animated: true },
      ],
    }),
    'API Gateway': () => ({
      nodes: [
        { id: 'c1', x: 50, y: 50, label: 'Web', size: 14 },
        { id: 'c2', x: 50, y: 100, label: 'App', size: 14 },
        { id: 'gw', x: 150, y: 75, label: 'GW', size: 24 },
        { id: 's1', x: 250, y: 40, label: 'S1', size: 14 },
        { id: 's2', x: 250, y: 75, label: 'S2', size: 14 },
        { id: 's3', x: 250, y: 110, label: 'S3', size: 14 },
      ],
      connections: [
        { from: 'c1', to: 'gw', animated: true },
        { from: 'c2', to: 'gw', animated: true },
        { from: 'gw', to: 's1' },
        { from: 'gw', to: 's2' },
        { from: 'gw', to: 's3' },
      ],
    }),
    'Pub/Sub Pattern': () => ({
      nodes: [
        { id: 'pub', x: 50, y: 80, label: 'Pub', size: 18 },
        { id: 'topic', x: 150, y: 80, label: 'T', size: 24 },
        { id: 'sub1', x: 250, y: 40, label: 'Sub', size: 14 },
        { id: 'sub2', x: 250, y: 80, label: 'Sub', size: 14 },
        { id: 'sub3', x: 250, y: 120, label: 'Sub', size: 14 },
      ],
      connections: [
        { from: 'pub', to: 'topic', animated: true },
        { from: 'topic', to: 'sub1', animated: true },
        { from: 'topic', to: 'sub2', animated: true },
        { from: 'topic', to: 'sub3', animated: true },
      ],
    }),
  };

  // Default pattern for principles without specific visualization
  const defaultPattern = (): { nodes: Node[]; connections: Connection[] } => {
    const nodeCount = 4 + (principle.id % 3);
    const nodes: Node[] = [];
    const connections: Connection[] = [];
    
    // Create a hub-and-spoke or mesh pattern based on principle ID
    if (principle.id % 2 === 0) {
      // Hub and spoke
      nodes.push({ id: 'hub', x: 150, y: 80, label: principle.shortName, size: 24 });
      for (let i = 0; i < nodeCount - 1; i++) {
        const angle = (i / (nodeCount - 1)) * Math.PI * 2 - Math.PI / 2;
        const x = 150 + Math.cos(angle) * 70;
        const y = 80 + Math.sin(angle) * 50;
        nodes.push({ id: `n${i}`, x, y, label: `${i + 1}`, size: 16 });
        connections.push({ from: 'hub', to: `n${i}`, animated: i % 2 === 0 });
      }
    } else {
      // Linear flow
      const spacing = 280 / (nodeCount + 1);
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          id: `n${i}`,
          x: 30 + spacing * (i + 1),
          y: 80 + (i % 2 === 0 ? 0 : 20),
          label: i === 0 ? principle.shortName : `${i}`,
          size: i === 0 ? 22 : 16,
        });
        if (i > 0) {
          connections.push({ from: `n${i - 1}`, to: `n${i}`, animated: i === nodeCount - 1 });
        }
      }
    }
    
    return { nodes, connections };
  };

  return patterns[principle.name]?.() || defaultPattern();
};

export const Visualization: React.FC<VisualizationProps> = ({ principle, isHovered }) => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const { nodes, connections } = useMemo(() => generateVisualization(principle), [principle]);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setAnimationPhase((prev) => (prev + 1) % 100);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const getAnimatedOffset = (animated: boolean) => {
    if (!animated || !isHovered) return 0;
    return animationPhase * 2;
  };

  return (
    <svg
      viewBox="0 0 300 160"
      className="w-full h-full"
      style={{ filter: isHovered ? 'drop-shadow(0 0 20px rgba(0, 122, 255, 0.3))' : 'none' }}
    >
      <defs>
        <linearGradient id={`grad-${principle.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={principle.color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={principle.color} stopOpacity="0.4" />
        </linearGradient>
        <filter id={`glow-${principle.id}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connections */}
      {connections.map((conn, idx) => {
        const fromNode = nodes.find((n) => n.id === conn.from);
        const toNode = nodes.find((n) => n.id === conn.to);
        if (!fromNode || !toNode) return null;

        return (
          <g key={idx}>
            <line
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={principle.color}
              strokeWidth={isHovered ? 2 : 1.5}
              strokeOpacity={isHovered ? 0.8 : 0.4}
              strokeDasharray={conn.animated ? '8 4' : 'none'}
              strokeDashoffset={getAnimatedOffset(conn.animated || false)}
              style={{
                transition: 'stroke-opacity 0.3s ease, stroke-width 0.3s ease',
              }}
            />
            {/* Animated particle */}
            {conn.animated && isHovered && (
              <circle
                r="3"
                fill={principle.color}
                filter={`url(#glow-${principle.id})`}
              >
                <animateMotion
                  dur="1.5s"
                  repeatCount="indefinite"
                  path={`M${fromNode.x},${fromNode.y} L${toNode.x},${toNode.y}`}
                />
              </circle>
            )}
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <g
          key={node.id}
          style={{
            transform: isHovered
              ? `translate(${Math.sin(animationPhase * 0.1 + idx) * 2}px, ${Math.cos(animationPhase * 0.1 + idx) * 2}px)`
              : 'none',
            transition: 'transform 0.3s ease',
          }}
        >
          {/* Outer glow ring */}
          {isHovered && (
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size + 6}
              fill="none"
              stroke={principle.color}
              strokeWidth="1"
              strokeOpacity="0.3"
            >
              <animate
                attributeName="r"
                values={`${node.size + 4};${node.size + 8};${node.size + 4}`}
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.1;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          )}
          
          {/* Main node */}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill={`url(#grad-${principle.id})`}
            stroke={principle.color}
            strokeWidth={isHovered ? 2 : 1}
            filter={isHovered ? `url(#glow-${principle.id})` : 'none'}
            style={{
              transition: 'all 0.3s ease',
            }}
          />
          
          {/* Node label */}
          <text
            x={node.x}
            y={node.y}
            textAnchor="middle"
            dominantBaseline="central"
            fill="white"
            fontSize={node.size * 0.6}
            fontWeight="600"
            style={{ pointerEvents: 'none' }}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default Visualization;
