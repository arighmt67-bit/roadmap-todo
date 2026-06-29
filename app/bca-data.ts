export const bcaPhases = [
  {
    id: "bca-1",
    title: "BCA TRACK — Sprint 1: Java Core (Bulan 1–2)",
    description: "Fondasi Java OOP & Spring Boot. Target: bisa bikin REST API banking.",
    project: "java-banking-api (Starter)",
    tasks: [
      {
        id: "b1-1",
        title: "Java Fundamentals",
        done: false,
        details: [
          "Tipe data primitif & wrapper class, String manipulation",
          "Control flow: if/else, switch, loop (for, while, do-while)",
          "Method, parameter, return value, overloading",
          "Array & ArrayList, Collections (List, Set, Map, Queue)",
          "Exception handling: try-catch-finally, custom exception, multi-catch",
          "Generics: bounded type, wildcard (?, ? extends, ? super)",
          "Optional untuk hindari NullPointerException",
          "I/O: File read/write dengan NIO dan InputStream/OutputStream"
        ]
      },
      {
        id: "b1-2",
        title: "Java OOP Mastery",
        done: false,
        details: [
          "Class, object, constructor, this & super keyword",
          "Encapsulation: access modifier (public, private, protected, default)",
          "Inheritance: extends, method overriding, @Override",
          "Polymorphism: upcasting, downcasting, instanceof",
          "Abstract class vs Interface (default method, static method)",
          "Functional interface & Lambda expression",
          "Method reference (:: operator)",
          "Design patterns: Singleton, Factory, Builder, Strategy"
        ]
      },
      {
        id: "b1-3",
        title: "Modern Java (Stream API)",
        done: false,
        details: [
          "Stream API: filter, map, reduce, collect, sorted, distinct",
          "Collectors: toList, toMap, groupingBy, partitioningBy",
          "Parallel stream & thread safety",
          "CompletableFuture untuk async programming",
          "Date/Time API: LocalDate, LocalDateTime, Duration, Period"
        ]
      },
      {
        id: "b1-4",
        title: "Build Tools & Testing",
        done: false,
        details: [
          "Maven: pom.xml, dependency management, lifecycle (clean, compile, test, package, install)",
          "Gradle (opsional, beberapa tim BCA pakai)",
          "JUnit 5: @Test, @BeforeEach, @AfterEach, @ParameterizedTest",
          "Mockito: @Mock, @InjectMocks, when().thenReturn(), verify()",
          "AssertJ untuk assertion yang lebih readable"
        ]
      },
      {
        id: "b1-p1",
        title: "🚀 PROJECT: java-banking-api Starter",
        done: false,
        details: [
          "Setup Spring Boot project via Spring Initializr (Maven, Java 21)",
          "Buat model: Account (id, accountNumber, balance, type), Transaction",
          "Buat DTO & Mapper pattern (separate entity dari API response)",
          "Buat endpoint: POST /accounts, GET /accounts/{id}, GET /accounts",
          "Buat endpoint: POST /accounts/{id}/transfer (transfer antar rekening)",
          "Implementasi validasi: Bean Validation (@NotNull, @Positive, @Email)",
          "Tulis unit test untuk service layer (minimal 15 test case)",
          "Baca: Spring Boot Reference Documentation bagian 'Core Features'"
        ]
      },
      {
        id: "b1-s1",
        title: "🎯 SYARAT LULUS SPRINT 1",
        done: false,
        details: [
          "Bisa nulis Java OOP code tanpa lookup dokumentasi (inheritance, polymorphism, interface)",
          "Paham beda abstract class vs interface & kapan pakai keduanya",
          "Spring Boot REST API CRUD jalan + unit test coverage > 70%",
          "Paham Maven lifecycle & bisa debug build error sendiri"
        ]
      }
    ]
  },
  {
    id: "bca-2",
    title: "BCA TRACK — Sprint 2: Spring Boot + PostgreSQL (Bulan 3–4)",
    description: "Spring ecosystem dalam, database relational, & banking domain logic.",
    project: "java-banking-api + DB Integration",
    tasks: [
      {
        id: "b2-1",
        title: "Spring Core (IoC & DI)",
        done: false,
        details: [
          "IoC Container: ApplicationContext, BeanFactory",
          "Dependency Injection: @Autowired (constructor, setter, field injection)",
          "Bean scope: singleton, prototype, request, session",
          "@Component, @Service, @Repository, @Controller, @Configuration",
          "@Bean (cara deklarasi bean manual), @Primary, @Qualifier",
          "Lifecycle callback: @PostConstruct, @PreDestroy, InitializingBean"
        ]
      },
      {
        id: "b2-2",
        title: "Spring Web MVC (REST API)",
        done: false,
        details: [
          "@RestController, @RequestMapping, @GetMapping, @PostMapping, @PutMapping, @DeleteMapping",
          "@PathVariable, @RequestParam, @RequestBody, @ResponseBody",
          "@ControllerAdvice & @ExceptionHandler untuk global error handling",
          "ResponseEntity untuk kontrol HTTP status code & header",
          "Content negotiation (JSON, XML)",
          "CORS configuration untuk frontend integration"
        ]
      },
      {
        id: "b2-3",
        title: "Spring Data JPA & PostgreSQL",
        done: false,
        details: [
          "@Entity, @Table, @Id, @GeneratedValue, @Column",
          "Relasi: @OneToMany, @ManyToOne, @ManyToMany, @OneToOne (fetch type & cascade)",
          "JpaRepository: findBy*, derived query, @Query (JPQL & native)",
          "Pagination & Sorting: Pageable, Page<T>",
          "Entity lifecycle: @PrePersist, @PreUpdate, @PostLoad",
          "Transaction management: @Transactional, propagation, isolation level",
          "ACID compliance (wajib untuk banking!)",
          "Connection pooling: HikariCP tuning (maxPoolSize, minimumIdle)",
          "EXPLAIN ANALYZE untuk optimasi query",
          "Indexing: B-tree, composite index, partial index"
        ]
      },
      {
        id: "b2-4",
        title: "Banking Domain Logic",
        done: false,
        details: [
          "Double-entry bookkeeping system (debit & credit harus balance)",
          "Idempotency: client generate request_id, server cek duplikat",
          "Audit trail: log siapa, kapan, apa yang berubah (EntityListener)",
          "Money handling: BigDecimal (BUKAN double/float!), RoundingMode",
          "Concurrency: Optimistic locking (@Version) & Pessimistic locking",
          "Soft delete untuk data finansial (jangan hard delete transaksi!)"
        ]
      },
      {
        id: "b2-p1",
        title: "🚀 PROJECT: Tambah Database & Domain Logic",
        done: false,
        details: [
          "Hubungkan Spring Boot ke PostgreSQL (application.yml + HikariCP)",
          "Buat entity: Account, Transaction, AuditLog dengan relasi & audit listener",
          "Implementasi transfer dana dengan ACID transaction (@Transactional)",
          "Tambah idempotency check (request_id unique constraint di DB)",
          "Implementasi soft delete & optimistic locking (@Version)",
          "Buat repository dengan custom query (JPQL): riwayat transaksi, saldo per periode",
          "Tulis integration test dengan Testcontainers (PostgreSQL real container)",
          "Setup Flyway/Liquibase untuk database migration versioning"
        ]
      },
      {
        id: "b2-s1",
        title: "🎯 SYARAT LULUS SPRINT 2",
        done: false,
        details: [
          "Paham Spring DI dan bisa jawab: kenapa constructor injection > field injection?",
          "Bisa implementasi transactional transfer dana yang ACID compliant",
          "PostgreSQL query untuk laporan banking (JOIN, GROUP BY, Window Function) bisa jalan",
          "Paham idempotency & bisa jelaskan kenapa penting di sistem pembayaran"
        ]
      }
    ]
  },
  {
    id: "bca-3",
    title: "BCA TRACK — Sprint 3: Kafka + Redis + Security (Bulan 5–6)",
    description: "Async messaging, caching, dan security untuk internet banking.",
    project: "java-banking-api + Kafka + Redis + Security",
    tasks: [
      {
        id: "b3-1",
        title: "Apache Kafka",
        done: false,
        details: [
          "Konsep core: Topic, Partition, Offset, Consumer Group, Broker",
          "Producer: KafkaTemplate, serializers",
          "Consumer: @KafkaListener, consumer group, offset commit (manual vs auto)",
          "Event-driven architecture: Transaction Event, Notification Event",
          "Partitioning strategy: by account_id untuk ordering guarantee",
          "Error handling: Dead Letter Queue (DLQ), retry topic",
          "Kafka Streams (opsional): agregasi real-time",
          "Docker: jalankan Kafka + Zookeeper/KRaft via docker-compose"
        ]
      },
      {
        id: "b3-2",
        title: "Redis (Caching Strategy)",
        done: false,
        details: [
          "Spring Data Redis: RedisTemplate, StringRedisTemplate",
          "Annotation: @Cacheable, @CacheEvict, @CachePut",
          "Cache strategy: Cache-Aside, Write-Through, Write-Behind",
          "TTL & eviction policy (LRU, LFU)",
          "Use case banking: cache saldo (TTL pendek), cache session, rate limiting",
          "Distributed lock dengan Redis (Redisson) untuk concurrent transfer",
          "Docker: jalankan Redis via docker-compose"
        ]
      },
      {
        id: "b3-3",
        title: "Spring Security (Banking Grade)",
        done: false,
        details: [
          "SecurityFilterChain, HttpSecurity configuration",
          "Authentication & Authorization (role-based: CUSTOMER, TELLER, ADMIN)",
          "JWT: generate, validate, refresh token, blacklisting",
          "OAuth2 Resource Server (opsional, jika bank pakai OAuth2)",
          "Password hashing: BCryptPasswordEncoder",
          "Method-level security: @PreAuthorize, @Secured",
          "Protection: CSRF, XSS, SQL Injection (input validation)",
          "Rate limiting per user/IP (pakai Redis atau Bucket4j)",
          "SSL/TLS: HTTPS setup, HSTS header"
        ]
      },
      {
        id: "b3-p1",
        title: "🚀 PROJECT: Tambah Kafka + Redis + Security",
        done: false,
        details: [
          "Publish event 'TransactionCreated' ke Kafka saat transfer berhasil",
          "Buat consumer Kafka yang update read model / kirim notifikasi",
          "Implementasi @Cacheable untuk GET /accounts/{id} (TTL 30 detik)",
          "Implementasi distributed lock (Redisson) saat transfer untuk cegah race condition",
          "Setup Spring Security: JWT auth + role-based authorization",
          "Tambah rate limiting: max 10 request/second per user",
          "Setup HTTPS (self-signed cert untuk development)",
          "Buat security test: test unauthorized access, expired token, role violation"
        ]
      },
      {
        id: "b3-s1",
        title: "🎯 SYARAT LULUS SPRINT 3",
        done: false,
        details: [
          "Bisa jelaskan event-driven architecture & kenapa bank pakai Kafka",
          "Bisa implementasi caching yang benar (cache invalidation strategy)",
          "Paham JWT flow & bisa implementasi secure auth",
          "Bisa jawab: bagaimana cegah double-spending di concurrent scenario?"
        ]
      }
    ]
  },
  {
    id: "bca-4",
    title: "BCA TRACK — Sprint 4: Microservices + K8s + CI/CD (Bulan 7–8)",
    description: "Pecah jadi microservices, deploy ke Kubernetes, otomasi pipeline.",
    project: "bca-microservices + k8s + gitlab-ci",
    tasks: [
      {
        id: "b4-1",
        title: "Microservices Architecture",
        done: false,
        details: [
          "Pola komunikasi: Sync (REST/gRPC) vs Async (Kafka)",
          "API Gateway (Spring Cloud Gateway / Kong)",
          "Service Discovery & Registration (Spring Cloud Netflix Eureka / Consul)",
          "Circuit Breaker (Resilience4j): Bulkhead, Retry, Rate Limiter",
          "Distributed Tracing: Spring Cloud Sleuth + Zipkin / OpenTelemetry",
          "Saga Pattern untuk distributed transaction (Choreography vs Orchestration)",
          "CQRS (Command Query Responsibility Segregation) basics",
          "Config management: Spring Cloud Config Server"
        ]
      },
      {
        id: "b4-2",
        title: "Docker & Kubernetes",
        done: false,
        details: [
          "Dockerfile multi-stage untuk Java (Jib / Spring Boot Layered Jar)",
          "Image optimization: distroless / alpine base, layer caching",
          "K8s objects: Deployment, Service, ConfigMap, Secret, Ingress",
          "Health check: livenessProbe, readinessProbe (Spring Boot Actuator)",
          "Resource limits & requests (HPA - Horizontal Pod Autoscaler)",
          "StatefulSet untuk PostgreSQL & Kafka di K8s",
          "Helm Chart: packaging microservices, values.yaml per environment",
          "K8s RBAC & NetworkPolicy untuk security isolation"
        ]
      },
      {
        id: "b4-3",
        title: "GitLab CI/CD Pipeline",
        done: false,
        details: [
          "Pipeline stages: test, build, scan, push, deploy",
          "Docker-in-Docker (dind) untuk build image",
          "GitLab Container Registry integration",
          "Environment variables & secrets management (Vault / Sealed Secrets)",
          "Deployment strategy: Rolling Update, Blue-Green, Canary",
          "GitOps: ArgoCD untuk auto-sync K8s manifest",
          "Automated testing di pipeline: unit, integration, security scan (Trivy)"
        ]
      },
      {
        id: "b4-p1",
        title: "🚀 PROJECT: bca-microservices Deployment",
        done: false,
        details: [
          "Pecah monolith jadi 3 service: Account Service, Transaction Service, Notification Service",
          "Setup API Gateway yang route request ke masing-masing service",
          "Komunikasi async antar service via Kafka (Transaction Service -> Notification Service)",
          "Implementasi Circuit Breaker (Resilience4j) untuk service-to-service call",
          "Deploy semua service ke K8s (Minikube / EKS) dengan Helm",
          "Buat .gitlab-ci.yml lengkap: test -> build -> push -> deploy staging",
          "Setup ArgoCD: push ke branch 'staging' auto-deploy ke cluster",
          "Implementasi distributed tracing (bisa lihat request flow antar service)"
        ]
      },
      {
        id: "b4-s1",
        title: "🎯 SYARAT LULUS SPRINT 4",
        done: false,
        details: [
          "Bisa pecah monolith jadi microservices dengan alasan yang jelas",
          "K8s deployment manifest bisa dibuat dari nol tanpa copy-paste",
          "GitLab CI/CD pipeline full otomatis (push -> test -> build -> deploy)",
          "Bisa jawab: apa trade-off microservices vs monolith? Kapan JANGAN pecah?"
        ]
      }
    ]
  },
  {
    id: "bca-5",
    title: "BCA TRACK — Sprint 5: Performance, Monitoring & Interview (Bulan 9–10)",
    description: "Production-grade tuning, observability, dan persiapan interview.",
    project: "Portfolio Polish & Mock Interview",
    tasks: [
      {
        id: "b5-1",
        title: "Performance Tuning",
        done: false,
        details: [
          "JVM Tuning: Heap size (-Xms, -Xmx), GC algorithm (G1GC, ZGC)",
          "Thread dump & Heap dump analysis (VisualVM, Eclipse MAT)",
          "Connection pool tuning: HikariCP maxPoolSize, Kafka consumer concurrency",
          "Database: slow query log, N+1 problem detection, batch insert/update",
          "JMeter / Gatling untuk load testing API",
          "Target: API response < 200ms untuk 1000 concurrent users"
        ]
      },
      {
        id: "b5-2",
        title: "Observability (Monitoring & Logging)",
        done: false,
 details: [
          "Prometheus + Grafana: metrics dari Spring Boot Actuator/Micrometer",
          "Custom metrics: transaction count, error rate, latency percentile",
          "Alerting: AlertManager -> Telegram/PagerDuty untuk anomali",
          "Centralized logging: ELK Stack / Loki + Promtail",
          "Trace: OpenTelemetry + Jaeger / Tempo",
          "Dashboard: Golden Signals (Latency, Traffic, Errors, Saturation)"
        ]
      },
      {
        id: "b5-3",
        title: "Security & Compliance (Banking)",
        done: false,
        details: [
          "OWASP Top 10 untuk API Security",
          "PCI-DSS basics (jika handle kartu kredit/kartu debit)",
          "Data encryption: at rest (DB) & in transit (TLS)",
          "PII handling: masking nomor rekening, NIK, nomor kartu di log",
          "Audit & compliance logging (regulator OJK)"
        ]
      },
      {
        id: "b5-4",
        title: "Interview Preparation",
        done: false,
        details: [
          "Java/Spring Boot concept Q&A: DI, AOP, Transaction, Security",
          "System Design: Design an Internet Banking System (whiteboard exercise)",
          "Coding test: LeetCode Medium (Array, String, Hash Map, Tree)",
          "Behavioral: STAR method (Situation, Task, Action, Result)",
          "Siapkan jawaban: 'Ceritakan pengalaman handling production incident'",
          "Siapkan pertanyaan balik: tech stack tim, on-call culture, deployment frequency"
        ]
      },
      {
        id: "b5-p1",
        title: "🚀 PROJECT: Final Polish & Apply!",
        done: false,
        details: [
          "Polish semua repo GitHub: README lengkap, arsitektur diagram, postman collection",
          "Deploy full stack ke cloud (AWS Free Tier / GCP): K8s + Kafka + PostgreSQL + Redis",
          "Buat blog post / LinkedIn: 'Membangun Internet Banking Microservices dari nol'",
          "Update CV dengan project banking & tech stack: Java, Spring Boot, Kafka, Redis, K8s",
          "Buat portfolio website / GitHub Profile README yang professional",
          "APPLY ke BCA Digital (dan perbankan lain: Mandiri, BRI, BNI, Permata)"
        ]
      },
      {
        id: "b5-s1",
        title: "🎯 SYARAT LULUS SPRINT 5 — GET THE OFFER",
        done: false,
        details: [
          "Semua microservice running di cloud dengan monitoring aktif",
          "Bisa demo end-to-end: transfer dana -> Kafka event -> notifikasi -> audit log",
          "Bisa jawab system design interview untuk internet banking system",
          "LinkedIn post mendapat engagement (>100 reactions dari tech community)",
          "CONFIDENT APPLY & PASS INTERVIEW BCA DIGITAL (atau bank lain) 🚀"
        ]
      }
    ]
  }
];