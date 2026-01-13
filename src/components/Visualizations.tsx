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

export const VerticalScalingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect
      x="70" y="20" width="60" height="100" rx="4"
      fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="2"
      animate={{ height: isHovered ? 110 : 80, y: isHovered ? 15 : 35 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    />
    {[0, 1, 2, 3].map((i) => (
      <motion.rect
        key={i}
        x="80" y={30 + i * 22} width="40" height="16" rx="2"
        fill="rgba(0, 113, 227, 0.5)"
        animate={{ opacity: isHovered ? (i < 3 ? 1 : [0, 1]) : (i < 2 ? 1 : 0.2) }}
        transition={{ duration: 0.8, delay: i * 0.2 }}
      />
    ))}
    <text x="100" y="140" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9">+ CPU / RAM</text>
  </svg>
);

export const DatabaseReplicationViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect
      x="75" y="20" width="50" height="40" rx="4"
      fill="rgba(0, 113, 227, 0.4)" stroke="#0071e3" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="45" textAnchor="middle" fill="white" fontSize="8">Primary</text>
    {[30, 100, 170].map((x, i) => (
      <g key={i}>
        <motion.line
          x1="100" y1="60" x2={x} y2="85"
          stroke="#0071e3" strokeWidth="1.5" strokeDasharray="4 2"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
        />
        <motion.rect
          x={x - 25} y="85" width="50" height="35" rx="4"
          fill="rgba(0, 113, 227, 0.15)" stroke="#0071e3" strokeWidth="1"
          animate={{ opacity: isHovered ? [0.6, 1, 0.6] : 0.7 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
        <text x={x} y="107" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7">Replica {i + 1}</text>
      </g>
    ))}
  </svg>
);

export const RateLimitingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.circle
        key={i}
        cx={30 + i * 15} cy="40" r="8"
        fill={i < 3 ? "#4ade80" : "#ef4444"}
        animate={{
          x: isHovered ? [0, 60, 0] : 0,
          opacity: isHovered ? (i < 3 ? [0.5, 1, 0.5] : [1, 0.3, 1]) : 1
        }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
    <rect x="120" y="25" width="10" height="50" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
    <motion.rect
      x="120" y="45" width="10" height="30" rx="2"
      fill="#0071e3"
      animate={{ height: isHovered ? [30, 10, 30] : 30, y: isHovered ? [45, 65, 45] : 45 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <rect x="150" y="30" width="40" height="30" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="170" y="50" textAnchor="middle" fill="white" fontSize="8">API</text>
    <motion.text
      x="100" y="100" textAnchor="middle" fill={isHovered ? "#4ade80" : "rgba(255,255,255,0.7)"} fontSize="10"
      animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.7 }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      {isHovered ? "3/5 allowed" : "Rate Limited"}
    </motion.text>
  </svg>
);

export const EventualConsistencyViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[40, 100, 160].map((x, i) => (
      <g key={i}>
        <motion.circle
          cx={x} cy="60" r="25"
          fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1.5"
        />
        <motion.circle
          cx={x} cy="60" r="10"
          fill={isHovered ? "#4ade80" : (i === 0 ? "#4ade80" : "#fbbf24")}
          animate={{
            fill: isHovered ? "#4ade80" : (i === 0 ? "#4ade80" : "#fbbf24")
          }}
          transition={{ duration: 0.5, delay: isHovered ? i * 0.5 : 0 }}
        />
        <text x={x} y="100" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Node {i + 1}</text>
      </g>
    ))}
    <motion.path
      d="M 65 60 Q 100 40 135 60"
      fill="none" stroke="rgba(0, 113, 227, 0.5)" strokeWidth="1.5" strokeDasharray="4 2"
      animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
      transition={{ duration: 1, repeat: Infinity }}
    />
    <text x="100" y="130" textAnchor="middle" fill={isHovered ? "#4ade80" : "#fbbf24"} fontSize="10">
      {isHovered ? "Consistent!" : "Syncing..."}
    </text>
  </svg>
);

export const CAPTheoremViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.polygon
      points="100,20 170,120 30,120"
      fill="none" stroke="#0071e3" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    {[
      { x: 100, y: 25, label: "C", full: "Consistency" },
      { x: 170, y: 125, label: "A", full: "Availability" },
      { x: 30, y: 125, label: "P", full: "Partition" }
    ].map((node, i) => (
      <g key={i}>
        <motion.circle
          cx={node.x} cy={node.y} r="18"
          fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="2"
          animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
        <text x={node.x} y={node.y + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{node.label}</text>
      </g>
    ))}
    <motion.text
      x="100" y="85" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8"
      animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.6 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      Pick Two
    </motion.text>
  </svg>
);

export const ACIDViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[
      { x: 50, y: 40, label: "A", color: "#ef4444" },
      { x: 150, y: 40, label: "C", color: "#fbbf24" },
      { x: 50, y: 110, label: "I", color: "#4ade80" },
      { x: 150, y: 110, label: "D", color: "#0071e3" }
    ].map((item, i) => (
      <g key={i}>
        <motion.rect
          x={item.x - 30} y={item.y - 25} width="60" height="50" rx="8"
          fill={`${item.color}20`} stroke={item.color} strokeWidth="2"
          animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
        <text x={item.x} y={item.y + 5} textAnchor="middle" fill={item.color} fontSize="20" fontWeight="bold">{item.label}</text>
      </g>
    ))}
    <motion.rect
      x="70" y="55" width="60" height="40" rx="4"
      fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 2"
      animate={{ opacity: isHovered ? [0.3, 0.7, 0.3] : 0.3 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

export const BASEViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect
      x="30" y="30" width="140" height="90" rx="8"
      fill="rgba(0, 113, 227, 0.1)" stroke="#0071e3" strokeWidth="1" strokeDasharray="4 2"
    />
    {[
      { y: 50, label: "Basically Available", color: "#4ade80" },
      { y: 75, label: "Soft State", color: "#fbbf24" },
      { y: 100, label: "Eventually Consistent", color: "#0071e3" }
    ].map((item, i) => (
      <g key={i}>
        <motion.circle
          cx="50" cy={item.y} r="8"
          fill={item.color}
          animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
        <text x="70" y={item.y + 4} fill="rgba(255,255,255,0.8)" fontSize="10">{item.label}</text>
      </g>
    ))}
  </svg>
);

export const IdempotencyViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="20" y="50" width="40" height="30" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="40" y="70" textAnchor="middle" fill="white" fontSize="8">Request</text>
    {[0, 1, 2].map((i) => (
      <motion.g key={i}>
        <motion.line
          x1="60" y1={55 + i * 10} x2="100" y2="75"
          stroke="#0071e3" strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
        />
      </motion.g>
    ))}
    <motion.rect
      x="100" y="55" width="50" height="40" rx="4"
      fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="125" y="80" textAnchor="middle" fill="white" fontSize="8">f(x) = y</text>
    <motion.rect
      x="160" y="60" width="30" height="30" rx="4"
      fill="rgba(74, 222, 128, 0.2)" stroke="#4ade80" strokeWidth="2"
    />
    <text x="175" y="80" textAnchor="middle" fill="#4ade80" fontSize="10">= y</text>
    <text x="100" y="120" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Same result every time</text>
  </svg>
);

