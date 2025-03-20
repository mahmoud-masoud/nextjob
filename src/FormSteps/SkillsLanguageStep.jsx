const SkillsLanguagesStep = ({ register, errors }) => (
  <div className='space-y-4'>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-3'>
        Technical Skills (comma-separated)
      </label>
      <input
        {...register('skills', { required: 'Skills are required' })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.skills ? 'border-red-500' : ''
        }`}
      />
      {errors.skills && (
        <p className='text-red-500 text-sm'>{errors.skills.message}</p>
      )}
    </div>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-3'>
        Languages (comma-separated)
      </label>
      <input
        {...register('languages', { required: 'Languages are required' })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.languages ? 'border-red-500' : ''
        }`}
      />
      {errors.languages && (
        <p className='text-red-500 text-sm'>{errors.languages.message}</p>
      )}
    </div>
  </div>
);

const SocialMediaStep = ({ register, errors }) => (
  <div className='space-y-4'>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-3'>
        LinkedIn
      </label>
      <input
        {...register('socialMediaAccounts.LinkedIn', {
          required: 'LinkedIn URL is required',
        })}
        className={`mt-1 block w-full p-2 border rounded-md ${
          errors.socialMediaAccounts?.LinkedIn ? 'border-red-500' : ''
        }`}
      />
      {errors.socialMediaAccounts?.LinkedIn && (
        <p className='text-red-500 text-sm'>
          {errors.socialMediaAccounts.LinkedIn.message}
        </p>
      )}
    </div>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-3'>
        Portfolio
      </label>
      <input
        {...register('socialMediaAccounts.Portfolio', {
          required: 'Portfolio URL is required',
        })}
        className={`mt-1 block w-full p-2 border rounded-md ${
          errors.socialMediaAccounts?.Portfolio ? 'border-red-500' : ''
        }`}
      />
      {errors.socialMediaAccounts?.Portfolio && (
        <p className='text-red-500 text-sm'>
          {errors.socialMediaAccounts.Portfolio.message}
        </p>
      )}
    </div>
  </div>
);

export default SkillsLanguagesStep;
