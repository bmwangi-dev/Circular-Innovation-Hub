import { Link } from 'react-router-dom';
import {
    MapPin,
    Mail,
    Phone,
} from 'lucide-react';
import logoImg from '../assets/images/CIH_logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#1B4332] text-emerald-100/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 gap-8 md:gap-12 lg:gap-32">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div>
                            <img src={logoImg} alt="CIH Logo" className="h-32 w-32 object-contain" />
                            <p className="mt-6 text-sm leading-relaxed text-emerald-100/60 max-w-sm">
                                Inspiring and enabling the transition to a sustainable world through circular economy excellence.
                            </p>
                        </div>
                        <p className="text-xs text-emerald-100/40">
                            Circular Innovation Hub<br />
                            © 2024 All rights reserved.
                        </p>
                    </div>

                    {/* Links & Contact Column */}
                    <div className="grid sm:grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/about" className="hover:text-[#F4A261] transition-colors">About Us</Link></li>
                                <li><Link to="/entrepreneurs" className="hover:text-[#F4A261] transition-colors">Entrepreneurs</Link></li>
                                <li><Link to="/corporates" className="hover:text-[#F4A261] transition-colors">Corporates</Link></li>
                                <li><Link to="/advisory" className="hover:text-[#F4A261] transition-colors">Advisory Services</Link></li>
                                <li><Link to="/co-working" className="hover:text-[#F4A261] transition-colors">Co-working</Link></li>
                                <li><Link to="/bpo" className="hover:text-[#F4A261] transition-colors">BPO</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-[#F4A261] shrink-0" />
                                    <span>Nairobi, Kenya</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-[#F4A261] shrink-0" />
                                    <span className="break-all">info@circularhub.africa</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-[#F4A261] shrink-0" />
                                    <span>+254 700 000000</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
