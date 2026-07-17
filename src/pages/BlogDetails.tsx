import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";

const BlogDetails = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Helmet>
                <title>Article - Athos Collagen</title>
            </Helmet>
            <TopHeader />
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-20 px-4">
                <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-[#257FA6]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#257FA6]">
                        <BookOpen className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Under Update</h1>
                    <p className="text-gray-600 mb-8">
                        The requested article is currently being updated with new research and insights. Please return to the main insights page.
                    </p>
                    <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-[#257FA6] hover:bg-[#1D6382] text-white rounded-lg transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </div>
            </div>
            <FooterCTA />
            <Footer />
        </div>
    );
};

export default BlogDetails;
