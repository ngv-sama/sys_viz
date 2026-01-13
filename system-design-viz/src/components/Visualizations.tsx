"use client";

import { motion } from "framer-motion";

interface VisualizationProps {
  isHovered: boolean;
}

export const LoadBalancingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect
      x="75" y="10" width="50" height="30" rx="4"
      fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="2"
      animate={{ scale: isHovered ? 1.05 : 1 }}
    />
    <text x="100" y="30" textAnchor="middle" fill="white" fontSize="10">LB</text>
    {[30, 100, 170].map((x, i) => (
      <g key={i}>
        <motion.line
          x1="100" y1="40" x2={x} y2="80"
          stroke="#0071e3" strokeWidth="2"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
        />
        <motion.rect
          x={x - 20} y="80" width="40" height="30" rx="4"
          fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1"
          animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
        <text x={x} y="100" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Server {i + 1}</text>
      </g>
    ))}
  </svg>
);

export const HorizontalScalingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[0, 1, 2, 3].map((i) => (
      <motion.g key={i}>
        <motion.rect
          x={20 + i * 45} y="50" width="35" height="50" rx="4"
          fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1.5"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isHovered ? 1 : i < 2 ? 1 : 0.3,
            x: 0,
            scale: isHovered ? [1, 1.05, 1] : 1
          }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
        <text x={37 + i * 45} y="80" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Node</text>
      </motion.g>
    ))}
    <motion.text
      x="100" y="130" textAnchor="middle" fill="#0071e3" fontSize="10"
      animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.7 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      + Add More Nodes
    </motion.text>
  </svg>
);

export const CachingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect
      x="20" y="55" width="40" height="40" rx="4"
      fill="rgba(255, 255, 255, 0.1)" stroke="white" strokeWidth="1"
    />
    <text x="40" y="80" textAnchor="middle" fill="white" fontSize="8">Client</text>
    <motion.rect
      x="80" y="45" width="40" height="60" rx="4"
      fill="rgba(0, 113, 227, 0.4)" stroke="#0071e3" strokeWidth="2"
      animate={{ boxShadow: isHovered ? "0 0 20px #0071e3" : "none" }}
    />
    <text x="100" y="75" textAnchor="middle" fill="white" fontSize="8">Cache</text>
    <motion.text
      x="100" y="90" textAnchor="middle" fill="#4ade80" fontSize="7"
      animate={{ opacity: isHovered ? [0, 1, 0] : 0 }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      HIT!
    </motion.text>
    <motion.rect
      x="140" y="55" width="40" height="40" rx="4"
      fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"
    />
    <text x="160" y="80" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">DB</text>
    <motion.line
      x1="60" y1="75" x2="80" y2="75"
      stroke="#0071e3" strokeWidth="2"
      animate={{ pathLength: isHovered ? [0, 1] : 1 }}
      transition={{ duration: 0.5, repeat: Infinity }}
    />
  </svg>
);

export const MicroservicesViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[
      { x: 100, y: 30, label: "API" },
      { x: 40, y: 80, label: "Auth" },
      { x: 100, y: 80, label: "Users" },
      { x: 160, y: 80, label: "Orders" },
      { x: 70, y: 120, label: "DB" },
      { x: 130, y: 120, label: "Queue" },
    ].map((node, i) => (
      <g key={i}>
        <motion.circle
          cx={node.x} cy={node.y} r="20"
          fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1.5"
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
            opacity: isHovered ? [0.7, 1, 0.7] : 0.8
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
        <text x={node.x} y={node.y + 4} textAnchor="middle" fill="white" fontSize="8">{node.label}</text>
      </g>
    ))}
    {[[100,30,40,80], [100,30,100,80], [100,30,160,80], [40,80,70,120], [100,80,70,120], [160,80,130,120]].map((coords, i) => (
      <motion.line
        key={i}
        x1={coords[0]} y1={coords[1]} x2={coords[2]} y2={coords[3]}
        stroke="rgba(0, 113, 227, 0.5)" strokeWidth="1"
        animate={{ opacity: isHovered ? [0.3, 0.8, 0.3] : 0.4 }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
      />
    ))}
  </svg>
);

