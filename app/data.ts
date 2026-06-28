export const phases = [
  {
    id: "step-1",
    title: "1. Internet, OS, & Programming (Foundation)",
    description: "Memahami cara internet bekerja, sistem operasi Linux, dan bahasa scripting dasar.",
    goals: "Linux, Bash, Python",
    project: "python-fastapi-todo",
    resources: [
      { name: "DevOps Roadmap", url: "https://roadmap.sh/devops" },
      { name: "Python Roadmap", url: "https://roadmap.sh/python" },
      { name: "Linux Journey", url: "https://linuxjourney.com/" }
    ],
    tasks: [
      { id: "t1-1", title: "Learn how the Internet works (DNS, HTTP)", done: false },
      { id: "t1-2", title: "OS & Linux Basics (Terminal, Bash script)", done: false },
      { id: "t1-3", title: "Python (Data structures, OOP, FastAPI)", done: false },
      { id: "t1-4", title: "Version Control (Git & GitHub)", done: false },
    ],
  },
  {
    id: "step-2",
    title: "2. Databases & Backend APIs",
    description: "Database relasional/NoSQL, merancang REST API, dan Node.js.",
    goals: "PostgreSQL, Redis, Node.js/JS",
    project: "node-express-todo",
    resources: [
      { name: "Backend Roadmap", url: "https://roadmap.sh/backend" },
      { name: "JavaScript Roadmap", url: "https://roadmap.sh/javascript" },
      { name: "PostgreSQL Exercises", url: "https://pgexercises.com/" }
    ],
    tasks: [
      { id: "t2-1", title: "Learn JavaScript / Node.js", done: false },
      { id: "t2-2", title: "Relational DBs (PostgreSQL) & SQL", done: false },
      { id: "t2-3", title: "NoSQL & Caching (Redis)", done: false },
      { id: "t2-4", title: "Build APIs (REST, Authentication/JWT)", done: false },
    ],
  },
  {
    id: "step-3",
    title: "3. Containers, CI/CD, & Cloud (AWS)",
    description: "Membungkus aplikasi, otomatisasi deploy, dan AWS Cloud.",
    goals: "Docker, GitLab CI/Actions, AWS",
    project: "Dockerized Apps & AWS SAA",
    resources: [
      { name: "Docker Tutorial", url: "https://docs.docker.com/get-started/" },
      { name: "AWS SAA (Stephane Maarek)", url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/" }
    ],
    tasks: [
      { id: "t3-1", title: "Containers (Docker, Docker Compose)", done: false },
      { id: "t3-2", title: "CI/CD (GitHub Actions / GitLab CI)", done: false },
      { id: "t3-3", title: "Cloud Provider Basics (AWS VPC, EC2, S3)", done: false },
      { id: "t3-4", title: "Pass AWS Solutions Architect Associate 🏆", done: false },
    ],
  },
  {
    id: "step-4",
    title: "4. Infrastructure as Code & Config Mgmt",
    description: "Automasi infrastruktur server dan bahasa high-performance (Go).",
    goals: "Terraform, Ansible, Go",
    project: "devops-infra",
    resources: [
      { name: "Go Roadmap", url: "https://roadmap.sh/golang" },
      { name: "Terraform Docs", url: "https://developer.hashicorp.com/terraform/tutorials" }
    ],
    tasks: [
      { id: "t4-1", title: "Learn Go (Golang) for fast microservices", done: false },
      { id: "t4-2", title: "Infrastructure as Code (Terraform)", done: false },
      { id: "t4-3", title: "Configuration Management (Ansible)", done: false },
    ],
  },
  {
    id: "step-5",
    title: "5. Orchestration, GitOps, & Monitoring",
    description: "Scale dengan K8s, manajemen lewat GitOps, dan Observability.",
    goals: "K8s, ArgoCD, Prometheus",
    project: "k8s-gitops",
    resources: [
      { name: "Killercoda K8s Labs", url: "https://killercoda.com/" },
      { name: "ArgoCD Docs", url: "https://argo-cd.readthedocs.io/" }
    ],
    tasks: [
      { id: "t5-1", title: "Container Orchestration (Kubernetes, Helm)", done: false },
      { id: "t5-2", title: "GitOps approach (ArgoCD)", done: false },
      { id: "t5-3", title: "Monitoring & Observability (Prometheus, Grafana)", done: false },
    ],
  },
  {
    id: "step-6",
    title: "6. Enterprise Architecture & Microservices",
    description: "Pola arsitektur besar, Java, dan Message Brokers.",
    goals: "Java, Spring Boot, Kafka",
    project: "microservices-polyglot",
    resources: [
      { name: "Java Roadmap", url: "https://roadmap.sh/java" },
      { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" }
    ],
    tasks: [
      { id: "t6-1", title: "Java & OOP Principles", done: false },
      { id: "t6-2", title: "Enterprise Backend (Spring Boot)", done: false },
      { id: "t6-3", title: "Message Brokers (Apache Kafka)", done: false },
      { id: "t6-4", title: "System Design & Microservices patterns", done: false },
      { id: "t6-5", title: "Apply for SRE / DevOps / Backend roles 🎯", done: false },
    ],
  }
];
