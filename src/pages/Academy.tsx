import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  Download,
  GraduationCap,
  Laptop,
  Layers3,
  Leaf,
  LineChart,
  MonitorSmartphone,
  Rocket,
  Users,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

interface CurriculumModule {
  title: string;
  details: string;
  topics: string[];
}

interface Course {
  id: string;
  title: string;
  kicker: string;
  icon: LucideIcon;
  startDate: string;
  duration: string;
  mode: string;
  schedule: string;
  tuition: string;
  summary: string;
  outcomes: string[];
  modules: CurriculumModule[];
  brochureUrl: string;
}

interface ApplicationOption {
  id: string;
  title: string;
  kicker: string;
  icon: LucideIcon;
  startDate: string;
  duration: string;
  mode: string;
  schedule: string;
  tuition: string;
  summary: string;
  brochureUrl: string;
}

const cohort = {
  code: "ECE-CIH01",
  name: "Entrepreneurship of Circular Economy",
  facilitator:
    "Computers for Schools Kenya Institute of ICT (CFSK Institute of ICT)",
};

const courses: Course[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    kicker: "Build responsive websites and web apps",
    icon: Code2,
    startDate: "May 2026 intake",
    duration: "10 days intensive",
    mode: "Hybrid: in-person and guided online practice",
    schedule: "Morning sessions | 9:00 AM - 1:00 PM",
    tuition: "Contact admissions",
    summary:
      "A practical frontend course for beginners, secondary school graduates, founders, and early-career builders who want to create polished web experiences using modern tools.",
    outcomes: [
      "Build responsive pages with HTML, CSS, JavaScript, and React",
      "Use GitHub workflows for collaboration and deployment",
      "Create a portfolio-ready capstone project",
      "Understand how frontend skills support green and circular ventures",
    ],
    brochureUrl: "/ECE-COHORT01-BROCHURE.pdf",
    modules: [
      {
        title: "Module 1: Web Foundations",
        details:
          "Set up your developer environment and learn the structure of modern websites.",
        topics: [
          "HTML semantics",
          "CSS layout",
          "Responsive design",
          "Git and GitHub basics",
        ],
      },
      {
        title: "Module 2: JavaScript Essentials",
        details:
          "Move from static pages to interactive interfaces with practical JavaScript.",
        topics: [
          "DOM manipulation",
          "Events",
          "Reusable functions",
          "Data rendering",
        ],
      },
      {
        title: "Module 3: React Interfaces",
        details:
          "Build component-driven user interfaces using the React ecosystem.",
        topics: [
          "Components and props",
          "State",
          "Routing",
          "Forms and validation",
        ],
      },
      {
        title: "Module 4: Capstone and Deployment",
        details:
          "Package your learning into a working project that can be shared publicly.",
        topics: [
          "Project planning",
          "UI refinement",
          "Deployment",
          "Portfolio review",
        ],
      },
    ],
  },
  {
    id: "business",
    title: "Business Development",
    kicker: "Grow circular ventures with sharper strategy",
    icon: BriefcaseBusiness,
    startDate: "May 2026 intake",
    duration: "Foundational and advanced track",
    mode: "Hybrid: workshops, coaching, and applied venture work",
    schedule: "Morning sessions | 9:00 AM - 1:00 PM",
    tuition: "Contact admissions",
    summary:
      "A focused circular business development course for early-stage entrepreneurs, secondary school graduates, and professionals building sustainable products, services, and ventures.",
    outcomes: [
      "Understand circular economy principles and local Kenyan case studies",
      "Map stakeholders, product lifecycles, and venture opportunities",
      "Design value propositions, circular business models, and revenue streams",
      "Prepare financial forecasts, impact metrics, and investor-ready pitches",
    ],
    brochureUrl: "/ECE-COHORT01-BROCHURE.pdf",
    modules: [
      {
        title: "Module 1: Circular Journey Mapping",
        details:
          "Understand circular economy principles and identify the lifecycle stages of a sector-specific product or business.",
        topics: [
          "Circular economy principles",
          "Lifecycle mapping",
          "Sector-specific product journeys",
          "Kenyan circular economy case studies",
        ],
      },
      {
        title: "Module 2: Stakeholder Engagement",
        details:
          "Identify key stakeholders in sector-specific value chains and develop empathy for their needs.",
        topics: [
          "Stakeholder mapping",
          "Value-chain roles",
          "Empathy building",
          "Stakeholder interaction role-play",
        ],
      },
      {
        title: "Module 3: Business Modeling",
        details:
          "Adapt the Business Model Canvas for circular ventures and clarify resources, partners, channels, and revenue streams.",
        topics: [
          "Business Model Canvas",
          "Key resources and partners",
          "Revenue streams",
          "Circular venture design",
        ],
      },
      {
        title: "Module 4: Value Proposition and Pitching",
        details:
          "Craft a clear value proposition for circular products and practice presenting a concise venture pitch.",
        topics: [
          "Value Proposition Canvas",
          "Customer segments",
          "2-minute pitch development",
          "Peer pitch feedback",
        ],
      },
      {
        title: "Module 5: Financial Modeling",
        details:
          "Understand cost structures, revenue models, break-even analysis, and funding options for circular ventures.",
        topics: [
          "Cost structure",
          "B2B, B2C, and subscription models",
          "Break-even analysis",
          "Financial forecasting and budgeting",
        ],
      },
      {
        title: "Module 6: Advanced Circular Design",
        details:
          "Apply circular design tools to product development and explore supply chain innovation.",
        topics: [
          "Circular design principles",
          "Circular Design Toolkit",
          "Supply chain mapping",
          "Risk and opportunity assessment",
        ],
      },
      {
        title: "Module 7: Scaling, Branding, and Impact",
        details:
          "Develop strategies for scaling circular ventures while building a sustainability-led brand and impact story.",
        topics: [
          "Scaling strategies",
          "Partnerships and digital platforms",
          "Brand storytelling",
          "Social and environmental impact measurement",
        ],
      },
      {
        title: "Module 8: Investor Readiness and Follow-up",
        details:
          "Prepare for funders, impact investors, and personalized follow-up support after the course.",
        topics: [
          "Investor pitch decks",
          "Investor personas",
          "Triple Bottom Line reporting",
          "Weekly check-ins and mentorship",
        ],
      },
    ],
  },
];