export const CircuitBreakerViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect
      x="20" y="55" width="40" height="40" rx="4"
      fill="rgba(255, 255, 255, 0.1)" stroke="white" strokeWidth="1"
    />
    <text x="40" y="80" textAnchor="middle" fill="white" fontSize="8">Service</text>
    <motion.circle
      cx="100" cy="75" r="25"
      fill="none" stroke={isHovered ? "#4ade80" : "#ef4444"} strokeWidth="3"
      animate={{
        stroke: isHovered ? ["#ef4444", "#4ade80"] : "#ef4444"
      }}
      transition={{ duration: 2 }}
    />
    <motion.path
      d="M 85 75 L 100 75 L 100 60"
      fill="none" stroke={isHovered ? "#4ade80" : "#ef4444"} strokeWidth="3" strokeLinecap="round"
      animate={{ rotate: isHovered ? 90 : 0 }}
      style={{ originX: "100px", originY: "75px" }}
    />
    <motion.rect
      x="140" y="55" width="40" height="40" rx="4"
      fill="rgba(255, 255, 255, 0.1)" stroke="white" strokeWidth="1"
    />
    <text x="160" y="80" textAnchor="middle" fill="white" fontSize="8">External</text>
    <text x="100" y="120" textAnchor="middle" fill={isHovered ? "#4ade80" : "#ef4444"} fontSize="10">
      {isHovered ? "CLOSED" : "OPEN"}
    </text>
  </svg>
);

export const MessageQueueViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="20" y="55" width="35" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="37" y="80" textAnchor="middle" fill="white" fontSize="7">Producer</text>
    <rect x="70" y="45" width="60" height="60" rx="4" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    {[0, 1, 2, 3].map((i) => (
      <motion.rect
        key={i}
        x={75 + i * 13} y="55" width="10" height="40" rx="2"
        fill="rgba(0, 113, 227, 0.4)"
        animate={{
          x: isHovered ? [75 + i * 13, 85 + i * 13, 75 + i * 13] : 75 + i * 13,
          opacity: isHovered ? [0.5, 1, 0.5] : 0.7
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
    <text x="100" y="115" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Queue</text>
    <rect x="145" y="55" width="35" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="162" y="80" textAnchor="middle" fill="white" fontSize="7">Consumer</text>
  </svg>
);

export const DatabaseShardingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="75" y="10" width="50" height="30" rx="4" fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="2" />
    <text x="100" y="30" textAnchor="middle" fill="white" fontSize="9">Router</text>
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <motion.line
          x1="100" y1="40" x2={40 + i * 60} y2="70"
          stroke="#0071e3" strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
        />
        <motion.g
          animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        >
          <rect x={20 + i * 60} y="70" width="40" height="50" rx="4" fill="rgba(0, 113, 227, 0.15)" stroke="#0071e3" strokeWidth="1" />
          {[0, 1, 2].map((j) => (
            <rect key={j} x={25 + i * 60} y={78 + j * 14} width="30" height="10" rx="2" fill="rgba(0, 113, 227, 0.3)" />
          ))}
        </motion.g>
        <text x={40 + i * 60} y="135" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Shard {i + 1}</text>
      </g>
    ))}
  </svg>
);

export const CDNViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.circle
      cx="100" cy="75" r="35"
      fill="none" stroke="rgba(0, 113, 227, 0.3)" strokeWidth="1" strokeDasharray="4 2"
      animate={{ rotate: isHovered ? 360 : 0 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <circle cx="100" cy="75" r="15" fill="rgba(0, 113, 227, 0.4)" stroke="#0071e3" strokeWidth="2" />
    <text x="100" y="79" textAnchor="middle" fill="white" fontSize="7">Origin</text>
    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 100 + Math.cos(rad) * 50;
      const y = 75 + Math.sin(rad) * 50;
      return (
        <motion.g key={i}>
          <motion.circle
            cx={x} cy={y} r="12"
            fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.5, 1, 0.5] : 0.7
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
          />
          <text x={x} y={y + 3} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="6">Edge</text>
        </motion.g>
      );
    })}
  </svg>
);

