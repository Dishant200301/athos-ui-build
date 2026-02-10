import { useState } from "react";
import { blogCategories, blogs } from "@/data/blog";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Star, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredBlogs = selectedCategory === "All"
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    const blogsPerPage = 12;
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);



    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <TopHeader />
            <Navbar />
            <main className="py-16">
                <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-[20px] md:text-[24px] lg:text-[27.2px] font-bold leading-[160%] text-[#257FA6] max-w-8xl mx-auto mb-4">
                            Latest Insights & News
                        </h1>
                    </div>

                    {/* Filter Section - Centered */}
                    <div className="mb-12">
                        {/* Tablet - Two Rows (5 + 4) */}
                        <div className="hidden md:block lg:hidden">
                            <div className="flex justify-center gap-3 mb-3">
                                {blogCategories.slice(0, 5).map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setCurrentPage(1);
                                        }}
                                        className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${selectedCategory === category
                                            ? "bg-[#257FA6] text-white shadow-lg shadow-[#257FA6]/30 scale-105"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {category}
                                        {category !== "All" && (
                                            <span className="ml-2 text-xs opacity-75">
                                                ({blogs.filter(b => b.category === category).length})
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                            <div className="flex justify-center gap-3">
                                {blogCategories.slice(5, 9).map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setCurrentPage(1);
                                        }}
                                        className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${selectedCategory === category
                                            ? "bg-[#257FA6] text-white shadow-lg shadow-[#257FA6]/30 scale-105"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {category}
                                        {category !== "All" && (
                                            <span className="ml-2 text-xs opacity-75">
                                                ({blogs.filter(b => b.category === category).length})
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Desktop - Two Rows (7 + 2) */}
                        <div className="hidden lg:block">
                            <div className="flex justify-center gap-3 mb-3">
                                {blogCategories.slice(0, 7).map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setCurrentPage(1);
                                        }}
                                        className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${selectedCategory === category
                                            ? "bg-[#257FA6] text-white shadow-lg shadow-[#257FA6]/30 scale-105"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {category}
                                        {category !== "All" && (
                                            <span className="ml-2 text-xs opacity-75">
                                                ({blogs.filter(b => b.category === category).length})
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                            <div className="flex justify-center gap-3">
                                {blogCategories.slice(7, 9).map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setCurrentPage(1);
                                        }}
                                        className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${selectedCategory === category
                                            ? "bg-[#257FA6] text-white shadow-lg shadow-[#257FA6]/30 scale-105"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {category}
                                        {category !== "All" && (
                                            <span className="ml-2 text-xs opacity-75">
                                                ({blogs.filter(b => b.category === category).length})
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile - Horizontal Scroll (No Scrollbar) */}
                        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
                            <div className="flex gap-3 min-w-max pb-2">
                                {blogCategories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setCurrentPage(1);
                                        }}
                                        className={`px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                                            ? "bg-[#257FA6] text-white "
                                            : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {category}
                                        {category !== "All" && (
                                            <span className="ml-2 text-xs opacity-75">
                                                ({blogs.filter(b => b.category === category).length})
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {currentBlogs.map((blog) => {
                            const fullStars = Math.floor(blog.rating);
                            const hasHalfStar = blog.rating % 1 !== 0;

                            return (
                                <Link
                                    to={`/blog/${blog.slug}`}
                                    key={blog.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-gray-100 flex flex-col h-full"
                                >
                                    <div className="relative overflow-hidden aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#257FA6] uppercase tracking-wider shadow-md">
                                            {blog.category}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1.5 text-[#257FA6]" />
                                                    {blog.date}
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#257FA6] transition-colors duration-300 line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                                            {blog.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                            <span className="text-[#257FA6] font-semibold text-sm group-hover:gap-2 flex items-center transition-all duration-300">
                                                Read Article
                                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Pagination - Only for "All" category */}
                    {selectedCategory === "All" && totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`p-2 rounded-lg transition-all duration-300 ${currentPage === 1
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-white border border-gray-200 text-[#257FA6] hover:bg-[#257FA6] hover:text-white hover:border-[#257FA6]"
                                    }`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${currentPage === page
                                        ? "bg-[#257FA6] text-white shadow-lg shadow-[#257FA6]/30"
                                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`p-2 rounded-lg transition-all duration-300 ${currentPage === totalPages
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "bg-white border border-gray-200 text-[#257FA6] hover:bg-[#257FA6] hover:text-white hover:border-[#257FA6]"
                                    }`}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {currentBlogs.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 mb-4">
                                <Star className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                            <p className="text-gray-600">Try selecting a different category</p>
                        </div>
                    )}
                </div>
            </main>
            <FooterCTA />
            <Footer />
        </div>
    );
};

export default Blog;
