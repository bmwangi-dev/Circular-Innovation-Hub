import {
    ArrowRight,
    Leaf,
    Recycle,
    Sparkles,
    TrendingUp,
    Users,
    Briefcase,
    ChevronRight,
    Coffee,
    Target,
    Rocket,
    Lightbulb,
    Megaphone,
    Award,
    Sun,
    Droplets,
} from 'lucide-react';
import { OptimizedImage } from '../lib/cloudinary';

const HomePage = () => {
    const partners = [
        { name: "African Slums", publicId: "africanslums_logo", logo: "/africanslums_logo.jpg" },
        { name: "Wee Centre", publicId: "weecentre_logo", logo: "/weecentre_logo.jpg" },
        { name: "Stichting Deon", publicId: "stitchingdeon_logo", logo: "/stitchingdeon_logo.jpg" },
        { name: "Naitech", publicId: "naitech_logo", logo: "/naitech_logo.jpg" },
        { name: "AJRY", publicId: "ajry_logo", logo: "/ajry_logo.jpg" },
        { name: "Chat PR", publicId: "chatpr_logo", logo: "/chatpr_logo.jpg" },
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">




            {/* HERO SECTION */}
            <section className="relative min-h-screen bg-gradient-to-br from-white via-green-50/30 to-yellow-50/30 overflow-hidden pt-20">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#3d7118] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#e1ac00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#3d7118] rounded-full filter blur-3xl opacity-15 animate-float"></div>

                    {/* Floating Elements */}
                    <Leaf className="absolute top-20 left-[10%] text-[#3d7118] opacity-30 w-12 h-12 animate-float" />
                    <Recycle className="absolute bottom-32 right-[15%] text-[#e1ac00] opacity-30 w-16 h-16 animate-float-delayed" />
                    <Sparkles className="absolute top-1/2 right-[5%] text-[#e1ac00] opacity-30 w-8 h-8 animate-float" style={{ animationDuration: '8s' }} />
                    <Sun className="absolute bottom-40 left-[5%] text-[#e1ac00] opacity-20 w-10 h-10 animate-spin-slow" />
                    <Droplets className="absolute top-40 right-[20%] text-[#3d7118] opacity-20 w-8 h-8 animate-float-delayed" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Main Heading */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight animate-slide-up">
                                <span className="text-gray-900">We bring your</span>
                                <br />
                                <span className="bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent relative">
                                    ideas to life
                                    <svg className="absolute -bottom-3 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                                        <path d="M1 5.5C60 2.5 150 0.5 299 5.5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                                        <defs><linearGradient id="gradient"><stop stopColor="#3d7118" /><stop offset="0.5" stopColor="#e1ac00" /><stop offset="1" stopColor="#e1ac00" /></linearGradient></defs>
                                    </svg>
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg animate-slide-up delay-100">
                                We are a one-stop-shop for Circular Economy Excellence in Africa, inspiring and enabling the transition to a sustainable world.
                            </p>

                            {/* Mission Statement - Premium Card */}
                            <div className="bg-gradient-to-r from-green-50/80 via-white/80 to-yellow-50/80 backdrop-blur-sm border-l-4 border-[#e1ac00] p-5 rounded-r-xl shadow-sm animate-slide-up delay-200">
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                    <span className="font-bold text-[#3d7118]">Our mission</span> is to be an active part of fast-tracking the development towards a more circular and sustainable society, by creating a collaborative platform where stakeholders can grow, meet, influence and <span className="font-semibold text-[#e1ac00]">be seen.</span>
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-5 pt-4 animate-slide-up delay-300">
                                <button className="group relative overflow-hidden bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-200 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-200 hover:scale-[1.02] flex items-center justify-center gap-2 btn-shine">
                                    <span className="relative z-10">Join our Community</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="border-2 border-[#e1ac00] bg-white/80 backdrop-blur-sm text-[#3d7118] px-8 py-4 rounded-full font-semibold hover:bg-yellow-50 hover:border-[#e1ac00] transition-all duration-300 flex items-center justify-center gap-2">
                                    Learn More
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Premium Stats Dashboard */}
                        <div className="relative mt-12 lg:mt-0 animate-slide-in-right">
                            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-6 overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#3d7118]/20 to-[#e1ac00]/20 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#3d7118]/10 rounded-full blur-xl"></div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-5 relative z-10">
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-green-100 hover-lift transition-all cursor-pointer group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2.5 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl group-hover:from-[#3d7118] group-hover:to-[#e1ac00] transition-all duration-300">
                                                <Recycle className="h-5 w-5 text-[#3d7118] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <span className="text-2xl font-bold text-gray-900">85%</span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">Waste diverted from landfills through our programs</p>
                                    </div>

                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-green-100 hover-lift transition-all cursor-pointer group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2.5 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl group-hover:from-[#3d7118] group-hover:to-[#e1ac00] transition-all duration-300">
                                                <Users className="h-5 w-5 text-[#3d7118] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <span className="text-2xl font-bold text-gray-900">50K+</span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">Entrepreneurs empowered across the continent</p>
                                    </div>

                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-green-100 hover-lift transition-all cursor-pointer group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2.5 bg-gradient-to-br from-green-100 to-yellow-100 rounded-xl group-hover:from-[#3d7118] group-hover:to-[#e1ac00] transition-all duration-300">
                                                <TrendingUp className="h-5 w-5 text-[#3d7118] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <span className="text-2xl font-bold text-gray-900">$15M+</span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">Circular economy investments facilitated</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-2xl p-5 text-white shadow-lg hover-lift transition-all cursor-pointer">
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-sm font-medium opacity-90">Join the movement</p>
                                            <Sparkles className="h-4 w-4 text-[#e1ac00]" />
                                        </div>
                                        <p className="text-xl font-bold">Become a member ✨</p>
                                        <div className="mt-3 flex items-center gap-1 text-sm opacity-90">
                                            <span>Get started</span>
                                            <ArrowRight className="h-3 w-3" />
                                        </div>
                                    </div>
                                </div>

                                <Leaf className="absolute -bottom-6 -left-6 text-[#3d7118] opacity-10 w-32 h-32" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Decoration */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(61,113,24,0.06)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* WHAT WE OFFER SECTION */}
            <section className="relative py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">we offer</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            End-to-end solutions for circular economy transformation across Africa
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                        {[
                            { icon: Rocket, title: "Accelerator Program", desc: "Walk with you from idea generation to scale up, connecting you with mentors, partners, opportunities and investors.", color: "from-[#3d7118] to-[#3d7118]" },
                            { icon: Coffee, title: "Co-working Space & Events", desc: "Conducive environment for office space, conferences, networking events and corporate meetings with a spacious garden.", color: "from-[#3d7118] to-[#3d7118]" },
                            { icon: Briefcase, title: "Corporate Training", desc: "Sustainability toolkit to help corporate entities transition towards the circular economy and reduce carbon footprint.", color: "from-[#e1ac00] to-[#e1ac00]" },
                            { icon: Lightbulb, title: "Advisory Services", desc: "Expert guidance on circular economy strategies, impact measurement, and sustainable business model transformation.", color: "from-[#3d7118] to-[#e1ac00]" }
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl shadow-lg shadow-gray-100 border border-gray-100 overflow-hidden hover-lift transition-all cursor-pointer">
                                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                                <div className="p-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="h-7 w-7 text-[#3d7118]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.desc}</p>
                                    <div className="flex items-center text-[#3d7118] font-medium text-sm">
                                        Learn more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPACT METRICS SECTION */}
            <section className="relative py-24 bg-gradient-to-br from-[#3d7118] via-[#3d7118] to-[#e1ac00] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                    <Recycle className="absolute bottom-10 right-10 w-32 h-32 text-white opacity-10 animate-spin-slow" />
                    <Leaf className="absolute top-20 left-20 w-24 h-24 text-white opacity-10 animate-float" />
                    <Sparkles className="absolute top-1/2 right-1/4 w-16 h-16 text-[#e1ac00] opacity-10 animate-float-delayed" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Our <span className="text-[#e1ac00]">impact</span> in numbers
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#e1ac00] to-[#e1ac00] rounded-full mx-auto"></div>
                        <p className="text-green-100 mt-6 max-w-2xl mx-auto">
                            Real results driving sustainable change across Africa
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <Target className="h-10 w-10 text-[#e1ac00]" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">48</div>
                            <p className="text-yellow-200 font-medium">POVERTY TARGETED</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <Users className="h-10 w-10 text-[#e1ac00]" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">26</div>
                            <p className="text-yellow-200 font-medium">EMPLOYMENT CREATED</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <Recycle className="h-10 w-10 text-[#e1ac00]" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">3</div>
                            <p className="text-yellow-200 font-medium">COHORTS RUN</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-24 h-24 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-5 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <Megaphone className="h-10 w-10 text-[#e1ac00]" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">3</div>
                            <p className="text-yellow-200 font-medium">AFRICAN COUNTRIES REACHED</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNERS SECTION */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-white via-green-50/40 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            See our <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">partners</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            We have on board a diversity of partners including donors, corporates, startups and training institutions. Their support is invaluable and goes beyond money to ideas, goodwill and volunteerism.                        </p>
                    </div>

                    <div className="rounded-3xl bg-white/85 border border-green-100 shadow-xl shadow-green-100/50 p-4 sm:p-5 md:p-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                            {partners.map((partner) => (
                                <div key={partner.name} className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3d7118] hover:shadow-lg hover:shadow-green-100">
                                    <div className="aspect-square rounded-xl bg-white p-2 ring-1 ring-gray-100 overflow-hidden flex items-center justify-center">
                                        <OptimizedImage
                                            publicId={partner.publicId}
                                            fallbackSrc={partner.logo}
                                            alt={`${partner.name} logo`}
                                            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                            width={280}
                                            height={280}
                                            resizeMode="contain"
                                        />
                                    </div>
                                    <p className="mt-3 text-center text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-[#3d7118] transition-colors">
                                        {partner.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00]"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201440%20320%22%3E%3Cpath%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%20d=%22M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z%22%3E%3C/path%3E%3C/svg%3E')] bg-cover bg-no-repeat opacity-10"></div>

                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Award className="h-16 w-16 text-[#e1ac00] mx-auto mb-6 animate-bounce-slow" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Partner with us today!
                    </h2>
                    <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join us in building a sustainable future for Africa. Let's create lasting impact together.
                    </p>
                    <button className="bg-white text-[#3d7118] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto btn-shine">
                        Get in touch
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
