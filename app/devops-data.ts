export const devopsPhases = [
  {
    id: "dev-1",
    title: "DEVOPS — Sprint 1: Linux, Scripting & Networking (Bulan 1–2)",
    description: "Fondasi sistem operasi, automasi script, dan networking untuk infrastruktur.",
    project: "linux-automation-toolkit",
    tasks: [
      {
        id: "d1-1",
        title: "Linux OS Mastery",
        done: false,
        details: [
          "Navigasi filesystem: cd, ls, pwd, find, locate, tree",
          "File manipulation: cp, mv, rm, touch, mkdir, ln (symlink)",
          "Process management: ps, top, htop, kill, systemctl, journalctl",
          "User & permission: useradd, usermod, chmod, chown, sudoers, ACL",
          "Disk & storage: df, du, fdisk, mount, LVM basics",
          "Systemd: buat custom .service file, enable/start/stop service",
          "Network config: ip, ifconfig, ss, netstat, firewall (ufw/iptables)"
        ]
      },
      {
        id: "d1-2",
        title: "Bash Scripting untuk Automasi",
        done: false,
        details: [
          "Variabel, parameter, exit code ($?, $1, $@)",
          "Control flow: if/else, case, for, while",
          "Function & argument passing",
          "Text processing: grep, awk, sed, cut, sort, uniq, wc, tr",
          "File testing: -f, -d, -r, -w, -e, string comparison",
          "Cron job: scheduling script berjalan otomatis",
          "Logging: redirect stdout/stderr ke file, logrotate"
        ]
      },
      {
        id: "d1-3",
        title: "Python untuk DevOps",
        done: false,
        details: [
          "Tipe data, control flow, function, module",
          "File I/O & JSON parsing",
          "Subprocess: jalankan shell command dari Python",
          "Requests library: call REST API (health check, deployment trigger)",
          "Virtualenv & pip requirements.txt",
          "Script otomasi: backup config, batch server provisioning, log parser"
        ]
      },
      {
        id: "d1-4",
        title: "Networking Fundamentals",
        done: false,
        details: [
          "OSI Model & TCP/IP stack",
          "IP addressing: subnetting (CIDR), private vs public IP",
          "DNS: A record, CNAME, MX, NS, cara kerja resolusi",
          "Load balancing konsep: L4 vs L7, round-robin, least-conn",
          "Firewall: stateful vs stateless, security group concept",
          "VPN & SSH tunneling basics",
          "Tools: ping, traceroute, dig, nslookup, curl, telnet, nc"
        ]
      },
      {
        id: "d1-5",
        title: "Git & Version Control",
        done: false,
        details: [
          "Git workflow: clone, branch, commit, push, pull, merge, rebase",
          "Branching strategy: GitLab Flow, trunk-based development",
          "Git hooks: pre-commit, pre-push untuk quality gate",
          ".gitignore, stash, cherry-pick, bisect untuk debugging"
        ]
      },
      {
        id: "d1-p1",
        title: "🚀 PROJECT: linux-automation-toolkit",
        done: false,
        details: [
          "Buat 5+ Bash script otomasi: backup, disk monitoring, log cleanup, service health check, user provisioning",
          "Buat 3+ Python script: multi-server health checker (via SSH), Nginx log parser (top IP/status code), config backup ke S3",
          "Setup cron job untuk jalankan script otomatis tiap hari",
          "Setup Git repo di GitLab, push semua script dengan README",
          "Deploy script ke 2 VM (lokal/staging), verifikasi jalan via cron"
        ]
      },
      {
        id: "d1-s1",
        title: "🎯 SYARAT LULUS SPRINT 1",
        done: false,
        details: [
          "Bisa navigasi Linux terminal tanpa lihat catatan",
          "Bisa tulis Bash & Python script otomasi tanpa copy-paste",
          "Paham subnetting & bisa troubleshoot network issue dengan ping/dig/curl",
          "5 Bash script & 3 Python script sudah jalan di server via cron"
        ]
      }
    ]
  },
  {
    id: "dev-2",
    title: "DEVOPS — Sprint 2: Docker, CI/CD & Cloud (Bulan 3–4)",
    description: "Containerization, pipeline otomasi, dan provisioning di cloud.",
    project: "ci-cd-pipeline + docker-infra",
    tasks: [
      {
        id: "d2-1",
        title: "Docker Deep Dive",
        done: false,
        details: [
          "Container vs VM vs Bare Metal — kapan pakai apa",
          "Dockerfile best practice: multi-stage build, layer caching, .dockerignore",
          "Docker CLI: build, run, exec, logs, inspect, stats, prune",
          "Docker networking: bridge, host, overlay, macvlan",
          "Volume & bind mount: persistent data strategy",
          "docker-compose: orchestrate multi-container app (DB + API + cache)",
          "Image registry: Docker Hub, GitLab Container Registry, ECR",
          "Image security: scan dengan Trivy, minimize attack surface (distroless)"
        ]
      },
      {
        id: "d2-2",
        title: "GitLab CI/CD Pipeline",
        done: false,
        details: [
          "Konsep CI/CD: Continuous Integration vs Continuous Deployment vs Delivery",
          ".gitlab-ci.yml: stages, jobs, rules, only/except, workflow",
          "Artifacts & cache: pass build antar stage",
          "Variables: CI/CD settings, masked & protected variables",
          "Docker-in-Docker (dind) & Kaniko untuk build image di pipeline",
          "GitLab Container Registry: push, pull, tag management",
          "Pipeline trigger: push, merge request, schedule, manual trigger",
          "Environment & deployment: deploy ke staging & production",
          "Secret management: integrate dengan HashiCorp Vault / Sealed Secrets"
        ]
      },
      {
        id: "d2-3",
        title: "AWS Cloud (Core Services)",
        done: false,
        details: [
          "IAM: user, group, role, policy (least privilege principle)",
          "EC2: launch, instance type, security group, key pair, user-data",
          "VPC: subnet (public/private), IGW, NAT Gateway, route table, NACL",
          "S3: bucket, lifecycle policy, versioning, static website hosting",
          "RDS: managed PostgreSQL/MySQL, multi-AZ, read replica",
          "Route 53: DNS management, health check, routing policy",
          "ELB: Application LB vs Network LB, target group, listener",
          "CloudWatch: metrics, logs, alarms, dashboard",
          "AWS CLI: automasi operasi cloud dari terminal"
        ]
      },
      {
        id: "d2-p1",
        title: "🚀 PROJECT: CI/CD Pipeline + Docker Infra",
        done: false,
        details: [
          "Containerize 1 aplikasi (Node.js/Python) dengan multi-stage Dockerfile",
          "Buat docker-compose.yml untuk local dev (App + PostgreSQL + Redis)",
          "Setup .gitlab-ci.yml: lint -> test -> build image -> push ke registry -> deploy staging",
          "Provision infrastruktur di AWS: VPC, EC2, RDS, S3 via AWS CLI / Console",
          "Deploy aplikasi ke EC2: pull image dari registry, docker-compose up",
          "Setup CloudWatch alarm: CPU > 80% -> SNS notification",
          "Verifikasi: push kode -> pipeline auto jalan -> app ter-update di staging"
        ]
      },
      {
        id: "d2-s1",
        title: "🎯 SYARAT LULUS SPRINT 2",
        done: false,
        details: [
          "Bisa dockerize aplikasi & nulis docker-compose dari nol",
          "CI/CD pipeline GitLab full otomatis berjalan (push -> deploy)",
          "Bisa provision infra AWS dasar (VPC+EC2+RDS) tanpa tutorial",
          "Paham trade-off monolith vs containerized deployment"
        ]
      }
    ]
  },
  {
    id: "dev-3",
    title: "DEVOPS — Sprint 3: Terraform, Ansible & IaC (Bulan 5–6)",
    description: "Infrastructure as Code untuk provisioning & configuration management.",
    project: "devops-iac-terraform-ansible",
    tasks: [
      {
        id: "d3-1",
        title: "Terraform (Infrastructure as Code)",
        done: false,
        details: [
          "Konsep IaC: deklaratif vs imperatif, idempotency",
          "HCL syntax: resource, data, variable, local, output",
          "Provider AWS: konfigurasi credentials & region",
          "Resources: aws_vpc, aws_subnet, aws_instance, aws_s3_bucket, aws_security_group, aws_rds",
          "State management: terraform.tfstate, remote backend (S3 + DynamoDB lock)",
          "Modules: struktur reusable (vpc module, ec2 module, rds module)",
          "Workflow: init -> plan -> apply -> destroy",
          "Workspaces: manage multiple environments (staging/production)",
          "Data sources: query existing infra (AMI ID, AZ list)",
          "terraform import: manage resource yang sudah ada"
        ]
      },
      {
        id: "d3-2",
        title: "Ansible (Configuration Management)",
        done: false,
        details: [
          "Konsep: agentless, idempotent, SSH-based",
          "Inventory: static (hosts.ini), dynamic (AWS ec2 plugin)",
          "Playbook: play, task, handler, notify, when condition",
          "Modules: apt, yum, copy, template, service, file, command, shell, git",
          "Variables: vars, defaults, host_vars, group_vars, vault",
          "Roles: struktur folder (tasks, handlers, templates, files, defaults, vars)",
          "Templates: Jinja2 templating untuk konfigurasi dinamis (nginx.conf.j2)",
          "Ansible Vault: enkripsi secret (password, API key) di playbook",
          "Ansible Galaxy: download & pakai community roles"
        ]
      },
      {
        id: "d3-3",
        title: "Infrastructure Design (HA & DR)",
        done: false,
        details: [
          "High Availability: multi-AZ, auto-scaling, load balancer",
          "Redundancy: active-active vs active-passive, failover mechanism",
          "Disaster Recovery: RTO & RPO, backup strategy, multi-site replication",
          "Blue-Green deployment & Canary release strategy",
          "Secret management: HashiCorp Vault, AWS Secrets Manager"
        ]
      },
      {
        id: "d3-p1",
        title: "🚀 PROJECT: devops-iac-terraform-ansible",
        done: false,
        details: [
          "Buat Terraform modules: vpc (public+private subnet, NAT, IGW), ec2, rds, s3",
          "Setup remote backend: state di S3, lock di DynamoDB",
          "Provision 2 environments: staging (1 EC2) & production (2 EC2 + ALB) via modules",
          "Buat Ansible roles: common (update, install utils), docker, nginx",
          "Buat playbook setup-server.yml: jalankan semua roles dari kosong -> siap deploy",
          "Buat playbook deploy-app.yml: pull image, docker-compose up, nginx reload",
          "Buat provision.sh: terraform apply -> ambil IP output -> ansible-playbook deploy",
          "Verifikasi: 1 perintah provision.sh -> server live siap menerima traffic"
        ]
      },
      {
        id: "d3-s1",
        title: "🎯 SYARAT LULUS SPRINT 3",
        done: false,
        details: [
          "Bisa provision infra AWS dari nol hanya dengan terraform apply",
          "Ansible playbook bisa setup server kosong sampai siap deploy tanpa manual",
          "Paham remote state & kenapa state file tidak boleh di-commit ke Git",
          "Bisa jelaskan HA, failover, & DR strategy dengan kata sendiri"
        ]
      }
    ]
  },
  {
    id: "dev-4",
    title: "DEVOPS — Sprint 4: Kubernetes & GitOps (Bulan 7–8)",
    description: "Container orchestration, Helm, dan GitOps workflow dengan ArgoCD.",
    project: "k8s-gitops-platform",
    tasks: [
      {
        id: "d4-1",
        title: "Kubernetes Deep Dive",
        done: false,
        details: [
          "Arsitektur: control plane (API server, etcd, scheduler, controller manager), worker node",
          "Objek: Pod, ReplicaSet, Deployment, DaemonSet, StatefulSet, Job, CronJob",
          "Service: ClusterIP, NodePort, LoadBalancer, ExternalName, Headless",
          "Ingress: routing HTTP, TLS termination, Ingress Controller (Nginx/Traefik)",
          "ConfigMap & Secret: manage konfigurasi & credential",
          "Probes: livenessProbe, readinessProbe, startupProbe",
          "Resource management: requests, limits, HPA (Horizontal Pod Autoscaler), VPA",
          "RBAC: Role, ClusterRole, RoleBinding, ServiceAccount",
          "NetworkPolicy: isolate traffic antar pod (security)",
          "Storage: PersistentVolume, PersistentVolumeClaim, StorageClass"
        ]
      },
      {
        id: "d4-2",
        title: "Helm (Package Manager K8s)",
        done: false,
        details: [
          "Chart structure: Chart.yaml, values.yaml, templates/, charts/",
          "Template engine: {{ }}, helpers (_helpers.tpl), range, if/else",
          "Values: default, override per environment (values-staging.yaml)",
          "helm install, upgrade, rollback, uninstall, list, repo",
          "Bikin custom chart untuk aplikasi internal",
          "Helmfile / ArgoCD ApplicationSet untuk deploy banyak chart"
        ]
      },
      {
        id: "d4-3",
        title: "GitOps dengan ArgoCD",
        done: false,
        details: [
          "Konsep GitOps: Git sebagai single source of truth",
          "ArgoCD architecture: API server, repo server, application controller",
          "Application CRD: source (repo+path), destination (cluster+namespace)",
          "Sync policy: manual vs auto-sync, auto-prune, self-heal",
          "Multi-environment: staging & production dari repo berbeda atau branch",
          "App-of-Apps pattern: 1 ArgoCD app yang manage apps lain",
          "ArgoCD Notifications: Slack/Telegram alert saat sync gagal"
        ]
      },
      {
        id: "d4-4",
        title: "Kubernetes on Cloud (EKS)",
        done: false,
        details: [
          "EKS architecture: control plane (managed), worker node (managed/unmanaged)",
          "eksctl: create cluster, nodegroup, fargate profile",
          "EKS add-ons: VPC CNI, CoreDNS, kube-proxy",
          "IRSA (IAM Roles for Service Accounts): fine-grained AWS permission",
          "Cluster Autoscaler / Karpenter untuk auto-scale node",
          "AWS Load Balancer Controller: ALB/NLB integration",
          "EKS cost optimization: Spot instance, right-sizing, cluster cleanup"
        ]
      },
      {
        id: "d4-p1",
        title: "🚀 PROJECT: k8s-gitops-platform",
        done: false,
        details: [
          "Deploy 3 aplikasi (Python, Node, Go API) ke K8s via Helm Chart",
          "Buat Helm chart custom: Deployment, Service, Ingress, ConfigMap, Secret",
          "Setup ArgoCD di cluster, connect ke GitLab repo",
          "Konfigurasi App-of-Apps: staging auto-sync, production manual sync",
          "Setup HPA: auto-scale pod saat CPU > 70%",
          "Buat CI/CD end-to-end: Git push -> GitLab CI build image -> update Helm values -> ArgoCD auto-sync",
          "Verifikasi: perubahan kode auto-ter-deploy ke staging tanpa intervensi manual"
        ]
      },
      {
        id: "d4-s1",
        title: "🎯 SYARAT LULUS SPRINT 4",
        done: false,
        details: [
          "Bisa deploy aplikasi ke K8s dari manifest YAML/Helm tanpa bantuan",
          "GitOps workflow jalan: push -> CI build -> ArgoCD auto-deploy staging",
          "Paham K8s networking (Service, Ingress, NetworkPolicy) & bisa troubleshoot",
          "Bisa jawab: apa beda Deployment vs StatefulSet? Kapan pakai HPA?"
        ]
      }
    ]
  },
  {
    id: "dev-5",
    title: "DEVOPS — Sprint 5: Monitoring, Logging & Interview (Bulan 9–10)",
    description: "Observability stack, incident response, dan persiapan lamar DevOps.",
    project: "observability-stack & Portfolio Polish",
    tasks: [
      {
        id: "d5-1",
        title: "Prometheus & Grafana",
        done: false,
        details: [
          "Prometheus architecture: pull-based scraping, TSDB",
          "Metric types: Counter, Gauge, Histogram, Summary",
          "PromQL: rate(), increase(), histogram_quantile(), sum by, avg_over_time",
          "Exporters: Node Exporter, cAdvisor, kube-state-metrics, Blackbox Exporter",
          "Alerting rules: CPU > 80%, memory > 90%, pod restart > 3x",
          "AlertManager: routing, inhibition, silencing, telegram/Slack receiver",
          "Grafana: data source, dashboard variables, panel types, alerting",
          "SLI/SLA/SLO: define error budget, burn rate alerting"
        ]
      },
      {
        id: "d5-2",
        title: "Centralized Logging (ELK / Loki)",
        done: false,
        details: [
          "Konsep: log aggregation, structured logging (JSON), log level",
          "Loki + Promtail: lightweight logging stack ( Grafana ecosystem)",
          "Elasticsearch + Logstash + Kibana (ELK): full-text search & analytics",
          "Log shipping dari Docker & Kubernetes cluster",
          "Log query: LogQL (Loki) atau KQL (Kibana) untuk troubleshoot error",
          "Log retention & rotation: manage disk space"
        ]
      },
      {
        id: "d5-3",
        title: "Incident Response & SRE Practices",
        done: false,
        details: [
          "Incident lifecycle: detect -> respond -> resolve -> postmortem",
          "On-call culture: PagerDuty / Opsgenie rotation",
          "Postmortem: blameless, root cause analysis (5 Whys), action items",
          "Runbook: dokumentasi troubleshooting step-by-step",
          "Chaos engineering basics: Chaos Mesh / Gremlin (inject failure)",
          "Capacity planning: berdasarkan trend metrik & business growth"
        ]
      },
      {
        id: "d5-4",
        title: "Interview Preparation (DevOps/SRE)",
        done: false,
        details: [
          "Linux troubleshooting Q&A: OOM killer, high load average, disk full",
          "Docker & K8s Q&A: image layering, pod lifecycle, RBAC, networking",
          "CI/CD scenario: 'Pipeline CI lambat, gimana optimasi?'",
          "IaC scenario: 'State file conflict, gimana resolve?'",
          "System design: 'Design CI/CD platform untuk 50 microservices'",
          "Behavioral: STAR method untuk jawab pengalaman incident/incident response"
        ]
      },
      {
        id: "d5-p1",
        title: "🚀 PROJECT: Observability Stack & Apply!",
        done: false,
        details: [
          "Deploy monitoring stack via docker-compose: Prometheus + Grafana + AlertManager + Node Exporter + cAdvisor",
          "Scrape metrics dari minimal 3 target (K8s cluster, Docker host, app endpoint)",
          "Buat 3 Grafana dashboard: System Overview, Application Metrics, K8s Cluster Health",
          "Setup alerting ke Telegram bot: CPU > 80%, pod down, disk > 85%",
          "Deploy Loki + Promtail untuk centralized logging dari K8s",
          "Buat runbook untuk top 5 incident paling umum",
          "Polish semua repo GitHub: README, arsitektur diagram, CI/CD badge",
          "Update CV dengan tech stack: Linux, Docker, K8s, Terraform, Ansible, Prometheus, GitLab CI",
          "Buat LinkedIn post: 'Membangun GitOps platform end-to-end dengan Kubernetes'",
          "APPLY ke CBN DevOps (dan perusahaan lain: Tokopedia, Gojek, MIFX, dll)"
        ]
      },
      {
        id: "d5-s1",
        title: "🎯 SYARAT LULUS SPRINT 5 — GET THE OFFER",
        done: false,
        details: [
          "Monitoring & logging stack aktif di cluster dengan alert Telegram",
          "Bisa troubleshoot incident production: identify, mitigate, postmortem",
          "Bisa demo end-to-end: IaC provision -> CI/CD -> GitOps deploy -> monitoring",
          "CV & portfolio menampilkan 5+ project DevOps yang relevan",
          "CONFIDENT APPLY & PASS INTERVIEW CBN DEVOPS (atau perusahaan lain) 🚀"
        ]
      }
    ]
  },
  {
    id: "dev-6",
    title: "DEVOPS — Sprint 6: Fintech & High Availability (Bulan 11–12)",
    description: "Persiapan spesifik untuk role SRE di industri Fintech (skalabilitas, resilience, security).",
    project: "fintech-sre-toolkit",
    tasks: [
      {
        id: "d6-1",
        title: "Advanced Cloud & Infrastructure",
        done: false,
        details: [
          "Alibaba Cloud essentials: ECS, VPC, OSS, RDS, SLB (bandingkan dengan AWS)",
          "Infrastructure as Code (IaC) advanced: modul Terraform untuk multi-cloud (AWS + Alibaba)",
          "Web Server tuning: Nginx performance optimization, reverse proxy caching, TLS 1.3 setup",
          "Load Balancing & Failover: Active-Passive setup, health checks, routing failover",
          "Security & Compliance: IAM strict policies, Security Groups, WAF, enkripsi data at rest & in transit"
        ]
      },
      {
        id: "d6-2",
        title: "Programming & Automation",
        done: false,
        details: [
          "Golang for SRE: syntax dasar, goroutines untuk concurrent tasks, build CLI tools",
          "Python automation: script untuk sinkronisasi database, rotasi kredensial, log parsing",
          "Bash scripting advanced: integrasi jq untuk JSON, parallel processing, error handling (set -e)",
          "Automated provisioning: orchestrasi Terraform + Ansible via GitLab CI"
        ]
      },
      {
        id: "d6-3",
        title: "Database Reliability & Security",
        done: false,
        details: [
          "SQL & NoSQL: manajemen PostgreSQL/MySQL & MongoDB/Redis",
          "Database Tuning: query optimization, connection pooling (PgBouncer), index tuning",
          "High Availability DB: replikasi master-slave, otomatisasi failover (Patroni/MHA)",
          "Database Provisioning: otomasi deployment DB dengan Ansible",
          "Backup & Recovery: point-in-time recovery, otomasi backup harian ke S3/OSS"
        ]
      },
      {
        id: "d6-4",
        title: "Fintech SRE Practices",
        done: false,
        details: [
          "Risk Management: mitigasi single point of failure (SPOF), disaster recovery plan",
          "Observability advanced: trace distributed systems (Jaeger/Zipkin), alert fatigue reduction",
          "Monitoring SLA/SLO: implementasi error budget, dashboard khusus uptime layanan",
          "Security audits: otomatisasi vulnerability scanning (Trivy) di CI/CD",
          "Incident communication: role play komunikasi saat P1 incident"
        ]
      },
      {
        id: "d6-p1",
        title: "🚀 PROJECT: fintech-sre-toolkit",
        done: false,
        details: [
          "Buat Golang CLI tool untuk cek status SSL certificate dan expired date seluruh domain",
          "Setup CI/CD pipeline di GitLab yang deploy infrastruktur ke AWS/Alibaba menggunakan Terraform",
          "Implementasi Nginx sebagai load balancer dengan konfigurasi failover ke backend cadangan",
          "Setup database PostgreSQL dengan replikasi streaming dan otomatisasi backup via Python script",
          "Buat arsitektur diagram visual (Draw.io/Excalidraw) sistem HA dengan multi-AZ dan presentasikan"
        ]
      },
      {
        id: "d6-s1",
        title: "🎯 SYARAT LULUS SPRINT 6",
        done: false,
        details: [
          "Mampu menulis script Golang dan Python untuk otomatisasi tugas SRE",
          "Paham dan bisa implementasi clustering, load balancing, dan failover system",
          "Database aman, termonitor, dan memiliki strategi backup/failover yang teruji",
          "Siap secara teknis dan mental untuk apply role DevOps/SRE di industri Fintech!"
        ]
      }
    ]
  }
];