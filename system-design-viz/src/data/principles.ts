export interface Principle {
  id: number;
  name: string;
  shortName: string;
  category: string;
  description: string;
  details: string[];
  useCases: string[];
  color: string;
}

export const categories = [
  'Scalability',
  'Reliability',
  'Data Management',
  'Communication',
  'Security',
  'Performance',
  'Architecture',
  'Caching',
];

export const principles: Principle[] = [
  {
    id: 1,
    name: 'Load Balancing',
    shortName: 'LB',
    category: 'Scalability',
    description: 'Distributes incoming network traffic across multiple servers to ensure no single server bears too much load.',
    details: [
      'Round-robin distribution',
      'Least connections algorithm',
      'IP hash routing',
      'Health checks for servers',
      'Session persistence'
    ],
    useCases: ['High-traffic websites', 'API gateways', 'Microservices'],
    color: '#007AFF'
  },
  {
    id: 2,
    name: 'Horizontal Scaling',
    shortName: 'HS',
    category: 'Scalability',
    description: 'Adding more machines to a system to handle increased load, rather than upgrading existing hardware.',
    details: [
      'Stateless application design',
      'Shared-nothing architecture',
      'Auto-scaling groups',
      'Container orchestration',
      'Distributed processing'
    ],
    useCases: ['Cloud applications', 'Web services', 'Big data processing'],
    color: '#5856D6'
  },
  {
    id: 3,
    name: 'Vertical Scaling',
    shortName: 'VS',
    category: 'Scalability',
    description: 'Increasing the capacity of existing hardware by adding more CPU, RAM, or storage.',
    details: [
      'Hardware upgrades',
      'Resource optimization',
      'Single point of failure risk',
      'Limited by hardware caps',
      'Simpler architecture'
    ],
    useCases: ['Database servers', 'Legacy systems', 'Small applications'],
    color: '#32ADE6'
  },
  {
    id: 4,
    name: 'Database Sharding',
    shortName: 'DS',
    category: 'Data Management',
    description: 'Partitioning data across multiple databases to improve performance and scalability.',
    details: [
      'Hash-based sharding',
      'Range-based sharding',
      'Directory-based sharding',
      'Cross-shard queries',
      'Rebalancing strategies'
    ],
    useCases: ['Large-scale databases', 'Multi-tenant systems', 'Global applications'],
    color: '#30D158'
  },
  {
    id: 5,
    name: 'Database Replication',
    shortName: 'DR',
    category: 'Data Management',
    description: 'Copying data from one database to another to ensure redundancy and improve read performance.',
    details: [
      'Master-slave replication',
      'Master-master replication',
      'Synchronous vs asynchronous',
      'Conflict resolution',
      'Failover mechanisms'
    ],
    useCases: ['High availability', 'Disaster recovery', 'Read scaling'],
    color: '#FF9F0A'
  },
  {
    id: 6,
    name: 'Caching',
    shortName: 'CA',
    category: 'Caching',
    description: 'Storing frequently accessed data in fast storage to reduce latency and database load.',
    details: [
      'In-memory caching',
      'Distributed caching',
      'Cache invalidation',
      'TTL strategies',
      'Cache-aside pattern'
    ],
    useCases: ['Session storage', 'API responses', 'Database queries'],
    color: '#FF375F'
  },
  {
    id: 7,
    name: 'CDN (Content Delivery Network)',
    shortName: 'CDN',
    category: 'Performance',
    description: 'Geographically distributed servers that deliver content to users from the nearest location.',
    details: [
      'Edge caching',
      'Origin shielding',
      'Dynamic content acceleration',
      'SSL/TLS termination',
      'DDoS protection'
    ],
    useCases: ['Static assets', 'Video streaming', 'Global websites'],
    color: '#007AFF'
  },
  {
    id: 8,
    name: 'Message Queues',
    shortName: 'MQ',
    category: 'Communication',
    description: 'Asynchronous communication mechanism that decouples services and handles traffic spikes.',
    details: [
      'Producer-consumer pattern',
      'Message persistence',
      'Dead letter queues',
      'Message ordering',
      'Acknowledgment mechanisms'
    ],
    useCases: ['Order processing', 'Email sending', 'Event-driven systems'],
    color: '#5856D6'
  },
  {
    id: 9,
    name: 'Microservices Architecture',
    shortName: 'MS',
    category: 'Architecture',
    description: 'Breaking down applications into small, independent services that communicate via APIs.',
    details: [
      'Service independence',
      'Technology diversity',
      'Independent deployment',
      'Fault isolation',
      'Team autonomy'
    ],
    useCases: ['Large applications', 'Agile teams', 'Cloud-native apps'],
    color: '#32ADE6'
  },
  {
    id: 10,
    name: 'API Gateway',
    shortName: 'AG',
    category: 'Architecture',
    description: 'Single entry point for all client requests that routes to appropriate microservices.',
    details: [
      'Request routing',
      'Rate limiting',
      'Authentication',
      'Request/response transformation',
      'API versioning'
    ],
    useCases: ['Microservices', 'Mobile backends', 'Third-party APIs'],
    color: '#30D158'
  },
  {
    id: 11,
    name: 'Circuit Breaker',
    shortName: 'CB',
    category: 'Reliability',
    description: 'Prevents cascading failures by stopping requests to failing services.',
    details: [
      'Closed, open, half-open states',
      'Failure threshold',
      'Recovery timeout',
      'Fallback mechanisms',
      'Health monitoring'
    ],
    useCases: ['Distributed systems', 'External API calls', 'Microservices'],
    color: '#FF9F0A'
  },
  {
    id: 12,
    name: 'Rate Limiting',
    shortName: 'RL',
    category: 'Security',
    description: 'Controls the rate of requests to protect services from abuse and ensure fair usage.',
    details: [
      'Token bucket algorithm',
      'Sliding window',
      'Fixed window',
      'Distributed rate limiting',
      'Quota management'
    ],
    useCases: ['Public APIs', 'Login endpoints', 'Resource-intensive operations'],
    color: '#FF375F'
  },
  {
    id: 13,
    name: 'Event-Driven Architecture',
    shortName: 'EDA',
    category: 'Architecture',
    description: 'System design where events trigger and communicate between decoupled services.',
    details: [
      'Event producers',
      'Event consumers',
      'Event brokers',
      'Event sourcing',
      'CQRS pattern'
    ],
    useCases: ['Real-time systems', 'IoT platforms', 'Financial systems'],
    color: '#007AFF'
  },
  {
    id: 14,
    name: 'CAP Theorem',
    shortName: 'CAP',
    category: 'Data Management',
    description: 'States that distributed systems can only guarantee two of: Consistency, Availability, Partition tolerance.',
    details: [
      'Consistency models',
      'Availability trade-offs',
      'Network partitions',
      'CP vs AP systems',
      'Eventual consistency'
    ],
    useCases: ['Database selection', 'System design decisions', 'Trade-off analysis'],
    color: '#5856D6'
  },
  {
    id: 15,
    name: 'Consistent Hashing',
    shortName: 'CH',
    category: 'Data Management',
    description: 'Distributes data across nodes with minimal redistribution when nodes are added or removed.',
    details: [
      'Hash ring',
      'Virtual nodes',
      'Minimal key remapping',
      'Load distribution',
      'Node addition/removal'
    ],
    useCases: ['Distributed caches', 'Load balancers', 'Database sharding'],
    color: '#32ADE6'
  },
  {
    id: 16,
    name: 'Pub/Sub Pattern',
    shortName: 'PS',
    category: 'Communication',
    description: 'Publishers send messages to topics, subscribers receive messages from topics they subscribe to.',
    details: [
      'Topic-based routing',
      'Fan-out delivery',
      'Message filtering',
      'Durable subscriptions',
      'At-least-once delivery'
    ],
    useCases: ['Notifications', 'Real-time updates', 'Event broadcasting'],
    color: '#30D158'
  },
  {
    id: 17,
    name: 'Service Discovery',
    shortName: 'SD',
    category: 'Architecture',
    description: 'Automatically detects and registers services in a distributed system.',
    details: [
      'Service registry',
      'Health checking',
      'DNS-based discovery',
      'Client-side discovery',
      'Server-side discovery'
    ],
    useCases: ['Microservices', 'Container orchestration', 'Dynamic environments'],
    color: '#FF9F0A'
  },
  {
    id: 18,
    name: 'Saga Pattern',
    shortName: 'SP',
    category: 'Data Management',
    description: 'Manages distributed transactions across multiple services using compensating transactions.',
    details: [
      'Choreography-based',
      'Orchestration-based',
      'Compensating transactions',
      'Rollback handling',
      'State management'
    ],
    useCases: ['E-commerce orders', 'Banking transactions', 'Booking systems'],
    color: '#FF375F'
  },
  {
    id: 19,
    name: 'CQRS',
    shortName: 'CQRS',
    category: 'Architecture',
    description: 'Separates read and write operations into different models for better scalability.',
    details: [
      'Command model',
      'Query model',
      'Event sourcing integration',
      'Read replicas',
      'Eventual consistency'
    ],
    useCases: ['High-read systems', 'Complex domains', 'Event-sourced systems'],
    color: '#007AFF'
  },
  {
    id: 20,
    name: 'Idempotency',
    shortName: 'ID',
    category: 'Reliability',
    description: 'Ensures that multiple identical requests have the same effect as a single request.',
    details: [
      'Idempotency keys',
      'Request deduplication',
      'Safe retries',
      'State verification',
      'Atomic operations'
    ],
    useCases: ['Payment processing', 'API design', 'Message handling'],
    color: '#5856D6'
  },
  {
    id: 21,
    name: 'Backpressure',
    shortName: 'BP',
    category: 'Reliability',
    description: 'Mechanism to handle situations when a system receives more data than it can process.',
    details: [
      'Flow control',
      'Buffer management',
      'Rate adjustment',
      'Load shedding',
      'Reactive streams'
    ],
    useCases: ['Stream processing', 'Real-time systems', 'High-throughput APIs'],
    color: '#32ADE6'
  },
  {
    id: 22,
    name: 'Bulkhead Pattern',
    shortName: 'BH',
    category: 'Reliability',
    description: 'Isolates components to prevent failures from cascading throughout the system.',
    details: [
      'Resource isolation',
      'Thread pool isolation',
      'Connection pool limits',
      'Failure containment',
      'Graceful degradation'
    ],
    useCases: ['Microservices', 'Multi-tenant systems', 'Critical services'],
    color: '#30D158'
  },
  {
    id: 23,
    name: 'Two-Phase Commit',
    shortName: '2PC',
    category: 'Data Management',
    description: 'Protocol ensuring all participants in a distributed transaction commit or abort together.',
    details: [
      'Prepare phase',
      'Commit phase',
      'Coordinator role',
      'Participant voting',
      'Timeout handling'
    ],
    useCases: ['Distributed databases', 'Financial systems', 'Inventory management'],
    color: '#FF9F0A'
  },
  {
    id: 24,
    name: 'Leader Election',
    shortName: 'LE',
    category: 'Reliability',
    description: 'Process of designating a single node as the coordinator for distributed operations.',
    details: [
      'Bully algorithm',
      'Raft consensus',
      'Paxos protocol',
      'Lease-based election',
      'Split-brain prevention'
    ],
    useCases: ['Distributed databases', 'Cluster management', 'Consensus systems'],
    color: '#FF375F'
  },
  {
    id: 25,
    name: 'Write-Ahead Logging',
    shortName: 'WAL',
    category: 'Data Management',
    description: 'Records changes to a log before applying them to ensure durability and recovery.',
    details: [
      'Log-structured storage',
      'Crash recovery',
      'Point-in-time recovery',
      'Log compaction',
      'Checkpointing'
    ],
    useCases: ['Databases', 'File systems', 'Message brokers'],
    color: '#007AFF'
  },
  {
    id: 26,
    name: 'Bloom Filter',
    shortName: 'BF',
    category: 'Performance',
    description: 'Probabilistic data structure for testing set membership with possible false positives.',
    details: [
      'Space efficiency',
      'Hash functions',
      'False positive rate',
      'No false negatives',
      'Counting variants'
    ],
    useCases: ['Cache lookups', 'Spam detection', 'Database queries'],
    color: '#5856D6'
  },
  {
    id: 27,
    name: 'Merkle Tree',
    shortName: 'MT',
    category: 'Data Management',
    description: 'Tree structure where each leaf is a hash of data and each node is a hash of its children.',
    details: [
      'Data integrity verification',
      'Efficient synchronization',
      'Tamper detection',
      'Partial verification',
      'Blockchain foundation'
    ],
    useCases: ['Blockchain', 'Version control', 'Distributed storage'],
    color: '#32ADE6'
  },
  {
    id: 28,
    name: 'Gossip Protocol',
    shortName: 'GP',
    category: 'Communication',
    description: 'Peer-to-peer communication protocol where nodes randomly share information.',
    details: [
      'Epidemic spreading',
      'Failure detection',
      'Membership management',
      'Convergence time',
      'Scalability'
    ],
    useCases: ['Cluster membership', 'Failure detection', 'Data dissemination'],
    color: '#30D158'
  },
  {
    id: 29,
    name: 'Heartbeat Mechanism',
    shortName: 'HB',
    category: 'Reliability',
    description: 'Periodic signals sent between nodes to indicate they are alive and functioning.',
    details: [
      'Health monitoring',
      'Failure detection',
      'Timeout configuration',
      'Network partitions',
      'Lease renewal'
    ],
    useCases: ['Cluster health', 'Service monitoring', 'Leader election'],
    color: '#FF9F0A'
  },
  {
    id: 30,
    name: 'Retry with Exponential Backoff',
    shortName: 'REB',
    category: 'Reliability',
    description: 'Retry strategy that increases wait time exponentially between attempts.',
    details: [
      'Initial delay',
      'Multiplier factor',
      'Maximum retries',
      'Jitter addition',
      'Circuit breaker integration'
    ],
    useCases: ['API calls', 'Network requests', 'Job processing'],
    color: '#FF375F'
  },
  {
    id: 31,
    name: 'Data Partitioning',
    shortName: 'DP',
    category: 'Data Management',
    description: 'Dividing data into distinct partitions for improved performance and manageability.',
    details: [
      'Horizontal partitioning',
      'Vertical partitioning',
      'Functional partitioning',
      'Partition keys',
      'Hot partition handling'
    ],
    useCases: ['Large databases', 'Time-series data', 'Multi-region systems'],
    color: '#007AFF'
  },
  {
    id: 32,
    name: 'Read Replicas',
    shortName: 'RR',
    category: 'Scalability',
    description: 'Database copies that handle read queries to reduce load on the primary database.',
    details: [
      'Asynchronous replication',
      'Read scaling',
      'Replication lag',
      'Consistency trade-offs',
      'Failover promotion'
    ],
    useCases: ['Read-heavy workloads', 'Reporting', 'Geographic distribution'],
    color: '#5856D6'
  },
  {
    id: 33,
    name: 'Connection Pooling',
    shortName: 'CP',
    category: 'Performance',
    description: 'Reusing database connections to reduce overhead of creating new connections.',
    details: [
      'Pool sizing',
      'Connection lifecycle',
      'Idle timeout',
      'Connection validation',
      'Pool exhaustion handling'
    ],
    useCases: ['Database access', 'HTTP clients', 'Resource management'],
    color: '#32ADE6'
  },
  {
    id: 34,
    name: 'Proxy Pattern',
    shortName: 'PP',
    category: 'Architecture',
    description: 'Intermediary that controls access to another object or service.',
    details: [
      'Forward proxy',
      'Reverse proxy',
      'Caching proxy',
      'Load balancing',
      'Security filtering'
    ],
    useCases: ['API management', 'Security', 'Performance optimization'],
    color: '#30D158'
  },
  {
    id: 35,
    name: 'Sidecar Pattern',
    shortName: 'SC',
    category: 'Architecture',
    description: 'Deploys helper components alongside the main application container.',
    details: [
      'Logging sidecars',
      'Proxy sidecars',
      'Configuration management',
      'Service mesh integration',
      'Resource sharing'
    ],
    useCases: ['Kubernetes', 'Service mesh', 'Cross-cutting concerns'],
    color: '#FF9F0A'
  },
  {
    id: 36,
    name: 'Service Mesh',
    shortName: 'SM',
    category: 'Architecture',
    description: 'Infrastructure layer handling service-to-service communication in microservices.',
    details: [
      'Traffic management',
      'Security policies',
      'Observability',
      'Load balancing',
      'Circuit breaking'
    ],
    useCases: ['Microservices', 'Zero-trust security', 'Traffic control'],
    color: '#FF375F'
  },
  {
    id: 37,
    name: 'Blue-Green Deployment',
    shortName: 'BGD',
    category: 'Reliability',
    description: 'Deployment strategy using two identical environments for zero-downtime releases.',
    details: [
      'Environment switching',
      'Instant rollback',
      'Traffic routing',
      'Database migrations',
      'Testing in production'
    ],
    useCases: ['Zero-downtime deploys', 'Risk mitigation', 'A/B testing'],
    color: '#007AFF'
  },
  {
    id: 38,
    name: 'Canary Deployment',
    shortName: 'CD',
    category: 'Reliability',
    description: 'Gradually rolling out changes to a small subset of users before full deployment.',
    details: [
      'Traffic splitting',
      'Metrics monitoring',
      'Automatic rollback',
      'Progressive rollout',
      'Feature flags'
    ],
    useCases: ['Risk reduction', 'Performance testing', 'Feature validation'],
    color: '#5856D6'
  },
  {
    id: 39,
    name: 'Feature Flags',
    shortName: 'FF',
    category: 'Architecture',
    description: 'Toggles that enable or disable features without deploying new code.',
    details: [
      'Runtime configuration',
      'User targeting',
      'Gradual rollout',
      'Kill switches',
      'A/B testing'
    ],
    useCases: ['Continuous deployment', 'Beta features', 'Emergency toggles'],
    color: '#32ADE6'
  },
  {
    id: 40,
    name: 'Distributed Tracing',
    shortName: 'DT',
    category: 'Performance',
    description: 'Tracking requests as they flow through distributed systems for debugging.',
    details: [
      'Trace context propagation',
      'Span collection',
      'Latency analysis',
      'Service dependencies',
      'Root cause analysis'
    ],
    useCases: ['Microservices debugging', 'Performance optimization', 'SLA monitoring'],
    color: '#30D158'
  },
  {
    id: 41,
    name: 'Log Aggregation',
    shortName: 'LA',
    category: 'Performance',
    description: 'Collecting and centralizing logs from multiple services for analysis.',
    details: [
      'Log shipping',
      'Structured logging',
      'Log indexing',
      'Search and filtering',
      'Retention policies'
    ],
    useCases: ['Debugging', 'Compliance', 'Security analysis'],
    color: '#FF9F0A'
  },
  {
    id: 42,
    name: 'Health Checks',
    shortName: 'HC',
    category: 'Reliability',
    description: 'Endpoints that report the health status of services for monitoring.',
    details: [
      'Liveness probes',
      'Readiness probes',
      'Dependency checks',
      'Graceful degradation',
      'Health aggregation'
    ],
    useCases: ['Container orchestration', 'Load balancers', 'Monitoring systems'],
    color: '#FF375F'
  },
  {
    id: 43,
    name: 'Graceful Degradation',
    shortName: 'GD',
    category: 'Reliability',
    description: 'Maintaining partial functionality when components fail.',
    details: [
      'Fallback responses',
      'Feature prioritization',
      'Cached data serving',
      'Reduced functionality',
      'User communication'
    ],
    useCases: ['E-commerce', 'Critical services', 'User experience'],
    color: '#007AFF'
  },
  {
    id: 44,
    name: 'Throttling',
    shortName: 'TH',
    category: 'Security',
    description: 'Limiting resource usage to prevent system overload.',
    details: [
      'Request throttling',
      'Bandwidth limiting',
      'CPU throttling',
      'Priority queues',
      'Fair scheduling'
    ],
    useCases: ['API protection', 'Resource management', 'Cost control'],
    color: '#5856D6'
  },
  {
    id: 45,
    name: 'Data Encryption',
    shortName: 'DE',
    category: 'Security',
    description: 'Protecting data by converting it into unreadable format without proper keys.',
    details: [
      'Encryption at rest',
      'Encryption in transit',
      'Key management',
      'TLS/SSL',
      'End-to-end encryption'
    ],
    useCases: ['Data protection', 'Compliance', 'Secure communication'],
    color: '#32ADE6'
  },
  {
    id: 46,
    name: 'OAuth/JWT Authentication',
    shortName: 'AUTH',
    category: 'Security',
    description: 'Token-based authentication and authorization protocols.',
    details: [
      'Access tokens',
      'Refresh tokens',
      'Token validation',
      'Scope management',
      'Single sign-on'
    ],
    useCases: ['API security', 'User authentication', 'Third-party access'],
    color: '#30D158'
  },
  {
    id: 47,
    name: 'Database Indexing',
    shortName: 'DI',
    category: 'Performance',
    description: 'Data structures that improve the speed of data retrieval operations.',
    details: [
      'B-tree indexes',
      'Hash indexes',
      'Composite indexes',
      'Covering indexes',
      'Index maintenance'
    ],
    useCases: ['Query optimization', 'Search performance', 'Sorting'],
    color: '#FF9F0A'
  },
  {
    id: 48,
    name: 'Denormalization',
    shortName: 'DN',
    category: 'Data Management',
    description: 'Adding redundant data to improve read performance at the cost of write complexity.',
    details: [
      'Read optimization',
      'Data duplication',
      'Consistency challenges',
      'Query simplification',
      'Storage trade-offs'
    ],
    useCases: ['Read-heavy systems', 'Reporting', 'Analytics'],
    color: '#FF375F'
  },
  {
    id: 49,
    name: 'Eventual Consistency',
    shortName: 'EC',
    category: 'Data Management',
    description: 'Consistency model where updates propagate eventually, not immediately.',
    details: [
      'Asynchronous replication',
      'Conflict resolution',
      'Read-your-writes',
      'Monotonic reads',
      'Convergence guarantees'
    ],
    useCases: ['Distributed databases', 'Global systems', 'High availability'],
    color: '#007AFF'
  },
  {
    id: 50,
    name: 'Quorum Consensus',
    shortName: 'QC',
    category: 'Reliability',
    description: 'Requiring a majority of nodes to agree before committing operations.',
    details: [
      'Read quorum',
      'Write quorum',
      'Quorum intersection',
      'Consistency levels',
      'Availability trade-offs'
    ],
    useCases: ['Distributed databases', 'Consensus systems', 'Leader election'],
    color: '#5856D6'
  }
];

export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'Scalability': '#007AFF',
    'Reliability': '#30D158',
    'Data Management': '#5856D6',
    'Communication': '#32ADE6',
    'Security': '#FF375F',
    'Performance': '#FF9F0A',
    'Architecture': '#AF52DE',
    'Caching': '#FF2D55',
  };
  return colors[category] || '#007AFF';
};