export const EventDrivenViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="80" y="50" width="40" height="50" rx="4" fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="2" />
    <text x="100" y="80" textAnchor="middle" fill="white" fontSize="8">Event Bus</text>
    {[
      { x: 30, y: 40, label: "P1" },
      { x: 30, y: 90, label: "P2" },
      { x: 170, y: 40, label: "S1" },
      { x: 170, y: 70, label: "S2" },
      { x: 170, y: 100, label: "S3" },
    ].map((node, i) => (
      <g key={i}>
        <motion.rect
          x={node.x - 15} y={node.y - 12} width="30" height="24" rx="4"
          fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"
          animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
        />
        <text x={node.x} y={node.y + 4} textAnchor="middle" fill="white" fontSize="8">{node.label}</text>
      </g>
    ))}
    {[[45, 40, 80, 60], [45, 90, 80, 90]].map((c, i) => (
      <motion.line
        key={i} x1={c[0]} y1={c[1]} x2={c[2]} y2={c[3]}
        stroke="#0071e3" strokeWidth="2"
        animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
    {[[120, 60, 155, 40], [120, 75, 155, 70], [120, 90, 155, 100]].map((c, i) => (
      <motion.line
        key={i} x1={c[0]} y1={c[1]} x2={c[2]} y2={c[3]}
        stroke="#0071e3" strokeWidth="2"
        animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 + i * 0.1 }}
      />
    ))}
  </svg>
);

export const APIGatewayViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[30, 60, 90].map((y, i) => (
      <g key={i}>
        <rect x="10" y={y - 10} width="30" height="20" rx="4" fill="rgba(255, 255, 255, 0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <text x="25" y={y + 4} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7">Client</text>
        <motion.line
          x1="40" y1={y} x2="70" y2="75"
          stroke="rgba(0, 113, 227, 0.5)" strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      </g>
    ))}
    <motion.rect
      x="70" y="45" width="40" height="60" rx="4"
      fill="rgba(0, 113, 227, 0.4)" stroke="#0071e3" strokeWidth="2"
      animate={{ boxShadow: isHovered ? "0 0 20px rgba(0,113,227,0.5)" : "none" }}
    />
    <text x="90" y="70" textAnchor="middle" fill="white" fontSize="7">API</text>
    <text x="90" y="82" textAnchor="middle" fill="white" fontSize="7">Gateway</text>
    {[45, 75, 105].map((y, i) => (
      <g key={i}>
        <motion.line
          x1="110" y1="75" x2="140" y2={y}
          stroke="rgba(0, 113, 227, 0.5)" strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 + i * 0.2 }}
        />
        <rect x="140" y={y - 10} width="40" height="20" rx="4" fill="rgba(0, 113, 227, 0.15)" stroke="#0071e3" strokeWidth="1" />
        <text x="160" y={y + 4} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7">Service</text>
      </g>
    ))}
  </svg>
);

export const DefaultViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.circle
      cx="100" cy="75" r="40"
      fill="none" stroke="rgba(0, 113, 227, 0.3)" strokeWidth="2"
      animate={{
        scale: isHovered ? [1, 1.1, 1] : 1,
        opacity: isHovered ? [0.5, 1, 0.5] : 0.7
      }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="100" cy="75" r="25"
      fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 0.9, 1] : 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="100" cy="75" r="10"
      fill="#0071e3"
      animate={{
        scale: isHovered ? [1, 1.3, 1] : 1,
        opacity: isHovered ? [1, 0.7, 1] : 1
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

export const getVisualization = (id: string) => {
  const visualizations: Record<string, React.FC<VisualizationProps>> = {
    "load-balancing": LoadBalancingViz,
    "horizontal-scaling": HorizontalScalingViz,
    "caching": CachingViz,
    "microservices": MicroservicesViz,
    "circuit-breaker": CircuitBreakerViz,
    "message-queues": MessageQueueViz,
    "database-sharding": DatabaseShardingViz,
    "cdn": CDNViz,
    "event-driven": EventDrivenViz,
    "api-gateway": APIGatewayViz,
  };
  return visualizations[id] || DefaultViz;
};