export const TwoPhaseCommitViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect
      x="75" y="10" width="50" height="30" rx="4"
      fill="rgba(0, 113, 227, 0.4)" stroke="#0071e3" strokeWidth="2"
    />
    <text x="100" y="30" textAnchor="middle" fill="white" fontSize="8">Coordinator</text>
    {[30, 100, 170].map((x, i) => (
      <g key={i}>
        <motion.line
          x1="100" y1="40" x2={x} y2="70"
          stroke={isHovered ? "#4ade80" : "#fbbf24"} strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
        <motion.rect
          x={x - 25} y="70" width="50" height="30" rx="4"
          fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1"
          animate={{ stroke: isHovered ? "#4ade80" : "#0071e3" }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
        />
        <text x={x} y="90" textAnchor="middle" fill="white" fontSize="8">Node {i + 1}</text>
      </g>
    ))}
    <motion.text
      x="100" y="120" textAnchor="middle" fontSize="10"
      fill={isHovered ? "#4ade80" : "#fbbf24"}
    >
      {isHovered ? "Phase 2: Commit" : "Phase 1: Prepare"}
    </motion.text>
  </svg>
);

export const SagaPatternViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <motion.rect
          x={20 + i * 45} y="40" width="35" height="35" rx="4"
          fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1.5"
          animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
        <text x={37 + i * 45} y="62" textAnchor="middle" fill="white" fontSize="8">T{i + 1}</text>
        {i < 3 && (
          <motion.line
            x1={55 + i * 45} y1="57" x2={65 + i * 45} y2="57"
            stroke="#4ade80" strokeWidth="2"
            animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.2 }}
          />
        )}
      </g>
    ))}
    <motion.path
      d="M 155 85 L 110 85 L 65 85 L 20 85"
      fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2"
      animate={{ opacity: isHovered ? [0.3, 0.8, 0.3] : 0.3 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <text x="100" y="100" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Compensating transactions</text>
    <text x="100" y="125" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10">Saga Workflow</text>
  </svg>
);

export const CQRSViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect
      x="20" y="50" width="50" height="50" rx="4"
      fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="45" y="80" textAnchor="middle" fill="#ef4444" fontSize="9">Write</text>
    <motion.rect
      x="130" y="50" width="50" height="50" rx="4"
      fill="rgba(74, 222, 128, 0.2)" stroke="#4ade80" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
    />
    <text x="155" y="80" textAnchor="middle" fill="#4ade80" fontSize="9">Read</text>
    <motion.line
      x1="70" y1="75" x2="130" y2="75"
      stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 2"
    />
    <motion.rect
      x="85" y="60" width="30" height="30" rx="4"
      fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="1"
      animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.7 }}
      transition={{ duration: 1, repeat: Infinity }}
    />
    <text x="100" y="80" textAnchor="middle" fill="white" fontSize="7">Sync</text>
    <text x="100" y="130" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Command Query Separation</text>
  </svg>
);

