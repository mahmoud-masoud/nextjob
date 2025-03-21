import { useState } from 'react';
import GenerateCV from './GenerateCV';
import UploadCV from './UploadCV';

const BuildCVWrapper = () => {
  const [isCvUploaded, setIsCvUploaded] = useState(false);

  return (
    <div className='container mx-auto flex flex-col items-center'>
      <h1 className='text-3xl font-semibold text-center pt-32 pb-20'>
        Upload your CV or Generate one with AI ✨
      </h1>

      <div
        className={` flex flex-col gap-10 md:flex-row justify-between items-center w-4xl ${
          isCvUploaded && 'justify-center'
        }`}
      >
        <UploadCV setIsCvUploaded={setIsCvUploaded} />
        {!isCvUploaded && <GenerateCV />}
      </div>

      {/* <div className='flex-col flex items-center gap-10'>
          <div className='flex gap-10 items-center'>
            <AISuccessMessage />
            <div>
              <img src={isCvUploaded} alt='' className='max-h-[550px]' />
            </div>
          </div>
          <Link to={'/jobs'} className='bg-primary py-2 px-6 text-white'>
            Go to recemended jobs
          </Link>
        </div> */}
    </div>
  );
};

export default BuildCVWrapper;

const AISuccessMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center bg-green-100 border border-green-300 p-6 rounded-2xl shadow-lg max-w-md mx-auto mt-6 h-fit'>
      <h2 className='text-2xl font-bold text-green-700'>
        ✨ AI Magic Complete! ✨
      </h2>
      <p className='text-gray-700 mt-2'>
        Your CV has been transformed into a masterpiece! 🎨🚀
      </p>
      <p className='text-gray-500 mt-1'>Get ready to impress the world. 🌍🔥</p>
    </div>
  );
};
