export const phases = [
  {
    id: "phase-1",
    title: "FASE 1 — Fondasi + Python (Bulan 1–3)",
    description: "Linux, Docker, Python, Git & AWS SAA (30%).",
    project: "python-fastapi-todo",
    tasks: [
      { id: "1-1", title: "Linux & Bash: Navigasi, Process, Permission, Scripting (5+ scripts)", done: false },
      { id: "1-2", title: "Docker: CLI, docker-compose, bridge network, bind mount", done: false },
      { id: "1-3", title: "Python: Data types, OOP, FastAPI (CRUD, Pydantic, JWT)", done: false },
      { id: "1-4", title: "PostgreSQL: SQLAlchemy ORM, relationship", done: false },
      { id: "1-5", title: "GitLab CI/CD: Pipeline build + test otomatis", done: false },
      { id: "1-6", title: "🎯 Syarat Lulus: FastAPI + DB jalan di Docker, 10 Test Cases hijau", done: false }
    ]
  },
  {
    id: "phase-2",
    title: "FASE 2 — Kubernetes + AWS SAA + Node.js (Bulan 4–6)",
    description: "K8s, Node.js/Express, lulus AWS SAA.",
    project: "node-express-todo + k8s-deploy",
    tasks: [
      { id: "2-1", title: "JavaScript: ES6+, Async/Await, Array methods", done: false },
      { id: "2-2", title: "Node.js & Express: Routing, Middleware, Joi/Zod, pg library", done: false },
      { id: "2-3", title: "PostgreSQL Advanced: JOINs, Subqueries, Indexing, EXPLAIN ANALYZE", done: false },
      { id: "2-4", title: "AWS SAA: EC2, S3, RDS, VPC, IAM (Pass Exam)", done: false },
      { id: "2-5", title: "Kubernetes: Pods, Services, Deployments, Minikube lokal", done: false },
      { id: "2-6", title: "🎯 Syarat Lulus: AWS SAA Lulus & Deploy API ke K8s lokal", done: false }
    ]
  },
  {
    id: "phase-3",
    title: "FASE 3 — Go + IaC + Monitoring (Bulan 7–10)",
    description: "Go (Gin), Terraform, Ansible, Prometheus & Grafana.",
    project: "go-gin-todo + devops-infra + monitoring-stack",
    tasks: [
      { id: "3-1", title: "Go: Goroutines, Channels, Pointers, Struct, Interfaces", done: false },
      { id: "3-2", title: "Go API & CLI: Gin, GORM, 3 CLI tools (health-check, log-parser, sys-monitor)", done: false },
      { id: "3-3", title: "Terraform: AWS Provisioning (VPC, EC2, S3), Modules, Remote State", done: false },
      { id: "3-4", title: "Ansible: Playbooks, Roles, Inventory (Setup EC2 otomatis)", done: false },
      { id: "3-5", title: "Monitoring: Prometheus Scraping & Grafana Dashboards", done: false },
      { id: "3-6", title: "🎯 Syarat Lulus: Infra AWS auto-provision, Nginx Reverse Proxy jalan", done: false }
    ]
  },
  {
    id: "phase-4",
    title: "FASE 4 — Java + GitOps + SRE Portfolio (Bulan 11–14)",
    description: "Java/Spring Boot, Kafka, Redis, ArgoCD.",
    project: "java-springboot-todo + k8s-gitops",
    tasks: [
      { id: "4-1", title: "Java: OOP, Generics, Stream API, Optional", done: false },
      { id: "4-2", title: "Spring Boot: DI, Spring MVC, Spring Data JPA, Security", done: false },
      { id: "4-3", title: "Message Broker & Cache: Kafka, Redis (Session/Rate Limiting)", done: false },
      { id: "4-4", title: "Helm: Package K8s (Chart, values.yaml)", done: false },
      { id: "4-5", title: "GitOps: ArgoCD Staging & Prod Deployments", done: false },
      { id: "4-6", title: "🎯 Syarat Lulus: 4 REST API running di K8s via ArgoCD", done: false }
    ]
  },
  {
    id: "phase-5",
    title: "FASE 5 — Microservices Polyglot (Bulan 15–20)",
    description: "Integrasi API 4 bahasa & Advanced Testing.",
    project: "microservices-polyglot",
    tasks: [
      { id: "5-1", title: "Microservices Architecture (API Gateway, Service Discovery)", done: false },
      { id: "5-2", title: "Integrasi API (Python, Node, Go, Java) jadi 1 ekosistem", done: false },
      { id: "5-3", title: "Advanced Testing: Unit, Integration, E2E", done: false },
      { id: "5-4", title: "System Design Concepts (Scalability, Reliability)", done: false },
      { id: "5-5", title: "🎯 Syarat Lulus: Mulai aktif lamar Backend Developer", done: false }
    ]
  },
  {
    id: "phase-6",
    title: "FASE 6 — Final Polish & Job Hunt (Bulan 20–24)",
    description: "Polish Repo, Interview Prep, Land the Offer.",
    project: "Flagship project & Portfolio",
    tasks: [
      { id: "6-1", title: "Polish Flagship Documentation (README, Arch Diagrams)", done: false },
      { id: "6-2", title: "Data Structures & Algorithms (LeetCode)", done: false },
      { id: "6-3", title: "Mock Interviews: Behavioral & System Design", done: false },
      { id: "6-4", title: "🎯 Syarat Lulus: Terima Job Offer (SRE / DevOps / Backend)", done: false }
    ]
  }
];