export const EventSourcingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.g key={i}>
        <motion.rect
          x={15 + i * 36} y="50" width="30" height="25" rx="3"
          fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="1"
          animate={{ y: isHovered ? [50, 45, 50] : 50 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
        />
        <text x={30 + i * 36} y="67" textAnchor="middle" fill="white" fontSize="7">E{i + 1}</text>
        {i < 4 && (
          <motion.line
            x1={45 + i * 36} y1="62" x2={51 + i * 36} y2="62"
            stroke="#0071e3" strokeWidth="2"
            animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
          />
        )}
      </motion.g>
    ))}
    <motion.rect
      x="60" y="95" width="80" height="30" rx="4"
      fill="rgba(74, 222, 128, 0.2)" stroke="#4ade80" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="115" textAnchor="middle" fill="#4ade80" fontSize="9">Current State</text>
    <text x="100" y="20" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Event Stream</text>
  </svg>
);

export const ServiceMeshViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[
      { x: 50, y: 40 }, { x: 150, y: 40 },
      { x: 50, y: 110 }, { x: 150, y: 110 }
    ].map((pos, i) => (
      <g key={i}>
        <motion.rect
          x={pos.x - 20} y={pos.y - 15} width="40" height="30" rx="4"
          fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1.5"
          animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
        />
        <circle cx={pos.x + 15} cy={pos.y - 10} r="6" fill="rgba(74, 222, 128, 0.5)" stroke="#4ade80" strokeWidth="1" />
      </g>
    ))}
    {[[50, 40, 150, 40], [50, 110, 150, 110], [50, 40, 50, 110], [150, 40, 150, 110], [50, 40, 150, 110], [150, 40, 50, 110]].map((c, i) => (
      <motion.line
        key={i}
        x1={c[0]} y1={c[1]} x2={c[2]} y2={c[3]}
        stroke="rgba(74, 222, 128, 0.3)" strokeWidth="1" strokeDasharray="3 2"
        animate={{ opacity: isHovered ? [0.2, 0.6, 0.2] : 0.3 }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
      />
    ))}
    <text x="100" y="80" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Mesh Layer</text>
  </svg>
);

export const SidecarPatternViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect
      x="40" y="35" width="120" height="80" rx="8"
      fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 2"
    />
    <motion.rect
      x="55" y="50" width="50" height="50" rx="4"
      fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="80" y="80" textAnchor="middle" fill="white" fontSize="9">Main App</text>
    <motion.rect
      x="115" y="55" width="35" height="40" rx="4"
      fill="rgba(74, 222, 128, 0.2)" stroke="#4ade80" strokeWidth="1.5"
      animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
    />
    <text x="132" y="80" textAnchor="middle" fill="#4ade80" fontSize="7">Sidecar</text>
    <text x="100" y="130" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Pod / Container</text>
  </svg>
);

