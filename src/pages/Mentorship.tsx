import {
    Award,
    CheckCircle,
    Compass,
    FileText,
    Handshake,
    MessageCircle,
    Scale,
    TrendingUp,
    Users,
} from 'lucide-react';
import JourneyTimeline from '../components/JourneyTimeline';

const MentorshipPage = () => {
    const focusAreas = [
        {
            icon: FileText,
            title: "Process Improvements and SOPs",
            description: "Helping ventures document repeatable workflows, clarify responsibilities, and build operating systems that reduce errors as the business grows.",
            color: "from-[#3d7118] to-[#3d7118]",
        },
        {
            icon: Users,
            title: "Human Resource Management",
            description: "Guidance on team structure, role clarity, performance routines, culture, and people practices that support a stronger organization.",
            color: "from-[#e1ac00] to-[#e1ac00]",
        },
        {
            icon: TrendingUp,
            title: "Investor Readiness and Fundraising",
            description: "Support with pitch preparation, financial storytelling, investor materials, fundraising strategy, and readiness for capital conversations.",
            color: "from-[#3d7118] to-[#e1ac00]",
        },
        {
            icon: Award,
            title: "Product Development",
            description: "Refining product-market fit, customer feedback loops, value propositions, and the practical steps needed to move from prototype to adoption.",
            color: "from-[#3d7118] to-[#3d7118]",
        },
        {
            icon: Scale,
            title: "Legal and Regulatory Compliance",
            description: "Building awareness around company obligations, registrations, agreements, compliance risks, and the regulatory basics founders need to manage.",
            color: "from-[#e1ac00] to-[#e1ac00]",
        },
    ];

    const deliveryNotes = [
        "Structured guidance tied to the venture's current stage and operating gaps.",
        "Practical review of internal systems, team needs, product decisions, and fundraising readiness.",
        "Clear recommendations founders can use to strengthen day-to-day execution.",
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* HERO SECTION - Mentorship */}
            <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-green-50/30 to-yellow-50/30 overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#3d7118] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#e1ac00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
                    <Handshake className="absolute top-20 right-[15%] text-[#3d7118] opacity-20 w-32 h-32 animate-float" />
                    <Compass className="absolute bottom-20 left-[10%] text-[#e1ac00] opacity-25 w-28 h-28 animate-float-delayed" />
                    <div className="absolute top-1/3 left-[5%] w-64 h-64 bg-[#3d7118] rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight animate-slide-up mb-6">
                            <span className="gradient-text">Mentorship</span> for Stronger Ventures
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-slide-up delay-100 max-w-3xl mx-auto">
                            The mentorship stage helps founders strengthen the internal systems, products, teams, compliance foundations, and fundraising readiness needed to grow with confidence.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(61,113,24,0.06)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* JOURNEY TIMELINE - highlighting the Mentorship stage */}
            <section className="py-20 md:py-24 bg-gradient-to-b from-white via-green-50/20 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-36">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Your Path to <span className="gradient-text">Sustainable Growth</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
                            From joining the startup track to building products, preparing for investors, and receiving dedicated mentorship, every stage builds the next.
                        </p>
                    </div>
                    <JourneyTimeline highlightedStage={5} />
                </div>
            </section>

            {/* MENTORSHIP FOCUS AREAS */}
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            What the <span className="gradient-text">Mentorship Stage</span> Covers
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
                            Each focus area is designed to help founders move from promising ideas to better managed, investment-ready, and compliant ventures.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {focusAreas.map((area, idx) => (
                            <div key={area.title} className={`group bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/70 overflow-hidden hover-lift ${idx === 2 ? "lg:row-span-2" : ""}`}>
                                <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
                                <div className="p-7">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                                        <area.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW SUPPORT IS FRAMED */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#3d7118]/10 px-4 py-2 text-sm font-semibold text-[#3d7118] mb-5">
                                <MessageCircle className="h-4 w-4" />
                                Informational guidance
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                                Practical support for the messy middle of growth
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                This stage is presented for information only. It explains the areas of support founders receive as they refine their operations, build stronger teams, prepare for investors, improve products, and understand compliance responsibilities.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl border border-green-100 p-6 md:p-8 shadow-xl shadow-green-100/60">
                            <div className="space-y-4">
                                {deliveryNotes.map((note) => (
                                    <div key={note} className="flex gap-4 rounded-2xl bg-gradient-to-r from-green-50 to-yellow-50/70 p-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#3d7118] flex items-center justify-center shrink-0">
                                            <CheckCircle className="h-5 w-5 text-white" />
                                        </div>
                                        <p className="text-gray-700 font-medium leading-relaxed">{note}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MentorshipPage;