const applicationOptions: ApplicationOption[] = [
  {
    id: "frontend",
    title: courses[0].title,
    kicker: courses[0].kicker,
    icon: courses[0].icon,
    startDate: courses[0].startDate,
    duration: courses[0].duration,
    mode: courses[0].mode,
    schedule: courses[0].schedule,
    tuition: courses[0].tuition,
    summary: courses[0].summary,
    brochureUrl: courses[0].brochureUrl,
  },
  {
    id: "business",
    title: courses[1].title,
    kicker: courses[1].kicker,
    icon: courses[1].icon,
    startDate: courses[1].startDate,
    duration: courses[1].duration,
    mode: courses[1].mode,
    schedule: courses[1].schedule,
    tuition: courses[1].tuition,
    summary: courses[1].summary,
    brochureUrl: courses[1].brochureUrl,
  },
  {
    id: "combined",
    title: "Frontend + Business Development",
    kicker: "Full-day technical and venture-building track",
    icon: Layers3,
    startDate: "May 2026 intake",
    duration: "Combined full-day track",
    mode: "Hybrid: frontend development, business workshops, and applied venture work",
    schedule: "Frontend: 9:00 AM - 1:00 PM | Business: 2:00 PM - 6:00 PM",
    tuition: "Contact admissions",
    summary:
      "A combined pathway for learners who want to build digital products in the morning and sharpen the business model, financials, and circular venture strategy in the afternoon.",
    brochureUrl: "/ECE-COHORT01-BROCHURE.pdf",
  },
];

const highlights = [
  { label: "Cohort 1: ECE-CIH01", icon: Layers3 },
  { label: "2 practical courses", icon: Clock3 },
  { label: "Hybrid learning", icon: MonitorSmartphone },
  { label: "Facilitated by CFSK Institute of ICT", icon: GraduationCap },
];

const getCourseDetails = (course: ApplicationOption) => [
  { label: "Start date", value: course.startDate, icon: Calendar },
  { label: "Duration", value: course.duration, icon: Clock3 },
  { label: "Mode", value: course.mode, icon: Users },
  { label: "Schedule", value: course.schedule, icon: Laptop },
  { label: "Tuition", value: course.tuition, icon: WalletCards },
];

