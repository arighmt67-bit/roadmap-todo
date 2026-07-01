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
  },
  {
    id: "sre-5",
    title: "SRE — Sprint 5: Observability Stack (Prometheus, Grafana & OpenTelemetry) (Bulan 9–10)",
    description: "Observability end-to-end: metrics, logging, tracing. Fondasi SRE untuk detect, diagnose, & resolve incident.",
    project: "full-observability-stack",
    tasks: [
      {
        id: "s5-1",
        title: "Prometheus Deep Dive",
        done: false,
        details: [
          "Architecture: pull-based model, TSDB, service discovery",
          "Metric types: Counter, Gauge, Histogram, Summary & kapan pakai masing-masing",
          "PromQL fundamentals: rate(), irate(), increase(), histogram_quantile()",
          "Aggregation: sum by, avg by, topk, count, group",
          "Recording rules: pre-compute heavy queries untuk dashboard cepat",
          "Federation: aggregate metrics dari multiple Prometheus server",
          "Exporters wajib: Node Exporter, cAdvisor, Postgres Exporter, Blackbox Exporter",
          "Prometheus HA: Thanos / Cortex / Mimir untuk long-term storage & deduplication",
          "Remote write: kirim metrics ke remote endpoint (Cloud-native setup)"
        ]
      },
      {
        id: "s5-2",
        title: "Grafana & Dashboard Engineering",
        done: false,
        details: [
          "Data source: connect Prometheus, Loki, Jaeger, PostgreSQL ke Grafana",
          "Dashboard design: USE method (Utilization, Saturation, Errors) untuk infrastructure",
          "Dashboard design: RED method (Rate, Errors, Duration) untuk services",
          "Golden Signals dashboard: Latency, Traffic, Errors, Saturation",
          "Variables & templates: dynamic dashboard per service/environment",
          "Panel types: time series, stat, gauge, bar gauge, table, log panel, flame graph",
          "Annotations: mark deploy/incident event di dashboard timeline",
          "Dashboard as Code: provisioning via YAML, Terraform Grafana provider",
          "Grafana OnCall: on-call schedule, escalation, notification"
        ]
      },
      {
        id: "s5-3",
        title: "Alertmanager & Alerting Strategy",
        done: false,
        details: [
          "Alerting rules di Prometheus: threshold, anomaly detection, forecast",
          "AlertManager: routing tree, receivers (Slack, Telegram, PagerDuty, email)",
          "Inhibition: suppress noisy alert saat upstream incident (parent alert)",
          "Silencing: planned maintenance window, manual silence",
          "Grouping & deduplication: gabung alert serupa, hindari alert storm",
          "Alert fatigue: anti-pattern alert, cara prioritaskan signal vs noise",
          "SLI-based alerting: multi-window multi-burn-rate (Google SRE practice)",
          "Runbook link di alert: setiap alert harus ada link ke runbook/langkah resolve"
        ]
      },
      {
        id: "s5-4",
        title: "OpenTelemetry & Distributed Tracing",
        done: false,
        details: [
          "Pilar observability: Metrics vs Logs vs Traces (masing-masing fungsinya apa)",
          "OpenTelemetry: standard terbuka untuk instrumentasi (vendor-neutral)",
          "Spans & Traces: parent span, child span, span context, baggage",
          "Auto-instrumentation: OTel SDK untuk Python, Go, Java (Java agent JAR)",
          "Manual instrumentation: custom span untuk business logic",
          "Context propagation: W3C Trace Context header (traceparent, tracestate)",
          "Collector: OTel Collector pipeline (receiver → processor → exporter)",
          "Backend tracing: Jaeger, Tempo, atau Zipkin sebagai trace storage",
          "Correlation: link trace_id ke log entry (enrich log dengan trace context)",
          "Service mesh tracing: Istio/Linkerd auto-inject trace header"
        ]
      },
      {
        id: "s5-5",
        title: "Centralized Logging (Loki + ELK)",
        done: false,
        details: [
          "Loki: log aggregation (seperti Prometheus tapi untuk log), label-based indexing",
          "Promtail / Alloy: log shipper, pipeline stage (regex, json, labels)",
          "LogQL: query log (filter, parser, format, count_over_time)",
          "Structured logging: JSON log dengan trace_id, user_id, request_id",
          "Log level strategy: DEBUG vs INFO vs WARN vs ERROR (kapan pakai yang mana)",
          "ELK Stack alternative: Elasticsearch + Logstash + Kibana (full-text search)",
          "Log retention: hot-warm-cold architecture, ILM policy, disk management",
          "Log anomaly detection: outlier detection, frequency-based alerting"
        ]
      },
      {
        id: "s5-p1",
        title: "🚀 PROJECT: full-observability-stack",
        done: false,
        details: [
          "Deploy monitoring stack via Docker Compose: Prometheus + Grafana + AlertManager + Loki + Promtail + Jaeger",
          "Scrape metrics dari minimal 3 target: PostgreSQL, Node Exporter, aplikasi (Python/Go) dengan custom metrics",
          "Buat 3 Grafana dashboard: (1) Infrastructure (USE), (2) Application (RED), (3) Database health",
          "Setup AlertManager dengan routing: critical → Telegram/PagerDuty, warning → Slack/email",
          "Instrument aplikasi dengan OpenTelemetry: kirim trace ke Jaeger, korelasi dengan log di Loki via trace_id",
          "Buat minimal 5 alerting rule (SLI-based) + runbook link di setiap alert",
          "Testing: inject failure (kill pod, saturate CPU, disconnect DB) → verifikasi alert trigger + dashboard catch issue",
          "Deploy seluruh stack di VM / cloud (AWS EC2 / DigitalOcean Droplet)"
        ]
      },
      {
        id: "s5-s1",
        title: "🎯 SYARAT LULUS SPRINT 5",
        done: false,
        details: [
          "Bisa nulis PromQL query dari nol (bukan copy-paste dari internet)",
          "Bisa design Grafana dashboard yang informatif (bukan sekadar angka acak)",
          "Paham OpenTelemetry & bisa korelasi trace ↔ log ↔ metric",
          "Alert setup yang tidak noisy: setiap alert actionable & ada runbook",
          "Bisa jawab interview: 'Jelaskan 3 pilar observability & kenapa log saja tidak cukup'"
        ]
      }
    ]
  },
  {
    id: "sre-6",
    title: "SRE — Sprint 6: Distributed Systems, HAProxy & On-Call (Bulan 11–12)",
    description: "Topik lanjutan: distributed system internals, container runtime, service mesh, on-call culture, & interview prep.",
    project: "ha-platform + on-call-readiness",
    tasks: [
      {
        id: "s6-1",
        title: "Distributed Systems Fundamentals",
        done: false,
        details: [
          "CAP Theorem: Consistency, Availability, Partition Tolerance (pilih 2 dari 3)",
          "Consistency models: strong, eventual, causal, read-your-writes",
          "Consensus algorithm: Raft & Paxos (leader election, log replication)",
          "Split-brain problem & fence token solution",
          "Gossip protocol: epidemic broadcast untuk cluster membership",
          "Quorum & write/read concern (W + R > N untuk strong consistency)",
          "Vector clock & logical clock untuk event ordering",
          "Idempotency di distributed system (exactly-once vs at-least-once)",
          "Consistent hashing: ring topology, virtual node, rebalancing",
          "Real-world case study: Kafka replication, Cassandra tunable consistency"
        ]
      },
      {
        id: "s6-2",
        title: "HAProxy & Advanced Load Balancing",
        done: false,
        details: [
          "HAProxy vs Nginx vs Cloud LB (ALB/NLB): kapan pakai yang mana",
          "HAProxy config: frontend, backend, listen section",
          "Load balancing algorithm: roundrobin, leastconn, source, uri hash",
          "Health check: active check (option httpchk), passive check (observe)",
          "Session persistence: cookie-based (sticky), app session",
          "Rate limiting: stick-table, burst control, connection throttling",
          "SSL/TLS termination: cert management, SNI, HSTS header injection",
          "ACL & routing: route berdasarkan path, header, host (path-based routing)",
          "HAProxy Stats page: monitoring, drain server untuk maintenance",
          "Performance tuning: maxconn, nbthread, CPU affinity, SO_REUSEPORT"
        ]
      },
      {
        id: "s6-3",
        title: "Docker, Podman & Container Internals",
        done: false,
        details: [
          "Container runtime: Docker vs Podman vs containerd (daemonless Podman)",
          "Linux kernel feature: cgroups (v1 vs v2), namespaces (pid, net, mnt, user)",
          "Container image: layers, manifest, OCI spec, registry protocol",
          "Dockerfile best practice: multi-stage build, .dockerignore, layer caching",
          "Docker networking: bridge, host, overlay, macvlan, ipvlan",
          "Docker Compose: orchestrate multi-service (DB + app + cache + monitoring)",
          "Podman: rootless container, pod concept (kayak K8s pod), systemd integration",
          "Security: seccomp profile, AppArmor, read-only rootfs, cap drop",
          "Container troubleshooting: docker exec, nsenter, dive untuk inspect image layer"
        ]
      },
      {
        id: "s6-4",
        title: "systemd & Linux Service Management",
        done: false,
        details: [
          "systemd unit file: [Unit], [Service], [Install] section",
          "Service type: simple, forking, oneshot, notify, dbus",
          "Dependency: Requires, Wants, After, Before, BindsTo",
          "Resource control: CPUQuota, MemoryMax, TasksMax, IOWeight",
          "Journal: journalctl (filter by unit, priority, time, boot), structured log",
          "Timer: systemd timer (alternative cron), monotonic vs realtime",
          "Socket activation: systemd start service on-demand saat ada koneksi",
          "Hardening: PrivateTmp, NoNewPrivileges, ProtectSystem, RestrictAddressFamilies",
          "systemd-resolved, systemd-networkd, NetworkManager interplay"
        ]
      },
      {
        id: "s6-5",
        title: "On-Call Culture & Incident Response",
        done: false,
        details: [
          "On-call rotation: primary/secondary, follow-the-sun, fairness in schedule",
          "PagerDuty / Opsgenie: setup rotation, escalation policy, override",
          "Incident severity level: SEV1 (production down) → SEV4 (minor bug)",
          "Incident lifecycle: detect → acknowledge → triage → mitigate → resolve → postmortem",
          "War room / incident channel: Slack/Telegram dedicated channel, incident commander role",
          "Communication protocol: internal update tiap 15-30 menit, external status page",
          "Blameless postmortem: timeline, root cause (5 Whys / fishbone), action items, owner, deadline",
          "Runbook: struktur (symptom, impact, diagnosis steps, mitigation, escalation contact)",
          "Chaos engineering: inject failure untuk test on-call readiness (Chaos Monkey, Litmus)",
          "Alert fatigue management: review alert monthly, auto-suppress known issue, mute non-critical di malam hari"
        ]
      },
      {
        id: "s6-6",
        title: "Interview Preparation (SRE)",
        done: false,
        details: [
          "Linux troubleshooting Q&A: OOM killer, high load average, disk full, high iowait, connection refused",
          "Networking Q&A: TCP handshake, TIME_WAIT, connection refused vs timeout, DNS resolution",
          "Database Q&A: slow query, lock contention, replication lag, connection pool exhausted",
          "Distributed system Q&A: CAP theorem, split-brain, eventual consistency, distributed lock",
          "Observability Q&A: 'Alert fire tapi dashboard gak ada anomali, apa yang lu lakuin?'",
          "System design: 'Design a highly available payment system dengan 99.99% uptime'",
          "Incident scenario: 'Production database CPU 100%, lu di paging tengah malam, langkah pertama?'",
          "Behavioral: STAR method — ceritakan pengalaman resolve production incident",
          "Whiteboard: draw architecture & explain data flow, failure mode, fallback strategy"
        ]
      },
      {
        id: "s6-p1",
        title: "🚀 PROJECT: HA Platform + On-Call Readiness",
        done: false,
        details: [
          "Deploy HA platform: HAProxy (LB) + 2x app server + PostgreSQL primary-replica + Redis sentinel",
          "Setup systemd service untuk aplikasi custom dengan resource limit & hardening",
          "Integrate container (Docker/Podman) dengan systemd: quadlet / docker-compose via systemd",
          "Deploy full observability (dari Sprint 5) ke HA platform ini",
          "Buat 5 runbook untuk top incident: DB CPU high, app 5xx error spike, disk full, OOM, replication lag",
          "Practice incident drill: inject failure (kill DB, saturate LB) → respond via alert → resolve → write postmortem",
          "Setup PagerDuty / AlertManager on-call schedule (simulasi rotation)",
          "Buat arsitektur diagram (Excalidraw / draw.io): network topology, data flow, SPOF annotation",
          "Polish semua repo: README dengan arsitektur diagram, monitoring stack screenshot, runbook link"
        ]
      },
      {
        id: "s6-s1",
        title: "🎯 SYARAT LULUS SPRINT 6 — GET THE OFFER",
        done: false,
        details: [
          "Paham CAP theorem & bisa design system sesuai trade-off consistency vs availability",
          "Bisa config HAProxy load balancer dengan health check, rate limiting, & SSL termination",
          "Paham container internals (namespace, cgroup) & bisa troubleshoot container issue",
          "Bisa setup systemd service dengan proper resource control & hardening",
          "Sudah pernah simulasi on-call incident drill & nulis blameless postmortem",
          "Punya 5+ runbook siap pakai dengan step-by-step diagnosis",
          "Bisa demo end-to-end: HA infra → observability → alert → incident response → postmortem",
          "CONFIDENT APPLY & PASS INTERVIEW SRE (Glints, Gojek, Tokopedia, dll) 🚀"
        ]
      }
    ]
  }
];
