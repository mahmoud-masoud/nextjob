import { useStore } from '@/store';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

// API call function using fetch
const submitData = async (data) => {
  const API_URL =
    'https://find-work-using-ai-main-pymnbx.laravel.cloud/api/jobs';
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

// Custom hook
const useSubmitForm = () => {
  const { setJobs } = useStore();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: submitData,
    onSuccess: (data) => {
      console.log('Data submitted successfully:', data);
      setJobs(data);
      navigate('/jobs');
    },
    onError: (error) => {
      console.error('Error submitting data:', error);
    },
    onSettled: () => {
      console.log('Submission attempt finished');
    },
  });

  // The submit function to be used in your component
  const handleSubmit = (data) => {
    mutation.mutate(data);
  };

  return {
    submit: handleSubmit,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data,
  };
};

export default useSubmitForm;
