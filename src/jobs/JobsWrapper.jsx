import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useStore } from '@/store';
import JobCard from './JobCard';

const LoadingSpinner = () => (
  <div className='flex justify-center items-center w-screen h-fit'>
    <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-primary'></div>
  </div>
);

const fetchJobs = async () => {
  const response = await fetch(
    'https://find-work-using-ai-main-pymnbx.laravel.cloud/api/jobsearch',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }

  const result = await response.json();
  return result.data;
};

const JobsWrapper = () => {
  const { jobsData } = useStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
    enabled:
      !jobsData ||
      !jobsData.jobs ||
      !Array.isArray(jobsData.jobs) ||
      jobsData.jobs.length === 0,
  });

  let jobsToDisplay = [];
  if (
    jobsData?.jobs &&
    Array.isArray(jobsData.jobs) &&
    jobsData.jobs.length > 0
  ) {
    jobsToDisplay = jobsData.jobs;
  } else if (data && Array.isArray(data)) {
    jobsToDisplay = data;
  }

  if (isLoading && (!jobsData || !jobsData.jobs)) {
    return <LoadingSpinner />;
  }

  if (error && (!jobsData || !jobsData.jobs)) {
    return (
      <div className='text-red-500 text-center p-4'>
        Error loading jobs: {error.message}
      </div>
    );
  }

  if (!jobsToDisplay.length) {
    return (
      <div className='text-gray-500 text-center p-4'>
        No jobs available at the moment.
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-10'>
      {jobsToDisplay.map((item) => (
        <JobCard
          key={item.job_id}
          title={item.job_title}
          description={item.job_description}
          employer={item.employer_name}
          employerLogo={item.employer_logo}
          applyLink={item.job_apply_link}
          date={item.job_posted_at}
          location={item.job_location}
          type={item.job_employment_type}
          tag={item?.compatibility}
        />
      ))}
    </div>
  );
};

export default JobsWrapper;
