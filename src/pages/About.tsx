import {
    ArrowRight,
    Leaf,
    Recycle,
    Users,
    Briefcase,
    Building,
    ChevronRight,
    Target,
    Rocket,
    Lightbulb,
    Handshake,
    Award,
    Globe,
    Shield,
    TrendingUp,
    CheckCircle,
    Eye,
    TreePine,
    Calendar,
} from 'lucide-react';

const AboutPage = () => {
    // Team Members Data
    const teamMembers = [
        { name: "Dr. Sarah Omondi", role: "Founder & CEO", bio: "Circular economy expert with 15+ years of experience in sustainable development across Africa.", image: "👩‍💼", color: "from-[#2D6A4F] to-[#52B788]" },
        { name: "James Mwangi", role: "Head of Programs", bio: "Former innovation lead at UNDP, passionate about empowering green entrepreneurs.", image: "👨‍💻", color: "from-[#F4A261] to-[#E76F51]" },
        { name: "Dr. Amina Diallo", role: "Research Director", bio: "PhD in Environmental Economics, leading our impact measurement and research initiatives.", image: "👩‍🔬", color: "from-[#2D6A4F] to-[#40916C]" },
        { name: "Michael Chen", role: "Partnerships Lead", bio: "Building strategic alliances with corporates and institutions across the continent.", image: "👨‍💼", color: "from-[#52B788] to-[#F4A261]" },
        { name: "Grace Njoroge", role: "Accelerator Manager", bio: "Experienced startup mentor helping circular economy ventures scale successfully.", image: "👩‍🏫", color: "from-[#E76F51] to-[#F4A261]" },
        { name: "David Okello", role: "Community Director", bio: "Building and nurturing our community of changemakers across Africa.", image: "👨‍🌾", color: "from-[#2D6A4F] to-[#74C69D]" },
    ];

    // Values Data
    const values = [
        { icon: Lightbulb, title: "Innovation", desc: "We believe in continuous improvement and strive to find new ways to solve problems.", color: "from-[#F4A261] to-[#E76F51]" },
        { icon: Shield, title: "Sustainability", desc: "We are committed to reducing our environmental impact and preserving natural resources for future generations.", color: "from-[#2D6A4F] to-[#52B788]" },
        { icon: Handshake, title: "Community", desc: "We foster a sense of community and collaboration among our partners and stakeholders.", color: "from-[#40916C] to-[#74C69D]" },
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* HERO SECTION - About Us */}
            <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-emerald-50/30 to-orange-50/30 overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#52B788] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F4A261] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
                    <Leaf className="absolute top-20 left-[10%] text-[#74C69D] opacity-30 w-12 h-12 animate-float" />
                    <Recycle className="absolute bottom-32 right-[15%] text-[#F4A261] opacity-30 w-16 h-16 animate-float-delayed" />
                    <Globe className="absolute top-1/3 right-[8%] text-[#2D6A4F] opacity-20 w-20 h-20 animate-spin-slow" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up mb-6">
                            About <span className="gradient-text">Us</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-slide-up delay-100 max-w-3xl mx-auto">
                            We are the home of circular economy excellence across Africa. Our programs are designed to bring together the best minds in innovation and turn the best ideas into reality.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(45,106,79,0.06)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* PROGRAMS & OFFERINGS SECTION */}
            <section className="relative py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Programs & <span className="gradient-text">Offerings</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Rocket, title: "Foundation Programs", desc: "Entry-level programs designed to introduce circular economy principles and build foundational knowledge.", color: "from-[#2D6A4F] to-[#52B788]" },
                            { icon: Building, title: "Industry Partners", desc: "Strategic collaborations with industry leaders to drive circular innovation at scale.", color: "from-[#F4A261] to-[#E76F51]" },
                            { icon: Award, title: "Corporate Sponsors", desc: "Partnership opportunities for corporations looking to invest in sustainable futures.", color: "from-[#2D6A4F] to-[#40916C]" },
                            { icon: Lightbulb, title: "Research Support", desc: "Funding and mentorship for cutting-edge circular economy research initiatives.", color: "from-[#52B788] to-[#74C69D]" },
                            { icon: Users, title: "Fellowships", desc: "Competitive fellowship programs for emerging leaders in sustainability.", color: "from-[#E76F51] to-[#F4A261]" },
                            { icon: Calendar, title: "Startup Incubator Events", desc: "Regular events connecting startups with investors, mentors, and opportunities.", color: "from-[#2D6A4F] to-[#F4A261]" },
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-100 overflow-hidden hover-lift transition-all cursor-pointer">
                                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                                <div className="p-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-orange-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className={`h-7 w-7 text-[#2D6A4F]`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    <div className="flex items-center text-[#2D6A4F] font-medium text-sm mt-4">
                                        Learn more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PILLARS SECTION */}
            <section className="relative py-24 bg-gradient-to-br from-gray-900 to-[#1B4332] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                    <TreePine className="absolute bottom-10 right-10 w-32 h-32 text-white opacity-10 animate-float" />
                    <Recycle className="absolute top-20 left-20 w-24 h-24 text-white opacity-10 animate-spin-slow" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Pillars for a Large <span className="text-[#F4A261]">Sustainability</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#FFB703] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-emerald-100 mt-6 max-w-3xl mx-auto text-lg">
                            We aim to accelerate the transition from the current linear "take-make-dispose" model to a circular economy, ensuring a circular flow of energy, value, and regeneration.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Recycle, title: "Circular Flow", desc: "Ensuring value is regenerated and resources remain in use for as long as possible.", stat: "85%", statLabel: "Waste Reduction" },
                            { icon: TrendingUp, title: "Economic Growth", desc: "Creating jobs and delivering sustainable economic growth for all.", stat: "50K+", statLabel: "Jobs Created" },
                            { icon: Shield, title: "Climate Action", desc: "Bridging the challenges posed by the climate crisis through circular solutions.", stat: "30K+", statLabel: "Tons CO₂ Saved" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover-lift text-center group">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#2D6A4F] to-[#F4A261] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-emerald-100 text-sm leading-relaxed mb-4">{item.desc}</p>
                                <div className="pt-4 border-t border-white/20">
                                    <span className="text-3xl font-bold text-[#F4A261]">{item.stat}</span>
                                    <p className="text-emerald-200 text-xs mt-1">{item.statLabel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MISSION & VISION SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="relative group animate-slide-in-left">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2D6A4F] to-[#40916C] rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>
                            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover-lift">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#2D6A4F] to-[#52B788] rounded-2xl flex items-center justify-center mb-6">
                                    <Target className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="gradient-text">Mission</span></h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To be a global leader in sustainable development solutions that address the root causes of poverty and inequality, while promoting social inclusion and environmental sustainability.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-[#2D6A4F]">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-sm font-medium">Impact-driven since 2020</span>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="relative group animate-slide-in-right">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#F4A261] to-[#E76F51] rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>
                            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover-lift">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#F4A261] to-[#E76F51] rounded-2xl flex items-center justify-center mb-6">
                                    <Eye className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="gradient-text">Vision</span></h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    A world where circular economy principles drive prosperity, protect our planet, and empower communities across Africa and beyond.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-[#F4A261]">
                                    <Globe className="h-5 w-5" />
                                    <span className="text-sm font-medium">Global reach, local impact</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR VALUES SECTION */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            The core principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover-lift">
                                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <value.icon className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Additional Values Quote */}
                    <div className="mt-16 bg-gradient-to-r from-[#2D6A4F]/5 to-[#F4A261]/5 rounded-2xl p-8 text-center border border-emerald-100">
                        <p className="text-gray-700 italic text-lg">
                            "We believe that by working together, we can create a more sustainable and equitable world for all."
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR TEAM SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Incredible <span className="gradient-text">Team</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            We work with only the very best. We're passionate about making a difference in the world.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift transition-all cursor-pointer">
                                <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>
                                <div className="p-6 text-center">
                                    <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <span className="text-3xl">{member.image}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-[#F4A261] font-medium text-sm mb-3">{member.role}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BUSINESS MODEL SECTION */}
            <section className="py-24 bg-gradient-to-br from-gray-900 to-[#1B4332] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                            <Briefcase className="h-4 w-4 text-[#FFB703]" />
                            <span className="text-xs font-semibold text-orange-100 uppercase tracking-wide">Our Structure</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Business <span className="text-[#F4A261]">Model</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#FFB703] to-[#F4A261] rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="w-28 h-28 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                <span className="text-4xl">👨‍💼</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Founder</h3>
                            <p className="text-emerald-200 text-sm">Strategic direction and vision</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-28 h-28 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                <span className="text-4xl">⚓</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Captain / Manuals</h3>
                            <p className="text-emerald-200 text-sm">Operational leadership and guidance</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-28 h-28 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                <span className="text-4xl">👥</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Team Leader</h3>
                            <p className="text-emerald-200 text-sm">Execution and community management</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#F4A261]"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Award className="h-16 w-16 text-[#FFB703] mx-auto mb-6 animate-bounce-slow" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Join Our Community
                    </h2>
                    <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                        Be part of the circular economy movement. Whether you're an entrepreneur, corporate, or investor, there's a place for you.
                    </p>
                    <button className="bg-white text-[#2D6A4F] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto btn-shine">
                        Get in touch
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;