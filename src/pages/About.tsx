import {
    ArrowRight,
    Leaf,
    Recycle,
    Users,
    Award,
    Globe,
    Target,
    CheckCircle,
    Eye,
} from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* HERO SECTION - About Us */}
            <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-green-50/30 to-yellow-50/30 overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#3d7118] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#e1ac00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
                    <Leaf className="absolute top-20 left-[10%] text-[#3d7118] opacity-30 w-12 h-12 animate-float" />
                    <Recycle className="absolute bottom-32 right-[15%] text-[#e1ac00] opacity-30 w-16 h-16 animate-float-delayed" />
                    <Globe className="absolute top-1/3 right-[8%] text-[#3d7118] opacity-20 w-20 h-20 animate-spin-slow" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-green-100 rounded-full px-4 py-2 shadow-sm animate-slide-in-left mb-6">
                            <span className="text-xs font-semibold bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent tracking-wide uppercase">Our Story</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up mb-6">
                            About <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">Us</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-slide-up delay-100 max-w-3xl mx-auto">
                            We are the home of circular economy excellence across Africa. Our programs are designed to bring together the best minds in innovation and turn the best ideas into reality.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(61,113,24,0.06)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* OUR PILLARS SECTION */}
            <section className="relative py-24 bg-gradient-to-br from-gray-50 to-green-50/30 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(61,113,24,0.1)_0%,transparent_50%)]"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">Pillars</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            All our work is founded on 3 essential tenets:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "People",
                                desc: "Community development and engagement for a circular economy.",
                                color: "from-[#3d7118] to-[#3d7118]"
                            },
                            {
                                icon: Globe,
                                title: "Planet",
                                desc: "Promoting the overall well being of the environment by reducing waste, regenerating nature and circulating products and materials at their highest value.",
                                color: "from-[#e1ac00] to-[#e1ac00]"
                            },
                            {
                                icon: Recycle,
                                title: "Sustainability",
                                desc: "Creating new products and sustainable business models for startups and companies with job creation for African youth and women as a by product.",
                                color: "from-[#3d7118] to-[#e1ac00]"
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift">
                                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <item.icon className="h-12 w-12 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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
                            <div className="absolute inset-0 bg-gradient-to-r from-[#3d7118] to-[#3d7118] rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>
                            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover-lift">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#3d7118] to-[#3d7118] rounded-2xl flex items-center justify-center mb-6">
                                    <Target className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">Mission</span></h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To be a global leader in sustainable development solutions that address the root causes of poverty and inequality, while promoting social inclusion and environmental sustainability.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-[#3d7118]">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-sm font-medium">Impact-driven since 2020</span>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="relative group animate-slide-in-right">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#e1ac00] to-[#e1ac00] rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"></div>
                            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover-lift">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#e1ac00] to-[#e1ac00] rounded-2xl flex items-center justify-center mb-6">
                                    <Eye className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">Vision</span></h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    A world where circular economy principles drive prosperity, protect our planet, and empower communities across Africa and beyond.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-[#e1ac00]">
                                    <Globe className="h-5 w-5" />
                                    <span className="text-sm font-medium">Global reach, local impact</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CIRCULARITY CONCEPT SECTION */}
            <section className="relative py-24 bg-gradient-to-br from-gray-50 to-green-50/30 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#e1ac00] rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#3d7118] rounded-full blur-3xl"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            The concept of <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">circularity</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed animate-slide-in-left">
                            <p>
                                The current take-make-waste economic model has resulted in climate change, biodiversity loss and pollution. In the 2021 Circularity Gap report, 70% of greenhouse gas emissions were associated with material handling and use. To tackle climate change and other negative consequences of the linear model we need to close the loop and move to a circular economy.
                            </p>
                            <p>
                                Circularity is a simple concept. It means that a product is created with its own end-of-life taken into account. In a circular economy, once the user is finished with the product, it goes back into the supply chain instead of the landfill.
                            </p>
                            <p className="text-xl font-bold text-gray-900">
                                The motto of the circularity movement in a nutshell, is: <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">Waste not, Want not!</span>
                            </p>
                        </div>

                        <div className="relative animate-slide-in-right">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3d7118]/20 to-[#e1ac00]/20 blur-3xl"></div>
                            <div className="relative bg-white rounded-2xl border border-green-100 p-4 shadow-xl hover-lift">
                                <img
                                    src="/conecptofcircularity.png"
                                    alt="Circular economy concept diagram"
                                    className="w-full h-auto rounded-xl object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00]"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Award className="h-16 w-16 text-[#e1ac00] mx-auto mb-6 animate-bounce-slow" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Join Our Community
                    </h2>
                    <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                        Be part of the circular economy movement. Whether you're an entrepreneur, corporate, or investor, there's a place for you.
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

export default AboutPage;