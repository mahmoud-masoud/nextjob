import { Trash2Icon } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';

const ProjectsStep = ({ register, errors, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'projects',
  });

  return (
    <div className='space-y-4'>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className='space-y-4 border border-border-color p-4 rounded-md'
        >
          <div className='flex justify-between'>
            <h3 className='text-lg font-semibold'>Project {index + 1}</h3>
            <button
              type='button'
              onClick={() => remove(index)}
              className='text-red-300 hover:text-red-400 p-2 rounded-md
             hover:bg-gray-400/30'
            >
              <Trash2Icon className='size-4' />
            </button>
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
            <label className='block text-sm font-medium text-gray-300 mb-2'>
              Description
            </label>
            <textarea
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
