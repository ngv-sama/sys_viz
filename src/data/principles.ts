export interface FAQ {
  question: string;
  answer: string;
}

export interface Principle {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  keyPoints: string[];
  useCases: string[];
  pros: string[];
  cons: string[];
  faqs: FAQ[];
  realWorld: string[];
}

export const categories = [
  "Scalability",
  "Reliability",
  "Data Management",
  "Communication",
  "Caching",
  "Security",
  "Architecture",
  "Performance",
];

export const principles: Principle[] = [
  {
    id: "load-balancing",
    name: "Load Balancing",
    category: "Scalability",
    shortDesc: "Distribute traffic across multiple servers",
    description: "Load balancing distributes incoming network traffic across multiple servers to ensure no single server bears too much demand.",
    keyPoints: ["Round Robin, Least Connections, IP Hash algorithms", "L4 (TCP) vs L7 (HTTP) load balancing", "Health checks monitor availability", "SSL termination at load balancer"],
    useCases: ["High-traffic websites", "API gateways", "Microservices"],
    pros: ["Improved availability", "Better performance", "Scalability"],
    cons: ["Added complexity", "Session management challenges"],
    faqs: [{ question: "L4 vs L7 load balancing?", answer: "L4 routes based on IP/port. L7 can inspect HTTP headers and make content-based decisions." }, { question: "How do sticky sessions work?", answer: "Routes requests from same client to same server using cookies or IP hashing." }],
    realWorld: ["AWS ELB/ALB", "NGINX", "HAProxy", "Cloudflare"]
  },
  {
    id: "horizontal-scaling",
    name: "Horizontal Scaling",
    category: "Scalability",
    shortDesc: "Add more machines to handle increased load",
    description: "Horizontal scaling involves adding more machines to a pool of resources for virtually unlimited growth.",
    keyPoints: ["Add servers instead of upgrading", "Requires stateless design", "Auto-scaling based on metrics", "Works with containers"],
    useCases: ["Web applications", "Distributed databases", "Containerized apps"],
    pros: ["Near-infinite scalability", "Cost-effective", "Fault tolerance"],
    cons: ["Data consistency challenges", "Complex architecture"],
    faqs: [{ question: "When to choose horizontal over vertical?", answer: "Choose horizontal for fault tolerance, stateless workloads, or large growth expectations." }],
    realWorld: ["AWS Auto Scaling", "Kubernetes HPA", "GCP Instance Groups"]
  },
  {
    id: "caching",
    name: "Caching",
    category: "Caching",
    shortDesc: "Store frequently accessed data in fast storage",
    description: "Caching stores copies of frequently accessed data in a faster storage layer to reduce database load.",
    keyPoints: ["Cache-aside, write-through patterns", "TTL for expiration", "Cache invalidation strategies", "Memory vs disk caching"],
    useCases: ["Web pages", "API responses", "Database queries"],
    pros: ["Faster response times", "Reduced database load", "Better UX"],
    cons: ["Cache invalidation complexity", "Stale data risk"],
    faqs: [{ question: "What is cache invalidation?", answer: "Process of removing or updating cached data when source data changes." }, { question: "When to use caching?", answer: "For read-heavy workloads, expensive computations, or infrequently changing data." }],
    realWorld: ["Redis", "Memcached", "Varnish", "CDN edge caching"]
  },
  {
    id: "cdn",
    name: "Content Delivery Network",
    category: "Caching",
    shortDesc: "Distribute content globally via edge servers",
    description: "A CDN is a geographically distributed network of proxy servers that delivers content from locations closer to users.",
    keyPoints: ["Edge servers cache content globally", "Reduces latency for static assets", "DDoS protection built-in", "Origin shielding"],
    useCases: ["Static assets", "Video streaming", "Global websites"],
    pros: ["Reduced latency", "High availability", "DDoS protection"],
    cons: ["Cost", "Cache invalidation", "Dynamic content challenges"],
    faqs: [{ question: "How does a CDN reduce latency?", answer: "By serving content from edge servers geographically closer to users." }],
    realWorld: ["Cloudflare", "AWS CloudFront", "Akamai", "Fastly"]
  },
  {
    id: "database-sharding",
    name: "Database Sharding",
    category: "Data Management",
    shortDesc: "Partition data across multiple databases",
    description: "Sharding splits large databases into smaller, faster, more manageable parts called shards.",
    keyPoints: ["Horizontal partitioning of data", "Shard key determines placement", "Range vs hash-based sharding", "Rebalancing when adding shards"],
    useCases: ["Large-scale databases", "Multi-tenant systems", "Geographic distribution"],
    pros: ["Improved performance", "Horizontal scalability", "Reduced index size"],
    cons: ["Complex queries", "Cross-shard transactions"],
    faqs: [{ question: "How to choose a shard key?", answer: "Choose a key with high cardinality that evenly distributes data." }, { question: "Sharding vs Replication?", answer: "Sharding splits data for write scaling. Replication copies data for read scaling." }],
    realWorld: ["MongoDB sharding", "Vitess", "CockroachDB", "Cassandra"]
  },
  {
    id: "database-replication",
    name: "Database Replication",
    category: "Data Management",
    shortDesc: "Copy data across multiple database servers",
    description: "Database replication involves copying and maintaining database objects in multiple databases for availability.",
    keyPoints: ["Primary-replica architecture", "Sync vs async replication", "Read replicas for scaling", "Automatic failover"],
    useCases: ["Read-heavy workloads", "Disaster recovery", "Geographic distribution"],
    pros: ["High availability", "Read scalability", "Backup strategy"],
    cons: ["Replication lag", "Consistency issues"],
    faqs: [{ question: "Sync vs async replication?", answer: "Sync waits for confirmation (consistent but slower). Async does not wait (faster but may lose data)." }],
    realWorld: ["MySQL Replication", "PostgreSQL Streaming", "MongoDB Replica Sets"]
  },
  {
    id: "microservices",
    name: "Microservices",
    category: "Architecture",
    shortDesc: "Decompose applications into small services",
    description: "Microservices architecture structures an application as loosely coupled, independently deployable services.",
    keyPoints: ["Single responsibility per service", "Independent deployment", "Decentralized data management", "API-based communication"],
    useCases: ["Large applications", "Teams at scale", "Continuous deployment"],
    pros: ["Independent deployment", "Technology flexibility", "Scalability"],
    cons: ["Distributed complexity", "Network latency"],
    faqs: [{ question: "Microservices vs Monolith?", answer: "Monoliths are simpler initially. Microservices scale better for large teams." }, { question: "How to define service boundaries?", answer: "Use Domain-Driven Design. Each service owns a bounded context." }],
    realWorld: ["Netflix", "Amazon", "Uber", "Spotify"]
  },
  {
    id: "api-gateway",
    name: "API Gateway",
    category: "Architecture",
    shortDesc: "Single entry point for all client requests",
    description: "An API gateway acts as the single entry point for microservices, handling routing and protocol translation.",
    keyPoints: ["Request routing and composition", "Authentication/authorization", "Rate limiting and throttling", "Request/response transformation"],
    useCases: ["Microservices", "Mobile backends", "Third-party APIs"],
    pros: ["Centralized control", "Security", "Rate limiting"],
    cons: ["Single point of failure", "Added latency"],
    faqs: [{ question: "API Gateway vs Load Balancer?", answer: "Load balancers distribute traffic. API gateways add auth, rate limiting, and routing logic." }],
    realWorld: ["Kong", "AWS API Gateway", "Apigee", "NGINX"]
  },
  {
    id: "message-queues",
    name: "Message Queues",
    category: "Communication",
    shortDesc: "Asynchronous communication between services",
    description: "Message queues enable asynchronous communication between services, decoupling producers from consumers.",
    keyPoints: ["Producer-consumer pattern", "At-least-once vs exactly-once delivery", "Dead letter queues", "FIFO vs standard queues"],
    useCases: ["Order processing", "Email notifications", "Data pipelines"],
    pros: ["Decoupling", "Reliability", "Traffic smoothing"],
    cons: ["Added latency", "Message ordering complexity"],
    faqs: [{ question: "When to use message queues?", answer: "For async processing, decoupling services, or handling traffic spikes." }],
    realWorld: ["RabbitMQ", "Apache Kafka", "AWS SQS", "Redis Streams"]
  },
  {
    id: "circuit-breaker",
    name: "Circuit Breaker",
    category: "Reliability",
    shortDesc: "Prevent cascading failures in distributed systems",
    description: "Circuit breaker prevents repeated execution of operations likely to fail, allowing systems to recover.",
    keyPoints: ["Three states: Closed, Open, Half-Open", "Failure threshold triggers open", "Timeout before half-open retry", "Fast failure instead of waiting"],
    useCases: ["Microservices", "External API calls", "Database connections"],
    pros: ["Prevents cascading failures", "Fast failure", "Self-healing"],
    cons: ["Configuration complexity", "False positives"],
    faqs: [{ question: "How to configure thresholds?", answer: "Start with 5-10 failures in 10-30 seconds. Adjust based on error rates." }],
    realWorld: ["Netflix Hystrix", "Resilience4j", "Polly (.NET)", "Istio"]
  },
  {
    id: "rate-limiting",
    name: "Rate Limiting",
    category: "Security",
    shortDesc: "Control the rate of requests to prevent abuse",
    description: "Rate limiting controls the number of requests a client can make in a given time period.",
    keyPoints: ["Token bucket and leaky bucket algorithms", "Fixed window vs sliding window", "Per-user, per-IP, or global limits", "429 Too Many Requests response"],
    useCases: ["Public APIs", "Authentication endpoints", "Resource-intensive operations"],
    pros: ["Prevents abuse", "Ensures fairness", "Protects resources"],
    cons: ["User experience impact", "Configuration complexity"],
    faqs: [{ question: "Token bucket vs leaky bucket?", answer: "Token bucket allows bursts. Leaky bucket smooths traffic to constant rate." }],
    realWorld: ["API Gateway rate limits", "Redis rate limiting", "Cloudflare"]
  },
  {
    id: "event-driven",
    name: "Event-Driven Architecture",
    category: "Architecture",
    shortDesc: "Systems react to events as they occur",
    description: "Event-driven architecture uses events to trigger and communicate between decoupled services.",
    keyPoints: ["Events represent state changes", "Publishers and subscribers", "Event sourcing optional", "Eventual consistency"],
    useCases: ["Real-time analytics", "IoT systems", "Microservices"],
    pros: ["Loose coupling", "Scalability", "Real-time processing"],
    cons: ["Debugging complexity", "Event ordering challenges"],
    faqs: [{ question: "Event vs Message?", answer: "Events describe what happened. Messages are commands requesting action." }],
    realWorld: ["Apache Kafka", "AWS EventBridge", "Azure Event Grid"]
  },
  {
    id: "cap-theorem",
    name: "CAP Theorem",
    category: "Data Management",
    shortDesc: "Choose two: Consistency, Availability, Partition tolerance",
    description: "CAP theorem states a distributed system can only provide two of three guarantees simultaneously.",
    keyPoints: ["C: All nodes see same data", "A: Every request gets response", "P: System works despite network failures", "Must choose CP or AP"],
    useCases: ["Database selection", "System design", "Trade-off analysis"],
    pros: ["Framework for decisions", "Clarity on trade-offs"],
    cons: ["Oversimplification", "Not binary choices"],
    faqs: [{ question: "Which should I choose?", answer: "CP for financial systems. AP for social media/caching." }],
    realWorld: ["CP: MongoDB, HBase", "AP: Cassandra, DynamoDB"]
  },
  {
    id: "eventual-consistency",
    name: "Eventual Consistency",
    category: "Data Management",
    shortDesc: "Data becomes consistent over time",
    description: "Eventual consistency guarantees all replicas will eventually return the last updated value.",
    keyPoints: ["Trade consistency for availability", "Conflict resolution strategies", "Tunable consistency levels", "Read-your-writes option"],
    useCases: ["Distributed databases", "DNS", "Social media feeds"],
    pros: ["High availability", "Low latency", "Partition tolerance"],
    cons: ["Stale reads possible", "Conflict resolution complexity"],
    faqs: [{ question: "How eventual is eventual?", answer: "Usually milliseconds to seconds, but longer during failures." }],
    realWorld: ["DynamoDB", "Cassandra", "S3", "DNS"]
  },
  {
    id: "acid",
    name: "ACID Transactions",
    category: "Data Management",
    shortDesc: "Atomicity, Consistency, Isolation, Durability",
    description: "ACID properties ensure database transactions are processed reliably with data integrity.",
    keyPoints: ["Atomicity: All or nothing", "Consistency: Valid state transitions", "Isolation: Concurrent independence", "Durability: Committed = permanent"],
    useCases: ["Financial systems", "Order processing", "Inventory management"],
    pros: ["Data integrity", "Reliability", "Predictability"],
    cons: ["Performance overhead", "Scalability limits"],
    faqs: [{ question: "ACID vs BASE?", answer: "ACID prioritizes consistency. BASE prioritizes availability." }],
    realWorld: ["PostgreSQL", "MySQL", "Oracle", "SQL Server"]
  },
  {
    id: "cqrs",
    name: "CQRS",
    category: "Architecture",
    shortDesc: "Separate read and write operations",
    description: "Command Query Responsibility Segregation separates read and write operations into different models.",
    keyPoints: ["Commands modify state", "Queries read state", "Separate read/write databases possible", "Often paired with Event Sourcing"],
    useCases: ["Complex domains", "High-performance reads", "Event sourcing"],
    pros: ["Optimized models", "Independent scaling", "Separation of concerns"],
    cons: ["Complexity", "Eventual consistency"],
    faqs: [{ question: "When to use CQRS?", answer: "When read/write patterns differ significantly or need independent scaling." }],
    realWorld: ["Event-sourced systems", "High-read analytics", "E-commerce"]
  },
  {
    id: "pub-sub",
    name: "Publish-Subscribe",
    category: "Communication",
    shortDesc: "Decouple senders and receivers via topics",
    description: "Publishers send messages to topics without knowing subscribers who receive messages from interested topics.",
    keyPoints: ["Topics group related messages", "Fan-out to multiple subscribers", "Push vs pull delivery", "Message filtering options"],
    useCases: ["Event notifications", "Real-time updates", "Microservices"],
    pros: ["Loose coupling", "Scalability", "Flexibility"],
    cons: ["Message ordering challenges", "Delivery guarantees vary"],
    faqs: [{ question: "Pub/Sub vs Message Queue?", answer: "Pub/Sub fans out to all subscribers. Queues deliver to one consumer." }],
    realWorld: ["Google Pub/Sub", "AWS SNS", "Redis Pub/Sub", "Kafka"]
  },
  {
    id: "consistent-hashing",
    name: "Consistent Hashing",
    category: "Data Management",
    shortDesc: "Distribute data with minimal redistribution",
    description: "Consistent hashing distributes data across nodes minimizing redistribution when nodes change.",
    keyPoints: ["Hash ring visualization", "Virtual nodes for balance", "Only K/n keys remapped on change", "Used in distributed caching"],
    useCases: ["Distributed caching", "Load balancing", "Distributed databases"],
    pros: ["Minimal redistribution", "Scalability", "Even distribution"],
    cons: ["Hotspots possible", "Virtual nodes add complexity"],
    faqs: [{ question: "Why virtual nodes?", answer: "Multiple points per node on ring improves distribution balance." }],
    realWorld: ["Cassandra", "DynamoDB", "Memcached", "Riak"]
  },
  {
    id: "saga-pattern",
    name: "Saga Pattern",
    category: "Data Management",
    shortDesc: "Manage distributed transactions via compensating actions",
    description: "Saga manages data consistency across microservices using local transactions with compensating actions.",
    keyPoints: ["Choreography vs Orchestration", "Compensating transactions for rollback", "No distributed locks needed", "Eventual consistency"],
    useCases: ["E-commerce orders", "Booking systems", "Multi-service workflows"],
    pros: ["No distributed locks", "Scalability", "Loose coupling"],
    cons: ["Complexity", "Compensating logic required"],
    faqs: [{ question: "Choreography vs Orchestration?", answer: "Choreography: services react to events. Orchestration: central coordinator." }],
    realWorld: ["Order processing", "Travel booking", "Banking transfers"]
  },
  {
    id: "retry-pattern",
    name: "Retry Pattern",
    category: "Reliability",
    shortDesc: "Automatically retry failed operations",
    description: "Retry pattern automatically retries failed operations expecting success on subsequent attempts.",
    keyPoints: ["Exponential backoff between retries", "Jitter prevents thundering herd", "Max retry limits", "Idempotency required"],
    useCases: ["Network calls", "Database operations", "External APIs"],
    pros: ["Handles transient failures", "Improves reliability"],
    cons: ["Can amplify load", "Requires idempotency"],
    faqs: [{ question: "What is exponential backoff?", answer: "Increasing wait time between retries (1s, 2s, 4s...) to avoid overwhelming services." }],
    realWorld: ["AWS SDK retries", "gRPC retry policy", "HTTP client libraries"]
  },
  {
    id: "health-checks",
    name: "Health Checks",
    category: "Reliability",
    shortDesc: "Monitor service health and readiness",
    description: "Health checks report service operational status for load balancers to route traffic appropriately.",
    keyPoints: ["Liveness: is process running?", "Readiness: can it handle traffic?", "Deep vs shallow checks", "Dependency health inclusion"],
    useCases: ["Load balancers", "Kubernetes", "Monitoring systems"],
    pros: ["Automatic recovery", "Traffic routing", "Early detection"],
    cons: ["False positives", "Check overhead"],
    faqs: [{ question: "Liveness vs Readiness?", answer: "Liveness determines restart. Readiness determines traffic routing." }],
    realWorld: ["Kubernetes probes", "AWS ELB health checks", "Consul"]
  },
  {
    id: "write-ahead-log",
    name: "Write-Ahead Logging",
    category: "Data Management",
    shortDesc: "Log changes before applying them",
    description: "WAL records changes to a log before applying them to database, ensuring durability and recovery.",
    keyPoints: ["Log written before data", "Sequential writes are fast", "Enables crash recovery", "Used in most databases"],
    useCases: ["Databases", "File systems", "Transaction systems"],
    pros: ["Crash recovery", "Durability", "Performance"],
    cons: ["Storage overhead", "Write amplification"],
    faqs: [{ question: "How does WAL enable recovery?", answer: "After crash, replay uncommitted log entries to restore consistent state." }],
    realWorld: ["PostgreSQL WAL", "MySQL redo log", "SQLite journal"]
  },
  {
    id: "backpressure",
    name: "Backpressure",
    category: "Reliability",
    shortDesc: "Control data flow when consumers cannot keep up",
    description: "Backpressure controls data flow when consumers cannot process data as fast as produced.",
    keyPoints: ["Consumer signals capacity", "Prevents memory overflow", "Bounded queues", "Flow control mechanism"],
    useCases: ["Streaming systems", "Message queues", "Real-time processing"],
    pros: ["Prevents overflow", "System stability"],
    cons: ["Complexity", "Producer must handle signals"],
    faqs: [{ question: "How to implement backpressure?", answer: "Use bounded queues, blocking producers, or reactive streams with demand signaling." }],
    realWorld: ["Reactive Streams", "Kafka consumer lag", "TCP flow control"]
  },
  {
    id: "bulkhead",
    name: "Bulkhead Pattern",
    category: "Reliability",
    shortDesc: "Isolate failures to prevent system-wide impact",
    description: "Bulkhead isolates system elements so one failure does not cascade to others.",
    keyPoints: ["Thread pool isolation", "Connection pool per service", "Resource quotas", "Complement circuit breakers"],
    useCases: ["Microservices", "Multi-tenant systems", "Resource pools"],
    pros: ["Fault isolation", "Graceful degradation"],
    cons: ["Resource overhead", "Sizing complexity"],
    faqs: [{ question: "Bulkhead vs Circuit Breaker?", answer: "Bulkheads isolate resources. Circuit breakers stop calling failing services." }],
    realWorld: ["Hystrix thread pools", "Resilience4j bulkhead", "Kubernetes resource limits"]
  }
];
