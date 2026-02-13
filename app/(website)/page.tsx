import Hero from "../../components/Hero";
import QuoteSection from "../../components/QuoteSection";
import Steps from "../../components/Steps"; // Methodology
import BooksSection from "../../components/BooksSection";
import About from "../../components/About";
import ScrollToTop from "../../components/ScrollToTop";
import Testimonials from "../../components/Testimonials";
import LeadMagnet from "../../components/LeadMagnet";


export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Testimonials />
            <Steps />
            <LeadMagnet />
            <BooksSection />
            <QuoteSection />
            <ScrollToTop />
        </>
    );
}
