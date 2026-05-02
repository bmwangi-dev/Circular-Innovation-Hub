import { useEffect, useState } from 'react';
import {
    ArrowRight,
    Sparkles,
    Users,
    ChevronRight,
    Rocket,
    Handshake,
    Award,
    TrendingUp,
    CheckCircle,
    Calendar,
    ExternalLink,
    Search,
    Target,
    X as XIcon
} from 'lucide-react';

// Project data based on the provided CMS data
const projectsData = [
    {
        id: "1",
        name: "Mentorship And Coaching Program",
        summary:
            "A transformative mentorship and coaching initiative launched in Q1 2025 to empower entrepreneurs with practical guidance, business skills, and growth opportunities.",
        image:
            "https://cdn.prod.website-files.com/635673d6c8505112db680f36/6891fe5f4b0df4907fec586f_IMG-20250805-WA0051-p-1080.jpg",
        category: "Training",
        date: "2025",
    },
    {
        id: "2",
        name: "Circular Table",
        summary:
            "The Circular Table connects entrepreneurs and innovators in waste management, circular economy and sustainability.",
        image:
            "https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e336892aabedfae90fd89_Circular%20Table%203-p-800.jpg",
        category: "Event",
        date: "2024",
    },
    {
        id: "3",
        name: "Grant Application, Proposal Writing & Tendering Workshop",
        summary:
            "A full-day workshop helping entrepreneurs gain practical proposal and tendering skills.",
        image:
            "https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e333c92b89e39c3c434d1_Grant%20Application%202-p-1080.jpg",
        category: "Workshop",
        date: "2024",
    },
    {
        id: "4",
        name: "Barcode Training Program",
        summary:
            "In partnership with GS1 Kenya, equipping entrepreneurs with barcode and traceability skills.",
        image:
            "https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e334c8666671121420e8a_Barcode%20Training%20Program-p-800.jpg",
        category: "Training",
        date: "2024",
    },
];

// Impact stats
const impactStats = [
    { number: "4", label: "Major Projects", description: "Successfully delivered", icon: Award },
    { number: "200+", label: "Participants Trained", description: "Across all programs", icon: Users },
    { number: "15+", label: "Partner Organizations", description: "Collaborating with us", icon: Handshake },
    { number: "85%", label: "Satisfaction Rate", description: "From participants", icon: TrendingUp }
];

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const categories = ["All", "Training", "Event", "Workshop"];

    const filteredProjects = selectedCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const openModal = (project: typeof projectsData[0]) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* HERO SECTION - Projects */}
            <section className="relative min-h-[60vh] bg-gradient-to-br from-white via-green-50/30 to-yellow-50/30 overflow-hidden pt-28 lg:pt-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#3d7118] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#e1ac00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow delay-1000"></div>
                    <Sparkles className="absolute top-20 right-[15%] text-[#3d7118] opacity-20 w-32 h-32 animate-float" />
                    <Rocket className="absolute bottom-20 left-[10%] text-[#e1ac00] opacity-25 w-28 h-28 animate-float-delayed" />
                    <div className="absolute top-1/3 left-[5%] w-64 h-64 bg-[#3d7118] rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up mb-6">
                            Our <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-slide-up delay-100 max-w-2xl mx-auto">
                            Discover the impactful initiatives and programs we've delivered across Africa, empowering entrepreneurs and driving circular economy innovation.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(61,113,24,0.06)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* IMPACT STATS SECTION */}
            <section className="relative py-16 bg-gradient-to-br from-gray-50 to-green-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        {impactStats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#3d7118] to-[#e1ac00] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <stat.icon className="h-8 w-8 text-white" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                                <p className="text-gray-800 font-semibold">{stat.label}</p>
                                <p className="text-gray-500 text-sm">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FILTERS SECTION */}
            <section className="relative z-20 py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                type="button"
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`relative z-30 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium cursor-pointer select-none transition-all duration-300 ${selectedCategory === category
                                    ? "bg-gradient-to-r from-[#3d7118] to-[#e1ac00] text-white shadow-lg"
                                    : "bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-[#3d7118]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS GRID SECTION */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, idx) => (
                            <div
                                key={project.id}
                                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift transition-all cursor-pointer animate-scale-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#3d7118]">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#3d7118] transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                        {project.summary}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Calendar className="h-4 w-4" />
                                            <span>{project.date}</span>
                                        </div>
                                        <button
                                            onClick={() => openModal(project)}
                                            className="flex items-center gap-2 text-[#3d7118] font-medium text-sm group-hover:gap-3 transition-all"
                                        >
                                            Learn More
                                            <ChevronRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <Search className="h-12 w-12 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
                            <p className="text-gray-500">Try selecting a different category</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00]"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <Handshake className="h-16 w-16 text-[#e1ac00] mx-auto mb-6 animate-bounce-slow" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Partner With Us
                    </h2>
                    <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                        Interested in collaborating on future projects? Let's create impact together.
                    </p>
                    <button className="bg-white text-[#3d7118] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 mx-auto btn-shine">
                        Get in touch
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </section>

            {/* MODAL FOR PROJECT DETAILS */}
            {isModalOpen && selectedProject && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header Image */}
                        <div className="relative h-64 md:h-80 overflow-hidden">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all"
                            >
                                <XIcon className="h-5 w-5" />
                            </button>
                            <div className="absolute bottom-4 left-4">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#3d7118]">
                                    {selectedProject.category}
                                </span>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                {selectedProject.name}
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {selectedProject.summary}
                            </p>

                            <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-6 mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Target className="h-5 w-5 text-[#3d7118]" />
                                    Key Highlights
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-3 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-[#3d7118]" />
                                        <span>Partnership with leading organizations</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-[#3d7118]" />
                                        <span>Hands-on training and mentorship</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-600">
                                        <CheckCircle className="h-4 w-4 text-[#3d7118]" />
                                        <span>Practical skills development</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-gradient-to-r from-[#3d7118] to-[#e1ac00] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                    <ExternalLink className="h-4 w-4" />
                                    Learn More
                                </button>
                                <button className="flex-1 border-2 border-[#3d7118] text-[#3d7118] px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-2">
                                    <Handshake className="h-4 w-4" />
                                    Partner With Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsPage;
