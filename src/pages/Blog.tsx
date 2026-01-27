
import { blogs } from "@/data/blog";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";

const Blog = () => {
    return (
        <div className="min-h-screen bg-white">
            <TopHeader />
            <Navbar />
            <main className="py-16">
                <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
                    <div className="text-center mb-16">
                        <h1 className="text-[20px] md:text-[24px] lg:text-[27.2px] font-bold leading-[160%] text-[#257FA6] max-w-8xl mx-auto mb-8">
                            Latest Insights & News
                        </h1>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogs.map((blog) => (
                            <Link
                                to={`/blog/${blog.slug}`}
                                key={blog.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-gray-100 flex flex-col h-full"
                            >
                                <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
                                        {blog.category}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1.5 text-primary" />
                                            {blog.date}
                                        </div>
                                        <div className="flex items-center">
                                            <User className="w-4 h-4 mr-1.5 text-primary" />
                                            {blog.author}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {blog.title}
                                    </h2>

                                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                                        {blog.excerpt}
                                    </p>

                                    <div
                                        className="inline-flex items-center text-primary font-semibold group-hover:text-secondary transition-colors mt-auto"
                                    >
                                        Read Article
                                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <FooterCTA />
            <Footer />
        </div>
    );
};

export default Blog;
