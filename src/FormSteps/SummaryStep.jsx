import { SparklesIcon } from 'lucide-react';
import { useRef } from 'react';
import useAIEnhancer from '@/hooks/useAiEnhancer';

const SummaryStep = ({ register, errors, getValues, setValue }) => {
  const summaryRef = useRef(null);
  const { mutate, isPending, isError, error, isSuccess } = useAIEnhancer();

  const handleSubmit = () => {
    const summaryValue = getValues('summary');
    if (summaryValue.trim()) {
      mutate(
        { text: summaryValue, section: 'summary' },
        {
          onSuccess: (response) => {
            console.log('Success:', response);
            setValue('summary', response?.data);
          },
          onError: (error) => {
            console.error('Error:', error);
          },
        }
      );
    }
  };
  return (
    <div className='space-y-4'>
      <div>
        <div className='flex justify-between mb-3 items-center'>
          <label className='block text-sm font-medium text-gray-300'>
            Summary
          </label>
          <button
            onClick={handleSubmit}
            type='button'
            className={`group text-emerald-400 text-sm font-semibold flex items-center gap-1 hover:gap-2
    p-2 hover:bg-gray-300/10 duration-200 rounded-md relative
    ${isPending ? 'animate-pulse' : ''}`}
            disabled={isPending}
          >
            <SparklesIcon
              className={`size-4 duration-200 ${
                isPending ? 'animate-ping text-emerald-300' : ''
              }`}
            />
            <span
              className={`relative transition-all duration-200
      ${isPending ? 'text-emerald-300 animate-glow' : ''}`}
            >
              {isPending ? 'Enhancing...' : 'Enhance with AI'}
            </span>
          </button>
        </div>
        <textarea
          ref={summaryRef}
          {...register('summary', { required: 'Summary is required' })}
          className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
            errors.summary ? 'border-red-500' : ''
          }`}
          rows={4}
        />
        {errors.summary && (
          <p className='text-red-500 text-sm'>{errors.summary.message}</p>
        )}
      </div>
    </div>
  );
};
export default SummaryStep;
