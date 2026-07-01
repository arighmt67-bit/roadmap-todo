export const cloudPhases = [
  {
    id: "ce-1",
    title: "CLOUD — Sprint 1: AWS & GCP Core Services (Bulan 1–2)",
    description: "Fondasi multi-cloud: compute, storage, networking, IAM di AWS & GCP.",
    project: "multi-cloud-foundation",
    tasks: [
      {
        id: "ce1-1",
        title: "AWS Core Services Deep Dive",
        done: false,
        details: [
          "IAM: user, group, role, policy (least privilege), STS (assume role, cross-account)",
          "EC2: instance type selection, launch template, placement group, EBS volume type",
          "VPC: CIDR planning, public/private subnet, IGW, NAT Gateway, route table, VPC peering, Transit Gateway",
          "S3: bucket policy, lifecycle, versioning, static hosting, presigned URL, S3 Select",
          "RDS: managed PostgreSQL/MySQL, multi-AZ, read replica, parameter group, security group",
          "Route 53: hosted zone, routing policy (simple, weighted, latency, failover, geolocation)",
          "ELB: ALB (L7) vs NLB (L4), target group, listener rule, cross-zone load balancing",
          "ElastiCache: Redis (cluster mode) vs Memcached, use case & failover",
          "CloudWatch: metrics, logs, alarms, dashboard, log insights query",
          "AWS CLI: profile, output format, jq integration untuk automation",
          "AWS Organizations + Control Tower: multi-account management"
        ]
      },
      {
        id: "ce1-2",
        title: "GCP Core Services",
        done: false,
        details: [
          "GCP project hierarchy: Organization → Folder → Project → Resource",
          "IAM: primitive vs predefined vs custom role, service account, workload identity",
          "Compute Engine (GCE): machine type, instance template, managed instance group (MIG)",
          "VPC: subnet, firewall rules, Cloud NAT, Cloud Load Balancing (HTTP(S) LB)",
          "Cloud Storage: bucket, class (Standard, Nearline, Coldline, Archive), lifecycle",
          "Cloud SQL: managed MySQL/PostgreSQL, HA config, read replica",
          "Cloud DNS & Cloud CDN: DNS zone, global anycast, edge caching",
          "Cloud Build: CI/CD native GCP (alternative GitHub Actions)",
          "gcloud CLI: config configuration, project switching, filter & format output",
          "Billing: budget alert, committed use discount, sustained use discount"
        ]
      },
      {
        id: "ce1-3",
        title: "Cloud Networking & Connectivity",
        done: false,
        details: [
          "VPC peering vs Transit Gateway (AWS) vs VPC Network Peering (GCP)",
          "VPN: Site-to-Site VPN (IPsec), AWS Client VPN, Cloud VPN (GCP)",
          "Direct Connect (AWS) / Cloud Interconnect (GCP): dedicated line untuk hybrid cloud",
          "DNS deep dive: Route 53 routing policy, health check, DNSSEC",
          "CDN: CloudFront (AWS), Cloud CDN (GCP), cache behavior, origin shield",
          "WAF & Shield: protect web app dari SQL injection, XSS, DDoS",
          "Network optimization: latency vs throughput, TCP BBR, jumbo frame"
        ]
      },
      {
        id: "ce1-p1",
        title: "🚀 PROJECT: multi-cloud-foundation",
        done: false,
        details: [
          "Provision VPC + subnet + EC2 + RDS di AWS via console & CLI",
          "Provision VPC + subnet + GCE + Cloud SQL di GCP via console & CLI",
          "Setup VPC peering antar 2 VPC di AWS (berbeda region/CIDR)",
          "Setup Site-to-Site VPN antara AWS VPC dan GCP VPC (hybrid connectivity)",
          "Deploy aplikasi sederhana (Node.js/Python) ke EC2 + RDS, akses via ALB",
          "Setup CloudWatch alarm: CPU > 80% → SNS notification ke email",
          "Buat network topology diagram (Excalidraw/draw.io) untuk dokumentasi"
        ]
      },
      {
        id: "ce1-s1",
        title: "🎯 SYARAT LULUS SPRINT 1",
        done: false,
        details: [
          "Bisa provision infra AWS (VPC+EC2+RDS+S3) tanpa tutorial/console-clicking",
          "Paham beda ALB vs NLB & kapan pakai masing-masing",
          "Bisa setup hybrid connectivity (VPN/VPC peering) antar cloud atau cloud-to-onprem",
          "Paham AWS IAM policy JSON structure & bisa write custom policy"
        ]
      }
    ]
  },
  {
    id: "ce-2",
    title: "CLOUD — Sprint 2: Terraform & Ansible (Infrastructure as Code) (Bulan 3–4)",
    description: "Otomasi provisioning & configuration management untuk cloud & on-prem.",
    project: "iac-platform (Terraform + Ansible)",
    tasks: [
      {
        id: "ce2-1",
        title: "Terraform Advanced",
        done: false,
        details: [
          "HCL syntax: resource, data, variable, local, output, module",
          "Provider: aws, google, azurerm, proxmox, vmware (multi-provider setup)",
          "State management: terraform.tfstate, remote backend (S3 + DynamoDB lock, GCS)",
          "Module design: reusable VPC, EC2, RDS, S3 module dengan versioning",
          "Workspaces: manage staging vs production environment",
          "Terraform Cloud / Terraform Enterprise: remote execution, policy as code (Sentinel)",
          "Dynamic blocks & for_each: generate config secara programatik",
          "terraform import: adopt existing infra yang dibuat manual",
          "Drift detection: terraform plan untuk detect manual changes",
          "Pipeline IaC: GitLab CI / GitHub Actions → terraform plan (PR) → terraform apply (merge)",
          "Atlantis / Terragrunt: wrapper untuk multi-environment IaC workflow"
        ]
      },
      {
        id: "ce2-2",
        title: "Ansible (Configuration Management)",
        done: false,
        details: [
          "Inventory: static (INI), dynamic (AWS ec2 plugin, GCP plugin)",
          "Playbook: task, handler, notify, when, loop, register",
          "Modules: apt, yum, copy, template, service, file, git, docker, k8s",
          "Roles: folder structure (tasks, handlers, templates, files, defaults, vars, meta)",
          "Jinja2 templating: variable, filter, conditional, loop di template",
          "Ansible Vault: encrypt sensitive data (password, API key, cert)",
          "Ansible Galaxy: download & publish community roles",
          "Ansible AWX / Semaphore: GUI untuk Ansible (alternative CLI)",
          "Molecule: testing framework untuk Ansible roles"
        ]
      },
      {
        id: "ce2-3",
        title: "CloudFormation (AWS Native IaC)",
        done: false,
        details: [
          "CloudFormation vs Terraform: kapan pakai yang mana",
          "Template: YAML/JSON, intrinsic function (Ref, GetAtt, Sub, If, Join)",
          "Stack: create, update (change set), delete, drift detection",
          "Nested stack & cross-stack reference (Export/ImportValue)",
          "CloudFormation Designer: visual template editor",
          "cdk (Cloud Development Kit): write infra pakai Python/TypeScript"
        ]
      },
      {
        id: "ce2-p1",
        title: "🚀 PROJECT: iac-platform",
        done: false,
        details: [
          "Buat Terraform module: vpc (multi-AZ subnet, NAT, IGW), ec2 (auto-scaling), rds (multi-AZ), s3",
          "Setup remote backend: state di S3 + lock di DynamoDB (atau GCS)",
          "Provision 2 environment: staging (single AZ, cheap) & production (multi-AZ, HA) via modules",
          "Buat Ansible roles: common (update, install utils), docker, nginx, node-exporter",
          "Playbook setup-server.yml: jalankan role dari server kosong → siap deploy",
          "Buat CI/CD pipeline: git push → terraform plan (comment di PR) → apply saat merge",
          "Verifikasi: 1 git push → infra auto-provisioned → server auto-configured → siap terima traffic"
        ]
      },
      {
        id: "ce2-s1",
        title: "🎯 SYARAT LULUS SPRINT 2",
        done: false,
        details: [
          "Bisa provision infra cloud dari nol hanya dengan terraform apply",
          "Bisa design Terraform module yang reusable & versioned",
          "Ansible playbook bisa setup server kosong sampai siap deploy tanpa manual",
          "Paham remote state & kenapa state file TIDAK boleh di-commit ke Git",
          "Bisa jawab: 'Terraform vs CloudFormation, mana yang lo pilih & kenapa?'"
        ]
      }
    ]
  },
  {
    id: "ce-3",
    title: "CLOUD — Sprint 3: Kubernetes & Container Platform (Bulan 5–6)",
    description: "Kubernetes di cloud (EKS/GKE), Helm, ArgoCD GitOps, & container orchestration.",
    project: "k8s-cloud-platform",
    tasks: [
      {
        id: "ce3-1",
        title: "Managed Kubernetes (EKS & GKE)",
        done: false,
        details: [
          "EKS architecture: control plane (managed), data plane (managed node group, Fargate, self-managed)",
          "eksctl: create cluster, nodegroup, fargate profile, IRSA setup",
          "GKE: Autopilot vs Standard mode, node pool management",
          "Cluster autoscaler / Karpenter: auto-scale node berdasarkan pending pod",
          "AWS Load Balancer Controller: ALB/NLB integration dengan K8s Ingress",
          "EKS add-ons: VPC CNI, CoreDNS, kube-proxy, EBS CSI driver",
          "IRSA (IAM Roles for Service Accounts): fine-grained AWS permission untuk pod",
          "GKE Workload Identity: service account mapping ke GCP IAM",
          "Cluster upgrade strategy: blue-green, in-place, dengan downtime planning"
        ]
      },
      {
        id: "ce3-2",
        title: "Helm & K8s Package Management",
        done: false,
        details: [
          "Chart structure: Chart.yaml, values.yaml, templates/, charts/",
          "Template engine: {{ }}, _helpers.tpl, range, if/else, with",
          "Values override: values-staging.yaml, values-production.yaml, --set flag",
          "helm install, upgrade, rollback, uninstall, list, repo add",
          "Custom chart: bikin Helm chart untuk aplikasi internal",
          "Helmfile / ArgoCD ApplicationSet: deploy banyak chart sekaligus",
          "OCI registry: push Helm chart ke ECR / GAR sebagai OCI artifact",
          "helm-secrets: encrypt values yang sensitif (password, API key)"
        ]
      },
      {
        id: "ce3-3",
        title: "GitOps dengan ArgoCD",
        done: false,
        details: [
          "GitOps principles: Git sebagai single source of truth, declarative, continuously applied",
          "ArgoCD architecture: API server, repo server, application controller, Redis",
          "Application CRD: source (repo+path+revision), destination (cluster+namespace)",
          "Sync policy: manual vs auto-sync, auto-prune, self-heal",
          "Multi-environment: staging auto-sync, production manual sync",
          "App-of-Apps pattern: 1 root app yang manage apps lain",
          "ArgoCD Notifications: Slack/Telegram alert saat sync gagal atau drift",
          "Argo Rollouts: progressive delivery (canary, blue-green) di K8s",
          "Argo Image Updater: auto-update image tag saat ada new build"
        ]
      },
      {
        id: "ce3-4",
        title: "K8s Day-2 Operations",
        done: false,
        details: [
          "Resource management: requests, limits, HPA, VPA, KEDA (event-driven autoscaling)",
          "RBAC: Role, ClusterRole, RoleBinding, ClusterRoleBinding, ServiceAccount",
          "NetworkPolicy: isolate traffic antar namespace (zero-trust)",
          "Storage: PVC, StorageClass (gp3, io2), StatefulSet untuk stateful workload",
          "Config & Secret: ConfigMap, external secrets (AWS Secrets Manager / GCP Secret Manager)",
          "Ingress controller: ALB (AWS), GCE Ingress (GCP), Nginx Ingress, Istio Gateway",
          "Cluster backup: Velero (backup PV + K8s resource ke S3/GCS)",
          "Cost optimization: Spot instance, right-sizing, cluster cleanup, Kubecost"
        ]
      },
      {
        id: "ce3-p1",
        title: "🚀 PROJECT: k8s-cloud-platform",
        done: false,
        details: [
          "Provision EKS cluster (atau GKE) via Terraform dengan managed node group",
          "Deploy 3 microservice (Python, Go, Node) ke K8s via custom Helm Chart",
          "Setup ArgoCD di cluster, connect ke Git repo",
          "Konfigurasi App-of-Apps: staging auto-sync, production manual sync",
          "Setup HPA: auto-scale pod saat CPU > 70%, min 2 pod, max 10 pod",
          "Buat CI/CD end-to-end: git push → CI build image → push ECR → update Helm values → ArgoCD auto-deploy staging",
          "Setup external secrets: pull DB password dari AWS Secrets Manager",
          "Verifikasi: perubahan kode auto-ter-deploy ke staging tanpa intervensi manual"
        ]
      },
      {
        id: "ce3-s1",
        title: "🎯 SYARAT LULUS SPRINT 3",
        done: false,
        details: [
          "Bisa provision EKS/GKE dari nol pakai Terraform",
          "Bisa deploy aplikasi via Helm Chart dari scratch",
          "GitOps workflow jalan: push → CI build → ArgoCD auto-deploy",
          "Paham K8s networking (Service, Ingress, NetworkPolicy) & bisa troubleshoot",
          "Bisa jawab: 'Apa beda EKS Fargate vs Managed Node Group? Kapan pakai yang mana?'"
        ]
      }
    ]
  },
  {
    id: "ce-4",
    title: "CLOUD — Sprint 4: Hybrid Cloud, Virtualization & Disaster Recovery (Bulan 7–8)",
    description: "VMware, Proxmox, F5 load balancer, hybrid connectivity, backup, & DR strategy.",
    project: "hybrid-cloud-platform",
    tasks: [
      {
        id: "ce4-1",
        title: "Virtualization: VMware & Proxmox",
        done: false,
        details: [
          "VMware vSphere: ESXi hypervisor, vCenter Server, cluster, HA, DRS (vMotion)",
          "VM components: VMX, VMDK, snapshot, clone, template, OVF/OVA export-import",
          "VMware networking: vSwitch, distributed switch, port group, VLAN tagging",
          "VMware storage: datastore (VMFS), vSAN, storage vMotion",
          "Proxmox VE (PVE): open-source virtualization, KVM + LXC container",
          "Proxmox cluster: quorum, Corosync, live migration",
          "Proxmox storage: ZFS, LVM, Ceph RBD, NFS",
          "Proxmox backup: Proxmox Backup Server (PBS), deduplication, incremental",
          "VMware vs Proxmox: licensing, cost, feature comparison untuk enterprise"
        ]
      },
      {
        id: "ce4-2",
        title: "F5 BIG-IP & Advanced Load Balancing",
        done: false,
        details: [
          "F5 BIG-IP: Virtual Edition (VE) vs hardware appliance",
          "Architecture: TMM (Traffic Management Microkernel), control plane vs data plane",
          "Virtual Server: listener (IP:port), pool, pool member, monitor (health check)",
          "Load balancing method: round robin, ratio, least connections, observed, predictive",
          "Persistence: source address, cookie, SSL session ID, universal",
          "SSL offload: client-side & server-side profile, certificate management",
          "iRules: TCL scripting untuk custom traffic manipulation (routing, header rewrite)",
          "iApp / AS3: declarative deployment template untuk application service",
          "F5 vs HAProxy vs Nginx vs Cloud LB: kapan pakai enterprise (F5) vs open-source",
          "F5 BIG-IQ: centralized management untuk multiple BIG-IP device"
        ]
      },
      {
        id: "ce4-3",
        title: "Backup & Disaster Recovery",
        done: false,
        details: [
          "DR concepts: RTO (Recovery Time Objective) & RPO (Recovery Point Objective)",
          "DR strategy: backup & restore, pilot light, warm standby, multi-site active-active",
          "AWS Backup: centralized backup policy across AWS services (EC2, RDS, EFS, DynamoDB)",
          "VMware backup: Veeam, Commvault — agentless backup via vSphere API",
          "Database backup: logical (pg_dump, mysqldump) vs physical (WAL archiving, snapshot)",
          "Cross-region replication: S3 cross-region, RDS cross-region read replica, EBS snapshot copy",
          "DR runbook: failover procedure, DNS cutover, data validation, failback",
          "DR testing: tabletop exercise, partial failover, full failover drill",
          "Cloud DR: AWS Elastic Disaster Recovery (CloudEndure), Google Backup & DR"
        ]
      },
      {
        id: "ce4-4",
        title: "Hybrid Cloud Architecture",
        done: false,
        details: [
          "Hybrid cloud pattern: cloud burst, cloud anchor, on-prem as data residency",
          "AWS Outposts / GKE Anthos / Azure Arc: run cloud API on-prem",
          "Network connectivity: Direct Connect / Cloud Interconnect / Site-to-Site VPN",
          "Identity federation: on-prem Active Directory → AWS IAM Identity Center / GCP Cloud Identity",
          "Service mesh multi-cluster: Istio multi-cluster, federation",
          "Data gravity: strategi placement data di on-prem vs cloud (compliance, latency)",
          "Cost routing: pilih traffic path yang cheapest (VPC peering vs Transit Gateway vs internet)",
          "Migration strategy: 6 R's (Rehost, Replatform, Repurchase, Refactor, Retain, Retire)"
        ]
      },
      {
        id: "ce4-p1",
        title: "🚀 PROJECT: hybrid-cloud-platform",
        done: false,
        details: [
          "Deploy Proxmox VE di local VM (atau bare-metal jika ada): buat VM, setup cluster",
          "Setup Site-to-Site VPN antara Proxmox (on-prem) dan AWS VPC (cloud)",
          "Deploy F5 BIG-IP VE (trial license) atau HAProxy: config virtual server + pool + SSL offload",
          "Buat Terraform module yang provision resource di BOTH AWS dan Proxmox",
          "Setup backup: Proxmox VM → PBS, AWS RDS → automated snapshot + cross-region copy",
          "Design DR plan: pilih aplikasi critical, define RTO/RPO, tulis failover runbook",
          "Lakukan DR drill: simulate on-prem failure → failover ke cloud → verify → failback",
          "Buat arsitektur diagram: on-prem + cloud, network topology, backup flow, DR path"
        ]
      },
      {
        id: "ce4-s1",
        title: "🎯 SYARAT LULUS SPRINT 4",
        done: false,
        details: [
          "Paham virtualization (VMware/Proxmox) & bisa deploy/manage VM tanpa tutorial",
          "Bisa config F5 atau HAProxy dengan health check, persistence, & SSL",
          "Punya DR plan yang terdokumentasi & sudah di-test (minimal tabletop drill)",
          "Paham hybrid cloud connectivity & bisa setup VPN/Direct Connect antar cloud-onprem",
          "Bisa jawab: 'Jelaskan RTO vs RPO dan strategi DR yang lo pilih untuk 99.99% uptime'"
        ]
      }
    ]
  },
  {
    id: "ce-5",
    title: "CLOUD — Sprint 5: CI/CD, Monitoring & Cost Optimization (Bulan 9–10)",
    description: "CI/CD pipeline automation, observability stack, cloud cost management, & security.",
    project: "cicd-observability-cost-optimized",
    tasks: [
      {
        id: "ce5-1",
        title: "CI/CD for Infrastructure & Application",
        done: false,
        details: [
          "Jenkins: pipeline (Jenkinsfile), agent, shared library, plugin ecosystem",
          "GitLab CI: .gitlab-ci.yml, stages, jobs, runner, Docker-in-Docker",
          "GitHub Actions: workflow, reusable workflow, composite action, marketplace",
          "ArgoCD (GitOps): sync K8s manifest dari Git (reviewed di Sprint 3)",
          "Pipeline design: lint → test → build → scan → push → deploy → verify",
          "Multi-environment promotion: dev → staging → production (gating, approval)",
          "Deployment strategy: rolling, blue-green, canary, feature flag (LaunchDarkly / Unleash)",
          "Artifact management: ECR / GAR / Harbor / Nexus",
          "Secret management in CI: HashiCorp Vault, AWS Secrets Manager, Sealed Secrets"
        ]
      },
      {
        id: "ce5-2",
        title: "Monitoring & Observability (Cloud)",
        done: false,
        details: [
          "Zabbix: agent-based monitoring, SNMP, template, trigger, auto-discovery",
          "Datadog: APM, log management, custom metric, dashboard, synthetic monitoring",
          "CloudWatch: metric, log, alarm, dashboard, Synthetics (canary), RUM",
          "GCP Cloud Monitoring (Stackdriver): metric, log, uptime check, alerting policy",
          "Prometheus + Grafana: cloud-native monitoring (review dari SRE track)",
          "Distributed tracing: X-Ray (AWS), Cloud Trace (GCP), Jaeger, OpenTelemetry",
          "Log aggregation: CloudWatch Logs / Cloud Logging / ELK / Loki",
          "SLO monitoring: error budget, burn rate alert (Google SRE practice)",
          "Synthetic monitoring: simulate user journey untuk detect downtime sebelum user complain"
        ]
      },
      {
        id: "ce5-3",
        title: "Cloud Cost Optimization (FinOps)",
        done: false,
        details: [
          "AWS Cost Explorer: filter by service, tag, time; forecast; RI utilization",
          "Reserved Instance (RI) vs Savings Plan vs Spot Instance: kapan pakai yang mana",
          "GCP Committed Use Discount (CUD) & Sustained Use Discount",
          "Right-sizing: AWS Compute Optimizer, recommendations berdasarkan utilization",
          "Storage cost: S3 lifecycle (move to Glacier), EBS snapshot cleanup, EFS access pattern",
          "Network cost: NAT Gateway charge ($0.045/GB!), data transfer antar region, VPC endpoint",
          "Tagging strategy: mandatory tag (Project, Owner, Environment), cost allocation tag",
          "FinOps culture: engineering team accountable untuk cloud cost, monthly review",
          "Tools: AWS Budgets, Cost Anomaly Detection, Kubecost (K8s), Infracost (Terraform)"
        ]
      },
      {
        id: "ce5-4",
        title: "Cloud Security & Compliance",
        done: false,
        details: [
          "AWS Config: rule-based compliance check (e.g., 'no public S3 bucket')",
          "AWS CloudTrail: audit API call (who did what, when)",
          "AWS GuardDuty: threat detection (unauthorized deployment, compromised EC2)",
          "GCP Security Command Center: vulnerability & threat detection",
          "Network security: security group, NACL, WAF, Shield, PrivateLink/VPC Endpoint",
          "Container security: ECR image scan, Trivy, admission controller (OPA Gatekeeper)",
          "Secret management: AWS Secrets Manager, Parameter Store, GCP Secret Manager",
          "Compliance framework: ISO 27001, SOC 2, PCI-DSS — apa yang di-audit di cloud",
          "Security automation: auto-remediation via Lambda/Cloud Function saat violation detected"
        ]
      },
      {
        id: "ce5-p1",
        title: "🚀 PROJECT: cicd-observability-cost-optimized",
        done: false,
        details: [
          "Setup full CI/CD: GitLab CI atau GitHub Actions → build → scan (Trivy) → push ECR → deploy EKS via ArgoCD",
          "Deploy monitoring: Prometheus + Grafana + CloudWatch dashboard, setup alert ke Telegram",
          "Setup Datadog atau Zabbix (free tier) untuk APM & infrastructure monitoring",
          "Analyze cloud bill: pilih 3 resource yang mahal, implement cost saving (RI, right-size, lifecycle)",
          "Setup AWS Cost Anomaly Detection + Slack alert untuk billing spike",
          "Implement security: enable GuardDuty, Config rule, auto-remediation Lambda",
          "Buat dashboard: infra health, cost trend, security finding",
          "Document SOP: deployment procedure, incident response, cost review checklist"
        ]
      },
      {
        id: "ce5-s1",
        title: "🎯 SYARAT LULUS SPRINT 5",
        done: false,
        details: [
          "CI/CD pipeline full otomatis jalan untuk infra & aplikasi",
          "Bisa setup monitoring multi-layer (infra, app, cost) dengan alerting",
          "Bisa analyze cloud bill & identify cost saving opportunity",
          "Paham security compliance (ISO 27001, audit trail) & bisa implement basic guardrail",
          "Bisa jawab: 'Cloud bill naik 50% bulan ini, langkah investigasi lo apa?'"
        ]
      }
    ]
  },
  {
    id: "ce-6",
    title: "CLOUD — Sprint 6: Certifications & Interview Prep (Bulan 11–12)",
    description: "AWS/GCP/CKA certification prep, system design, & interview readiness untuk Cloud Engineer.",
    project: "certification + portfolio + apply",
    tasks: [
      {
        id: "ce6-1",
        title: "AWS Solutions Architect Associate (SAA-C03)",
        done: false,
        details: [
          "Exam guide: domain weighting, question format, passing score",
          "Well-Architected Framework: 6 pillar (Operational, Security, Reliability, Performance, Cost, Sustainability)",
          "Compute: EC2, Lambda, ECS, EKS, EKS, Batch — kapan pilih yang mana",
          "Storage: S3, EFS, FSx, Storage Gateway, Snowball — use case comparison",
          "Database: RDS, DynamoDB, ElastiCache, Redshift, Aurora — when to use",
          "Networking: VPC design, Transit Gateway, Direct Connect, Route 53, CloudFront",
          "Security: IAM, KMS, CloudHSM, WAF, Shield, Macie, Inspector",
          "Disaster Recovery: backup, pilot light, warm standby, multi-site",
          "Migration: DMS, Application Discovery Service, Migration Hub",
          "Practice exam: Stephane Maareg / Adrian Cantrill course + Tutorials Dojo practice test"
        ]
      },
      {
        id: "ce6-2",
        title: "GCP Professional Cloud Architect (PCA)",
        done: false,
        details: [
          "GCP services map: Compute Engine, GKE, Cloud Run, App Engine, Cloud Functions",
          "Storage & DB: Cloud Storage, Cloud SQL, Spanner, Firestore, BigQuery, Bigtable",
          "Networking: VPC, Cloud Load Balancing, Cloud DNS, Cloud CDN, Cloud Interconnect",
          "Security: IAM, Resource Hierarchy, Org Policy, VPC Service Controls",
          "Hybrid & Multi-cloud: Anthos, Migrate to GKE, BigQuery Omni",
          "Cost optimization: committed use discount, recommender, billing export",
          "Case study practice: terdapat 4 case study di exam (EHR Healthcare, Helicopter Racing, TerramEarth, Mountkirk Games)",
          "Study resource: Google Cloud Skills Boost (Qwiklabs), Coursera GCP Architect path"
        ]
      },
      {
        id: "ce6-3",
        title: "Certified Kubernetes Administrator (CKA)",
        done: false,
        details: [
          "Exam format: 100% practical (hands-on terminal), 17 task, 2 jam, passing 67%",
          "Cluster setup: kubeadm init, join, CNI plugin (Calico/Flannel)",
          "Troubleshooting: pod crash, service unreachable, node not-ready, certificate expired",
          "RBAC: create user, role, rolebinding, service account, token",
          "Networking: CNI, DNS (CoreDNS), Ingress, NetworkPolicy",
          "Storage: PV, PVC, StorageClass, volume mount",
          "Workload scheduling: Deployment, StatefulSet, DaemonSet, Job, CronJob",
          "Maintenance: drain, uncordon, upgrade cluster, backup etcd",
          "Practice: Killer.sh (official simulator), KodeKloud CKA course"
        ]
      },
      {
        id: "ce6-4",
        title: "Python & Go for Cloud Engineering",
        done: false,
        details: [
          "Python: boto3 (AWS SDK), google-cloud-python (GCP SDK), automation script",
          "Python use case: tag untagged resources, rotate IAM key, backup verification, cost report",
          "Go: AWS SDK for Go v2, Google Cloud Go client, CLI tool (Cobra)",
          "Go use case: custom Kubernetes operator, CLI for multi-cloud resource audit",
          "Lambda / Cloud Function: serverless automation (Python primary)",
          "Script testing: pytest (Python), go test (Go) untuk automation reliability",
          "API interaction: REST call ke cloud provider, pagination, rate limiting, retry"
        ]
      },
      {
        id: "ce6-5",
        title: "System Design & Interview Prep (Cloud Engineer)",
        done: false,
        details: [
          "System design: 'Design a multi-region web app with 99.99% availability'",
          "Migration design: 'Migrate 100 on-prem VM to cloud with minimal downtime'",
          "Hybrid cloud design: 'Connect on-prem datacenter to cloud untuk latency-sensitive workload'",
          "Cost optimization scenario: 'Reduce $50K/month cloud bill by 30% — what do you do?'",
          "Troubleshooting Q&A: 'EC2 instance unreachable, step by step debug?'",
          "Kubernetes Q&A: 'Pod stuck in CrashLoopBackOff, how do you troubleshoot?'",
          "Terraform Q&A: 'State file conflict, what do you do?'",
          "Behavioral: STAR method — ceritakan pengalaman migrasi, cost optimization, incident",
          "Whiteboard: draw architecture, explain trade-off (cost vs performance vs reliability)"
        ]
      },
      {
        id: "ce6-p1",
        title: "🚀 PROJECT: Certification + Portfolio + APPLY!",
        done: false,
        details: [
          "Pilih 1 sertifikasi target: AWS SAA, GCP PCA, atau CKA — schedule exam date",
          "Selesaikan practice exam dengan skor konsisten > 80% sebelum real exam",
          "Polish semua repo GitHub: README dengan arsitektur diagram, live demo URL",
          "Deploy capstone project: multi-cloud infra (AWS+GCP) via Terraform, app di EKS/GKE, full CI/CD, monitoring",
          "Update CV: tech stack (AWS, GCP, K8s, Terraform, Ansible, ArgoCD, F5, Proxmox), sertifikasi",
          "Buat LinkedIn post: 'Membangun hybrid cloud platform end-to-end dengan multi-cloud & IaC'",
          "Buat cloud architecture portfolio: 3-5 design document (network topology, DR plan, cost analysis)",
          "APPLY ke ParagonCorp, Kredivo, Tokopedia, Gojek, & perusahaan lain dengan portfolio 🚀"
        ]
      },
      {
        id: "ce6-s1",
        title: "🎯 SYARAT LULUS SPRINT 6 — GET THE OFFER",
        done: false,
        details: [
          "Lulus minimal 1 sertifikasi cloud (AWS SAA / GCP PCA / CKA)",
          "Punya capstone project: multi-cloud + IaC + K8s + CI/CD + monitoring",
          "Bisa design & explain hybrid cloud architecture dengan trade-off yang jelas",
          "Bisa jawab system design: HA multi-region, migration, cost optimization",
          "CV menampilkan 5+ project cloud engineering yang relevan",
          "CONFIDENT APPLY & PASS INTERVIEW CLOUD ENGINEER 🚀"
        ]
      }
    ]
  }
];
