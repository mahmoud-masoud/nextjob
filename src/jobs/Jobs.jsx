import { Search } from 'lucide-react';
import Filters from './Filters';
import JobsWrapper from './JobsWrapper';

const Jobs = () => {
  return (
    <div>
      <div className='container max-w-6xl mx-auto'>
        <div className='text-center py-10 max-w-2xl mx-auto'>
          <h2 className='text-primary font-semibold text-4xl mb-6'>
            Find Your Perfect Job
          </h2>
          <p className='text-gray-300'>
            Discover opportunities that match your skills and experience. Your
            CV is already optimized for these positions.
          </p>
        </div>
        <div className='my-8 max-w-4xl mx-auto '>
          <div className='relative flex items-center'>
            <Search className='absolute left-4 text-gray-400 h-5 w-5' />
            <input
              type='text'
              placeholder='Search jobs, companies, or skills...'
              className='border border-border-color pl-12 pr-4 py-6 w-full bg-foreground
           focus:border-emerald-500 rounded-xl text-white'
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className='absolute my-2 right-2 bg-primary hover:bg-emerald-600 duration-200 
       px-6 rounded-lg h-[70%]'
            >
              Search
            </button>
          </div>
        </div>
        <div className='flex gap-10  py-20 relative'>
          {/* <Filters /> */}
          <JobsWrapper />
        </div>
      </div>
    </div>
  );
};
export default Jobs;
