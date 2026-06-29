export const phases = [
  {
    id: "phase-1",
    title: "FASE 1 — Fondasi + Python (Bulan 1–3)",
    description: "Belajar OS Linux, Docker, Python, Git, dan mulai AWS.",
    project: "python-fastapi-todo",
    tasks: [
      { 
        id: "1-1", 
        title: "Linux & Bash", 
        done: false,
        details: [
          "Navigasi filesystem: cd, ls, pwd, find, locate",
          "File manipulation: cp, mv, rm, chmod, chown, ln",
          "Process management: ps, top, htop, kill, systemctl, journalctl",
          "Networking dasar: ping, curl, wget, netstat, ss, nmap, traceroute",
          "Text processing: grep, awk, sed, cut, sort, uniq, wc",
          "User & permission management: useradd, usermod, sudoers",
          "Bash scripting: variabel, loop, kondisi, fungsi, argumen, cron job",
          "Log reading: tail -f, less, grep untuk filter log"
        ]
      },
      {
        id: "1-2",
        title: "Docker",
        done: false,
        details: [
          "Perbedaan container vs VM",
          "Dockerfile: FROM, RUN, COPY, ENV, EXPOSE, CMD, ENTRYPOINT",
          "Docker CLI: build, run, exec, logs, ps, stop, rm, images",
          "Volume dan bind mount",
          "Docker network: bridge, host, none",
          "docker-compose: service, network, volume, depends_on, env_file"
        ]
      },
      {
        id: "1-3",
        title: "Python",
        done: false,
        details: [
          "Tipe data: string, int, float, list, dict, tuple, set",
          "Control flow: if/elif/else, for, while, break, continue",
          "Function: def, args, kwargs, return, lambda",
          "OOP: class, object, inheritance, method, self",
          "File I/O: open, read, write, with statement",
          "Exception handling: try/except/finally",
          "Module & package: import, pip, virtualenv",
          "Library penting: os, sys, json, requests, datetime, pathlib"
        ]
      },
      {
        id: "1-4",
        title: "Git & GitLab",
        done: false,
        details: [
          "Konsep: repository, commit, branch, merge, rebase",
          "Command: init, clone, add, commit, push, pull, fetch, stash",
          "Branching strategy: main, develop, feature/, hotfix/",
          "Pull request workflow + code review",
          ".gitignore, tagging, git log"
        ]
      },
      {
        id: "1-5",
        title: "AWS (Mulai SAA)",
        done: false,
        details: [
          "IAM: user, group, role, policy",
          "EC2: launch, security group, key pair, elastic IP",
          "S3: bucket, object, permission, versioning",
          "VPC: subnet, internet gateway, route table"
        ]
      },
      {
        id: "1-p-1",
        title: "🚀 PROJECT: Setup & API Dasar (Minggu 1-2)",
        done: false,
        details: [
          "Buat repository python-fastapi-todo di GitLab",
          "Setup struktur folder (app, tests, router, dll)",
          "Install FastAPI dan Uvicorn",
          "Buat endpoint GET /health",
          "Buat 5 Endpoint CRUD Todo via FastAPI & Uvicorn",
          "Test semua endpoint via Swagger UI di /docs"
        ]
      },
      {
        id: "1-p-2",
        title: "🚀 PROJECT: Database & Docker (Minggu 3)",
        done: false,
        details: [
          "Jalankan PostgreSQL via Docker",
          "Tambahkan SQLAlchemy sebagai ORM & hubungkan ke FastAPI",
          "Buat Dockerfile untuk FastAPI",
          "Buat docker-compose.yml: FastAPI + PostgreSQL sekaligus"
        ]
      },
      {
        id: "1-p-3",
        title: "🚀 PROJECT: Auth + Validasi (Minggu 4)",
        done: false,
        details: [
          "Install python-jose dan passlib",
          "Buat POST /auth/register dan POST /auth/login → return JWT token",
          "Proteksi endpoint todo dengan JWT middleware",
          "Tambahkan validasi Pydantic (field wajib, email valid) dan global error handler"
        ]
      },
      {
        id: "1-p-4",
        title: "🚀 PROJECT: Test, CI/CD, Scripting (Minggu 5-8)",
        done: false,
        details: [
          "Install pytest, tulis minimal 10 test case hijau",
          "Buat .gitlab-ci.yml (Stage: test, build, push image ke registry)",
          "Buat README.md & diagram arsitektur (draw.io)",
          "Deploy manual ke AWS EC2 Free Tier (SSH, clone, docker-compose up)",
          "Buat 5 script bash: backup timestamp, status service, disk warning, dll",
          "Buat 3 script Python: monitor uptime, parse log Nginx, auto backup DB"
        ]
      },
      {
        id: "1-s-1",
        title: "🎯 SYARAT LULUS FASE 1",
        done: false,
        details: [
          "Bisa navigasi Linux terminal tanpa melihat catatan",
          "Bisa tulis Bash script dengan loop, kondisi, dan fungsi",
          "FastAPI CRUD + PostgreSQL + JWT berjalan via docker-compose",
          "Pipeline CI/CD GitLab minimal build + test sudah berjalan",
          "Minimal 5 Bash script dan 3 Python script sudah dibuat",
          "Sudah mulai 30% materi AWS SAA"
        ]
      }
    ]
  },
  {
    id: "phase-2",
    title: "FASE 2 — Kubernetes + AWS SAA + Node.js (Bulan 4–6)",
    description: "K8s Architecture, Node.js (Express), Advanced PostgreSQL, and passing AWS SAA.",
    project: "node-express-todo & k8s-deploy",
    tasks: [
      {
        id: "2-1",
        title: "Kubernetes & Minikube",
        done: false,
        details: [
          "Arsitektur K8s: control plane, worker node, etcd, API server",
          "Objek dasar: Pod, ReplicaSet, Deployment, Service, Namespace",
          "Service types: ClusterIP, NodePort, LoadBalancer",
          "Konfigurasi: ConfigMap, Secret, ResourceLimits",
          "Health check: livenessProbe, readinessProbe",
          "kubectl CLI: apply, get, describe, logs, exec, port-forward"
        ]
      },
      {
        id: "2-2",
        title: "GitLab CI/CD Lanjut",
        done: false,
        details: [
          "Stages, jobs, artifacts, cache, CI/CD variables",
          "Docker-in-Docker (dind) untuk build image di pipeline",
          "Pipeline trigger: push ke branch, merge request, schedule"
        ]
      },
      {
        id: "2-3",
        title: "AWS SAA (Selesaikan Semua)",
        done: false,
        details: [
          "Compute: EC2 types, Auto Scaling, ELB, Elastic Beanstalk",
          "Storage: S3 classes, EBS, EFS, Glacier",
          "Database: RDS, DynamoDB, ElastiCache, Aurora",
          "Networking: VPC lanjut, NAT Gateway, VPN, Route 53",
          "Security: IAM lanjut, KMS, CloudTrail, GuardDuty",
          "Serverless: Lambda, API Gateway, SQS, SNS"
        ]
      },
      {
        id: "2-4",
        title: "JavaScript / Node.js & Express",
        done: false,
        details: [
          "JS modern: ES6, Arrow function, Array methods (map/filter/reduce)",
          "Async: callback, Promise, async/await, Promise.all",
          "Node.js: fs, path, http, events, process, Buffer",
          "Express.js: routing, middleware, req/res, error handling",
          "Database: pg library untuk PostgreSQL, parameter query",
          "Validasi (Joi/Zod) & JWT (jsonwebtoken)"
        ]
      },
      {
        id: "2-5",
        title: "PostgreSQL Lanjut",
        done: false,
        details: [
          "JOIN types: INNER, LEFT, RIGHT, FULL OUTER",
          "Aggregasi: GROUP BY, HAVING, COUNT, SUM, AVG",
          "Subquery dan CTE (WITH clause)",
          "Window functions: ROW_NUMBER, RANK, LAG, LEAD",
          "Indexing & EXPLAIN ANALYZE",
          "Transactions: BEGIN, COMMIT, ROLLBACK"
        ]
      },
      {
        id: "2-p-1",
        title: "🚀 PROJECT A: node-express-todo",
        done: false,
        details: [
          "Buat endpoint CRUD Todo pakai Express.js & pg library",
          "Buat POST /auth/register dan /auth/login (JWT)",
          "Tambahkan Joi/Zod validation & error handler global",
          "Tulis unit test pakai Jest & Supertest",
          "Buat Dockerfile & docker-compose.yml, setup Gitlab CI/CD"
        ]
      },
      {
        id: "2-p-2",
        title: "🚀 PROJECT B: k8s-deploy",
        done: false,
        details: [
          "Install Minikube lokal, buat namespace dev & prod",
          "Buat deployment.yaml & service.yaml (NodePort) untuk FastAPI",
          "Buat deployment.yaml & service.yaml untuk Express",
          "Deploy PostgreSQL ke K8s (PVC + StatefulSet)",
          "Test akses API FastAPI & Express berjalan bersamaan"
        ]
      },
      {
        id: "2-s-1",
        title: "🎯 SYARAT LULUS FASE 2",
        done: false,
        details: [
          "AWS SAA sudah lulus ujian resmi",
          "K8s cluster Minikube berjalan, FastAPI dan Express ter-deploy",
          "Express API dengan fitur lengkap sudah jalan & CI/CD otomatis",
          "Bisa jelaskan beda FastAPI dan Express dengan kata-kata sendiri",
          "Bisa deploy aplikasi ke K8s dari manifest YAML tanpa bantuan"
        ]
      }
    ]
  },
  {
    id: "phase-3",
    title: "FASE 3 — Go + Terraform + Ansible + Monitoring (Bulan 7–10)",
    description: "Golang, IaC Provisioning, Config Management, Prom/Grafana Stack.",
    project: "go-gin-todo, devops-infra, monitoring-stack",
    tasks: [
      {
        id: "3-1",
        title: "Go (Golang)",
        done: false,
        details: [
          "Tipe data, Control flow (for/switch), function return",
          "Pointer (& dan *), Struct dan method receiver",
          "Interface: implicit implementation",
          "Error handling: custom error, errors.Is",
          "Goroutine & Channel (concurrency)",
          "Package: go.mod, standard library (fmt, os, net/http)"
        ]
      },
      {
        id: "3-2",
        title: "Go Frameworks & Tools",
        done: false,
        details: [
          "Gin framework: routing, middleware, binding",
          "GORM: model, migration, CRUD, association",
          "CLI: flag package / cobra"
        ]
      },
      {
        id: "3-3",
        title: "Terraform",
        done: false,
        details: [
          "Konsep IaC, deklaratif",
          "Provider AWS, Resources (VPC, Subnet, EC2, SG)",
          "Variables, local, output",
          "State: remote backend (S3 + DynamoDB lock)",
          "Modules: cara buat dan pakai modul reusable"
        ]
      },
      {
        id: "3-4",
        title: "Ansible",
        done: false,
        details: [
          "Inventory (hosts.ini), Playbook, Modules (apt, copy, template, service)",
          "Variables (host_vars, group_vars)",
          "Roles: struktur folder, tasks, handlers, templates",
          "Ansible Vault: enkripsi secret"
        ]
      },
      {
        id: "3-5",
        title: "Prometheus, Grafana & Nginx",
        done: false,
        details: [
          "Prometheus: data model, PromQL (rate, increase)",
          "Exporters: Node Exporter, cAdvisor",
          "AlertManager: routing, telegram notification",
          "Grafana: data source, dashboard builder",
          "Nginx: Reverse proxy, Load balancing, Rate limit"
        ]
      },
      {
        id: "3-p-1",
        title: "🚀 PROJECT A: go-gin-todo",
        done: false,
        details: [
          "API CRUD Todo + Auth JWT dengan Gin & GORM",
          "Buat CLI Tool: health-check (paralel goroutine)",
          "Buat CLI Tool: log-parser & sys-monitor",
          "Expose custom metrics ke endpoint GET /metrics",
          "Unit test dengan testing package & testify"
        ]
      },
      {
        id: "3-p-2",
        title: "🚀 PROJECT B: devops-infra",
        done: false,
        details: [
          "Buat Terraform modul: VPC, EC2, S3 backend",
          "Provision staging (1 EC2) & production (2 EC2)",
          "Ansible roles: common, docker, nginx",
          "Buat provision.sh: Terraform apply -> ambil IP -> Ansible deploy"
        ]
      },
      {
        id: "3-p-3",
        title: "🚀 PROJECT C: monitoring-stack",
        done: false,
        details: [
          "Deploy Prometheus, Grafana, AlertManager via docker-compose",
          "Scrape Node Exporter, FastAPI, dan Go app",
          "Buat Grafana Dashboard (System & App Overview)",
          "Alerting Telegram: CPU > 80% atau Service down"
        ]
      },
      {
        id: "3-s-1",
        title: "🎯 SYARAT LULUS FASE 3",
        done: false,
        details: [
          "Go REST API jalan, 3 CLI tool Go bisa dijalankan di terminal",
          "Infrastruktur AWS bisa di-provision ulang pake Terraform dari nol",
          "Ansible playbook bisa setup server baru dari kosong siap deploy",
          "Grafana nampilin metrik, Alert Telegram masuk kalau mati",
          "Nginx berjalan sebagai reverse proxy untuk 3 app"
        ]
      }
    ]
  },
  {
    id: "phase-4",
    title: "FASE 4 — Java/Spring Boot + GitOps (Bulan 11–14)",
    description: "Java Enterprise, Kafka, Redis, Helm Charts, and ArgoCD.",
    project: "java-springboot-todo & k8s-gitops",
    tasks: [
      {
        id: "4-1",
        title: "Java OOP & Modern Java",
        done: false,
        details: [
          "Inheritance, Interface, Abstract class",
          "Polymorphism, Generics, Collections (List, Set, Map)",
          "Stream API (filter, map, reduce)",
          "Lambda expression, Optional, Custom exception"
        ]
      },
      {
        id: "4-2",
        title: "Spring Boot",
        done: false,
        details: [
          "IoC dan Dependency Injection (@Component, @Service)",
          "Spring MVC (@RestController, @GetMapping)",
          "Spring Data JPA, Bean Validation",
          "Spring Security (JWT filter), Actuator (Micrometer/Prometheus)"
        ]
      },
      {
        id: "4-3",
        title: "Kafka & Redis",
        done: false,
        details: [
          "Kafka: topic, partition, producer/consumer, @KafkaListener",
          "Redis: String, Hash, @Cacheable, TTL expiration"
        ]
      },
      {
        id: "4-4",
        title: "Helm & ArgoCD",
        done: false,
        details: [
          "Helm: chart structure, values.yaml, templates",
          "ArgoCD: GitOps workflow, sync policies, Application CRD"
        ]
      },
      {
        id: "4-p-1",
        title: "🚀 PROJECT A: java-springboot-todo",
        done: false,
        details: [
          "Buat API CRUD dengan Spring Boot & Spring Data JPA",
          "Implementasi Spring Security + JWT",
          "Gunakan Redis untuk caching response API",
          "Gunakan Kafka untuk publish event saat Todo dibuat"
        ]
      },
      {
        id: "4-p-2",
        title: "🚀 PROJECT B: k8s-gitops",
        done: false,
        details: [
          "Buat Helm Chart untuk ke-4 aplikasi (Python, Node, Go, Java)",
          "Setup repository config K8s terpisah khusus GitOps",
          "Install & konfigurasi ArgoCD di cluster",
          "Deploy staging dan production via ArgoCD (auto-sync)"
        ]
      },
      {
        id: "4-s-1",
        title: "🎯 SYARAT LULUS FASE 4",
        done: false,
        details: [
          "Menguasai Java OOP & Ecosystem Spring Boot",
          "Ke-4 REST API sukses dideploy via ArgoCD GitOps flow"
        ]
      }
    ]
  },
  {
    id: "phase-5",
    title: "FASE 5 — Microservices Polyglot & Testing (Bulan 15–20)",
    description: "Integrasi semua API beda bahasa jadi satu sistem K8s utuh.",
    project: "microservices-polyglot",
    tasks: [
      {
        id: "5-1",
        title: "Microservice Design",
        done: false,
        details: [
          "API Gateway, Service Discovery, Service Mesh",
          "Sync vs Async communication"
        ]
      },
      {
        id: "5-2",
        title: "Advanced Testing",
        done: false,
        details: [
          "Integration Testing Database",
          "Mocking services",
          "E2E Testing"
        ]
      },
      {
        id: "5-3",
        title: "System Design Concepts",
        done: false,
        details: [
          "Scalability, High Availability",
          "Database Sharding & Replication"
        ]
      },
      {
        id: "5-p-1",
        title: "🚀 PROJECT: microservices-polyglot",
        done: false,
        details: [
          "Bangun API Gateway (misal Kong / Nginx Ingress) routing ke 4 service",
          "Service komunikasi via Kafka & gRPC/REST",
          "Setup CI/CD pipeline yang menjalankan full E2E test"
        ]
      },
      {
        id: "5-s-1",
        title: "🎯 SYARAT LULUS FASE 5",
        done: false,
        details: [
          "Memahami pola komunikasi antar service beda bahasa",
          "Mulai aktif Apply Pekerjaan Backend Developer & SRE!"
        ]
      }
    ]
  },
  {
    id: "phase-6",
    title: "FASE 6 — Spesialisasi & Mock Interview (Bulan 20–24)",
    description: "Algoritma, Interview Prep, dan landing job SRE/Backend.",
    project: "Flagship Project Polish",
    tasks: [
      {
        id: "6-1",
        title: "Algoritma & Struktur Data",
        done: false,
        details: [
          "Latihan Leetcode (Easy-Medium)",
          "Array, String, Hash Map, Linked List, Tree"
        ]
      },
      {
        id: "6-2",
        title: "System Design Interview",
        done: false,
        details: [
          "Latihan menggambar arsitektur (Draw.io / Whiteboard)",
          "Menjelaskan trade-off teknologi"
        ]
      },
      {
        id: "6-p-1",
        title: "🚀 PROJECT: Portfolio Polish",
        done: false,
        details: [
          "Polish README di 8 Repo GitHub (tambahkan diagram)",
          "Build in Public: Posting progress dan kesimpulan ke LinkedIn",
          "Persiapkan Resume ATS Friendly"
        ]
      },
      {
        id: "6-s-1",
        title: "🎯 SYARAT LULUS FASE 6",
        done: false,
        details: [
          "Confident technical interview",
          "Terima Offer SRE / DevOps / Backend 🚀"
        ]
      }
    ]
  }
];
