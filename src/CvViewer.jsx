import { useNavigate } from 'react-router';
import { useStore } from './store';
import RandomCV from './upload-cv/RandomCV';
import { useMutation } from '@tanstack/react-query';

const postData = async (data) => {
  const response = await fetch(
    'https://find-work-using-ai-main-pymnbx.laravel.cloud/api/jobs',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to post data');
  }

  return response.json();
};

const CvViewer = () => {
  const { cvData, setJobs } = useStore(); // Get cvData from store
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: postData, // Correct mutation function
    onSuccess: (data) => {
      setJobs(data);
      navigate('/jobs');
    },
  });

  const handleClick = () => {
    mutation.mutate(cvData); // Send cvData to API
  };

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto flex justify-center items-center'>
        <RandomCV data={cvData} />

        <div className='flex flex-col justify-center items-center'>
          <p className='text-2xl mb-4 max-w-sm text-center'>
            Find jobs that match your CV easily to apply
          </p>
          <button
            onClick={handleClick}
            className='bg-primary px-6 py-2 text-white hover:bg-primary/70 rounded-md'
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'pleas wait...' : 'Find Jobs'}
          </button>

          {mutation.isError && (
            <p className='text-red-500 mt-2'>Error: {mutation.error.message}</p>
          )}

          {/* {mutation.isSuccess && (
            <div className='mt-4 p-4 bg-green-100 rounded-md'>
              <h3 className='font-bold'>Jobs Found:</h3>
            
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CvViewer;
