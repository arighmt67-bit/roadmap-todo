export const srePhases = [
  {
    id: "sre-1",
    title: "SRE — Sprint 1: Advanced Cloud & Infrastructure (Bulan 1–2)",
    description: "Fondasi SRE spesifik Fintech: skalabilitas, resilience, security di AWS & Alibaba Cloud.",
    project: "multi-cloud-infra",
    tasks: [
      {
        id: "s1-1",
        title: "Alibaba Cloud & AWS Masterclass",
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
        id: "s1-p1",
        title: "🚀 PROJECT: multi-cloud-infra",
        done: false,
        details: [
          "Setup CI/CD pipeline di GitLab yang deploy infrastruktur ke AWS/Alibaba menggunakan Terraform",
          "Implementasi Nginx sebagai load balancer dengan konfigurasi failover ke backend cadangan"
        ]
      }
    ]
  },
  {
    id: "sre-2",
    title: "SRE — Sprint 2: Programming & Automation (Bulan 3–4)",
    description: "Automasi tugas operasional SRE menggunakan Golang, Python, dan Bash.",
    project: "sre-cli-tools",
    tasks: [
      {
        id: "s2-1",
        title: "Scripting for SRE",
        done: false,
        details: [
          "Golang for SRE: syntax dasar, goroutines untuk concurrent tasks, build CLI tools",
          "Python automation: script untuk sinkronisasi database, rotasi kredensial, log parsing",
          "Bash scripting advanced: integrasi jq untuk JSON, parallel processing, error handling (set -e)",
          "Automated provisioning: orchestrasi Terraform + Ansible via GitLab CI"
        ]
      },
      {
        id: "s2-p1",
        title: "🚀 PROJECT: sre-cli-tools",
        done: false,
        details: [
          "Buat Golang CLI tool untuk cek status SSL certificate dan expired date seluruh domain",
          "Buat Python script untuk otomatisasi parsing log error dan alert ke Telegram"
        ]
      }
    ]
  },
  {
    id: "sre-3",
    title: "SRE — Sprint 3: Database Reliability & Security (Bulan 5–6)",
    description: "Tuning, replikasi, dan otomatisasi failover pada database SQL/NoSQL.",
    project: "ha-database-cluster",
    tasks: [
      {
        id: "s3-1",
        title: "Database Operations",
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
        id: "s3-p1",
        title: "🚀 PROJECT: ha-database-cluster",
        done: false,
        details: [
          "Setup database PostgreSQL dengan replikasi streaming dan otomatisasi backup via Python script",
          "Konfigurasi PgBouncer untuk connection pooling pada backend service"
        ]
      }
    ]
  },
  {
    id: "sre-4",
    title: "SRE — Sprint 4: Fintech Practices & Incident Management (Bulan 7–8)",
    description: "Praktik SRE untuk High Availability, SLA/SLO, dan mitigasi SPOF.",
    project: "sre-observability-stack",
    tasks: [
      {
        id: "s4-1",
        title: "Fintech SRE Culture",
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
        id: "s4-p1",
        title: "🚀 PROJECT: sre-observability-stack & Interview",
        done: false,
        details: [
          "Buat arsitektur diagram visual (Draw.io/Excalidraw) sistem HA dengan multi-AZ dan presentasikan",
          "Implementasi Jaeger/Zipkin untuk distributed tracing pada aplikasi microservices",
          "Siap apply role SRE / DevOps di industri Fintech!"
        ]
      },
      {
        id: "s4-s1",
        title: "🎯 SYARAT LULUS SPRINT 4",
        done: false,
        details: [
          "Mampu menulis script Golang dan Python untuk otomatisasi tugas SRE",
          "Paham dan bisa implementasi clustering, load balancing, dan failover system",
          "Database aman, termonitor, dan memiliki strategi backup/failover yang teruji",
          "Paham incident response cycle dan SRE metrics (SLI/SLO/SLA)"
        ]
      }
    ]
  }
];