export const BackpressureViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="20" y="55" width="35" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="37" y="80" textAnchor="middle" fill="white" fontSize="7">Producer</text>
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.circle
        key={i}
        cx={70 + i * 15} cy="75" r="6"
        fill="#0071e3"
        animate={{
          x: isHovered ? [0, -10, 0] : 0,
          opacity: isHovered ? [1, 0.5, 1] : 1
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
      />
    ))}
    <rect x="145" y="55" width="35" height="40" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1" />
    <text x="162" y="80" textAnchor="middle" fill="#ef4444" fontSize="7">Consumer</text>
    <motion.path
      d="M 145 65 L 130 75 L 145 85"
      fill="none" stroke="#ef4444" strokeWidth="2"
      animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
      transition={{ duration: 0.8, repeat: Infinity }}
    />
    <text x="100" y="120" textAnchor="middle" fill={isHovered ? "#ef4444" : "rgba(255,255,255,0.6)"} fontSize="9">
      {isHovered ? "Slow down!" : "Flow Control"}
    </text>
  </svg>
);

export const BulkheadViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <motion.rect
          x={20 + i * 60} y="30" width="50" height="80" rx="4"
          fill={i === 1 ? "rgba(239, 68, 68, 0.2)" : "rgba(0, 113, 227, 0.2)"}
          stroke={i === 1 ? "#ef4444" : "#0071e3"} strokeWidth="2"
          animate={{ opacity: isHovered ? (i === 1 ? [0.5, 0.8, 0.5] : 1) : 0.8 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <rect x={25 + i * 60} y="35" width="40" height="30" rx="2" fill={i === 1 ? "rgba(239, 68, 68, 0.3)" : "rgba(0, 113, 227, 0.3)"} />
        <rect x={25 + i * 60} y="70" width="40" height="30" rx="2" fill={i === 1 ? "rgba(239, 68, 68, 0.3)" : "rgba(0, 113, 227, 0.3)"} />
        <text x={45 + i * 60} y="125" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Pool {i + 1}</text>
      </g>
    ))}
    <motion.text
      x="100" y="145" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8"
      animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.5 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      Isolated Failure
    </motion.text>
  </svg>
);

export const RetryPatternViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="20" y="55" width="40" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="40" y="80" textAnchor="middle" fill="white" fontSize="8">Client</text>
    <rect x="140" y="55" width="40" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="160" y="80" textAnchor="middle" fill="white" fontSize="8">Service</text>
    {[0, 1, 2].map((i) => (
      <motion.g key={i}>
        <motion.line
          x1="60" y1={65 + i * 10} x2="140" y2={65 + i * 10}
          stroke={i < 2 ? "#ef4444" : "#4ade80"} strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0, 1, 0] : 0.5 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
        />
        <motion.text
          x="100" y={62 + i * 10} textAnchor="middle" fill={i < 2 ? "#ef4444" : "#4ade80"} fontSize="7"
          animate={{ opacity: isHovered ? [0, 1, 0] : 0.5 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
        >
          {i < 2 ? "✗" : "✓"}
        </motion.text>
      </motion.g>
    ))}
    <text x="100" y="120" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Retry with backoff</text>
  </svg>
);

