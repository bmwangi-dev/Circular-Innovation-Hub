import {
    Users,
    Briefcase,
    Rocket,
    CheckCircle,
    Calendar,
    Network,
    Cpu,
    FileText,
    UserCheck,
    DollarSign,
    GraduationCap,
    BookOpen,
    Mic,
} from 'lucide-react';

const StartupHubPage = () => {
    const startupImpactVideoUrl = "https://www.youtube.com/embed/T2C1Axws2OY?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1";

    // Success Stories Data
    const successStories = [
        { name: "EcoPlastics Ltd", founder: "Grace Makena", impact: "Diverted 500+ tons of plastic waste", raised: "$250K", image: "♻️", color: "from-[#3d7118] to-[#3d7118]" },
        { name: "SolarReach", founder: "James Otieno", impact: "Provided clean energy to 10K+ households", raised: "$500K", image: "☀️", color: "from-[#e1ac00] to-[#e1ac00]" },
        { name: "AgriCycle", founder: "Dr. Fatima Diop", impact: "Converted 1K+ tons of agricultural waste", raised: "$350K", image: "🌾", color: "from-[#3d7118] to-[#3d7118]" },
        { name: "WaterWise", founder: "Michael Njoroge", impact: "Saved 2M+ liters of water annually", raised: "$180K", image: "💧", color: "from-[#3d7118] to-[#e1ac00]" },
    ];

    // Available Resources
    const resources = [
        { icon: BookOpen, title: "Business Toolkit", description: "Templates, guides, and resources to help you build your startup", color: "from-[#3d7118] to-[#3d7118]" },
        { icon: Users, title: "Mentor Network", description: "Connect with experienced entrepreneurs and industry experts", color: "from-[#e1ac00] to-[#e1ac00]" },
        { icon: DollarSign, title: "Funding Opportunities", description: "Access to grants, investors, and funding programs", color: "from-[#3d7118] to-[#3d7118]" },
        { icon: Calendar, title: "Workshops & Events", description: "Regular training sessions and networking events", color: "from-[#3d7118] to-[#3d7118]" },
    ];

    // Upcoming Events
    const upcomingEvents = [
        { title: "Pitch Practice Session", date: "March 20, 2025", type: "Workshop", spots: "15 spots left", icon: Mic },
        { title: "Investor Networking Mixer", date: "April 5, 2025", type: "Networking", spots: "50 spots left", icon: Users },
        { title: "Circular Economy Bootcamp", date: "April 15-17, 2025", type: "Training", spots: "Registration Open", icon: GraduationCap },
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* HERO SECTION - Startup Hub */}
            <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-green-50/30 to-yellow-50/30 overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#3d7118] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#e1ac00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
                    <Rocket className="absolute top-20 right-[15%] text-[#3d7118] opacity-20 w-32 h-32 animate-float" />
                    <Users className="absolute bottom-20 left-[10%] text-[#e1ac00] opacity-25 w-28 h-28 animate-float-delayed" />
                    <div className="absolute top-1/3 left-[5%] w-64 h-64 bg-[#3d7118] rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight animate-slide-up mb-6">
                            Your <span className="gradient-text">Startup Journey</span> Starts Here
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-slide-up delay-100 max-w-2xl mx-auto">
                            Join a vibrant community of circular economy entrepreneurs. Access resources, mentorship, and funding to scale your impact.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(61,113,24,0.06)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* KEY DRIVERS SECTION */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Building <span className="gradient-text">Sustainable Ventures</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                            We empower startups with the tools, connections, and knowledge they need to thrive in the circular economy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
                            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#3d7118] to-[#3d7118] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Network className="h-12 w-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Community</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Connect with like-minded founders, investors, and industry experts.
                            </p>
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <span className="text-sm text-[#3d7118] font-medium">500+ active members</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
                            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#e1ac00] to-[#e1ac00] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Cpu className="h-12 w-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Access cutting-edge tools and methodologies to build disruptive solutions.
                            </p>
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <span className="text-sm text-[#e1ac00] font-medium">25+ innovations launched</span>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
                            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#3d7118] to-[#e1ac00] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Briefcase className="h-12 w-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Entrepreneurship</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Build sustainable business models that create lasting impact and returns.
                            </p>
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <span className="text-sm text-[#3d7118] font-medium">50+ startups supported</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACCELERATOR PROGRAM */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                From Idea to <span className="gradient-text">Impact</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-[#3d7118] to-[#e1ac00] rounded-full mb-6"></div>
                            <p className="text-gray-600 mb-6">
                                Our accelerator program walks with you from idea generation to scale-up, connecting you with mentors, partners, opportunities, and investors.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: UserCheck, text: "Identify youth and women-owned businesses in our thematic areas", color: "from-[#3d7118] to-[#3d7118]" },
                                    { icon: FileText, text: "Research and showcase new technologies through trainings and webinars", color: "from-[#e1ac00] to-[#e1ac00]" },
                                    { icon: Users, text: "Conduct outreach workshops on circular principles for innovators", color: "from-[#3d7118] to-[#3d7118]" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 transition-all duration-300 group">
                                        <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                            <item.icon className="h-5 w-5 text-white" />
                                        </div>
                                        <p className="text-gray-700 font-medium">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative animate-slide-in-right">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#3d7118]/15 to-[#e1ac00]/20 rounded-[2rem] blur-2xl"></div>
                            <div className="relative bg-[#3d7118] rounded-3xl p-3 sm:p-4 shadow-2xl overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#e1ac00]/20 rounded-full blur-3xl"></div>
                                <div className="relative">
                                    <div className="aspect-video overflow-hidden rounded-2xl bg-black ring-1 ring-white/15 shadow-xl">
                                        <iframe
                                            className="h-full w-full"
                                            src={startupImpactVideoUrl}
                                            title="Startups reshaping the impact landscape"
                                            loading="eager"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                    <p className="mt-4 px-1 text-center text-base font-medium text-green-50 sm:text-lg">
                                        Startups are reshaping the impact landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESOURCES SECTION */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Resources for <span className="gradient-text">Founders</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Everything you need to build, grow, and scale your circular economy startup
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {resources.map((resource, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover-lift transition-all text-center">
                                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <resource.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                                <p className="text-gray-500 text-sm">{resource.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPACT STATS */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-[#3d7118]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-[#e1ac00] mb-2">48</div>
                            <p className="text-green-200">People Trained</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#e1ac00] mb-2">26</div>
                            <p className="text-green-200">Startups Trained</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#e1ac00] mb-2">$2.5M+</div>
                            <p className="text-green-200">Funding Secured</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#e1ac00] mb-2">200+</div>
                            <p className="text-green-200">Jobs Created</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SUCCESS STORIES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Entrepreneurs <span className="gradient-text">Who Thrived</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
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
                                    <p className="text-[#e1ac00] font-medium text-sm mb-3">by {story.founder}</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-[#3d7118]" />
                                            <span className="text-gray-600">{story.impact}</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <DollarSign className="h-4 w-4 text-[#e1ac00]" />
                                            <span className="text-gray-600 font-medium">{story.raised} raised</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UPCOMING EVENTS */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Upcoming <span className="gradient-text">Events</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {upcomingEvents.map((event, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover-lift">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#3d7118] to-[#e1ac00] rounded-xl flex items-center justify-center">
                                        <event.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{event.title}</h3>
                                        <p className="text-sm text-[#e1ac00]">{event.type}</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mb-2">{event.date}</p>
                                <p className="text-xs text-gray-400 mb-4">{event.spots}</p>
                                <button className="w-full py-2 border border-[#3d7118] text-[#3d7118] rounded-xl text-sm font-medium hover:bg-[#3d7118] hover:text-white transition-all duration-300">
                                    Register Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartupHubPage;
