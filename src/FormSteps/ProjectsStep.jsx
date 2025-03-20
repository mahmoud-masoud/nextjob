import { Trash2Icon, SparklesIcon } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';
import { useRef } from 'react';
import useAIEnhancer from '@/hooks/useAiEnhancer';

const ProjectsStep = ({ register, errors, control, getValues, setValue }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'projects',
  });

  const descriptionRefs = useRef([]);
  const { mutate, isPending } = useAIEnhancer();

  const handleEnhance = (index) => {
    const projectDescription = getValues(`projects[${index}].description`);

    if (projectDescription.trim()) {
      mutate(
        {
          text: projectDescription,
          section: 'project',
        },
        {
          onSuccess: (response) => {
            setValue(`projects[${index}].description`, response?.data);
          },
          onError: (error) => {
            console.error('Error enhancing project description:', error);
          },
        }
      );
    }
  };

  return (
    <div className='space-y-4'>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className='space-y-4 border border-border-color p-4 rounded-md'
        >
          <div className='flex justify-between items-center w-full'>
            <h3 className='text-lg font-semibold'>Project {index + 1}</h3>
            <div className='flex items-center gap-2'>
              <button
                type='button'
                onClick={() => remove(index)}
                className='text-red-300 hover:text-red-400 p-2 rounded-md hover:bg-gray-400/30'
              >
                <Trash2Icon className='size-4' />
              </button>
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-2'>
              Title
            </label>
            <input
              {...register(`projects[${index}].title`, {
                required: 'Title is required',
              })}
              className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
                errors.projects?.[index]?.title ? 'border-red-500' : ''
              }`}
            />
            {errors.projects?.[index]?.title && (
              <p className='text-red-500 text-sm'>
                {errors.projects[index].title.message}
              </p>
            )}
          </div>
          <div>
            <div className='flex justify-between items-center'>
              <label className='block text-sm font-medium text-gray-300 mb-2'>
                Description
              </label>
              <button
                type='button'
                onClick={() => handleEnhance(index)}
                className={`group text-emerald-400 text-sm font-semibold flex items-center gap-1 hover:gap-2
                  p-2 hover:bg-gray-300/10 duration-200 rounded-md
                  ${isPending ? 'animate-pulse opacity-75' : ''}`}
                disabled={isPending}
              >
                <SparklesIcon
                  className={`size-4 duration-200 ${
                    isPending ? 'animate-ping text-emerald-300' : ''
                  }`}
                />
                <span
                  className={`transition-all duration-200 ${
                    isPending ? 'text-emerald-300 animate-glow' : ''
                  }`}
                >
                  {isPending ? 'Enhancing...' : 'Enhance with AI'}
                </span>
              </button>
            </div>
            <textarea
              ref={(el) => (descriptionRefs.current[index] = el)}
              {...register(`projects[${index}].description`, {
                required: 'Description is required',
              })}
              className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
                errors.projects?.[index]?.description ? 'border-red-500' : ''
              }`}
              rows={3}
            />
            {errors.projects?.[index]?.description && (
              <p className='text-red-500 text-sm'>
                {errors.projects[index].description.message}
              </p>
            )}
          </div>
        </div>
      ))}
      <button
        type='button'
        onClick={() => append({ title: '', description: '' })}
        className='mt-2 text-primary hover:text-primary/70'
      >
        Add Project
      </button>
    </div>
  );
};

export default ProjectsStep;
