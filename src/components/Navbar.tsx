import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">TechMaster</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">首页</a>
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">服务</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">案例</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">关于我</a>
            <a href="#faq" className="text-gray-300 hover:text-blue-400 transition-colors">常见问题</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all transform hover:scale-105">
              立即咨询
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-5 duration-300">
            <a href="#home" className="block text-gray-300 hover:text-blue-400 py-2 transition-colors">首页</a>
            <a href="#services" className="block text-gray-300 hover:text-blue-400 py-2 transition-colors">服务</a>
            <a href="#projects" className="block text-gray-300 hover:text-blue-400 py-2 transition-colors">案例</a>
            <a href="#about" className="block text-gray-300 hover:text-blue-400 py-2 transition-colors">关于我</a>
            <a href="#faq" className="block text-gray-300 hover:text-blue-400 py-2 transition-colors">常见问题</a>
            <a href="#contact" className="block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-center transition-colors">
              立即咨询
            </a>
          </div>
        )}
      </div>
    </header>
  );
}