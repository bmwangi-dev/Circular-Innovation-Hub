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
    GraduationCap
} from 'lucide-react';

const BPOPage = () => {

    // BPO Services
    const bpoServices = [
        {
            icon: Headphones,
            title: "Customer Support",
            desc: "24/7 multilingual customer service solutions tailored to your brand's voice and values.",
            features: ["Omnichannel support", "Technical support", "Help desk management"],
            color: "from-[#2D6A4F] to-[#52B788]"
        },
        {
            icon: Database,
            title: "Data Management",
            desc: "Secure and efficient data entry, processing, and analytics services.",
            features: ["Data entry & processing", "Document digitization", "Data quality assurance"],
            color: "from-[#F4A261] to-[#E76F51]"
        },
        {
            icon: FileCheck,
            title: "Document Processing",
            desc: "Streamlined document management and processing solutions.",
            features: ["Invoice processing", "Form processing", "Document verification"],
            color: "from-[#2D6A4F] to-[#40916C]"
        },
        {
            icon: Users,
            title: "HR Outsourcing",
            desc: "Complete human resources management and recruitment support.",
            features: ["Payroll processing", "Recruitment support", "Employee onboarding"],
            color: "from-[#52B788] to-[#74C69D]"
        },
        {
            icon: TrendingUp,
            title: "Finance & Accounting",
            desc: "Professional financial management and accounting services.",
            features: ["Bookkeeping", "Accounts payable/receivable", "Financial reporting"],
            color: "from-[#E76F51] to-[#F4A261]"
        },
        {
            icon: MessageSquare,
            title: "Social Media Management",
            desc: "Strategic social media management and content creation.",
            features: ["Content creation", "Community management", "Social listening"],
            color: "from-[#2D6A4F] to-[#F4A261]"
        }
    ];

    // Why Choose CIH BPO
    const whyChooseUs = [
        { icon: Shield, title: "Data Security", desc: "ISO-certified security protocols", color: "from-[#2D6A4F] to-[#52B788]" },
        { icon: Clock, title: "24/7 Operations", desc: "Round-the-clock service delivery", color: "from-[#F4A261] to-[#E76F51]" },
        { icon: TrendingUp, title: "Cost Savings", desc: "Up to 60% reduction in costs", color: "from-[#2D6A4F] to-[#40916C]" },
        { icon: Globe, title: "Global Reach", desc: "Multi-lingual support across time zones", color: "from-[#52B788] to-[#74C69D]" },
    ];

    // Pricing Plans
    const pricingPlans = [
        {
            name: "Starter",
            price: "Custom",
            period: "/month",
            icon: Rocket,
            features: ["Up to 100 hours/month", "Email & chat support", "Basic reporting", "Standard SLA", "Dedicated agent"],
            popular: false,
            color: "from-[#2D6A4F] to-[#52B788]"
        },
        {
            name: "Professional",
            price: "Custom",
            period: "/month",
            icon: Briefcase,
            features: ["Up to 500 hours/month", "Omnichannel support", "Advanced analytics", "Priority SLA", "Team of 3 agents", "Account manager"],
            popular: true,
            color: "from-[#F4A261] to-[#E76F51]"
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "/month",
            icon: Building,
            features: ["Unlimited hours", "Dedicated team", "Custom integrations", "24/7 support", "Quarterly business reviews", "Custom reporting"],
            popular: false,
            color: "from-[#2D6A4F] to-[#40916C]"
        }
    ];

    // Industries Served
    const industries = [
        { name: "E-commerce", icon: ShoppingBag, color: "from-[#2D6A4F] to-[#52B788]" },
        { name: "Fintech", icon: CreditCard, color: "from-[#F4A261] to-[#E76F51]" },
        { name: "Healthcare", icon: Heart, color: "from-[#2D6A4F] to-[#40916C]" },
        { name: "Logistics", icon: Truck, color: "from-[#52B788] to-[#74C69D]" },
        { name: "Technology", icon: Cpu, color: "from-[#E76F51] to-[#F4A261]" },
        { name: "Education", icon: GraduationCap, color: "from-[#2D6A4F] to-[#F4A261]" },
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">




            {/* HERO SECTION - BPO */}
            <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-emerald-50/30 to-orange-50/30 overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#52B788] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F4A261] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
                    <Headphones className="absolute top-20 right-[15%] text-[#2D6A4F] opacity-20 w-32 h-32 animate-float" />
                    <Database className="absolute bottom-20 left-[10%] text-[#F4A261] opacity-25 w-28 h-28 animate-float-delayed" />
                    <div className="absolute top-1/3 left-[5%] w-64 h-64 bg-[#74C69D] rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                                Streamline Your Operations with
                                <span className="gradient-text block">CIH BPO Solutions</span>
                            </h1>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                                Focus on what matters most while we handle your business processes with precision, efficiency, and care.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-[#2D6A4F] to-[#F4A261] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 btn-shine">
                                    Get a Free Consultation
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                                <button className="border-2 border-[#2D6A4F] text-[#2D6A4F] px-8 py-3.5 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2">
                                    View Services
                                    <FileText className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <div className="relative animate-slide-in-right">
                            <div className="bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-6 overflow-hidden">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
                                        <div className="text-3xl font-bold gradient-text">60%</div>
                                        <p className="text-xs text-gray-500 mt-1">Cost Savings Average</p>
                                    </div>
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
                                        <div className="text-3xl font-bold gradient-text">24/7</div>
                                        <p className="text-xs text-gray-500 mt-1">Service Availability</p>
                                    </div>
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
                                        <div className="text-3xl font-bold gradient-text">99.9%</div>
                                        <p className="text-xs text-gray-500 mt-1">Accuracy Rate</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#2D6A4F] to-[#F4A261] rounded-2xl p-4 text-center text-white">
                                        <div className="text-2xl font-bold">50+</div>
                                        <p className="text-xs opacity-90 mt-1">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(45,106,79,0.06)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
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
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Tailored outsourcing solutions to optimize your business operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bpoServices.map((service, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift transition-all cursor-pointer">
                                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                                <div className="p-6">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, i) => (
                                            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
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
            <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose <span className="gradient-text">CIH BPO</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {whyChooseUs.map((item, idx) => (
                            <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
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
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Solutions tailored to your business needs and budget
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, idx) => (
                            <div key={idx} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover-lift ${plan.popular ? 'ring-2 ring-[#F4A261]' : ''}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-0">
                                        <div className="bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-white text-xs font-bold px-4 py-1 rounded-bl-2xl">
                                            MOST POPULAR
                                        </div>
                                    </div>
                                )}
                                <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                                <div className="p-6 text-center">
                                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-4`}>
                                        <plan.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                                        <span className="text-gray-500">{plan.period}</span>
                                    </div>
                                    <ul className="space-y-2 text-left mb-6">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-[#2D6A4F] shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 btn-shine`}>
                                        Get Quote
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDUSTRIES SERVED */}
            <section className="py-24 bg-gradient-to-br from-gray-900 to-[#1B4332] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                    <Globe className="absolute bottom-10 right-10 w-32 h-32 text-white opacity-10 animate-spin-slow" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Industries We <span className="text-[#F4A261]">Serve</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#FFB703] to-[#F4A261] rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((industry, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                                <div className={`w-12 h-12 mx-auto bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                    <industry.icon className="h-6 w-6 text-white" />
                                </div>
                                <p className="text-white text-sm font-medium">{industry.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#F4A261]"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Headphones className="h-16 w-16 text-[#FFB703] mx-auto mb-6 animate-bounce-slow" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Operations?
                    </h2>
                    <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss how CIH BPO can help you reduce costs and improve efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-[#2D6A4F] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 btn-shine">
                            Get a Free Consultation
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
};

// ShoppingBag icon component
const ShoppingBag = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

export default BPOPage;