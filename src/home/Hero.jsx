import { useEffect, useRef } from 'react';
import { ArrowRight, FileText, Briefcase } from 'lucide-react';
import { Link } from 'react-router';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className='relative min-h-screen flex items-center pt-20 overflow-hidden'
      style={{
        backgroundImage: `radial-gradient(
          circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
          rgba(16, 185, 129, 0.12),
          transparent 35%
        )`,
      }}
    >
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-[30%] -right-[10%] w-[55%] h-[55%] bg-emerald-500/5 rounded-full blur-[100px]' />
        <div className='absolute top-[50%] -left-[10%] w-[30%] h-[30%] bg-emerald-900/20 rounded-full blur-[80px]' />
        <div className='absolute -bottom-[20%] right-[20%] w-[40%] h-[40%] bg-blue-900/30 rounded-full blur-[100px]' />
      </div>

      <div className='max-container relative z-10 px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
        {/* Hero Content */}
        <div className='text-left animate-fade-in'>
          <div className='inline-block glass-dark px-4 py-2 rounded-full mb-6 animate-slide-down'>
            <span className='text-sm font-medium text-emerald-400'>
              AI-Powered Career Acceleration
            </span>
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6 animate-slide-up'>
            Land Your Dream Job with{' '}
            <span className='text-emerald-400'>AI-Enhanced</span> CVs
          </h1>

          <p
            className='text-lg text-white/80 max-w-lg mb-8 animate-slide-up'
            style={{ animationDelay: '150ms' }}
          >
            Create professional CVs tailored to each job application and
            discover opportunities matched to your skills and experience.
          </p>

          <div
            className='flex flex-col sm:flex-row gap-4 animate-slide-up'
            style={{ animationDelay: '250ms' }}
          >
            <Link
              to={'/choose-method'}
              className='py-2 px-6 bg-primary hover:bg-primary/70 duration-200 flex gap-1 items-center justify-center rounded-md'
            >
              Create Your CV <ArrowRight size={18} className='ml-2' />
            </Link>
            <Link to={'/jobs'} className='border py-2 px-6 rounded-md'>
              Explore Jobs
            </Link>
          </div>

          <div
            className='flex items-center gap-6 mt-10 text-sm text-white/70 animate-slide-up'
            style={{ animationDelay: '350ms' }}
          >
            <div className='flex items-center'>
              <FileText size={16} className='mr-2 text-emerald-400' />
              <span>500+ CV Templates</span>
            </div>
            <div className='flex items-center'>
              <Briefcase size={16} className='mr-2 text-emerald-400' />
              <span>10,000+ Job Listings</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className='relative perspective'>
          <div className='relative preserve-3d p-2 md:p-4 glass-dark rounded-2xl shadow-xl transform rotate-y-5 rotate-x-2 animate-float-slow'>
            <div className='absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-50 rounded-2xl' />
            <img
              src='https://placehold.co/600x400/1a1a2e/10b981?text=CV+Generator+Preview'
              alt='CV Generator Preview'
              className='rounded-lg shadow-lg transform preserve-3d'
            />

            <div className='absolute -bottom-6 -right-6 glass-dark p-4 rounded-xl shadow-lg transform translate-z-8 animate-pulse-slow'>
              <div className='text-emerald-400 text-sm font-medium'>
                AI Suggestion
              </div>
              <div className='text-white text-xs'>
                Highlight your project management skills for better results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
