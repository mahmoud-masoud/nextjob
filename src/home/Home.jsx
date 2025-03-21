import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
const Home = () => {
  return (
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
