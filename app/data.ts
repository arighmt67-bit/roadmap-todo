export const phases = [
  {
    id: "phase-1",
    title: "FASE 1 — Fondasi + Python (Bulan 1–3)",
    description: "Belajar OS Linux, Docker, Python, Git, dan mulai AWS.",
    project: "python-fastapi-todo",
    tasks: [
      { id: "1-1", title: "Pelajari navigasi Linux, file & process management, networking dasar, permission (chmod/chown).", done: false },
      { id: "1-2", title: "Pahami Docker CLI, Dockerfile, Bind Mount, dan Docker-Compose.", done: false },
      { id: "1-3", title: "Kuasai Python: Tipe data, OOP, Exception Handling, Module/Pip.", done: false },
      { id: "1-4", title: "Git: Init, Commit, Branching Strategy (main/develop), Pull Request.", done: false },
      { id: "1-5", title: "AWS CCP/SAA Awal: IAM, EC2, S3, VPC (Target 30%).", done: false },
      { id: "1-p-1", title: "🚀 PROJECT: Setup struktur folder FastAPI, Dockerfile, docker-compose.yml", done: false },
      { id: "1-p-2", title: "🚀 PROJECT: (Mg 1-2) Buat 5 Endpoint CRUD Todo via FastAPI & Uvicorn", done: false },
      { id: "1-p-3", title: "🚀 PROJECT: (Mg 3) Connect PostgreSQL via SQLAlchemy ORM, auto-migrate", done: false },
      { id: "1-p-4", title: "🚀 PROJECT: (Mg 4) Auth (python-jose, passlib), /auth/login return JWT", done: false },
      { id: "1-p-5", title: "🚀 PROJECT: (Mg 5-6) Tulis test pytest (minimal 10 test cases hijau) & Gitlab CI/CD", done: false },
      { id: "1-p-6", title: "🚀 PROJECT: (Mg 7-8) Deploy manual ke EC2 AWS, buat diagram di README", done: false },
      { id: "1-s-1", title: "🎯 SYARAT LULUS: Navigasi Linux terminal tanpa lihat catatan", done: false },
      { id: "1-s-2", title: "🎯 SYARAT LULUS: Minimal 5 Bash script & 3 Python script sudah jalan", done: false },
      { id: "1-s-3", title: "🎯 SYARAT LULUS: FastAPI CRUD + PostgreSQL jalan mulus di docker-compose", done: false }
    ]
  },
  {
    id: "phase-2",
    title: "FASE 2 — Kubernetes + AWS SAA + Node.js (Bulan 4–6)",
    description: "K8s Architecture, Node.js (Express), Advanced PostgreSQL, and passing AWS SAA.",
    project: "node-express-todo & k8s-deploy",
    tasks: [
      { id: "2-1", title: "K8s: Pod, Deployment, Service, ConfigMap, Secret, LivenessProbe", done: false },
      { id: "2-2", title: "K8s: Install Minikube lokal & setup kubectl CLI", done: false },
      { id: "2-3", title: "Gitlab CI/CD: Docker-in-Docker, Registry, Artifacts", done: false },
      { id: "2-4", title: "AWS SAA: Compute, Storage, Database, Networking, Security, Serverless", done: false },
      { id: "2-5", title: "JavaScript: ES6, Async/Await, Array Methods (map, filter, reduce)", done: false },
      { id: "2-6", title: "PostgreSQL Lanjut: JOIN types, Aggregasi, Window Functions, Indexing, EXPLAIN", done: false },
      { id: "2-p-1", title: "🚀 PROJECT A (Express): Setup endpoint CRUD Todo pakai Express.js & pg library", done: false },
      { id: "2-p-2", title: "🚀 PROJECT A (Express): Tambahkan Joi/Zod validation, error handler, JWT", done: false },
      { id: "2-p-3", title: "🚀 PROJECT A (Express): Tulis unit test pakai Jest & Supertest", done: false },
      { id: "2-p-4", title: "🚀 PROJECT B (K8s): Buat manifest Deployment & NodePort Service FastAPI", done: false },
      { id: "2-p-5", title: "🚀 PROJECT B (K8s): Buat PersistentVolumeClaim & StatefulSet PostgreSQL", done: false },
      { id: "2-s-1", title: "🎯 SYARAT LULUS: Lulus Ujian Resmi AWS SAA", done: false },
      { id: "2-s-2", title: "🎯 SYARAT LULUS: FastAPI & Express jalan bersamaan di cluster Minikube", done: false },
      { id: "2-s-3", title: "🎯 SYARAT LULUS: Pipeline build & push image Gitlab berjalan otomatis", done: false }
    ]
  },
  {
    id: "phase-3",
    title: "FASE 3 — Go + Terraform + Ansible + Monitoring (Bulan 7–10)",
    description: "Golang, IaC Provisioning, Config Management, Prom/Grafana Stack.",
    project: "go-gin-todo, devops-infra, monitoring-stack",
    tasks: [
      { id: "3-1", title: "Go: Goroutines, Channel, Pointer, Struct, Interface, Error Handling", done: false },
      { id: "3-2", title: "Go: Paham go.mod, standard library, Gin Framework, & GORM", done: false },
      { id: "3-3", title: "Terraform: State (S3 backend), Modules (VPC/EC2), Variables", done: false },
      { id: "3-4", title: "Ansible: Inventory, Playbook, Roles, Variables, Templates, Vault", done: false },
      { id: "3-5", title: "Prometheus: PromQL, Node Exporter, cAdvisor", done: false },
      { id: "3-6", title: "Grafana & AlertManager: Dashboard Builder, Telegram Notification", done: false },
      { id: "3-7", title: "Nginx: Reverse Proxy, Load Balancing, Rate Limit, Logging", done: false },
      { id: "3-p-1", title: "🚀 PROJECT A (Go): Buat API CRUD Todo pakai Gin, JWT, & GORM", done: false },
      { id: "3-p-2", title: "🚀 PROJECT A (Go CLI): Buat tool sys-monitor, log-parser, dan health-check di CLI", done: false },
      { id: "3-p-3", title: "🚀 PROJECT B (Terraform): Tulis modul VPC & EC2 untuk Staging & Production", done: false },
      { id: "3-p-4", title: "🚀 PROJECT B (Ansible): Tulis script provision.sh (Terraform apply -> Ansible play)", done: false },
      { id: "3-p-5", title: "🚀 PROJECT C (Monitor): Setup prometheus.yml scrape Node Exporter & Go app", done: false },
      { id: "3-p-6", title: "🚀 PROJECT C (Monitor): Alert rule (CPU > 80%, Down) kirim notifikasi Telegram", done: false },
      { id: "3-s-1", title: "🎯 SYARAT LULUS: 3 CLI Tool Go jalan sempurna dari terminal", done: false },
      { id: "3-s-2", title: "🎯 SYARAT LULUS: Infrastruktur EC2 AWS jalan otomatis pake Ansible & Terraform dari 0", done: false },
      { id: "3-s-3", title: "🎯 SYARAT LULUS: Grafana & Alert Telegram aktif nangkep metric K8s/App", done: false }
    ]
  },
  {
    id: "phase-4",
    title: "FASE 4 — Java/Spring Boot + GitOps (Bulan 11–14)",
    description: "Java Enterprise, Kafka, Redis, Helm Charts, and ArgoCD.",
    project: "java-springboot-todo & k8s-gitops",
    tasks: [
      { id: "4-1", title: "Java OOP: Polymorphism, Generics, Stream API, Optional", done: false },
      { id: "4-2", title: "Spring Boot: IoC, DI, Spring MVC, Spring Data JPA, Actuator", done: false },
      { id: "4-3", title: "Message Broker: Kafka (Producer/Consumer, Partition, Topic)", done: false },
      { id: "4-4", title: "Redis: Cacheable, Hash, Session, TTL expiration", done: false },
      { id: "4-5", title: "Helm & ArgoCD: Helm charts templates, ArgoCD Application sync", done: false },
      { id: "4-p-1", title: "🚀 PROJECT A (Spring): Buat Todo API Spring Boot, Spring Security (JWT)", done: false },
      { id: "4-p-2", title: "🚀 PROJECT A (Spring): Integrasi API dengan Kafka (Event Driven) & Redis (Cache)", done: false },
      { id: "4-p-3", title: "🚀 PROJECT B (GitOps): Kemas 4 App (Python, Node, Go, Java) ke dalam Helm Chart", done: false },
      { id: "4-p-4", title: "🚀 PROJECT B (GitOps): Setup ArgoCD untuk auto-sync repo K8s ke Cluster Staging/Prod", done: false },
      { id: "4-s-1", title: "🎯 SYARAT LULUS: Menguasai Java OOP & Ecosystem Spring Boot", done: false },
      { id: "4-s-2", title: "🎯 SYARAT LULUS: Ke-4 REST API sukses dideploy via ArgoCD GitOps flow", done: false }
    ]
  },
  {
    id: "phase-5",
    title: "FASE 5 — Microservices Polyglot & Testing (Bulan 15–20)",
    description: "Integrasi semua API beda bahasa jadi satu sistem K8s utuh.",
    project: "microservices-polyglot",
    tasks: [
      { id: "5-1", title: "Microservice Design: API Gateway, Service Mesh", done: false },
      { id: "5-2", title: "Testing Advanced: TDD, Integration Test DB, Mocking", done: false },
      { id: "5-3", title: "System Design: Scaling, High Availability, Database Sharding", done: false },
      { id: "5-p-1", title: "🚀 PROJECT: Bangun API Gateway yang nge-route ke Python, Node, Go, Java API", done: false },
      { id: "5-p-2", title: "🚀 PROJECT: Buat end-to-end testing yang jalan full otomatis di pipeline", done: false },
      { id: "5-s-1", title: "🎯 SYARAT LULUS: Memahami pola komunikasi antar service beda bahasa", done: false },
      { id: "5-s-2", title: "🎯 SYARAT LULUS: Mulai aktif Apply Pekerjaan Backend Developer!", done: false }
    ]
  },
  {
    id: "phase-6",
    title: "FASE 6 — Spesialisasi & Mock Interview (Bulan 20–24)",
    description: "Algoritma, Interview Prep, dan landing job SRE/Backend.",
    project: "Flagship Project Polish",
    tasks: [
      { id: "6-1", title: "Algoritma & Struktur Data (Leetcode Easy-Med)", done: false },
      { id: "6-2", title: "System Design Interview (Draw architecture di whiteboard)", done: false },
      { id: "6-p-1", title: "🚀 PROJECT: Polish seluruh dokumentasi (README, Arch Diagram) di 8 Repo GitHub", done: false },
      { id: "6-p-2", title: "🚀 PROJECT: Build in Public, post ringkasan belajar ke LinkedIn rutin", done: false },
      { id: "6-s-1", title: "🎯 SYARAT LULUS: Confident technical interview", done: false },
      { id: "6-s-2", title: "🎯 SYARAT LULUS: Terima Offer SRE / DevOps / Backend 🚀", done: false }
    ]
  }
];
