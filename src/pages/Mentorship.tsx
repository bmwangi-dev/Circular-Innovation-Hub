import {
    ArrowRight,
    Sparkles,
    Users,
    ChevronRight,
    Star,
    Handshake,
    Award,
    TrendingUp,
    CheckCircle,
    UserCheck,
    MessageCircle,
    Video,
    Medal,
    Compass,
    FileText,
} from 'lucide-react';

const MentorshipPage = () => {
    // Mentor Data
    const mentors = [
        { name: "Dr. Sarah Omondi", role: "Circular Economy Expert", expertise: "Strategy & Impact", image: "👩‍💼", color: "from-[#2D6A4F] to-[#52B788]", bio: "15+ years experience in sustainable development across Africa" },
        { name: "James Mwangi", role: "Startup Growth Specialist", expertise: "Business Development", image: "👨‍💻", color: "from-[#F4A261] to-[#E76F51]", bio: "Former innovation lead at UNDP, passionate about empowering entrepreneurs" },
        { name: "Dr. Amina Diallo", role: "Research Director", expertise: "Impact Measurement", image: "👩‍🔬", color: "from-[#2D6A4F] to-[#40916C]", bio: "PhD in Environmental Economics, leading impact research" },
        { name: "Michael Chen", role: "Partnerships Expert", expertise: "Strategic Alliances", image: "👨‍💼", color: "from-[#52B788] to-[#F4A261]", bio: "Building partnerships across Africa and beyond" },
        { name: "Grace Njoroge", role: "Startup Mentor", expertise: "Scaling & Operations", image: "👩‍🏫", color: "from-[#E76F51] to-[#F4A261]", bio: "Helping circular economy ventures scale successfully" },
        { name: "David Okello", role: "Community Builder", expertise: "Networking", image: "👨‍🌾", color: "from-[#2D6A4F] to-[#74C69D]", bio: "Building thriving communities of changemakers" },
    ];

    // Mentorship Programs
    const mentorshipPrograms = [
        { icon: UserCheck, title: "One-on-One Mentorship", duration: "3 months", description: "Personalized guidance from industry experts matched to your needs", color: "from-[#2D6A4F] to-[#52B788]" },
        { icon: Users, title: "Group Mentorship Circles", duration: "Weekly sessions", description: "Learn alongside peers in focused group discussions", color: "from-[#F4A261] to-[#E76F51]" },
        { icon: Video, title: "Virtual Office Hours", duration: "Drop-in", description: "Quick consultations with our mentor network", color: "from-[#2D6A4F] to-[#40916C]" },
        { icon: Award, title: "Expert Masterclasses", duration: "Monthly", description: "Deep-dive sessions with industry leaders", color: "from-[#52B788] to-[#74C69D]" },
    ];

    // Testimonials
    const testimonials = [
        { quote: "The mentorship program was transformative for our startup. Our mentor helped us refine our business model and secure our first major client.", author: "EcoPlastics Founder", rating: 5 },
        { quote: "Having access to experienced mentors who understand the circular economy landscape in Africa was invaluable.", author: "SolarReach CEO", rating: 5 },
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* HERO SECTION - Mentorship */}
            <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-emerald-50/30 to-orange-50/30 overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#52B788] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F4A261] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
                    <Handshake className="absolute top-20 right-[15%] text-[#2D6A4F] opacity-20 w-32 h-32 animate-float" />
                    <Compass className="absolute bottom-20 left-[10%] text-[#F4A261] opacity-25 w-28 h-28 animate-float-delayed" />
                    <div className="absolute top-1/3 left-[5%] w-64 h-64 bg-[#74C69D] rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight animate-slide-up mb-6">
                            <span className="gradient-text">Mentorship</span> That Moves You Forward
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-slide-up delay-100 max-w-2xl mx-auto">
                            Connect with experienced mentors who have walked the path. Get personalized guidance to accelerate your circular economy venture.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slide-up delay-200">
                            <button className="border-2 border-[#2D6A4F] text-[#2D6A4F] px-8 py-3.5 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2">
                                Become a Mentor
                                <Handshake className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(45,106,79,0.06)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* MENTORSHIP PROGRAMS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="gradient-text">Mentorship Programs</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Choose the mentorship path that fits your journey
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mentorshipPrograms.map((program, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover-lift">
                                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <program.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h3>
                                <p className="text-sm text-[#F4A261] font-medium mb-2">{program.duration}</p>
                                <p className="text-gray-500 text-sm">{program.description}</p>
                                <button className="mt-4 text-[#2D6A4F] font-medium text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                                    Apply Now
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MEET OUR MENTORS */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our <span className="gradient-text">Mentors</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Learn from industry experts passionate about building a sustainable future
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mentors.map((mentor, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift transition-all cursor-pointer">
                                <div className={`h-2 bg-gradient-to-r ${mentor.color}`}></div>
                                <div className="p-6 text-center">
                                    <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${mentor.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <span className="text-3xl">{mentor.image}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                                    <p className="text-[#F4A261] font-medium text-sm mb-2">{mentor.role}</p>
                                    <p className="text-xs text-gray-500 mb-3">Expertise: {mentor.expertise}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{mentor.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPLICATION PROCESS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How to <span className="gradient-text">Get Started</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Apply", description: "Complete your application and tell us about your venture", icon: FileText },
                            { step: "02", title: "Match", description: "We'll match you with the perfect mentor for your needs", icon: Handshake },
                            { step: "03", title: "Connect", description: "Start your mentorship journey with initial sessions", icon: MessageCircle },
                            { step: "04", title: "Grow", description: "Achieve your goals with ongoing support and guidance", icon: TrendingUp },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#2D6A4F] to-[#F4A261] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span className="text-2xl font-bold text-white">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="bg-gradient-to-r from-[#2D6A4F] to-[#F4A261] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 btn-shine">
                            Start Your Application
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* MENTOR BENEFITS */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-[#1B4332]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Become a <span className="text-[#F4A261]">Mentor</span>
                            </h2>
                            <p className="text-emerald-100 mb-6">
                                Share your expertise and help shape the next generation of circular economy leaders. Join our community of experienced mentors.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-emerald-200">
                                    <CheckCircle className="h-5 w-5 text-[#F4A261]" />
                                    <span>Give back to the entrepreneurial community</span>
                                </li>
                                <li className="flex items-center gap-3 text-emerald-200">
                                    <CheckCircle className="h-5 w-5 text-[#F4A261]" />
                                    <span>Expand your professional network</span>
                                </li>
                                <li className="flex items-center gap-3 text-emerald-200">
                                    <CheckCircle className="h-5 w-5 text-[#F4A261]" />
                                    <span>Stay connected with emerging trends and innovations</span>
                                </li>
                            </ul>
                            <button className="mt-8 border-2 border-[#F4A261] text-[#F4A261] px-6 py-3 rounded-full font-semibold hover:bg-[#F4A261] hover:text-[#1B4332] transition-all duration-300">
                                Apply to Mentor
                            </button>
                        </div>
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#F4A261] to-[#E76F51] rounded-2xl flex items-center justify-center mb-4">
                                        <Medal className="h-10 w-10 text-white" />
                                    </div>
                                    <p className="text-white text-lg italic">
                                        "Mentoring with CIH has been incredibly rewarding. Seeing my mentees succeed is the greatest achievement."
                                    </p>
                                    <p className="text-[#F4A261] font-medium mt-4">— Current CIH Mentor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our <span className="gradient-text">Mentees Say</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#52B788] to-[#F4A261] rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gray-50 to-emerald-50/20 rounded-2xl p-8 border border-gray-100">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-[#FFB703] fill-[#FFB703]" />
                                    ))}
                                </div>
                                <p className="text-gray-700 text-lg italic mb-4">"{testimonial.quote}"</p>
                                <p className="text-gray-600 font-semibold">— {testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#F4A261]"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Handshake className="h-16 w-16 text-[#FFB703] mx-auto mb-6 animate-bounce-slow" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Accelerate Your Growth?
                    </h2>
                    <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join our mentorship program today and get the guidance you need to succeed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                            Become a Mentor
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MentorshipPage;