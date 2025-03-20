const SocialMediaStep = ({ register, errors }) => (
  <div className='space-y-4'>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        LinkedIn
      </label>
      <input
        {...register('socialAccounts.linkedin', {
          required: 'linkedin URL is required',
        })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.socialAccounts?.linkedin ? 'border-red-500' : ''
        }`}
      />
      {errors.socialAccounts?.linkedin && (
        <p className='text-red-500 text-sm'>
          {errors.socialAccounts.linkedin.message}
        </p>
      )}
    </div>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Github
      </label>
      <input
        {...register('socialAccounts.github', {
          required: 'github URL is required',
        })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.socialAccounts?.github ? 'border-red-500' : ''
        }`}
      />
      {errors.socialAccounts?.github && (
        <p className='text-red-500 text-sm'>
          {errors.socialAccounts.github.message}
        </p>
      )}
    </div>
  </div>
);
export default SocialMediaStep;