export const TimeoutPatternViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.circle
      cx="100" cy="70" r="35"
      fill="none" stroke="rgba(0, 113, 227, 0.3)" strokeWidth="3"
    />
    <motion.circle
      cx="100" cy="70" r="35"
      fill="none" stroke="#0071e3" strokeWidth="3"
      strokeDasharray="220"
      animate={{ strokeDashoffset: isHovered ? [220, 0] : 220 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.line
      x1="100" y1="70" x2="100" y2="45"
      stroke="white" strokeWidth="2" strokeLinecap="round"
      animate={{ rotate: isHovered ? 360 : 0 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      style={{ originX: "100px", originY: "70px" }}
    />
    <circle cx="100" cy="70" r="4" fill="white" />
    <motion.text
      x="100" y="125" textAnchor="middle" fill={isHovered ? "#ef4444" : "rgba(255,255,255,0.6)"} fontSize="10"
      animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.7 }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      {isHovered ? "Timeout!" : "Time Limit"}
    </motion.text>
  </svg>
);

export const HealthChecksViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[40, 100, 160].map((x, i) => (
      <g key={i}>
        <motion.rect
          x={x - 25} y="40" width="50" height="40" rx="4"
          fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1.5"
        />
        <motion.circle
          cx={x} cy="60" r="10"
          fill={i === 1 ? "rgba(239, 68, 68, 0.5)" : "rgba(74, 222, 128, 0.5)"}
          stroke={i === 1 ? "#ef4444" : "#4ade80"} strokeWidth="2"
          animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
        <text x={x} y="100" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">
          {i === 1 ? "Unhealthy" : "Healthy"}
        </text>
      </g>
    ))}
    <motion.path
      d="M 30 120 L 50 110 L 70 120 L 90 105 L 110 125 L 130 115 L 150 120 L 170 110"
      fill="none" stroke="#4ade80" strokeWidth="2"
      animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.7 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

export const GracefulDegradationViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect
      x="30" y="30" width="140" height="90" rx="8"
      fill="rgba(0, 113, 227, 0.1)" stroke="#0071e3" strokeWidth="1"
    />
    {[
      { x: 60, y: 55, label: "Core", status: true },
      { x: 100, y: 55, label: "Feature A", status: true },
      { x: 140, y: 55, label: "Feature B", status: false },
      { x: 80, y: 95, label: "Feature C", status: true },
      { x: 120, y: 95, label: "Feature D", status: false }
    ].map((item, i) => (
      <g key={i}>
        <motion.rect
          x={item.x - 20} y={item.y - 15} width="40" height="30" rx="4"
          fill={item.status ? "rgba(74, 222, 128, 0.2)" : "rgba(239, 68, 68, 0.2)"}
          stroke={item.status ? "#4ade80" : "#ef4444"} strokeWidth="1.5"
          animate={{ opacity: isHovered ? (item.status ? 1 : [0.3, 0.6, 0.3]) : 0.8 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <text x={item.x} y={item.y + 5} textAnchor="middle" fill={item.status ? "#4ade80" : "#ef4444"} fontSize="7">{item.label}</text>
      </g>
    ))}
  </svg>
);

export const WriteAheadLogViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="20" y="50" width="40" height="30" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="40" y="70" textAnchor="middle" fill="white" fontSize="8">Write</text>
    <motion.rect
      x="80" y="35" width="50" height="60" rx="4"
      fill="rgba(251, 191, 36, 0.2)" stroke="#fbbf24" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    {[0, 1, 2].map((i) => (
      <motion.rect
        key={i}
        x="85" y={42 + i * 16} width="40" height="12" rx="2"
        fill="rgba(251, 191, 36, 0.4)"
        animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.7 }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
    <text x="105" y="110" textAnchor="middle" fill="#fbbf24" fontSize="8">WAL</text>
    <rect x="150" y="50" width="40" height="30" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="170" y="70" textAnchor="middle" fill="white" fontSize="8">DB</text>
    <motion.line x1="60" y1="65" x2="80" y2="65" stroke="#fbbf24" strokeWidth="2" animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }} transition={{ duration: 0.8, repeat: Infinity }} />
    <motion.line x1="130" y1="65" x2="150" y2="65" stroke="#0071e3" strokeWidth="2" animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} />
  </svg>
);

export const ConsistentHashingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.circle
      cx="100" cy="75" r="45"
      fill="none" stroke="rgba(0, 113, 227, 0.3)" strokeWidth="2"
      animate={{ rotate: isHovered ? 360 : 0 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
    {[0, 72, 144, 216, 288].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 100 + Math.cos(rad) * 45;
      const y = 75 + Math.sin(rad) * 45;
      return (
        <motion.circle
          key={i}
          cx={x} cy={y} r="8"
          fill="rgba(0, 113, 227, 0.4)" stroke="#0071e3" strokeWidth="2"
          animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
        />
      );
    })}
    {[30, 100, 200, 260].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 100 + Math.cos(rad) * 45;
      const y = 75 + Math.sin(rad) * 45;
      return (
        <motion.rect
          key={i}
          x={x - 4} y={y - 4} width="8" height="8" rx="1"
          fill="#4ade80"
          animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.7 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      );
    })}
    <text x="100" y="140" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Hash Ring</text>
  </svg>
);

export const BloomFilterViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="30" y="50" width="140" height="50" rx="4" fill="rgba(0, 113, 227, 0.1)" stroke="#0071e3" strokeWidth="1" />
    {[0,1,2,3,4,5,6,7,8,9].map((i) => (
      <motion.rect key={i} x={35 + i * 13} y="55" width="10" height="40" rx="2"
        fill={[2,5,7].includes(i) ? "#4ade80" : "rgba(255,255,255,0.1)"}
        animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.7 }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
      />
    ))}
    <text x="100" y="120" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Bit Array</text>
  </svg>
);

