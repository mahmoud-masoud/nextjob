import { Trash2 } from 'lucide-react';
import { useFieldArray } from 'react-hook-form';

const WorkExperienceStep = ({ register, errors, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience',
  });

  return (
    <div className='space-y-4'>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className='space-y-4 border border-border-color shadow
           shadow-background
           p-4 rounded-md'
        >
          <div className='flex justify-between'>
            <h3 className='text-lg font-semibold'>Experience {index + 1}</h3>
            <button
              type='button'
              onClick={() => remove(index)}
              className='text-red-300 hover:text-red-400 p-2 rounded-md
             hover:bg-gray-400/30'
            >
              <Trash2 className='size-4' />
            </button>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-2'>
              Position
            </label>
            <input
              {...register(`experience[${index}].position`, {
                required: 'Position is required',
              })}
              className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
                errors.experience?.[index]?.position ? 'border-red-500' : ''
              }`}
            />
            {errors.experience?.[index]?.position && (
              <p className='text-red-500 text-sm'>
                {errors.experience[index].position.message}
              </p>
            )}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-2'>
              Company
            </label>
            <input
              {...register(`experience[${index}].company`, {
                required: 'Company is required',
              })}
              className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
                errors.experience?.[index]?.company ? 'border-red-500' : ''
              }`}
            />
            {errors.experience?.[index]?.company && (
              <p className='text-red-500 text-sm'>
                {errors.experience[index].company.message}
              </p>
            )}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-2'>
              Start Date
            </label>
            <input
              {...register(`experience[${index}].start_date`, {
                required: 'start date is required',
              })}
              className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
                errors.experience?.[index]?.start_date ? 'border-red-500' : ''
              }`}
            />
            {errors.experience?.[index]?.start_date && (
              <p className='text-red-500 text-sm'>
                {errors.experience[index].start_date.message}
              </p>
            )}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-300 mb-2'>
              End Date
            </label>
            <input
              {...register(`experience[${index}].end_date`, {
                required: 'End Date is required',
              })}
              className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
                errors.experience?.[index]?.end_date ? 'border-red-500' : ''
              }`}
            />
            {errors.experience?.[index]?.end_date && (
              <p className='text-red-500 text-sm'>
                {errors.experience[index].end_date.message}
              </p>
            )}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-300 mb-2'>
              Description
            </label>
            <textarea
              {...register(`experience[${index}].description`, {
                required: 'Description is required',
              })}
              className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
                errors.experience?.[index]?.description ? 'border-red-500' : ''
              }`}
              rows={3}
            />
            {errors.experience?.[index]?.description && (
              <p className='text-red-500 text-sm'>
                {errors.experience[index].description.message}
              </p>
            )}
          </div>
        </div>
      ))}
      <button
        type='button'
        onClick={() =>
          append({ position: '', company: '', duration: '', description: '' })
        }
        className='mt-2 text-primary hover:text-primary/70'
      >
        Add Experience
      </button>
    </div>
  );
};
export default WorkExperienceStep;
