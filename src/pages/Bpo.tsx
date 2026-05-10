import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Headphones,
  MessageSquare,
  FileText,
  Clock,
  Shield,
  Database,
  CreditCard,
  Truck,
  FileCheck,
  CheckCircle,
  Globe,
  Rocket,
  Briefcase,
  Building,
  Heart,
  Cpu,
  GraduationCap,
} from "lucide-react";

const BPOPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [
    "/training-1.webp",
    "/training-2.webp",
    "/training-3.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // BPO Services
  const bpoServices = [
    {
      icon: Headphones,
      title: "Customer Support",
      desc: "24/7 multilingual customer service solutions tailored to your brand's voice and values.",
      features: [
        "Omnichannel support",
        "Technical support",
        "Help desk management",
      ],
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      icon: Database,
      title: "Data Management",
      desc: "Secure and efficient data entry, processing, and analytics services.",
      features: [
        "Data entry & processing",
        "Document digitization",
        "Data quality assurance",
      ],
      color: "from-[#e1ac00] to-[#e1ac00]",
    },
    {
      icon: FileCheck,
      title: "Document Processing",
      desc: "Streamlined document management and processing solutions.",
      features: [
        "Invoice processing",
        "Form processing",
        "Document verification",
      ],
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      icon: Users,
      title: "HR Outsourcing",
      desc: "Complete human resources management and recruitment support.",
      features: [
        "Payroll processing",
        "Recruitment support",
        "Employee onboarding",
      ],
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      icon: TrendingUp,
      title: "Finance & Accounting",
      desc: "Professional financial management and accounting services.",
      features: [
        "Bookkeeping",
        "Accounts payable/receivable",
        "Financial reporting",
      ],
      color: "from-[#e1ac00] to-[#e1ac00]",
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      desc: "Strategic social media management and content creation.",
      features: [
        "Content creation",
        "Community management",
        "Social listening",
      ],
      color: "from-[#3d7118] to-[#e1ac00]",
    },
  ];

  // Why Choose CIH BPO
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Data Security",
      desc: "ISO-certified security protocols",
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      desc: "Round-the-clock service delivery",
      color: "from-[#e1ac00] to-[#e1ac00]",
    },
    {
      icon: TrendingUp,
      title: "Cost Savings",
      desc: "Up to 60% reduction in costs",
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Multi-lingual support across time zones",
      color: "from-[#3d7118] to-[#3d7118]",
    },
  ];

  // Pricing Plans
  const pricingPlans = [
    {
      name: "Starter",
      price: "Custom",
      period: "/month",
      icon: Rocket,
      features: [
        "Up to 100 hours/month",
        "Email & chat support",
        "Basic reporting",
        "Standard SLA",
        "Dedicated agent",
      ],
      popular: false,
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      name: "Professional",
      price: "Custom",
      period: "/month",
      icon: Briefcase,
      features: [
        "Up to 500 hours/month",
        "Omnichannel support",
        "Advanced analytics",
        "Priority SLA",
        "Team of 3 agents",
        "Account manager",
      ],
      popular: true,
      color: "from-[#e1ac00] to-[#e1ac00]",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      icon: Building,
      features: [
        "Unlimited hours",
        "Dedicated team",
        "Custom integrations",
        "24/7 support",
        "Quarterly business reviews",
        "Custom reporting",
      ],
      popular: false,
      color: "from-[#3d7118] to-[#3d7118]",
    },
  ];

  // Industries Served
  const industries = [
    {
      name: "E-commerce",
      icon: ShoppingBag,
      color: "from-[#3d7118] to-[#3d7118]",
    },
    { name: "Fintech", icon: CreditCard, color: "from-[#e1ac00] to-[#e1ac00]" },
    { name: "Healthcare", icon: Heart, color: "from-[#3d7118] to-[#3d7118]" },
    { name: "Logistics", icon: Truck, color: "from-[#3d7118] to-[#3d7118]" },
    { name: "Technology", icon: Cpu, color: "from-[#e1ac00] to-[#e1ac00]" },
    {
      name: "Education",
      icon: GraduationCap,
      color: "from-[#3d7118] to-[#e1ac00]",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION - BPO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-28 lg:pt-32">
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
                className="w-full h-full object-cover object-[50%_60%] scale-105 animate-slow-zoom"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              {/* Minimal Label */}
              <div className="flex items-center gap-4 mb-8 animate-fade-in">
                <div className="w-12 h-[2px] bg-[#e1ac00]"></div>
                <span className="text-sm tracking-[0.3em] uppercase text-[#e1ac00] font-bold">
                  BPO Solutions
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
                Streamline Your Operations with
                <span className="bg-gradient-to-r from-[#3d7118] via-green-400 to-[#e1ac00] bg-clip-text text-transparent block mt-2">
                  CIH BPO
                </span>
              </h1>
              <p className="text-gray-100 text-lg md:text-2xl leading-relaxed mb-10 max-w-2xl font-medium drop-shadow-sm">
                Focus on what matters most while we handle your business
                processes with{" "}
                <span className="text-[#e1ac00] font-bold">precision</span>,
                efficiency, and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] text-white px-10 py-4 rounded-full font-bold shadow-2xl shadow-green-900/30 transition-all duration-300 hover:scale-[1.05] flex items-center justify-center gap-3 btn-shine">
                  <span className="relative z-10">Get a Free Consultation</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-[#e1ac00] backdrop-blur-md text-white px-10 py-4 rounded-full font-bold bg-[#e1ac00] hover:text-black transition-all duration-300 flex items-center justify-center gap-3">
                  View Services
                  <FileText className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="relative animate-slide-in-right hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-[40px] border border-white/20 shadow-2xl p-8 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3d7118]/20 to-[#e1ac00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/10 hover:bg-white/20 transition-all">
                    <div className="text-4xl font-extrabold text-[#e1ac00] mb-2">
                      60%
                    </div>
                    <p className="text-sm text-gray-200 font-medium">
                      Cost Savings
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/10 hover:bg-white/20 transition-all">
                    <div className="text-4xl font-extrabold text-white mb-2">
                      24/7
                    </div>
                    <p className="text-sm text-gray-200 font-medium">
                      Availability
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/10 hover:bg-white/20 transition-all">
                    <div className="text-4xl font-extrabold text-[#e1ac00] mb-2">
                      99.9%
                    </div>
                    <p className="text-sm text-gray-200 font-medium">
                      Accuracy Rate
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[#3d7118] to-[#e1ac00] rounded-3xl p-6 text-center text-white shadow-xl hover:scale-105 transition-all">
                    <div className="text-3xl font-bold mb-1">50+</div>
                    <p className="text-sm opacity-90 font-medium uppercase tracking-wider">
                      Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

      {/* BPO SERVICES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="gradient-text">BPO Solutions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Tailored outsourcing solutions to optimize your business
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bpoServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift transition-all cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">CIH BPO</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customizable <span className="gradient-text">Pricing Plans</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Solutions tailored to your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover-lift ${plan.popular ? "ring-2 ring-[#e1ac00]" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-[#e1ac00] to-[#e1ac00] text-white text-xs font-bold px-4 py-1 rounded-bl-2xl">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                <div className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 text-left mb-6">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-[#3d7118] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 btn-shine`}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-[#3d7118] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <Globe className="absolute bottom-10 right-10 w-32 h-32 text-white opacity-10 animate-spin-slow" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We <span className="text-[#e1ac00]">Serve</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#e1ac00] to-[#e1ac00] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 mx-auto bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-white text-sm font-medium">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00]"></div>
            <div className="relative py-20 px-8 text-center">
              <Headphones className="h-16 w-16 text-[#e1ac00] mx-auto mb-6 animate-bounce-slow" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how CIH BPO can help you reduce costs and improve
                efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contactUs"
                  className="bg-white text-[#3d7118] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 btn-shine"
                >
                  Get a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ShoppingBag icon component
const ShoppingBag = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

export default BPOPage;
