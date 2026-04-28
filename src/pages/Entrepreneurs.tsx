import {
    ArrowRight,
    Users,
    TrendingUp,
    Play,
    Video,
    Network,
    Cpu,
    Briefcase,
    Share2,
    FileText,
    UserCheck,
    DollarSign,
    Lightbulb,
    Rocket,
    CheckCircle
} from 'lucide-react';

const EntrepreneursPage = () => {

    // Success Stories Data
    const successStories = [
        { name: "EcoPlastics Ltd", founder: "Grace Makena", impact: "Diverted 500+ tons of plastic waste", raised: "$250K", image: "♻️", color: "from-[#2D6A4F] to-[#52B788]" },
        { name: "SolarReach", founder: "James Otieno", impact: "Provided clean energy to 10K+ households", raised: "$500K", image: "☀️", color: "from-[#F4A261] to-[#E76F51]" },
        { name: "AgriCycle", founder: "Dr. Fatima Diop", impact: "Converted 1K+ tons of agricultural waste", raised: "$350K", image: "🌾", color: "from-[#2D6A4F] to-[#40916C]" },
        { name: "WaterWise", founder: "Michael Njoroge", impact: "Saved 2M+ liters of water annually", raised: "$180K", image: "💧", color: "from-[#52B788] to-[#F4A261]" },
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">




            {/* HERO SECTION - Entrepreneurs */}
            <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-emerald-50/30 to-orange-50/30 overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#52B788] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F4A261] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
                    <Users className="absolute top-20 right-[15%] text-[#2D6A4F] opacity-20 w-32 h-32 animate-float" />
                    <Rocket className="absolute bottom-20 left-[10%] text-[#F4A261] opacity-25 w-28 h-28 animate-float-delayed" />
                    <div className="absolute top-1/3 left-[5%] w-64 h-64 bg-[#74C69D] rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-up mb-6">
                            CIH empowers companies and innovators to develop<br />
                            <span className="gradient-text">sustainable businesses</span>
                        </h1>
                        <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-100">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-[#2D6A4F]">
                                <Lightbulb className="h-4 w-4" /> Innovation
                            </span>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-[#2D6A4F]">
                                <Users className="h-4 w-4" /> Community
                            </span>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-[#2D6A4F]">
                                <TrendingUp className="h-4 w-4" /> Entrepreneurship
                            </span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(45,106,79,0.06)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* ACCELERATOR PROGRAM SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Through our <span className="gradient-text">accelerator program</span> we:
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-[#2D6A4F] to-[#F4A261] rounded-full mb-6"></div>
                            <div className="space-y-4">
                                {[
                                    { icon: UserCheck, text: "Identify youth and women owned businesses working in our thematic areas", color: "from-[#2D6A4F] to-[#52B788]" },
                                    { icon: FileText, text: "Research and showcase new technologies and design techniques through trainings and webinars", color: "from-[#F4A261] to-[#E76F51]" },
                                    { icon: Users, text: "Conduct outreach workshops and training on application of circular principles for innovators in our community", color: "from-[#52B788] to-[#74C69D]" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-orange-50 transition-all duration-300 group">
                                        <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                            <item.icon className="h-5 w-5 text-white" />
                                        </div>
                                        <p className="text-gray-700 font-medium">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative animate-slide-in-right">
                            <div className="bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] rounded-3xl p-8 shadow-2xl">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#F4A261] to-[#E76F51] rounded-2xl flex items-center justify-center mb-4">
                                        <Play className="h-10 w-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Demo Day</h3>
                                    <p className="text-emerald-200">Showcase your startup to investors and industry leaders</p>
                                </div>
                                <div className="flex items-center justify-center gap-4 mt-6">
                                    <div className="flex items-center gap-2 text-white/80">
                                        <Share2 className="h-4 w-4" />
                                        <span className="text-sm">Featured on social media</span>
                                    </div>
                                    <div className="w-px h-4 bg-white/30"></div>
                                    <div className="flex items-center gap-2 text-white/80">
                                        <Video className="h-4 w-4" />
                                        <span className="text-sm">Livestream available</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR KEY DRIVERS SECTION */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Key <span className="gradient-text">Drivers</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            We are committed to championing the adoption of circular economy principles by offering business development services and growing the circular economy ecosystem.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Community */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
                            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#2D6A4F] to-[#52B788] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Network className="h-12 w-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Community</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Connecting people and businesses in the ecosystem.
                            </p>
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <span className="text-sm text-[#2D6A4F] font-medium">500+ active members</span>
                            </div>
                        </div>

                        {/* Innovation */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
                            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#F4A261] to-[#E76F51] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Cpu className="h-12 w-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Coming up with processes, products and services to improve the lifecycle in products using technology.
                            </p>
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <span className="text-sm text-[#F4A261] font-medium">25+ innovations launched</span>
                            </div>
                        </div>

                        {/* Entrepreneurship */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
                            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#52B788] to-[#F4A261] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Briefcase className="h-12 w-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Entrepreneurship</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Creating new products and sustainable business models for startups and companies.
                            </p>
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <span className="text-sm text-[#52B788] font-medium">50+ startups supported</span>
                            </div>
                        </div>
                    </div>

                    {/* Ecosystem partners */}
                    <div className="mt-16 bg-gradient-to-r from-[#2D6A4F]/5 to-[#F4A261]/5 rounded-2xl p-8 text-center border border-emerald-100">
                        <p className="text-gray-700 font-medium mb-4">Creating a thriving community of:</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Innovators', 'Policy Makers', 'Development Agencies', 'Institutions of Learning', 'Corporate Entities', 'Government Agencies'].map((partner, idx) => (
                                <span key={idx} className="px-4 py-2 bg-white rounded-full text-sm text-[#2D6A4F] shadow-sm border border-emerald-100">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SUCCESS STORIES SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Entrepreneurs <span className="gradient-text">Who Thrived</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Real impact from real entrepreneurs who went through our program
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {successStories.map((story, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift transition-all cursor-pointer">
                                <div className={`h-2 bg-gradient-to-r ${story.color}`}></div>
                                <div className="p-6 text-center">
                                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${story.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <span className="text-3xl">{story.image}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}</h3>
                                    <p className="text-[#F4A261] font-medium text-sm mb-3">by {story.founder}</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-[#2D6A4F]" />
                                            <span className="text-gray-600">{story.impact}</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <DollarSign className="h-4 w-4 text-[#F4A261]" />
                                            <span className="text-gray-600 font-medium">{story.raised} raised</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#F4A261]"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Users className="h-16 w-16 text-[#FFB703] mx-auto mb-6 animate-bounce-slow" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        We're looking forward to supporting you in growing your business!
                    </h2>
                    <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join our community of innovative entrepreneurs and take your circular economy business to the next level.
                    </p>
                    <button className="bg-white text-[#2D6A4F] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto btn-shine">
                        Join our Community
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </section>


        </div>
    );
};

export default EntrepreneursPage;