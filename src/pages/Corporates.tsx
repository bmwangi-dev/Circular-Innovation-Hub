import {
    ArrowRight,
    Recycle,
    Users,
    Building,
    ChevronRight,
    Award,
    Globe,
    TrendingUp,
    BarChart3,
    CheckCircle,
    Calendar,
    Factory,
    Shield,
    DollarSign,
    Settings,
    RefreshCw,
    UsersRound,
    Presentation,
    LeafyGreen
} from 'lucide-react';

const CorporatesPage = () => {

    // Service Offerings
    const serviceOfferings = [
        {
            icon: Settings,
            title: "Sustainability Toolkit",
            desc: "Comprehensive framework to help your organization transition towards circular economy practices.",
            metrics: "Reduce carbon footprint by up to 40%",
            color: "from-[#2D6A4F] to-[#52B788]"
        },
        {
            icon: RefreshCw,
            title: "Circular Strategy Consulting",
            desc: "Expert guidance on redesigning business models for circularity and resource efficiency.",
            metrics: "Save $500K+ annually",
            color: "from-[#F4A261] to-[#E76F51]"
        },
        {
            icon: UsersRound,
            title: "Employee Training Programs",
            desc: "Workshops and certification programs to upskill your workforce on sustainability.",
            metrics: "500+ professionals trained",
            color: "from-[#2D6A4F] to-[#40916C]"
        },
        {
            icon: Presentation,
            title: "Impact Reporting",
            desc: "Measurable ESG metrics and sustainability reporting aligned with global standards.",
            metrics: "GRI & SASB compliant",
            color: "from-[#52B788] to-[#74C69D]"
        }
    ];

    // Partnership Benefits
    const partnershipBenefits = [
        { icon: TrendingUp, title: "Cost Savings", desc: "Reduce operational costs through circular practices", color: "from-[#2D6A4F] to-[#52B788]" },
        { icon: Shield, title: "Risk Mitigation", desc: "Future-proof against regulatory changes", color: "from-[#F4A261] to-[#E76F51]" },
        { icon: Users, title: "Talent Attraction", desc: "Attract top talent who value sustainability", color: "from-[#2D6A4F] to-[#40916C]" },
        { icon: Award, title: "Brand Enhancement", desc: "Strengthen your brand as a sustainability leader", color: "from-[#52B788] to-[#74C69D]" },
        { icon: Globe, title: "Market Access", desc: "Access new circular economy markets", color: "from-[#E76F51] to-[#F4A261]" },
        { icon: BarChart3, title: "Measurable Impact", desc: "Track and report your sustainability metrics", color: "from-[#2D6A4F] to-[#F4A261]" },
    ];

    // Corporate Partners
    const corporatePartners = [
        { name: "EcoBank Group", industry: "Financial Services", partnership: "Green Finance Initiative", image: "🏦", color: "from-[#2D6A4F] to-[#52B788]" },
        { name: "AfriPlast", industry: "Manufacturing", partnership: "Plastic Circularity Program", image: "🏭", color: "from-[#F4A261] to-[#E76F51]" },
        { name: "SolarNow", industry: "Energy", partnership: "Solar Panel Recycling", image: "☀️", color: "from-[#2D6A4F] to-[#40916C]" },
        { name: "GreenLogistics", industry: "Supply Chain", partnership: "Low-Emission Fleet", image: "🚚", color: "from-[#52B788] to-[#74C69D]" },
    ];

    // Case Studies
    const caseStudies = [
        {
            title: "Leading Bank Reduces Waste by 65%",
            company: "EcoBank Group",
            result: "$2M annual savings",
            impact: "Diverted 500 tons from landfill",
            color: "from-[#2D6A4F] to-[#52B788]"
        },
        {
            title: "Manufacturer Achieves Zero Waste",
            company: "AfriPlast Industries",
            result: "ISO 14001 Certified",
            impact: "100% recycling rate achieved",
            color: "from-[#F4A261] to-[#E76F51]"
        }
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">




            {/* HERO SECTION - Corporates */}
            <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-emerald-50/30 to-orange-50/30 overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#52B788] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F4A261] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
                    <Building className="absolute top-20 right-[15%] text-[#2D6A4F] opacity-20 w-32 h-32 animate-float" />
                    <Factory className="absolute bottom-20 left-[10%] text-[#F4A261] opacity-25 w-28 h-28 animate-float-delayed" />
                    <div className="absolute top-1/3 left-[5%] w-64 h-64 bg-[#74C69D] rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                                Transform Your Business with
                                <span className="gradient-text block">Circular Excellence</span>
                            </h1>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                                Partner with CIH to accelerate your sustainability journey, reduce operational costs, and position your brand as a leader in the circular economy.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-[#2D6A4F] to-[#F4A261] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 btn-shine">
                                    Become a Partner
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <div className="relative animate-slide-in-right">
                            <div className="bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-6 overflow-hidden">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
                                        <div className="text-3xl font-bold gradient-text">40%</div>
                                        <p className="text-xs text-gray-500 mt-1">Average Cost Reduction</p>
                                    </div>
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
                                        <div className="text-3xl font-bold gradient-text">65%</div>
                                        <p className="text-xs text-gray-500 mt-1">Waste Diversion Rate</p>
                                    </div>
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
                                        <div className="text-3xl font-bold gradient-text">30K+</div>
                                        <p className="text-xs text-gray-500 mt-1">Tons CO₂ Saved</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#2D6A4F] to-[#F4A261] rounded-2xl p-4 text-center text-white">
                                        <div className="text-2xl font-bold">Join 50+</div>
                                        <p className="text-xs opacity-90 mt-1">Corporate Partners</p>
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

            {/* WHAT WE OFFER CORPORATES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What We Offer <span className="gradient-text">Corporates</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Comprehensive circular economy solutions tailored to your organization's needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceOfferings.map((service, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift transition-all cursor-pointer">
                                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                                <div className="p-6">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                                    <div className="flex items-center gap-2 text-[#2D6A4F] text-sm font-medium">
                                        <CheckCircle className="h-4 w-4" />
                                        <span>{service.metrics}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERSHIP BENEFITS */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Partnership <span className="gradient-text">Benefits</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Unlock tangible value for your organization while contributing to a sustainable future
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {partnershipBenefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                    <benefit.icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                    <p className="text-sm text-gray-500">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Corporate <span className="gradient-text">Case Studies</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Real results from real partnerships
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {caseStudies.map((study, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover-lift transition-all cursor-pointer">
                                <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center mb-5`}>
                                    <Award className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                                <p className="text-[#F4A261] font-medium mb-4">{study.company}</p>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        <DollarSign className="h-5 w-5 text-[#2D6A4F]" />
                                        <span className="text-gray-700 font-medium">{study.result}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Recycle className="h-5 w-5 text-[#2D6A4F]" />
                                        <span className="text-gray-700 font-medium">{study.impact}</span>
                                    </div>
                                </div>
                                <button className="text-[#2D6A4F] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read full case study
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR CORPORATE PARTNERS */}
            <section className="py-24 bg-gradient-to-br from-gray-900 to-[#1B4332] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                    <Building className="absolute bottom-10 right-10 w-32 h-32 text-white opacity-10 animate-spin-slow" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                            <Users className="h-4 w-4 text-[#FFB703]" />
                            <span className="text-xs font-semibold text-orange-100 uppercase tracking-wide">Our Network</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Corporate <span className="text-[#F4A261]">Partners</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#FFB703] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-emerald-100 mt-6 max-w-2xl mx-auto">
                            Join leading organizations already transforming their business with CIH
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {corporatePartners.map((partner, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift text-center">
                                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center mb-4`}>
                                    <span className="text-4xl">{partner.image}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{partner.name}</h3>
                                <p className="text-emerald-200 text-sm mb-2">{partner.industry}</p>
                                <p className="text-orange-200 text-xs">{partner.partnership}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SUSTAINABILITY METRICS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Track Your <span className="gradient-text">Sustainability</span> Progress
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-[#2D6A4F] to-[#F4A261] rounded-full mb-6"></div>
                            <p className="text-gray-600 mb-6">
                                Our comprehensive reporting tools help you measure, track, and communicate your circular economy impact with confidence.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { metric: "ESG Score Improvement", value: "35%", icon: TrendingUp },
                                    { metric: "Waste Reduction", value: "65%", icon: Recycle },
                                    { metric: "Cost Savings", value: "40%", icon: DollarSign },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <item.icon className="h-5 w-5 text-[#2D6A4F]" />
                                            <span className="text-gray-700">{item.metric}</span>
                                        </div>
                                        <span className="text-2xl font-bold gradient-text">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative animate-slide-in-right">
                            <div className="bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] rounded-3xl p-8 shadow-2xl">
                                <div className="text-center text-white">
                                    <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                                        <LeafyGreen className="h-10 w-10 text-[#F4A261]" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                                    <p className="text-emerald-200 mb-6">Schedule a consultation with our sustainability experts</p>
                                    <button className="bg-white text-[#2D6A4F] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2">
                                        Book a Call
                                        <Calendar className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI SECTION */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Your <span className="gradient-text">Return on Investment</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="text-5xl font-bold gradient-text mb-2">3-6x</div>
                            <p className="text-gray-600">Average ROI within 24 months</p>
                        </div>
                        <div className="text-center p-6 border-x border-gray-200">
                            <div className="text-5xl font-bold gradient-text mb-2">12-18</div>
                            <p className="text-gray-600">Months to breakeven</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-5xl font-bold gradient-text mb-2">25%</div>
                            <p className="text-gray-600">Average energy cost reduction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#F4A261]"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Building className="h-16 w-16 text-[#FFB703] mx-auto mb-6 animate-bounce-slow" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join the growing network of forward-thinking corporations embracing circular economy principles.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-[#2D6A4F] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 btn-shine">
                            Schedule a Consultation
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default CorporatesPage;