const EducationStep = ({ register, errors }) => (
  <div className='space-y-4'>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Degree
      </label>
      <input
        {...register('education.degree', { required: 'Degree is required' })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.education?.degree ? 'border-red-500' : ''
        }`}
      />
      {errors.education?.degree && (
        <p className='text-red-500 text-sm'>
          {errors.education.degree.message}
        </p>
      )}
    </div>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Institution
      </label>
      <input
        {...register('education.institution', {
          required: 'Institution is required',
        })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.education?.institution ? 'border-red-500' : ''
        }`}
      />
      {errors.education?.institution && (
        <p className='text-red-500 text-sm'>
          {errors.education.institution.message}
        </p>
      )}
    </div>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Starting Year
      </label>
      <input
        {...register('education.startingYear', {
          required: 'Starting year is required',
        })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.education?.startingYear ? 'border-red-500' : ''
        }`}
      />
      {errors.education?.startingYear && (
        <p className='text-red-500 text-sm'>
          {errors.education.startingYear.message}
        </p>
      )}
    </div>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Graduation Year
      </label>
      <input
        {...register('education.graduationYear', {
          required: 'Graduation year is required',
        })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.education?.graduationYear ? 'border-red-500' : ''
        }`}
      />
      {errors.education?.graduationYear && (
        <p className='text-red-500 text-sm'>
          {errors.education.graduationYear.message}
        </p>
      )}
    </div>
  </div>
);
export default EducationStep;
