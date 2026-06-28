export const phases = [
  {
    id: "step-1",
    title: "1. Internet, OS, & Git (Foundation)",
    description: "Pengetahuan fundamental wajib dari Backend & DevOps roadmap.",
    goals: "Internet, Linux, Git",
    project: "Setup Environment",
    resources: [
      { name: "Backend: Internet", url: "https://roadmap.sh/backend" },
      { name: "DevOps: OS & Linux", url: "https://roadmap.sh/devops" }
    ],
    tasks: [
      { id: "t1-1", title: "How the Internet Works (HTTP/HTTPS, DNS, TCP/IP)", done: false },
      { id: "t1-2", title: "OS General Knowledge (Processes, Threads, Memory, Networking)", done: false },
      { id: "t1-3", title: "Terminal Usage & Basic Bash Scripting (grep, awk, sed, lsof, curl)", done: false },
      { id: "t1-4", title: "Version Control (Git: Branching, Merging, Rebasing, PRs)", done: false },
    ],
  },
  {
    id: "step-2",
    title: "2. Python Track",
    description: "Materi inti dari roadmap.sh/python untuk scripting & backend cepat.",
    goals: "Python, FastAPI",
    project: "python-fastapi-todo",
    resources: [
      { name: "Python Roadmap", url: "https://roadmap.sh/python" }
    ],
    tasks: [
      { id: "t2-1", title: "Python Basics (Variables, Conditionals, Type Casting, Exceptions)", done: false },
      { id: "t2-2", title: "Data Structures (Lists, Sets, Tuples, Dictionaries)", done: false },
      { id: "t2-3", title: "Functions & OOP (Classes, Inheritance, Dunder Methods)", done: false },
      { id: "t2-4", title: "Modules, Packages, & Virtual Environments (pip, venv, uv)", done: false },
      { id: "t2-5", title: "Frameworks: Build REST API with FastAPI or Django", done: false },
    ],
  },
  {
    id: "step-3",
    title: "3. JavaScript & Node.js Track",
    description: "Materi inti dari roadmap.sh/javascript & Backend roadmap.",
    goals: "JS, Node.js, Express",
    project: "node-express-todo",
    resources: [
      { name: "JavaScript Roadmap", url: "https://roadmap.sh/javascript" },
      { name: "Node.js (Backend)", url: "https://roadmap.sh/backend" }
    ],
    tasks: [
      { id: "t3-1", title: "JS Basics, Hoisting, Scope, & Closures", done: false },
      { id: "t3-2", title: "Arrays, Objects, & Prototype Chain", done: false },
      { id: "t3-3", title: "Asynchronous JS (Promises, async/await, Event Loop)", done: false },
      { id: "t3-4", title: "Node.js Basics & Package Managers (npm, pnpm)", done: false },
      { id: "t3-5", title: "Build APIs with Express.js / NestJS & Auth (JWT, OAuth)", done: false },
    ],
  },
  {
    id: "step-4",
    title: "4. Go (Golang) Track",
    description: "Materi inti dari roadmap.sh/golang untuk high-performance services.",
    goals: "Go, Gin/Fiber",
    project: "go-gin-api",
    resources: [
      { name: "Golang Roadmap", url: "https://roadmap.sh/golang" }
    ],
    tasks: [
      { id: "t4-1", title: "Go Fundamentals (Packages, Variables, Basic Types, CLI)", done: false },
      { id: "t4-2", title: "Complex Types (Pointers, Arrays, Slices, Maps, Structs)", done: false },
      { id: "t4-3", title: "Methods & Interfaces", done: false },
      { id: "t4-4", title: "Concurrency (Goroutines, Channels, Select, Mutex)", done: false },
      { id: "t4-5", title: "Error Handling (defer, panic, recover) & Logging", done: false },
      { id: "t4-6", title: "Web Frameworks: Build routing with Gin or Fiber", done: false },
    ],
  },
  {
    id: "step-5",
    title: "5. Java & Enterprise Track",
    description: "Materi inti dari roadmap.sh/java untuk sistem perbankan/enterprise.",
    goals: "Java, Spring Boot",
    project: "java-springboot-api",
    resources: [
      { name: "Java Roadmap", url: "https://roadmap.sh/java" }
    ],
    tasks: [
      { id: "t5-1", title: "Java Syntax, Data Types, & JVM Concepts (Garbage Collection)", done: false },
      { id: "t5-2", title: "Java OOP, Interfaces, & Abstract Classes", done: false },
      { id: "t5-3", title: "Collections Framework & Generics", done: false },
      { id: "t5-4", title: "Build Tools (Maven, Gradle)", done: false },
      { id: "t5-5", title: "Spring Framework & Spring Boot Basics (IoC, DI)", done: false },
      { id: "t5-6", title: "Testing (JUnit, Mockito) & Spring Data JPA", done: false },
    ],
  },
  {
    id: "step-6",
    title: "6. Databases, Caching & Brokers",
    description: "Komponen stateful dari Backend & DevOps roadmap.",
    goals: "PostgreSQL, Redis, Kafka",
    project: "Polyglot Storage",
    resources: [
      { name: "DBs & Brokers", url: "https://roadmap.sh/backend" }
    ],
    tasks: [
      { id: "t6-1", title: "Relational DBs (PostgreSQL) - ACID, Joins, Indexes, Normalization", done: false },
      { id: "t6-2", title: "NoSQL DBs (MongoDB / DynamoDB)", done: false },
      { id: "t6-3", title: "Caching (Redis / Memcached) - Eviction policies", done: false },
      { id: "t6-4", title: "Message Brokers (Apache Kafka / RabbitMQ)", done: false },
      { id: "t6-5", title: "ORMs (Object-Relational Mapping) concepts", done: false },
    ],
  },
  {
    id: "step-7",
    title: "7. Cloud, Containers, & IaC",
    description: "Materi infrastruktur dari roadmap.sh/devops.",
    goals: "Docker, AWS, Terraform",
    project: "devops-infra",
    resources: [
      { name: "DevOps Roadmap", url: "https://roadmap.sh/devops" }
    ],
    tasks: [
      { id: "t7-1", title: "Containerization (Docker, Docker Compose, Volumes, Network)", done: false },
      { id: "t7-2", title: "CI/CD Pipelines (GitHub Actions / GitLab CI)", done: false },
      { id: "t7-3", title: "Cloud Provider (AWS: IAM, EC2, S3, VPC, RDS)", done: false },
      { id: "t7-4", title: "Infrastructure as Code (Terraform - Modules, State)", done: false },
      { id: "t7-5", title: "Configuration Management (Ansible - Playbooks, Inventory)", done: false },
    ],
  },
  {
    id: "step-8",
    title: "8. Orchestration & Observability",
    description: "Level tertinggi DevOps (K8s) dari roadmap.sh/devops.",
    goals: "K8s, ArgoCD, Prometheus",
    project: "k8s-gitops",
    resources: [
      { name: "DevOps Roadmap", url: "https://roadmap.sh/devops" }
    ],
    tasks: [
      { id: "t8-1", title: "Kubernetes Basics (Pods, ReplicaSets, Deployments, Services)", done: false },
      { id: "t8-2", title: "K8s Advanced (Ingress, ConfigMaps, Secrets, StatefulSets)", done: false },
      { id: "t8-3", title: "K8s Package Manager (Helm)", done: false },
      { id: "t8-4", title: "GitOps approach for K8s (ArgoCD)", done: false },
      { id: "t8-5", title: "Monitoring (Prometheus, Grafana) & Logging (ELK / Loki)", done: false },
    ],
  }
];
