import { useStore } from '@/store';
import JobCard from './JobCard';

const JobsWrapper = () => {
  const { jobsData } = useStore();
  return (
    <div className='flex flex-col gap-10'>
      {jobsData.jobs.map((item) => (
        <JobCard
          key={item?.job_id}
          title={item?.job_title}
          description={item?.job_description}
          employer={item?.employer_name}
          employerLogo={item?.employer_logo}
          applyLink={item?.job_apply_link}
          date={item?.job_posted_at}
          location={item?.job_location}
          type={item?.job_employment_type}
          tag={item?.compatibility}
        />
      ))}
    </div>
  );
};

export default JobsWrapper;

import { useQuery } from '@tanstack/react-query';

// Spinner component
const LoadingSpinner = () => (
  <div className='flex justify-center items-center h-screen'>
    <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500'></div>
  </div>
);

// Main Jobs component
const JobsList = () => {
  // Fetch function for the API using native fetch

  // UseQuery hook
  const { data, isLoading, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });

  // Handle loading state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Handle error state
  if (error) {
    return (
      <div className='text-red-500 text-center p-4'>
        Error loading jobs: {error.message}
      </div>
    );
  }

  // Render jobs data
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Job Listings</h1>
      <div className='grid gap-4'>
        {data &&
          data.map((job, index) => (
            <div key={index} className='border p-4 rounded-lg'>
              {/* Adjust these fields based on your actual API response structure */}
              <h2 className='text-xl font-semibold'>{job.title}</h2>
              <p className='text-gray-600'>{job.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
