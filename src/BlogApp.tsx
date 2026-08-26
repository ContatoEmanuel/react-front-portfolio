import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Blog from './components/sections/Blog';
import BlogPost from './components/sections/BlogPost';
import { getVisibleBlogPosts } from './data/blogPosts';
import { IBlogPost } from './types';

function BlogApp() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedPost, setSelectedPost] = useState<IBlogPost | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if there is an ID in the query params
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
    if (postId) {
      const posts = getVisibleBlogPosts();
      const post = posts.find(p => p.id === Number(postId));
      if (post) {
        setSelectedPost(post);
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePostClick = (post: IBlogPost) => {
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set('id', post.id.toString());
    window.history.pushState({}, '', url);
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('id');
    window.history.pushState({}, '', url);
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* We reuse Navbar, but links like #about won't work on /blog.html out of the box unless they point to /#about. We will update Navbar later to handle this. */}
      <Navbar />
      <main className="pt-24 min-h-screen">
        {selectedPost ? (
          <BlogPost 
            post={selectedPost} 
            onBack={handleBack} 
            onNavigateToPost={handlePostClick}
            allPosts={getVisibleBlogPosts()} 
          />
        ) : (
          <Blog 
            isDedicatedPage={true} 
            onPostClick={handlePostClick} 
          />
        )}
      </main>
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : 'hidden'}`}
        aria-label="Voltar ao topo"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}

export default BlogApp;