export const LeaderElectionViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[40, 100, 160].map((x, i) => (
      <g key={i}>
        <motion.circle cx={x} cy="75" r="25"
          fill={i === 1 ? "rgba(251, 191, 36, 0.3)" : "rgba(0, 113, 227, 0.2)"}
          stroke={i === 1 ? "#fbbf24" : "#0071e3"} strokeWidth="2"
          animate={{ scale: isHovered && i === 1 ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <text x={x} y={i === 1 ? 70 : 79} textAnchor="middle" fill="white" fontSize="8">Node {i + 1}</text>
        {i === 1 && <text x={x} y="85" textAnchor="middle" fill="#fbbf24" fontSize="7">Leader</text>}
      </g>
    ))}
  </svg>
);

export const ConsensusViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[50, 100, 150].map((x, i) => (
      <motion.circle key={i} cx={x} cy="60" r="20"
        fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="2"
        animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
    <motion.rect x="70" y="100" width="60" height="25" rx="4"
      fill="rgba(74, 222, 128, 0.2)" stroke="#4ade80" strokeWidth="2"
      animate={{ opacity: isHovered ? [0.5, 1, 0.5] : 0.7 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="117" textAnchor="middle" fill="#4ade80" fontSize="9">Agreed!</text>
  </svg>
);

export const GossipProtocolViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[[50,40],[150,40],[30,100],[100,110],[170,100]].map(([x,y], i) => (
      <motion.circle key={i} cx={x} cy={y} r="15"
        fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="1.5"
        animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
    {[[50,40,150,40],[50,40,30,100],[150,40,170,100],[30,100,100,110],[100,110,170,100]].map((c, i) => (
      <motion.line key={i} x1={c[0]} y1={c[1]} x2={c[2]} y2={c[3]}
        stroke="rgba(0, 113, 227, 0.4)" strokeWidth="1" strokeDasharray="3 2"
        animate={{ opacity: isHovered ? [0.2, 0.8, 0.2] : 0.4 }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </svg>
);

export const ReadReplicaViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect x="75" y="20" width="50" height="35" rx="4"
      fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="42" textAnchor="middle" fill="#ef4444" fontSize="8">Primary</text>
    {[30, 100, 170].map((x, i) => (
      <g key={i}>
        <motion.rect x={x - 25} y="90" width="50" height="35" rx="4"
          fill="rgba(74, 222, 128, 0.2)" stroke="#4ade80" strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.6, 1, 0.6] : 0.7 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
        <text x={x} y="112" textAnchor="middle" fill="#4ade80" fontSize="7">Read</text>
      </g>
    ))}
  </svg>
);

export const WriteThroughCacheViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="20" y="55" width="35" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="37" y="80" textAnchor="middle" fill="white" fontSize="7">App</text>
    <motion.rect x="75" y="45" width="50" height="60" rx="4"
      fill="rgba(251, 191, 36, 0.2)" stroke="#fbbf24" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="80" textAnchor="middle" fill="#fbbf24" fontSize="8">Cache</text>
    <rect x="145" y="55" width="35" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="162" y="80" textAnchor="middle" fill="white" fontSize="7">DB</text>
    <motion.line x1="55" y1="75" x2="75" y2="75" stroke="#fbbf24" strokeWidth="2"
      animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
      transition={{ duration: 0.8, repeat: Infinity }}
    />
    <motion.line x1="125" y1="75" x2="145" y2="75" stroke="#0071e3" strokeWidth="2"
      animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
      transition={{ duration: 0.8, repeat: Infinity }}
    />
    <text x="100" y="125" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Sync Write</text>
  </svg>
);

export const WriteBehindCacheViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="20" y="55" width="35" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="37" y="80" textAnchor="middle" fill="white" fontSize="7">App</text>
    <motion.rect x="75" y="45" width="50" height="60" rx="4"
      fill="rgba(74, 222, 128, 0.2)" stroke="#4ade80" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="80" textAnchor="middle" fill="#4ade80" fontSize="8">Cache</text>
    <rect x="145" y="55" width="35" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="162" y="80" textAnchor="middle" fill="white" fontSize="7">DB</text>
    <motion.line x1="125" y1="75" x2="145" y2="75" stroke="#0071e3" strokeWidth="2" strokeDasharray="4 2"
      animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.3 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="125" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Async Write</text>
  </svg>
);

export const CacheAsideViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="75" y="20" width="50" height="30" rx="4" fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="2" />
    <text x="100" y="40" textAnchor="middle" fill="white" fontSize="8">App</text>
    <motion.rect x="30" y="90" width="50" height="35" rx="4"
      fill="rgba(251, 191, 36, 0.2)" stroke="#fbbf24" strokeWidth="1.5"
      animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="55" y="112" textAnchor="middle" fill="#fbbf24" fontSize="8">Cache</text>
    <rect x="120" y="90" width="50" height="35" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="145" y="112" textAnchor="middle" fill="white" fontSize="8">DB</text>
    <motion.path d="M 85 50 L 55 90" fill="none" stroke="#fbbf24" strokeWidth="1.5"
      animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
      transition={{ duration: 1, repeat: Infinity }}
    />
    <motion.path d="M 115 50 L 145 90" fill="none" stroke="#0071e3" strokeWidth="1.5"
      animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
    />
  </svg>
);

export const PubSubViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect x="80" y="50" width="40" height="50" rx="4"
      fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="80" textAnchor="middle" fill="white" fontSize="8">Topic</text>
    {[30, 55].map((y, i) => (
      <g key={i}>
        <rect x="15" y={y - 10} width="30" height="20" rx="3" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="1" />
        <motion.line x1="45" y1={y} x2="80" y2="75" stroke="#ef4444" strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
        />
      </g>
    ))}
    {[40, 65, 90].map((y, i) => (
      <g key={i}>
        <rect x="155" y={y - 10} width="30" height="20" rx="3" fill="rgba(74, 222, 128, 0.2)" stroke="#4ade80" strokeWidth="1" />
        <motion.line x1="120" y1="75" x2="155" y2={y} stroke="#4ade80" strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 + i * 0.15 }}
        />
      </g>
    ))}
  </svg>
);

