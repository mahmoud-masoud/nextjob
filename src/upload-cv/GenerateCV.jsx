import { FilePlus, FileUp } from 'lucide-react';
import { Link } from 'react-router';

const GenerateCV = () => {
  return (
    <div
      className='flex flex-col  h-full aspect-square
     items-center justify-center gap-4 bg-blue-400/15 border border-border-color text-center
       rounded-3xl hover:border-primary duration-300
p-8
     '
    >
      <div
        className='flex size-20 items-center justify-center border
             p-4 rounded-full border-blue-600/50 bg-sky-900/50'
      >
        <FilePlus className='size-10 text-emerald-400' />
      </div>
      <h3 className='text-2xl'>Create New CV</h3>
      <p className='text-gray-300'>
        Start from scratch with our professional templates and step-by-step
        builder.
      </p>

      <Link
        to={'/generate-cv'}
        className='w-full text-lg mt-10
             font-medium text-white rounded-md py-2 px-6
             hover:bg-emerald-500
        bg-primary duration-300'
      >
        Create CV
      </Link>
    </div>
  );
};

export default GenerateCV;
