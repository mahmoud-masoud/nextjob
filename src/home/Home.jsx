import heroImage from '@/assets/hero.png';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
const Home = () => {
  return (
    // <main className='h-screen flex flex-col items-center container mx-auto'>
    //   <div className='pt-24 mb-14 text-center'>
    //     <h1 className='text-4xl text-white mb-2'>
    //       Create, Enhance, Match: Your Job Awaits
    //     </h1>
    //     <p className='text-gray-300 text-lg'>
    //       Lorem ipsum dolor sit amet consectetur adipisicing.
    //     </p>
    //   </div>
    //   <div className='flex justify-around items-center w-full'>
    //     <section>
    //       <ul className='flex gap-4 flex-col'>
    //         {Array(5)
    //           .fill(null)
    //           .map((_, index) => (
    //             <li key={index}>
    //               <FeatureItem counter={index + 1} />
    //             </li>
    //           ))}
    //       </ul>
    //     </section>
    //     <section>
    //       <div className='max-h-[450px] h-[450px]'>
    //         <img src={heroImage} alt='' className='max-h-full' />
    //       </div>
    //     </section>
    //   </div>
    //   <div className='pt-10'>
    //     <Link
    //       to='choose-method'
    //       className='group relative bg-primary hover:bg-primary/70 duration-300 text-lg
    //        font-medium text-white rounded-lg py-2 px-6 hover:pr-12 flex gap-2 overflow-hidden'
    //     >
    //       <span>Let's get started</span>
    //       <ChevronRight
    //         className='absolute right-0 duration-300 group-hover:-translate-x-3 opacity-0 group-hover:opacity-100
    //        translate-x-5 top-1/2 -translate-y-1/2 size-6'
    //       />
    //     </Link>
    //   </div>
    // </main>

    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default Home;

const FeatureItem = ({ counter }) => {
  return (
    <div className='text-white flex gap-4 items-center'>
      <span
        className='size-10 flex justify-center items-center rounded-full text-lg text-white
     bg-gradient-to-b from-[#184F78] to-primary'
      >
        {counter}
      </span>
      <div className=''>
        <h3 className='text-lg mb-1.5 font-semibold'>
          Lorem, ipsum dolor sit.
        </h3>
        <p className='text-gray-400 text-sm'>
          sit amet consectetur adipisicing elit. Laudantium
        </p>
      </div>
    </div>
  );
};