export const RequestResponseViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="25" y="55" width="50" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="2" />
    <text x="50" y="80" textAnchor="middle" fill="white" fontSize="8">Client</text>
    <rect x="125" y="55" width="50" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="2" />
    <text x="150" y="80" textAnchor="middle" fill="white" fontSize="8">Server</text>
    <motion.line x1="75" y1="68" x2="125" y2="68" stroke="#4ade80" strokeWidth="2"
      animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
      transition={{ duration: 1, repeat: Infinity }}
    />
    <motion.line x1="125" y1="82" x2="75" y2="82" stroke="#fbbf24" strokeWidth="2"
      animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
    />
    <text x="100" y="60" textAnchor="middle" fill="#4ade80" fontSize="7">Request</text>
    <text x="100" y="100" textAnchor="middle" fill="#fbbf24" fontSize="7">Response</text>
  </svg>
);

export const ReverseProxyViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[30, 60, 90].map((y, i) => (
      <g key={i}>
        <rect x="15" y={y - 12} width="30" height="24" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <motion.line x1="45" y1={y} x2="75" y2="75" stroke="rgba(0,113,227,0.5)" strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
      </g>
    ))}
    <motion.rect x="75" y="50" width="50" height="50" rx="4"
      fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="80" textAnchor="middle" fill="white" fontSize="8">Proxy</text>
    {[55, 95].map((y, i) => (
      <g key={i}>
        <motion.line x1="125" y1="75" x2="155" y2={y} stroke="rgba(0,113,227,0.5)" strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 + i * 0.2 }}
        />
        <rect x="155" y={y - 15} width="30" height="30" rx="3" fill="rgba(0, 113, 227, 0.15)" stroke="#0071e3" strokeWidth="1" />
      </g>
    ))}
  </svg>
);

