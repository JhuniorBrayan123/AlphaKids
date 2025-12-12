import { useState } from "react";
import {
  DollarSign,
  Users,
  Cloud,
  Database,
  Server,
  Shield,
  Zap,
  TrendingUp,
  Target,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function AlphaKidsAnalysis() {
  const [activeTab, setActiveTab] = useState("business");
  const [selectedComponent, setSelectedComponent] = useState<any>(null);

  const businessModels = [
    {
      type: "SaaS B2C (Recomendado)",
      icon: <Cloud className="w-6 h-6" />,
      score: 95,
      color: "green",
      pros: [
        "Ingresos recurrentes predecibles (MRR/ARR)",
        "Escalabilidad ilimitada - sin límites físicos",
        "Bajo costo de adquisición por usuario",
        "Actualizaciones automáticas sin fricción",
        "Datos centralizados para analytics y ML",
        "Multiplataforma (iOS, Android, Web)",
        "Experiencia consistente entre dispositivos",
      ],
      cons: [
        "Requiere infraestructura cloud robusta",
        "Costos de servidor escalan con usuarios",
        "Dependencia de conectividad internet",
        "Competencia fuerte en mercado SaaS educativo",
      ],
      revenue: [
        "Freemium: Contenido básico gratis, premium pagado",
        "Suscripción mensual: $9.99/mes por familia",
        "Suscripción anual: $99/año (17% descuento)",
        "Tier familiar: Hasta 4 niños por suscripción",
        "Contenido exclusivo premium",
        "Certificaciones y reportes avanzados",
      ],
    },
    {
      type: "Híbrido SaaS + Marketplace",
      icon: <DollarSign className="w-6 h-6" />,
      score: 85,
      color: "blue",
      pros: [
        "Múltiples fuentes de ingreso",
        "Contenido de terceros amplía catálogo",
        "Comisión por ventas de terceros (20-30%)",
        "Atrae creadores de contenido educativo",
        "Efecto de red más fuerte",
      ],
      cons: [
        "Mayor complejidad en arquitectura",
        "Necesita sistema de pagos robusto",
        "Moderación de contenido necesaria",
        "Requiere equipo de soporte más grande",
      ],
      revenue: [
        "Suscripción base del usuario",
        "Comisión marketplace: 25% por venta",
        "Contenido premium exclusivo",
        "Publicidad no intrusiva (opcional)",
      ],
    },
    {
      type: "B2B2C - Institucional",
      icon: <Users className="w-6 h-6" />,
      score: 75,
      color: "purple",
      pros: [
        "Contratos de alto valor ($$$)",
        "Mayor estabilidad financiera",
        "Acceso a grandes volúmenes de usuarios",
        "Credibilidad institucional",
      ],
      cons: [
        "Ciclos de venta largos (6-12 meses)",
        "Customización por institución",
        "Requiere equipo de ventas B2B",
        "Menor agilidad para pivotear",
      ],
      revenue: [
        "Licencias institucionales",
        "Por estudiante activo",
        "Implementación y capacitación",
        "Soporte técnico prioritario",
      ],
    },
  ];

  const architectureComponents = {
    frontend: [
      {
        name: "Mobile App (React Native)",
        description: "iOS & Android nativo",
        priority: "Alta",
      },
      {
        name: "Admin Dashboard (React)",
        description: "Panel de control padres/maestros",
        priority: "Alta",
      },
      {
        name: "Landing Page (Next.js)",
        description: "Marketing y onboarding",
        priority: "Media",
      },
    ],
    apiGateway: [
      {
        name: "Kong / AWS API Gateway",
        description: "Rate limiting, authentication, routing",
        priority: "Crítica",
      },
      {
        name: "Load Balancer",
        description: "Distribución de carga",
        priority: "Crítica",
      },
    ],
    microservices: [
      {
        name: "Auth Service",
        tech: "Node.js + JWT",
        db: "PostgreSQL",
        priority: "Crítica",
      },
      {
        name: "User Service",
        tech: "Node.js",
        db: "PostgreSQL",
        priority: "Crítica",
      },
      {
        name: "Content Service",
        tech: "Node.js",
        db: "PostgreSQL + S3",
        priority: "Alta",
      },
      {
        name: "Gamification Service",
        tech: "Node.js",
        db: "MongoDB",
        priority: "Alta",
      },
      {
        name: "Analytics Service",
        tech: "Python + Pandas",
        db: "ClickHouse",
        priority: "Media",
      },
      {
        name: "Notification Service",
        tech: "Node.js",
        db: "Redis",
        priority: "Media",
      },
      {
        name: "Payment Service",
        tech: "Node.js + Stripe",
        db: "PostgreSQL",
        priority: "Alta",
      },
      {
        name: "Media Service",
        tech: "Node.js",
        db: "S3 + CloudFront",
        priority: "Alta",
      },
    ],
    infrastructure: [
      { name: "Containerization", tech: "Docker", priority: "Crítica" },
      { name: "Orchestration", tech: "Kubernetes (EKS/GKE)", priority: "Alta" },
      { name: "Message Queue", tech: "RabbitMQ / AWS SQS", priority: "Alta" },
      { name: "Cache", tech: "Redis Cluster", priority: "Alta" },
      { name: "CDN", tech: "CloudFront / Cloudflare", priority: "Alta" },
      { name: "Monitoring", tech: "Prometheus + Grafana", priority: "Alta" },
      { name: "Logging", tech: "ELK Stack", priority: "Media" },
      { name: "CI/CD", tech: "GitHub Actions", priority: "Alta" },
    ],
  };

  const teamStructure = [
    {
      role: "Tech Lead / Architect",
      count: 1,
      responsibilities: [
        "Diseño de arquitectura global",
        "Decisiones técnicas críticas",
        "Code reviews de alto nivel",
        "Mentoría del equipo",
        "Definición de estándares",
      ],
      skills: [
        "Microservicios",
        "Cloud Architecture",
        "System Design",
        "Leadership",
      ],
    },
    {
      role: "Mobile Team Lead",
      count: 1,
      responsibilities: [
        "Arquitectura de app móvil",
        "Coordinación con backend",
        "Optimización de performance",
        "App store deployment",
        "Liderazgo mobile team",
      ],
      skills: [
        "React Native/Flutter",
        "Mobile Architecture",
        "UI/UX",
        "Performance",
      ],
    },
    {
      role: "Mobile Developers",
      count: 2,
      responsibilities: [
        "Desarrollo de features móviles",
        "Integración con APIs",
        "Testing unitario",
        "Bug fixing",
        "UI implementation",
      ],
      skills: ["React Native/Flutter", "JavaScript/Dart", "REST APIs", "Git"],
    },
    {
      role: "Backend Lead",
      count: 1,
      responsibilities: [
        "Arquitectura de microservicios",
        "Database design",
        "Performance optimization",
        "Security implementation",
        "Coordinación backend team",
      ],
      skills: [
        "Node.js/Python",
        "Microservicios",
        "SQL/NoSQL",
        "System Design",
      ],
    },
    {
      role: "Backend Developers",
      count: 2,
      responsibilities: [
        "Desarrollo de microservicios",
        "APIs REST/GraphQL",
        "Database queries",
        "Testing e integración",
        "Documentation",
      ],
      skills: ["Node.js/Python", "PostgreSQL/MongoDB", "Docker", "Git"],
    },
    {
      role: "DevOps Engineer",
      count: 1,
      responsibilities: [
        "Infraestructura cloud (AWS/GCP)",
        "CI/CD pipelines",
        "Kubernetes management",
        "Monitoring & alerts",
        "Security & compliance",
      ],
      skills: ["Kubernetes", "Docker", "AWS/GCP", "Terraform", "CI/CD"],
    },
    {
      role: "UI/UX Designer",
      count: 1,
      responsibilities: [
        "Diseño de interfaces",
        "User research",
        "Prototipos interactivos",
        "Design system",
        "Usability testing",
      ],
      skills: ["Figma", "UI/UX", "User Research", "Design Systems"],
    },
    {
      role: "QA Engineer",
      count: 1,
      responsibilities: [
        "Testing automatizado",
        "QA manual",
        "Performance testing",
        "Regression testing",
        "Bug tracking",
      ],
      skills: [
        "Jest/Cypress",
        "QA Manual",
        "Performance Testing",
        "Bug Tracking",
      ],
    },
  ];

  const phases = [
    {
      name: "FASE 0: Setup (2 semanas)",
      tasks: [
        "Definir stack tecnológico final",
        "Setup de repositorios y CI/CD",
        "Infraestructura base en cloud",
        "Definir contratos de APIs",
        "Design system inicial",
      ],
      team: "Tech Lead + DevOps + Backend Lead + UI/UX",
    },
    {
      name: "FASE 1: MVP Core (6 semanas)",
      tasks: [
        "Auth Service (Login, registro, JWT)",
        "User Service (Perfiles básicos)",
        "Content Service (CRUD contenido)",
        "Mobile App básica (login + contenido)",
        "Admin Dashboard básico",
      ],
      team: "Todo el equipo - enfoque en funcionalidad core",
    },
    {
      name: "FASE 2: Features (6 semanas)",
      tasks: [
        "Gamification Service (puntos, badges)",
        "Analytics básico",
        "Notification Service",
        "Mejoras UI/UX",
        "Testing automatizado",
      ],
      team: "Equipos trabajan en paralelo por feature",
    },
    {
      name: "FASE 3: Monetización (4 semanas)",
      tasks: [
        "Payment Service (Stripe)",
        "Sistema de suscripciones",
        "Contenido premium",
        "Pasarela de pagos móvil",
        "Testing de pagos",
      ],
      team: "Backend + Mobile + QA enfocados",
    },
    {
      name: "FASE 4: Scale & Polish (4 semanas)",
      tasks: [
        "Optimización de performance",
        "Kubernetes en producción",
        "Monitoring y alertas",
        "Security audit",
        "App store submission",
      ],
      team: "DevOps + Tech Lead + QA lideran",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-4 rounded-2xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AlphaKids
                </h1>
                <p className="text-gray-600 text-lg">
                  Análisis de Negocio y Arquitectura SaaS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-2 mb-6 flex flex-col sm:flex-row gap-2">
          {["business", "architecture", "team", "roadmap"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg font-semibold transition-all ${activeTab === tab
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {tab === "business" && "💼 Modelo de Negocio"}
              {tab === "architecture" && "🏗️ Arquitectura"}
              {tab === "team" && "👥 Equipo"}
              {tab === "roadmap" && "🗺️ Roadmap"}
            </button>
          ))}
        </div>

        {/* Business Model Tab */}
        {activeTab === "business" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Por qué SaaS para AlphaKids?
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                  <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg text-green-900 mb-2">
                    Escalabilidad
                  </h3>
                  <p className="text-gray-700 text-sm">
                    De 100 a 100,000 usuarios sin cambios estructurales
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
                  <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-lg text-blue-900 mb-2">
                    Ingresos Recurrentes
                  </h3>
                  <p className="text-gray-700 text-sm">
                    MRR predecible = valoración startup más alta
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
                  <Cloud className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-lg text-purple-900 mb-2">
                    Multi-plataforma
                  </h3>
                  <p className="text-gray-700 text-sm">
                    iOS, Android, Web - misma experiencia
                  </p>
                </div>
              </div>

              {businessModels.map((model, idx) => (
                <div
                  key={idx}
                  className="mb-6 bg-gray-50 rounded-xl p-6 border-2 border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`bg-${model.color}-100 p-3 rounded-lg`}>
                        {model.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {model.type}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="bg-white rounded-full h-3 w-32 overflow-hidden">
                            <div
                              className={`h-full bg-${model.color}-500`}
                              style={{ width: `${model.score}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-gray-600">
                            {model.score}/100
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" /> PROS
                      </h4>
                      <ul className="space-y-2">
                        {model.pros.map((pro, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <span className="text-green-600 mt-1">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" /> CONTRAS
                      </h4>
                      <ul className="space-y-2">
                        {model.cons.map((con, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <span className="text-red-600 mt-1">✗</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-3">
                      💰 Modelo de Ingresos
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {model.revenue.map((rev, i) => (
                        <div
                          key={i}
                          className="text-sm text-gray-700 flex items-start gap-2"
                        >
                          <span className="text-indigo-600">•</span>
                          <span>{rev}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendation */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                ✅ RECOMENDACIÓN FINAL
              </h2>
              <p className="text-xl mb-4">
                <strong>SaaS B2C con estrategia Freemium</strong> es el modelo
                ideal para AlphaKids
              </p>
              <ul className="space-y-2 text-lg">
                <li>• Rápido time-to-market (3-4 meses para MVP)</li>
                <li>• Escalabilidad ilimitada desde día 1</li>
                <li>• Ingresos recurrentes predecibles</li>
                <li>• Datos centralizados para mejorar el producto</li>
                <li>• Posibilidad de pivotar a B2B2C después</li>
              </ul>
            </div>
          </div>
        )}

        {/* Architecture Tab */}
        {activeTab === "architecture" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Arquitectura de Microservicios SaaS
              </h2>

              {Object.entries(architectureComponents).map(
                ([category, components]) => (
                  <div key={category} className="mb-8">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-4 capitalize flex items-center gap-3">
                      {category === "frontend" && (
                        <>
                          <Zap className="w-7 h-7" /> Frontend
                        </>
                      )}
                      {category === "apiGateway" && (
                        <>
                          <Shield className="w-7 h-7" /> API Gateway
                        </>
                      )}
                      {category === "microservices" && (
                        <>
                          <Server className="w-7 h-7" /> Microservicios
                        </>
                      )}
                      {category === "infrastructure" && (
                        <>
                          <Database className="w-7 h-7" /> Infraestructura
                        </>
                      )}
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {components.map((comp, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedComponent({ ...comp, category })}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border-2 border-gray-200 hover:border-indigo-400 transition-all hover:shadow-lg cursor-pointer"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-gray-800">
                              {comp.name}
                            </h4>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${comp.priority === "Crítica"
                                ? "bg-red-100 text-red-700"
                                : comp.priority === "Alta"
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-blue-100 text-blue-700"
                                }`}
                            >
                              {comp.priority}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {'description' in comp ? comp.description : comp.tech}
                          </p>
                          {'db' in comp && (
                            <div className="text-xs text-gray-500 bg-white px-2 py-1 rounded inline-block">
                              DB: {comp.db}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Architecture Diagram Description */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                🏗️ Flujo de Arquitectura
              </h3>
              <div className="space-y-3 text-lg">
                <p>
                  <strong>1. Mobile App</strong> → Hace request a API Gateway
                </p>
                <p>
                  <strong>2. API Gateway</strong> → Autentica, rate limit,
                  routing
                </p>
                <p>
                  <strong>3. Microservicio</strong> → Procesa lógica de negocio
                </p>
                <p>
                  <strong>4. Database</strong> → Persiste datos
                  (PostgreSQL/MongoDB)
                </p>
                <p>
                  <strong>5. Cache (Redis)</strong> → Respuestas rápidas
                </p>
                <p>
                  <strong>6. Message Queue</strong> → Comunicación asíncrona
                  entre servicios
                </p>
                <p>
                  <strong>7. CDN</strong> → Entrega estática (imágenes, videos)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Estructura del Equipo
              </h2>
              <p className="text-gray-600 mb-6">
                Total: 10 personas (estructura óptima para microservicios)
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {teamStructure.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-indigo-900">
                        {member.role}
                      </h3>
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        x{member.count}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Responsabilidades:
                      </h4>
                      <ul className="space-y-1">
                        {member.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-indigo-600">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">
                        Skills requeridas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-white text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold border border-indigo-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Distribution */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                📊 Distribución Recomendada
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                  <h4 className="text-3xl font-bold mb-2">3</h4>
                  <p className="text-lg">Mobile Team</p>
                  <p className="text-sm opacity-90">1 Lead + 2 Developers</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                  <h4 className="text-3xl font-bold mb-2">4</h4>
                  <p className="text-lg">Backend Team</p>
                  <p className="text-sm opacity-90">1 Lead + 3 Developers</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                  <h4 className="text-3xl font-bold mb-2">3</h4>
                  <p className="text-lg">Support</p>
                  <p className="text-sm opacity-90">DevOps + UI/UX + QA</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === "roadmap" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Plan de Implementación
              </h2>
              <p className="text-gray-600 mb-6">
                Duración total: 22 semanas (5.5 meses)
              </p>

              {phases.map((phase, idx) => (
                <div
                  key={idx}
                  className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-l-8 border-indigo-600"
                >
                  <h3 className="text-2xl font-bold text-indigo-900 mb-3">
                    {phase.name}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">
                        📋 Tasks:
                      </h4>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">
                        👥 Equipo asignado:
                      </h4>
                      <p className="text-sm text-gray-700 bg-white rounded-lg p-3 border border-indigo-200">
                        {phase.team}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Milestones */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">🎯 Hitos Clave</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-lg">
                      Semana 2: Infraestructura lista
                    </p>
                    <p className="text-sm opacity-90">
                      Docker, CI/CD, Cloud setup completo
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-lg">Semana 8: MVP funcional</p>
                    <p className="text-sm opacity-90">
                      Login, perfiles, contenido básico en mobile
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-lg">
                      Semana 14: Features completas
                    </p>
                    <p className="text-sm opacity-90">
                      Gamification, analytics, notificaciones
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <p className="font-bold text-lg">
                      Semana 18: Monetización activa
                    </p>
                    <p className="text-sm opacity-90">
                      Pagos integrados, suscripciones funcionando
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div>
                    <p className="font-bold text-lg">Semana 22: Lanzamiento</p>
                    <p className="text-sm opacity-90">
                      App en stores, producción estable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Component Details Modal */}
      {selectedComponent && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedComponent(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedComponent.name}</h3>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${selectedComponent.priority === 'Crítica'
                      ? 'bg-red-500/20 text-red-100 border border-red-300'
                      : selectedComponent.priority === 'Alta'
                        ? 'bg-orange-500/20 text-orange-100 border border-orange-300'
                        : 'bg-blue-500/20 text-blue-100 border border-blue-300'
                      }`}>
                      Prioridad: {selectedComponent.priority}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white/20 border border-white/30">
                      {selectedComponent.category === 'frontend' && '🎨 Frontend'}
                      {selectedComponent.category === 'apiGateway' && '🛡️ API Gateway'}
                      {selectedComponent.category === 'microservices' && '⚙️ Microservicio'}
                      {selectedComponent.category === 'infrastructure' && '🏗️ Infraestructura'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedComponent(null)}
                  className="text-white/80 hover:text-white text-2xl font-bold leading-none"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔧</span> Stack Tecnológico
                </h4>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border-2 border-indigo-200">
                  <p className="text-gray-800 font-semibold">
                    {'description' in selectedComponent ? selectedComponent.description : selectedComponent.tech}
                  </p>
                  {'db' in selectedComponent && (
                    <p className="text-gray-600 mt-2">
                      <strong>Base de Datos:</strong> {selectedComponent.db}
                    </p>
                  )}
                </div>
              </div>

              {/* Purpose */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Propósito
                </h4>
                <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                  <p className="text-gray-700">
                    {getComponentPurpose(selectedComponent)}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">✨</span> Características Clave
                </h4>
                <ul className="space-y-2">
                  {getComponentFeatures(selectedComponent).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-green-50 rounded-lg p-3 border border-green-200">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why It's Critical */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💡</span> ¿Por qué es {selectedComponent.priority}?
                </h4>
                <div className={`rounded-xl p-4 border-2 ${selectedComponent.priority === 'Crítica'
                  ? 'bg-red-50 border-red-300'
                  : selectedComponent.priority === 'Alta'
                    ? 'bg-orange-50 border-orange-300'
                    : 'bg-blue-50 border-blue-300'
                  }`}>
                  <p className="text-gray-700">
                    {getComponentImportance(selectedComponent)}
                  </p>
                </div>
              </div>

              {/* Implementation Timeline */}
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📅</span> Timeline de Implementación
                </h4>
                <div className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-200">
                  <p className="text-gray-700">
                    {getImplementationTimeline(selectedComponent)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper functions for component details
function getComponentPurpose(comp: any): string {
  const purposes: Record<string, string> = {
    'Mobile App (React Native)': 'Aplicación principal para dispositivos iOS y Android donde los niños interactúan con el contenido educativo, juegos, y actividades de aprendizaje.',
    'Admin Dashboard (React)': 'Panel de control web para padres y maestros que permite monitorear el progreso de los niños, gestionar contenido, y acceder a reportes detallados.',
    'Landing Page (Next.js)': 'Sitio web de marketing optimizado para SEO que presenta AlphaKids, captura leads, y guía a los usuarios al proceso de registro.',
    'Kong / AWS API Gateway': 'Punto de entrada único para todas las solicitudes de la aplicación, manejando autenticación, rate limiting, y enrutamiento a los microservicios apropiados.',
    'Load Balancer': 'Distribuye el tráfico entrante entre múltiples instancias de servicios para garantizar alta disponibilidad y rendimiento óptimo.',
    'Auth Service': 'Servicio dedicado a la autenticación y autorización de usuarios, gestión de sesiones con JWT, y control de acceso basado en roles.',
    'User Service': 'Gestiona perfiles de usuarios (padres, niños, maestros), preferencias, configuraciones, y relaciones entre cuentas.',
    'Content Service': 'Administra todo el contenido educativo incluyendo videos, actividades, juegos, y materiales de aprendizaje almacenados en la nube.',
    'Gamification Service': 'Sistema de puntos, badges, niveles, y recompensas que motiva a los niños a seguir aprendiendo y completando actividades.',
    'Analytics Service': 'Procesa y analiza datos de uso, progreso de aprendizaje, y comportamiento para generar insights y reportes personalizados.',
    'Notification Service': 'Envía notificaciones push, emails, y alertas en tiempo real sobre logros, recordatorios, y actualizaciones importantes.',
    'Payment Service': 'Maneja todas las transacciones de pago, suscripciones, facturación, y integraciones con pasarelas de pago como Stripe.',
    'Media Service': 'Optimiza y entrega contenido multimedia (imágenes, videos) mediante CDN para garantizar carga rápida en cualquier dispositivo.',
    'Containerization': 'Empaqueta cada microservicio con sus dependencias en contenedores Docker para garantizar consistencia entre ambientes.',
    'Orchestration': 'Kubernetes gestiona el despliegue, escalado automático, y health checks de todos los contenedores en producción.',
    'Message Queue': 'Permite comunicación asíncrona entre microservicios, mejorando la resiliencia y desacoplamiento del sistema.',
    'Cache': 'Redis almacena en memoria datos frecuentemente accedidos para reducir latencia y carga en las bases de datos.',
    'CDN': 'Distribuye contenido estático globalmente desde servidores cercanos al usuario para mejorar tiempos de carga.',
    'Monitoring': 'Prometheus y Grafana recopilan métricas en tiempo real y generan dashboards para monitorear la salud del sistema.',
    'Logging': 'ELK Stack centraliza logs de todos los servicios para debugging, auditoría, y análisis de problemas.',
    'CI/CD': 'GitHub Actions automatiza testing, building, y deployment para permitir releases rápidos y seguros.',
  };
  return purposes[comp.name] || 'Componente esencial de la arquitectura AlphaKids.';
}

function getComponentFeatures(comp: any): string[] {
  const features: Record<string, string[]> = {
    'Mobile App (React Native)': [
      'Interfaz nativa para iOS y Android con código compartido',
      'Navegación fluida y animaciones optimizadas',
      'Soporte offline para continuar aprendiendo sin internet',
      'Integración con notificaciones push nativas',
      'Sync automático de progreso entre dispositivos'
    ],
    'Admin Dashboard (React)': [
      'Visualización de progreso en tiempo real',
      'Reportes exportables en PDF/Excel',
      'Gestión de múltiples niños por cuenta',
      'Configuración de objetivos de aprendizaje',
      'Dashboard personalizable por rol (padre/maestro)'
    ],
    'Landing Page (Next.js)': [
      'Server-Side Rendering para SEO óptimo',
      'Carga ultrarrápida con static generation',
      'Formularios de registro optimizados',
      'A/B testing integrado para conversión',
      'Blog integrado para marketing de contenido'
    ],
    'Kong / AWS API Gateway': [
      'Rate limiting por usuario/IP',
      'Autenticación JWT centralizada',
      'Routing inteligente a microservicios',
      'Transformación de requests/responses',
      'API versioning y deprecation management'
    ],
    'Load Balancer': [
      'Distribución round-robin o weighted',
      'Health checks automáticos',
      'SSL/TLS termination',
      'Sticky sessions para websockets',
      'Failover automático en caso de fallas'
    ],
    'Auth Service': [
      'Login con email/password + OAuth social',
      'JWT tokens con refresh automático',
      'Rate limiting anti-brute force',
      'Password recovery seguro',
      'Multi-factor authentication (MFA) opcional'
    ],
    'User Service': [
      'CRUD completo de perfiles',
      'Relaciones padre-hijo-maestro',
      'Gestión de preferencias y privacidad',
      'Sistema de roles y permisos',
      'Historial de actividad del usuario'
    ],
    'Content Service': [
      'Upload seguro a S3 con pre-signed URLs',
      'Categorización y tagging automático',
      'Búsqueda full-text de contenido',
      'Versionado de materiales educativos',
      'Recomendaciones personalizadas por edad'
    ],
    'Gamification Service': [
      'Sistema de puntos XP por actividad',
      'Badges desbloqueables con condiciones',
      'Leaderboards diarios/semanales/mensuales',
      'Challenges y misiones especiales',
      'Recompensas virtuales personalizables'
    ],
    'Analytics Service': [
      'Procesamiento de eventos en tiempo real',
      'Agregaciones y reportes SQL optimizados',
      'Machine learning para predicciones',
      'Detección de patrones de aprendizaje',
      'Exportación de datos para BI tools'
    ],
    'Notification Service': [
      'Push notifications multidevice',
      'Email templates personalizables',
      'Scheduling de notificaciones',
      'Segmentación por audiencia',
      'Tracking de tasas de apertura/click'
    ],
    'Payment Service': [
      'Integración Stripe para tarjetas',
      'Webhooks para eventos de pago',
      'Manejo de suscripciones recurrentes',
      'Facturación automática',
      'Soporte para múltiples monedas'
    ],
    'Media Service': [
      'Transcoding automático de videos',
      'Compresión inteligente de imágenes',
      'Adaptive bitrate streaming',
      'Thumbnails generados automáticamente',
      'CDN caching con invalidación'
    ],
    'Containerization': [
      'Imágenes Docker optimizadas multi-stage',
      'Consistency entre dev/staging/prod',
      'Resource limits configurables',
      'Health checks integrados',
      'Logs estructurados en stdout/stderr'
    ],
    'Orchestration': [
      'Auto-scaling horizontal basado en CPU/memoria',
      'Rolling updates sin downtime',
      'Self-healing automático de pods',
      'Service discovery integrado',
      'Secrets management seguro'
    ],
    'Message Queue': [
      'Garantía de entrega de mensajes',
      'Dead letter queues para errores',
      'Message routing con exchange patterns',
      'Retry automático con backoff',
      'Monitoring de queue depth'
    ],
    'Cache': [
      'Cache distribuido en cluster',
      'TTL configurable por tipo de dato',
      'Cache invalidation estratégica',
      'Session storage para usuarios',
      'Pub/Sub para real-time features'
    ],
    'CDN': [
      'Edge caching en 200+ ubicaciones',
      'HTTPS automático con certificados',
      'DDoS protection integrado',
      'Image optimization on-the-fly',
      'Analytics de uso de CDN'
    ],
    'Monitoring': [
      'Métricas de CPU, RAM, disk, network',
      'Custom metrics de negocio',
      'Alertas configurables por Slack/email',
      'Dashboards pre-built para servicios',
      'Retention de datos históricos'
    ],
    'Logging': [
      'Logs centralizados de todos los servicios',
      'Full-text search en Elasticsearch',
      'Visualización con Kibana',
      'Log retention policies',
      'Alertas basadas en patrones de log'
    ],
    'CI/CD': [
      'Automated testing en cada PR',
      'Build de Docker images',
      'Deploy automático a staging',
      'Approval gates para producción',
      'Rollback automático en fallos'
    ],
  };
  return features[comp.name] || ['Funcionalidad core del sistema', 'Integración con otros componentes', 'Optimizado para performance'];
}

function getComponentImportance(comp: any): string {
  if (comp.priority === 'Crítica') {
    return 'Este componente es CRÍTICO porque su falla causaría que la aplicación completa deje de funcionar. Requiere alta disponibilidad (99.9% uptime), redundancia, monitoreo 24/7, y un plan de disaster recovery robusto.';
  } else if (comp.priority === 'Alta') {
    return 'Este componente tiene prioridad ALTA porque afecta directamente la experiencia del usuario y las funcionalidades core del negocio. Su falla degradaría significativamente el servicio, aunque la app podría seguir funcionando parcialmente.';
  } else {
    return 'Este componente tiene prioridad MEDIA porque mejora la experiencia del usuario y la eficiencia operativa, pero su falla temporal no impediría el uso básico de la aplicación. Puede implementarse en fases posteriores al MVP.';
  }
}

function getImplementationTimeline(comp: any): string {
  const timelines: Record<string, string> = {
    'Mobile App (React Native)': 'FASE 1-2 (Semanas 1-14): Desarrollo incremental desde MVP básico hasta features completas con gamificación.',
    'Admin Dashboard (React)': 'FASE 1-2 (Semanas 3-14): Dashboard básico en FASE 1, reportes avanzados en FASE 2.',
    'Landing Page (Next.js)': 'FASE 0 (Semanas 1-2): Setup inicial con SEO básico, mejoras continuas en paralelo.',
    'Kong / AWS API Gateway': 'FASE 0 (Semana 1): Configuración inicial crítica antes de desarrollar microservicios.',
    'Load Balancer': 'FASE 0 (Semana 1): Setup en cloud provider como parte de infraestructura base.',
    'Auth Service': 'FASE 1 (Semanas 3-5): Primer microservicio a desarrollar, base para todo el sistema.',
    'User Service': 'FASE 1 (Semanas 3-6): Desarrollo en paralelo con Auth Service.',
    'Content Service': 'FASE 1 (Semanas 5-8): Desarrollo después de Auth/User, core del MVP.',
    'Gamification Service': 'FASE 2 (Semanas 9-12): Feature post-MVP para aumentar engagement.',
    'Analytics Service': 'FASE 2 (Semanas 10-14): Implementación gradual, mejoras continuas.',
    'Notification Service': 'FASE 2 (Semanas 11-13): Post-MVP, integración con mobile push.',
    'Payment Service': 'FASE 3 (Semanas 15-18): Monetización, requiere testing exhaustivo.',
    'Media Service': 'FASE 1-2 (Semanas 6-12): Integración temprana para content delivery.',
    'Containerization': 'FASE 0 (Semana 1): Setup desde día 1 con Docker para todos los servicios.',
    'Orchestration': 'FASE 4 (Semanas 19-20): Migración a K8s después de validar MVP en instancias simples.',
    'Message Queue': 'FASE 2 (Semanas 10-11): Implementación cuando tengamos múltiples microservicios comunicándose.',
    'Cache': 'FASE 2 (Semana 12): Optimización post-MVP cuando tengamos datos de performance.',
    'CDN': 'FASE 1 (Semana 6): Setup temprano para media delivery desde inicio.',
    'Monitoring': 'FASE 0 (Semana 2): Setup básico desde inicio, dashboards avanzados gradualmente.',
    'Logging': 'FASE 2 (Semana 13): Centralización después de tener múltiples servicios en prod.',
    'CI/CD': 'FASE 0 (Semana 2): Pipeline básico desde inicio, mejoras continuas.',
  };
  return timelines[comp.name] || 'Implementación según roadmap del proyecto y prioridades del negocio.';
}
