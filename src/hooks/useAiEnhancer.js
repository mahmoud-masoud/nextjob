import { useMutation } from '@tanstack/react-query';

const useAIEnhancer = () => {
  const enhanceWithAI = async ({ text, section }) => {
    console.log(text, section);
    const API_URL =
      'https://find-work-using-ai-main-pymnbx.laravel.cloud/api/enhance';

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, section }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  };

  return useMutation({
    mutationFn: enhanceWithAI,
  });
};

export default useAIEnhancer;