const CourseCard = ({
  course,
  className = "",
}: {
  course: ApplicationOption;
  className?: string;
}) => (
  <article
    className={`overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl shadow-green-100/40 ${className}`}
  >
    <div className="h-2 bg-gradient-to-r from-[#3d7118] to-[#e1ac00]"></div>
    <div className="p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#3d7118]">
            {course.kicker}
          </p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-950">
            {course.title}
          </h3>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#3d7118] to-[#e1ac00] text-white">
          <course.icon className="h-7 w-7" />
        </div>
      </div>

      <p className="mt-5 text-gray-600 leading-relaxed">{course.summary}</p>

      <div className="mt-6 divide-y divide-gray-100 border-y border-gray-100">
        {getCourseDetails(course).map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="grid grid-cols-[120px_1fr] gap-4 py-3 text-sm"
          >
            <div className="flex items-center gap-2 text-gray-500">
              <Icon className="h-4 w-4 text-[#e1ac00]" />
              <span>{label}</span>
            </div>
            <p className="font-semibold text-gray-800">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          to={`/apply?course=${course.id}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#3d7118] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315d13]"
        >
          Apply Now
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={course.brochureUrl}
          download="ECE-COHORT01-BROCHURE.pdf"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#e1ac00] px-5 py-3 text-sm font-semibold text-[#3d7118] transition hover:bg-yellow-50"
        >
          <Download className="h-4 w-4" />
          Brochure
        </a>
      </div>
    </div>
  </article>
);

const AcademyPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = ["/space-5.jpg", "/webinar-5.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    "frontend-0": true,
    "business-0": true,
  });

  const toggleModule = (key: string) => {
    setOpenModules((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION - Academy */}
      <section className="relative min-h-[108vh] flex items-center overflow-hidden pt-28 lg:pt-14">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Background ${idx + 1}`}
                className="w-full h-full object-cover object-[50%_70%] scale-105 animate-slow-zoom"
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "low"}
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Top badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e1ac00]/60 bg-black/30 backdrop-blur-md px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#e1ac00]">
              Cohort 1 &nbsp;·&nbsp; {cohort.code}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white mb-6">
            {cohort.name}
            <span className="block bg-gradient-to-r from-[#3d7118] via-green-400 to-[#e1ac00] bg-clip-text text-transparent">
              Academy
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-center text-gray-200 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            A CIH program facilitated by{" "}
            <span className="text-white font-semibold">
              CFSK Institute of ICT
            </span>{" "}
            — choose Frontend Development, Business Development, or both.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/apply"
              className="group relative overflow-hidden bg-gradient-to-r from-[#3d7118] to-[#e1ac00] text-white px-9 py-4 rounded-full font-bold shadow-2xl shadow-green-900/40 transition-all duration-300 hover:scale-[1.05] flex items-center gap-3 btn-shine"
            >
              <span className="relative z-10">Apply for Intake</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#courses"
              className="border border-white/30 text-white backdrop-blur-md px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center gap-2"
            >
              Explore Courses
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>

          {/* Highlights strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 px-6 py-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#3d7118] to-[#e1ac00] text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-200 text-center leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-[-1px] left-0 w-full z-10 leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto block"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,229.3C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <section id="courses" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-250">
              <span className="gradient-text">Courses</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Apply for Frontend Development, Business Development, or the
              combined full-day track. Independent courses run in the morning;
              the combined option adds Business Development in the afternoon.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {applicationOptions.slice(0, 2).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-6">
            <CourseCard
              course={applicationOptions[2]}
              className="lg:max-w-4xl lg:mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="max-w-2xl text-3xl md:text-5xl font-bold tracking-tight text-gray-950">
                Fast-track your ability to build and grow
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Code2,
                    title: "Technical confidence",
                    text: "Go from web basics to usable React interfaces.",
                  },
                  {
                    icon: BarChart3,
                    title: "Business clarity",
                    text: "Turn ideas into models customers and funders can understand.",
                  },
                  {
                    icon: Leaf,
                    title: "Circular lens",
                    text: "Apply sustainability thinking without losing commercial discipline.",
                  },
                  {
                    icon: Rocket,
                    title: "Portfolio output",
                    text: "Finish with a project, pitch, or roadmap you can share.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg bg-white p-5 shadow-sm border border-gray-100"
                  >
                    <item.icon className="mb-3 h-6 w-6 text-[#3d7118]" />
                    <h3 className="font-bold text-gray-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pt-3">
              <p className="text-lg leading-relaxed text-gray-600">
                The academy is built for practical momentum. Frontend learners
                build interfaces and ship a project. Business development
                learners sharpen models, numbers, impact stories, and pitches.
              </p>
              <div className="mt-8 rounded-lg border border-green-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#3d7118]">
                  Cohort details
                </p>
                <div className="mt-4 space-y-4 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold text-gray-950">Cohort:</span>{" "}
                    {cohort.code} - {cohort.name}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-950">
                      Facilitator:
                    </span>{" "}
                    {cohort.facilitator}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-950">
                      Course pairing:
                    </span>{" "}
                    Take Frontend Development, Business Development, or both.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-white via-green-50/50 to-yellow-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-950">
              Curriculum <span className="gradient-text">overview</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Simple modules, practical exercises, and clear outcomes for each
              course.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <div key={course.id}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#3d7118] text-white">
                    <course.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950">
                    {course.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {course.modules.map((module, index) => {
                    const key = `${course.id}-${index}`;
                    const isOpen = Boolean(openModules[key]);

                    return (
                      <div
                        key={module.title}
                        className="overflow-hidden rounded-lg bg-white shadow-lg shadow-gray-200/70 border border-white"
                      >
                        <button
                          type="button"
                          onClick={() => toggleModule(key)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                        >
                          <span className="font-bold text-gray-950">
                            {module.title}
                          </span>
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#10220a] text-white">
                            <ChevronDown
                              className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                            />
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5">
                            <p className="mb-4 text-sm leading-relaxed text-gray-600">
                              {module.details}
                            </p>
                            <div className="grid gap-2">
                              {module.topics.map((topic) => (
                                <div
                                  key={topic}
                                  className="flex items-start gap-2 text-sm text-gray-700"
                                >
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3d7118]" />
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00]"></div>
            <div className="relative py-20 px-8 text-center">
              <LineChart className="mx-auto mb-5 h-14 w-14 text-yellow-100" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Ready to join the next intake?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-green-50">
                Tell us which course you want, your current experience level,
                and whether you are applying as an individual, founder, or team.
              </p>
              <Link
                to="/apply"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 font-bold text-[#3d7118] shadow-xl transition hover:-translate-y-1"
              >
                Start your application
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;
