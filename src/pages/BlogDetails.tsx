
import { useParams, Link } from "react-router-dom";
import { blogDetails } from "@/data/blogDetails";
import { blogs } from "@/data/blog";
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";

const BlogDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogDetails.find((p) => p.slug === slug);
    const relatedPosts = blogs.filter(b => b.slug !== slug).slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <TopHeader />
                <Navbar />
                <div className="flex-grow flex flex-col items-center justify-center bg-gray-50 py-20">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                    <p className="text-gray-600 mb-8">The article you are looking for does not exist.</p>
                    <Link to="/blog" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors">
                        Back to Blog
                    </Link>
                </div>
                <FooterCTA />
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <TopHeader />
            <Navbar />

            <main>
                {/* Hero Section */}
                <div className="relative h-[400px] md:h-[500px] w-full">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="w-full h-full bg-gray-200">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12">
                        <div className="max-w-[1290px] mx-auto px-4 xl:px-0 w-full">
                            {/* <Link
                                to="/blog"
                                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Blog
                            </Link> */}
                            <div className="flex items-center space-x-2 text-sm md:text-base font-medium text-[#1D81A5] mb-4 uppercase tracking-wider">
                                <span>{post.category}</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl text-white">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-white/90">
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    {post.date}
                                </div>
                                <div className="flex items-center">
                                    <User className="w-5 h-5 mr-2" />
                                    {post.author}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-[1290px] mx-auto px-4 xl:px-0 py-16">
                    <div className="max-w-7xl mx-auto">
                        <article className="prose prose-lg prose-headings:text-primary prose-a:text-primary hover:prose-a:text-secondary max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </article>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 flex items-center">
                                <Tag className="w-4 h-4 mr-2" />
                                Related Tags
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors cursor-default"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Posts Section */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((blog) => (
                                <Link
                                    to={`/blog/${blog.slug}`}
                                    key={blog.id}
                                    className="group bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="relative overflow-hidden aspect-[16/10] bg-gray-200">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold text-primary uppercase tracking-wider">
                                            {blog.category}
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                                            <div className="flex items-center">
                                                <Calendar className="w-3.5 h-3.5 mr-1 text-primary" />
                                                {blog.date}
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        <div className="mt-auto pt-4 flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <FooterCTA />
            <Footer />
        </div>
    );
};

export default BlogDetails;
