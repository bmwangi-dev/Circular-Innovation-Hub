import {
    ArrowRight,
    Users,
    Coffee,
    Wifi,
    Printer,
    Car,
    Sun,
    TreePine,
    Utensils,
    ParkingCircle,
    CalendarDays,
    Presentation,
    Laptop,
    CheckCircle,
    Calendar,
} from 'lucide-react';

const CoWorkingPage = () => {

    // Amenities
    const amenities = [
        { icon: Wifi, title: "High-Speed WiFi", desc: "Reliable internet connection throughout the space", color: "from-[#3d7118] to-[#3d7118]" },
        { icon: Coffee, title: "Complimentary Beverages", desc: "Tea, coffee, drinking chocolate, and water", color: "from-[#e1ac00] to-[#e1ac00]" },
        { icon: Car, title: "On-Site Parking", desc: "Secure parking available for members", color: "from-[#3d7118] to-[#3d7118]" },
        { icon: Printer, title: "Printing Services", desc: "High-quality printing and scanning", color: "from-[#3d7118] to-[#3d7118]" },
        { icon: Calendar, title: "Internal Events Access", desc: "FIKA-Fridays, member-speech evenings, wellness sessions", color: "from-[#e1ac00] to-[#e1ac00]" },
        { icon: Users, title: "Admin Support", desc: "Dedicated administrative support team", color: "from-[#3d7118] to-[#e1ac00]" },
    ];

    // Pricing Plans
    const pricingPlans = [
        {
            name: "Daily Pass",
            price: "950",
            period: "/day",
            icon: Sun,
            features: ["Access 8am-5pm, Mon-Fri", "High-speed WiFi", "Printing services", "Complimentary beverages", "Access to garden area", "Community events access"],
            popular: false,
            color: "from-[#3d7118] to-[#3d7118]",
            buttonColor: "from-[#3d7118] to-[#3d7118]"
        },
        {
            name: "Weekly Pass",
            price: "4,500",
            period: "/week",
            icon: CalendarDays,
            features: ["Access 8am-5pm, Mon-Fri", "High-speed WiFi", "Printing services", "Complimentary beverages", "Access to garden area", "Community events access"],
            popular: true,
            color: "from-[#e1ac00] to-[#e1ac00]",
            buttonColor: "from-[#e1ac00] to-[#e1ac00]"
        },
        {
            name: "Monthly Pass",
            price: "17,000",
            period: "/month",
            icon: Calendar,
            features: ["Access 8am-5pm, Mon-Fri", "High-speed WiFi", "Printing services", "Complimentary beverages", "Access to garden area", "Community events access", "Locker access"],
            popular: false,
            color: "from-[#3d7118] to-[#3d7118]",
            buttonColor: "from-[#3d7118] to-[#3d7118]"
        }
    ];

    const dedicatedDeskPlan = {
        name: "Dedicated Desk",
        price: "22,000",
        period: "/month",
        icon: Laptop,
        features: [
            "24/7 access to the hub",
            "High-speed WiFi",
            "House tea, coffee, drinking chocolate, water",
            "Access to bookable meeting/training rooms",
            "Complimentary parking",
            "Private storage space",
            "Lockable desk",
            "Personalized workspace"
        ]
    };

    const boardroomPlan = {
        name: "Boardroom",
        price: "1,500",
        period: "/hour",
        icon: Presentation,
        features: [
            "Private meeting room for up to 6 people",
            "Zoom room access",
            "High-speed WiFi",
            "Webcam for virtual meetings",
            "Complimentary tea/coffee/beverages",
            "Printing services",
            "Whiteboard + markers",
            "Flipchart + markers"
        ]
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">




            {/* HERO SECTION - Co-working Space */}
            <section className="relative min-h-[70vh] bg-gradient-to-br from-white via-green-50/30 to-yellow-50/30 overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#3d7118] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#e1ac00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
                    <Coffee className="absolute top-20 right-[15%] text-[#3d7118] opacity-20 w-32 h-32 animate-float" />
                    <TreePine className="absolute bottom-20 left-[10%] text-[#e1ac00] opacity-25 w-28 h-28 animate-float-delayed" />
                    <div className="absolute top-1/3 left-[5%] w-64 h-64 bg-[#3d7118] rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                                Book Our <span className="gradient-text">Space</span>
                            </h1>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                                We believe you are the right partner to help you achieve your goals. We offer a wide range of services and products that can help you create the space you want.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 btn-shine">
                                    Book Now
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <div className="relative animate-slide-in-right">
                            <div className="bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-6 overflow-hidden">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
                                        <div className="text-3xl font-bold gradient-text">35%</div>
                                        <p className="text-xs text-gray-500 mt-1">Savings vs Conventional Lease</p>
                                    </div>
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
                                        <div className="text-3xl font-bold gradient-text">24/7</div>
                                        <p className="text-xs text-gray-500 mt-1">Access for Members</p>
                                    </div>
                                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
                                        <div className="text-3xl font-bold gradient-text">100+</div>
                                        <p className="text-xs text-gray-500 mt-1">Active Members</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#3d7118] to-[#e1ac00] rounded-2xl p-4 text-center text-white">
                                        <div className="text-2xl font-bold">Prime</div>
                                        <p className="text-xs opacity-90 mt-1">Lavington Location</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(61,113,24,0.06)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* FEATURES & AMENITIES */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What we  <span className="gradient-text">Offer</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Everything you need for a productive and inspiring work environment
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {amenities.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-yellow-50 transition-all duration-300 group">
                                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Garden & Outdoor Space Highlight */}
                    <div className="mt-12 bg-gradient-to-r from-[#3d7118]/5 to-[#e1ac00]/5 rounded-2xl p-6 text-center border border-green-100">
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <Sun className="h-5 w-5 text-[#e1ac00]" />
                                <span className="text-gray-700">Serene Environment</span>
                            </div>
                            <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <ParkingCircle className="h-5 w-5 text-[#3d7118]" />
                                <span className="text-gray-700">On-Site Parking</span>
                            </div>
                            <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <Utensils className="h-5 w-5 text-[#e1ac00]" />
                                <span className="text-gray-700">Shared Kitchenette</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COWORKING PRICING PLANS */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="gradient-text">Pricing</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            Whether you're looking for a daily spot, weekly or monthly station, or an events venue — we have you covered
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, idx) => (
                            <div key={idx} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover-lift ${plan.popular ? 'ring-2 ring-[#e1ac00]' : ''}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 right-0">
                                        <div className="bg-gradient-to-r from-[#e1ac00] to-[#e1ac00] text-white text-xs font-bold px-4 py-1 rounded-bl-2xl">
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
                                        <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                                        <span className="text-gray-500">{plan.period}</span>
                                    </div>
                                    <ul className="space-y-2 text-left mb-6">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <CheckCircle className="h-4 w-4 text-[#3d7118] shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full bg-gradient-to-r ${plan.buttonColor} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 btn-shine`}>
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DEDICATED DESK & BOARDROOM SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Dedicated Desk */}
                        <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#3d7118] to-[#3d7118] rounded-2xl flex items-center justify-center">
                                    <Laptop className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">{dedicatedDeskPlan.name}</h3>
                                    <div className="text-3xl font-bold gradient-text">{dedicatedDeskPlan.price}<span className="text-base text-gray-500">{dedicatedDeskPlan.period}</span></div>
                                </div>
                            </div>
                            <ul className="grid md:grid-cols-2 gap-3 mb-6">
                                {dedicatedDeskPlan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-[#3d7118] shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-gradient-to-r from-[#3d7118] to-[#3d7118] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 btn-shine">
                                Reserve Dedicated Desk
                            </button>
                        </div>

                        {/* Boardroom */}
                        <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#e1ac00] to-[#e1ac00] rounded-2xl flex items-center justify-center">
                                    <Presentation className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">{boardroomPlan.name}</h3>
                                    <div className="text-3xl font-bold gradient-text">{boardroomPlan.price}<span className="text-base text-gray-500">{boardroomPlan.period}</span></div>
                                </div>
                            </div>
                            <ul className="grid md:grid-cols-2 gap-3 mb-6">
                                {boardroomPlan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-[#e1ac00] shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full bg-gradient-to-r from-[#e1ac00] to-[#e1ac00] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 btn-shine">
                                Book Boardroom
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00]"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Coffee className="h-16 w-16 text-[#e1ac00] mx-auto mb-6 animate-bounce-slow" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Book it, Experience it!
                    </h2>
                    <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                        We offer convenience and comfort. Come experience the perfect blend of productivity and community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-[#3d7118] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 btn-shine">
                            Book a Tour
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default CoWorkingPage;