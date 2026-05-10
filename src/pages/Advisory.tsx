import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  TrendingUp,
  Calendar,
  LineChart,
  ClipboardList,
  MessageSquare,
  Settings,
  RefreshCw,
  UsersRound,
  Gauge,
  Brain,
  ChartNoAxesCombined,
  Scale,
  Workflow,
  MapPin,
  Phone,
  Mail,
  Compass,
} from "lucide-react";

const AdvisoryPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = ["/webinar-2.jpg", "/webinar-3.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Advisory Service Areas
  const advisoryServices = [
    {
      icon: RefreshCw,
      title: "Circular Strategy Development",
      desc: "Comprehensive circular economy roadmap tailored to your organization's unique needs and goals.",
      deliverables: "Strategic plan, KPIs, implementation timeline",
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Impact Measurement & Reporting",
      desc: "Quantify your environmental and social impact with robust metrics and reporting frameworks.",
      deliverables: "ESG reports, carbon footprint analysis, impact dashboards",
      color: "from-[#e1ac00] to-[#e1ac00]",
    },
    {
      icon: Brain,
      title: "Circular Design Thinking",
      desc: "Workshops and training to embed circular principles into your product and service design process.",
      deliverables: "Design sprints, prototype validation, circular criteria",
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      icon: Scale,
      title: "Policy & Regulatory Advisory",
      desc: "Navigate complex sustainability regulations and identify opportunities for compliance and leadership.",
      deliverables: "Regulatory audits, compliance roadmaps, policy briefs",
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      icon: Workflow,
      title: "Supply Chain Circularity",
      desc: "Transform your supply chain with circular sourcing, reverse logistics, and waste reduction strategies.",
      deliverables: "Supply chain audit, circular sourcing guidelines",
      color: "from-[#e1ac00] to-[#e1ac00]",
    },
    {
      icon: UsersRound,
      title: "Stakeholder Engagement",
      desc: "Build alliances and partnerships that amplify your circular economy impact and reach.",
      deliverables:
        "Partner mapping, engagement strategy, collaboration frameworks",
      color: "from-[#3d7118] to-[#e1ac00]",
    },
  ];

  // Why Choose CIH Advisory
  const whyChooseUs = [
    {
      icon: Award,
      title: "5+ Years Experience",
      desc: "Decade of circular economy expertise across Africa",
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      icon: Users,
      title: "50+ Clients Served",
      desc: "Trusted by leading organizations across sectors",
      color: "from-[#e1ac00] to-[#e1ac00]",
    },
    {
      icon: Globe,
      title: "Pan-African Network",
      desc: "Deep connections across the continent",
      color: "from-[#3d7118] to-[#3d7118]",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      desc: "Average 40% cost reduction for clients",
      color: "from-[#3d7118] to-[#3d7118]",
    },
  ];
  // Contact Locations
  const locations = [
    {
      city: "Wilmington, USA",
      address: "1209 Orange St., Wilmington, DE 19801",
      phone: "+1 (302) 123-4567",
      email: "usa@circularhub.africa",
      flag: "🇺🇸",
    },
    {
      city: "Nairobi, Kenya",
      address: "233, Owashika Road, Lavington, Nairobi",
      phone: "+254 712 746922",
      email: "africa@circularhub.africa",
      flag: "🇰🇪",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION - Advisory */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-28 lg:pt-32">
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
                className="w-full h-full object-cover scale-105 animate-slow-zoom"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              {/* Minimal Label */}
              <div className="flex items-center gap-4 mb-8 animate-fade-in">
                <div className="w-12 h-[2px] bg-[#e1ac00]"></div>
                <span className="text-sm tracking-[0.3em] uppercase text-[#e1ac00] font-bold">
                  Advisory
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
                Expert Advisory for a
                <span className="bg-gradient-to-r from-[#3d7118] via-green-400 to-[#e1ac00] bg-clip-text text-transparent block mt-2">
                  Circular Future
                </span>
              </h1>
              <p className="text-gray-100 text-lg md:text-2xl leading-relaxed mb-10 max-w-2xl font-medium drop-shadow-sm">
                We offer{" "}
                <span className="text-[#e1ac00] font-bold">
                  transformation strategy
                </span>
                , sustainability roadmaps, and impact measurement tailored to
                your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] text-white px-10 py-4 rounded-full font-bold shadow-2xl shadow-green-900/30 transition-all duration-300 hover:scale-[1.05] flex items-center justify-center gap-3 btn-shine">
                  <span className="relative z-10">Start a Conversation</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative animate-slide-in-right hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-[40px] border border-white/20 shadow-2xl p-8 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3d7118]/20 to-[#e1ac00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/10 hover:bg-white/20 transition-all">
                    <div className="text-4xl font-extrabold text-[#e1ac00] mb-2">
                      50+
                    </div>
                    <p className="text-sm text-gray-200 font-medium">
                      Clients Served
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/10 hover:bg-white/20 transition-all">
                    <div className="text-4xl font-extrabold text-white mb-2">
                      40%
                    </div>
                    <p className="text-sm text-gray-200 font-medium">
                      Avg. Cost Reduction
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/10 hover:bg-white/20 transition-all">
                    <div className="text-4xl font-extrabold text-[#e1ac00] mb-2">
                      15+
                    </div>
                    <p className="text-sm text-gray-200 font-medium">
                      African Countries
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[#3d7118] to-[#e1ac00] rounded-3xl p-6 text-center text-white shadow-xl hover:scale-105 transition-all">
                    <div className="text-3xl font-extrabold mb-1">100%</div>
                    <p className="text-sm opacity-90 font-medium uppercase tracking-wider">
                      Satisfaction
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

      {/* ADVISORY SERVICES AREAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advisory Services with a{" "}
              <span className="gradient-text">Circularity Focus</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Comprehensive advisory solutions tailored to accelerate your
              circular economy journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryServices.map((service, idx) => (
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
                  <div className="flex items-center gap-2 text-[#3d7118] text-xs font-medium bg-green-50 px-3 py-2 rounded-full inline-flex">
                    <ClipboardList className="h-3 w-3" />
                    <span>{service.deliverables}</span>
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
              Why Choose <span className="gradient-text">CIH Advisory</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Deep expertise, proven methodology, and a commitment to your
              success
            </p>
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

      {/* OUR APPROACH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="gradient-text">Advisory Approach</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#3d7118] to-[#e1ac00] rounded-full mb-6"></div>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Assessment",
                    desc: "Deep dive into your current operations, challenges, and sustainability goals.",
                    icon: ClipboardList,
                  },
                  {
                    step: "02",
                    title: "Strategy Development",
                    desc: "Tailored circular economy roadmap with clear KPIs and implementation timeline.",
                    icon: LineChart,
                  },
                  {
                    step: "03",
                    title: "Implementation Support",
                    desc: "Hands-on guidance to execute your strategy effectively.",
                    icon: Settings,
                  },
                  {
                    step: "04",
                    title: "Measurement & Optimization",
                    desc: "Continuous tracking and refinement for maximum impact.",
                    icon: Gauge,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3d7118] to-[#e1ac00] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-gradient-to-br from-[#3d7118] to-[#3d7118] rounded-3xl p-8 shadow-2xl">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <MessageSquare className="h-10 w-10 text-[#e1ac00]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Let's Talk</h3>
                  <p className="text-green-200 mb-6">
                    Schedule a free discovery call with our advisory team
                  </p>
                  <button className="bg-white text-[#3d7118] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2">
                    Book a Consultation
                    <Calendar className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Locations</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Serving clients across the globe with offices in the USA and
              Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{location.flag}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {location.city}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-[#e1ac00]" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="h-5 w-5 text-[#e1ac00]" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="h-5 w-5 text-[#e1ac00]" />
                    <span>{location.email}</span>
                  </div>
                </div>
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
              <Compass className="h-16 w-16 text-[#e1ac00] mx-auto mb-6 animate-bounce-slow" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Organization?
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how CIH Advisory can help you achieve your
                circular economy goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contactUs"
                  className="bg-white text-[#3d7118] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 btn-shine"
                >
                  Schedule a Consultation
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

export default AdvisoryPage;
