import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
    return (
        <footer id="footer" className="bg-primary text-white py-16 relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] ">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="Educabea Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="font-display text-xl font-medium tracking-wide">
                                Beatriz Olivares
                            </span>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                            Acompañando a niños y familias en el proceso de aprendizaje con amor, respeto y profesionalidad.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-lg text-white mb-6">Explora</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-white/70 hover:text-secondary transition-colors">Inicio</Link></li>
                            <li><Link href="/#about" className="text-white/70 hover:text-secondary transition-colors">Sobre mí</Link></li>
                            <li><Link href="/clases-particulares" className="text-white/70 hover:text-secondary transition-colors">Clases Particulares</Link></li>
                            <li><Link href="/blog" className="text-white/70 hover:text-secondary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg text-white mb-6">Contacto</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:beatrizoc99@hotmail.com" className="flex items-center gap-2 text-white/70 hover:text-secondary transition-colors group text-sm">
                                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                                    beatrizoc99@hotmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/educabea.es/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-secondary transition-colors group text-sm">
                                    <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                                    @educabea.es
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <NewsletterForm />
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <div className="flex gap-6">
                        <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
                        <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link href="/politica-de-cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
                    </div>
                    <p>Copyright © {new Date().getFullYear()} Todos los derechos reservados | Diseño por <a href="https://www.instagram.com/jorgereina.fl/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Jorge Reina FL</a></p>
                </div>
            </div>
        </footer>
    );
}