export const ConnectionPoolingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="20" y="55" width="40" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="40" y="80" textAnchor="middle" fill="white" fontSize="8">App</text>
    <motion.rect x="80" y="35" width="40" height="80" rx="4"
      fill="rgba(251, 191, 36, 0.2)" stroke="#fbbf24" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.03, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    {[0, 1, 2, 3].map((i) => (
      <motion.rect key={i} x="85" y={42 + i * 18} width="30" height="12" rx="2"
        fill="#fbbf24"
        animate={{ opacity: isHovered ? [0.4, 1, 0.4] : 0.6 }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
    <text x="100" y="130" textAnchor="middle" fill="#fbbf24" fontSize="8">Pool</text>
    <rect x="140" y="55" width="40" height="40" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="160" y="80" textAnchor="middle" fill="white" fontSize="8">DB</text>
  </svg>
);

export const DataPartitioningViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <rect x="30" y="30" width="140" height="90" rx="4" fill="rgba(0, 113, 227, 0.1)" stroke="#0071e3" strokeWidth="1" />
    {[0, 1, 2].map((i) => (
      <motion.rect key={i} x={40 + i * 45} y="40" width="40" height="70" rx="3"
        fill={`rgba(0, 113, 227, ${0.2 + i * 0.1})`} stroke="#0071e3" strokeWidth="1.5"
        animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
    <text x="60" y="130" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">P1</text>
    <text x="105" y="130" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">P2</text>
    <text x="150" y="130" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">P3</text>
  </svg>
);

export const ThrottlingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <motion.circle key={i} cx={25 + i * 18} cy="50" r="8"
        fill={i < 4 ? "#4ade80" : "#ef4444"}
        animate={{ x: isHovered ? [0, 30, 0] : 0 }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
      />
    ))}
    <rect x="130" y="35" width="15" height="50" rx="2" fill="rgba(255,255,255,0.2)" />
    <motion.rect x="130" y="55" width="15" height="30" rx="2"
      fill="#0071e3"
      animate={{ height: isHovered ? [30, 15, 30] : 30, y: isHovered ? [55, 70, 55] : 55 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <rect x="160" y="45" width="30" height="30" rx="4" fill="rgba(0, 113, 227, 0.2)" stroke="#0071e3" strokeWidth="1" />
    <text x="175" y="65" textAnchor="middle" fill="white" fontSize="7">API</text>
    <text x="100" y="110" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">Rate Control</text>
  </svg>
);

export const DNSLoadBalancingViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.rect x="75" y="15" width="50" height="30" rx="4"
      fill="rgba(0, 113, 227, 0.3)" stroke="#0071e3" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="35" textAnchor="middle" fill="white" fontSize="9">DNS</text>
    {[30, 100, 170].map((x, i) => (
      <g key={i}>
        <motion.line x1="100" y1="45" x2={x} y2="80" stroke="#0071e3" strokeWidth="1.5"
          animate={{ opacity: isHovered ? [0.3, 1, 0.3] : 0.5 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
        <rect x={x - 20} y="80" width="40" height="30" rx="4" fill="rgba(0, 113, 227, 0.15)" stroke="#0071e3" strokeWidth="1" />
        <text x={x} y="100" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7">IP {i + 1}</text>
      </g>
    ))}
    <text x="100" y="130" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Round Robin</text>
  </svg>
);

export const ZeroTrustViz = ({ isHovered }: VisualizationProps) => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <motion.circle cx="100" cy="75" r="45" fill="none" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="2" strokeDasharray="8 4"
      animate={{ rotate: isHovered ? 360 : 0 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle cx="100" cy="75" r="25" fill="rgba(74, 222, 128, 0.2)" stroke="#4ade80" strokeWidth="2"
      animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <text x="100" y="79" textAnchor="middle" fill="#4ade80" fontSize="8">Verified</text>
    {[0, 90, 180, 270].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 100 + Math.cos(rad) * 45;
      const y = 75 + Math.sin(rad) * 45;
      return (
        <motion.circle key={i} cx={x} cy={y} r="8"
          fill="rgba(239, 68, 68, 0.3)" stroke="#ef4444" strokeWidth="1.5"
          animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      );
    })}
    <text x="100" y="135" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Never Trust, Always Verify</text>
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
    "cdn": CDNViz,
    "database-sharding": DatabaseShardingViz,
    "database-replication": DatabaseReplicationViz,
    "microservices": MicroservicesViz,
    "api-gateway": APIGatewayViz,
    "message-queues": MessageQueueViz,
    "circuit-breaker": CircuitBreakerViz,
    "rate-limiting": RateLimitingViz,
    "event-driven": EventDrivenViz,
    "cap-theorem": CAPTheoremViz,
    "eventual-consistency": EventualConsistencyViz,
    "acid": ACIDViz,
    "cqrs": CQRSViz,
    "pub-sub": PubSubViz,
    "consistent-hashing": ConsistentHashingViz,
    "saga-pattern": SagaPatternViz,
    "retry-pattern": RetryPatternViz,
    "health-checks": HealthChecksViz,
    "write-ahead-log": WriteAheadLogViz,
    "backpressure": BackpressureViz,
    "bulkhead": BulkheadViz,
  };
  return visualizations[id] || DefaultViz;
};
