export const phases = [
  {
    id: "step-1",
    title: "1. Phase 1: Foundation (Bulan 1–3)",
    description: "Linux, Docker, Python, Git. Target: FastAPI + PostgreSQL jalan di Docker, pipeline CI/CD aktif.",
    goals: "Linux, Docker, Python",
    project: "python-fastapi-todo",
    resources: [
      { name: "DevOps Roadmap", url: "https://roadmap.sh/devops" },
      { name: "Python Roadmap", url: "https://roadmap.sh/python" }
    ],
    tasks: [
      { id: "t1-1", title: "Linux Basics & Bash Scripting", done: false },
      { id: "t1-2", title: "Version Control (Git & GitHub)", done: false },
      { id: "t1-3", title: "Python Basics & OOP", done: false },
      { id: "t1-4", title: "Containerization (Docker & Docker Compose)", done: false },
      { id: "t1-5", title: "Build REST API with FastAPI + PostgreSQL", done: false },
      { id: "t1-6", title: "Setup basic CI/CD pipeline", done: false },
    ],
  },
  {
    id: "step-2",
    title: "2. Phase 2: Cloud & Node.js (Bulan 4–6)",
    description: "K8s, AWS SAA, Node.js. Target: AWS SAA lulus, K8s cluster lokal berjalan.",
    goals: "AWS, Node.js, K8s",
    project: "node-express-todo + k8s-deploy",
    resources: [
      { name: "Backend Roadmap", url: "https://roadmap.sh/backend" },
      { name: "JavaScript Roadmap", url: "https://roadmap.sh/javascript" }
    ],
    tasks: [
      { id: "t2-1", title: "JavaScript Basics & Asynchronous JS", done: false },
      { id: "t2-2", title: "Build APIs with Node.js & Express + JWT Auth", done: false },
      { id: "t2-3", title: "AWS Cloud Basics (EC2, S3, VPC, RDS)", done: false },
      { id: "t2-4", title: "Kubernetes (K8s) Basics on Minikube/Local", done: false },
      { id: "t2-5", title: "Deploy Express app to local K8s", done: false },
      { id: "t2-6", title: "Pass AWS Solutions Architect Associate 🏆", done: false },
    ],
  },
  {
    id: "step-3",
    title: "3. Phase 3: The SRE Way (Bulan 7–10)",
    description: "Go, Terraform, Ansible, Monitoring. Target: 3 REST API + Infra AWS via Terraform.",
    goals: "Go, Terraform, Ansible",
    project: "go-gin-todo + devops-infra + monitoring-stack",
    resources: [
      { name: "Go Roadmap", url: "https://roadmap.sh/golang" },
      { name: "Terraform Docs", url: "https://developer.hashicorp.com/terraform/tutorials" }
    ],
    tasks: [
      { id: "t3-1", title: "Go Fundamentals (Goroutines, Interfaces, Structs)", done: false },
      { id: "t3-2", title: "Build high-perf API with Go + Gin + Prometheus metrics", done: false },
      { id: "t3-3", title: "Infrastructure as Code (Terraform) for AWS", done: false },
      { id: "t3-4", title: "Configuration Management (Ansible)", done: false },
      { id: "t3-5", title: "Monitoring Stack (Prometheus, Grafana, AlertManager)", done: false },
      { id: "t3-6", title: "Start applying for SRE & DevOps roles 🎯 (Bulan 11)", done: false },
    ],
  },
  {
    id: "step-4",
    title: "4. Phase 4: Enterprise Ready (Bulan 11–14)",
    description: "Java/Spring Boot, GitOps, K8s Lanjut. Target: 4 REST API deploy di K8s via ArgoCD.",
    goals: "Java, ArgoCD, Kafka",
    project: "java-springboot-todo + k8s-gitops",
    resources: [
      { name: "Java Roadmap", url: "https://roadmap.sh/java" },
      { name: "ArgoCD Docs", url: "https://argo-cd.readthedocs.io/" }
    ],
    tasks: [
      { id: "t4-1", title: "Java OOP, JVM, & Collections", done: false },
      { id: "t4-2", title: "Build Enterprise API with Spring Boot", done: false },
      { id: "t4-3", title: "Message Brokers (Kafka) & Caching (Redis)", done: false },
      { id: "t4-4", title: "Kubernetes Package Manager (Helm)", done: false },
      { id: "t4-5", title: "GitOps Workflow using ArgoCD (Staging/Prod)", done: false },
    ],
  },
  {
    id: "step-5",
    title: "5. Phase 5: Microservices (Bulan 15–20)",
    description: "Microservices multi-bahasa & Testing. Menjawab: Kapan & kenapa pilih bahasa ini?",
    goals: "Microservices, System Design",
    project: "microservices-polyglot",
    resources: [
      { name: "System Design Roadmap", url: "https://roadmap.sh/system-design" }
    ],
    tasks: [
      { id: "t5-1", title: "Microservices Architecture & System Design", done: false },
      { id: "t5-2", title: "Integrate 4 APIs (Python, Node, Go, Java) into one system", done: false },
      { id: "t5-3", title: "Advanced Testing (Unit, Integration, E2E)", done: false },
      { id: "t5-4", title: "Full Kubernetes Deployment for Polyglot System", done: false },
      { id: "t5-5", title: "Start applying for Backend Developer roles 🎯", done: false },
    ],
  },
  {
    id: "step-6",
    title: "6. Phase 6: Final Polish (Bulan 20–24)",
    description: "Spesialisasi, polish portfolio, interview prep. Target: Offer diterima.",
    goals: "Interview Prep",
    project: "Flagship project",
    resources: [
      { name: "Computer Science Roadmap", url: "https://roadmap.sh/computer-science" }
    ],
    tasks: [
      { id: "t6-1", title: "Polish Flagship Project Documentation (READMEs, Architecture Diagrams)", done: false },
      { id: "t6-2", title: "Data Structures & Algorithms", done: false },
      { id: "t6-3", title: "Mock Interviews (Behavioral & System Design)", done: false },
      { id: "t6-4", title: "Receive Offer Letter 🎯", done: false },
    ],
  }
];
