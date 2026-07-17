import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";
import { BookOpen } from "lucide-react";

const Blog = () => {
    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Helmet>
                <title>Blog - Athos Collagen | Marine Collagen Insights & Research</title>
                <meta name="description" content="Expert insights on fish collagen, marine collagen peptides, gelatin manufacturing, and industry trends. Educational content for manufacturers and buyers." />
                <link rel="canonical" href="https://athoscollagen.com/blog" />
            </Helmet>
            <TopHeader />
            <Navbar />
            <main className="py-20 md:py-32">
                <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
                    <div className="text-center max-w-2xl mx-auto py-12 md:py-20">
                        <div className="w-16 h-16 bg-[#257FA6]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#257FA6]">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Latest Insights & News
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We are currently updating our blog to bring you the latest research, market insights, and manufacturing innovations in marine collagen and fish gelatin. Please check back soon for our new articles.
                        </p>
                    </div>
                </div>
            </main>
            <FooterCTA />
            <Footer />
        </div>
    );
};

export default Blog;
