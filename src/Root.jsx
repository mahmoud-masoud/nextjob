import {
  BriefcaseBusiness,
  Facebook,
  File,
  FileIcon,
  Github,
  Home,
  HomeIcon,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { Outlet, Link } from 'react-router';

const Root = () => {
  return (
    <div>
      <header className='bg-blue-400/10 backdrop-blur-2xl sticky top-0 z-50 px-4 '>
        <div className='container mx-auto flex justify-between items-center'>
          <h3 className='text-2xl font-semibold'>
            <Link to={'/'}>
              Next <span className='text-primary'>Job</span>
            </Link>
          </h3>
          <div className='flex justify-center items-center gap-10'>
            <Link
              to={'/choose-method'}
              className='flex gap-2 items-center py-4 text-lg text-white
             hover:text-emerald-400 duration-200'
            >
              <span className=''>Build CV</span>
            </Link>
            <Link
              to={'/jobs'}
              className='flex gap-2 items-center py-4 text-lg text-white
             hover:text-emerald-400 duration-200'
            >
              <span className=''>Jobs Board</span>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className='bg-gradient-to-bl mt-20 from-blue-950 to-sky-900 text-white py-8'>
        <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6'>
          {/* Brand */}
          <div className='text-center md:text-left'>
            <Link to={'/'}>
              <h3 className='text-2xl font-semibold mb-4'>
                Next <span className='text-primary'>Job</span>
              </h3>
            </Link>
            <p className='text-gray-200 text-sm max-w-sm'>
              AI-powered CV builder and job board helping professionals showcase
              their skills and find their dream jobs.
            </p>
          </div>

          {/* Links */}
          <div className='container mx-auto flex justify-center items-center'>
            <div className='flex justify-center items-center gap-10'>
              <Link
                to={'/choose-method'}
                className='flex gap-2 items-center py-4 text-lg text-white
             hover:text-emerald-400 duration-200'
              >
                <span className=''>Build CV</span>
              </Link>
              <Link
                to={'/jobs'}
                className='flex gap-2 items-center py-4 text-lg text-white
             hover:text-emerald-400 duration-200'
              >
                <span className=''>Jobs Board</span>
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className='flex space-x-4 mt-6'>
            <a
              href='#'
              className='w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-white/10 text-white/70 hover:text-emerald-400 transition-colors'
            >
              <Facebook size={18} />
            </a>
            <a
              href='#'
              className='w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-white/10 text-white/70 hover:text-emerald-400 transition-colors'
            >
              <Twitter size={18} />
            </a>
            <a
              href='#'
              className='w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-white/10 text-white/70 hover:text-emerald-400 transition-colors'
            >
              <Instagram size={18} />
            </a>
            <a
              href='#'
              className='w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-white/10 text-white/70 hover:text-emerald-400 transition-colors'
            >
              <Linkedin size={18} />
            </a>
            <a
              href='#'
              className='w-9 h-9 flex items-center justify-center rounded-full glass hover:bg-white/10 text-white/70 hover:text-emerald-400 transition-colors'
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Root;
