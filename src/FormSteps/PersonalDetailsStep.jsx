const PersonalDetailsStep = ({ register, errors }) => (
  <div className='space-y-4'>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Full Name
      </label>
      <input
        {...register('name', { required: 'Full name is required' })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.name ? 'border-red-500' : ''
        }`}
      />
      {errors.name && (
        <p className='text-red-500 text-sm'>{errors.name.message}</p>
      )}
    </div>

    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Your Position
      </label>
      <input
        {...register('position', { required: 'Position is required' })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.position ? 'border-red-500' : ''
        }`}
      />
      {errors.position && (
        <p className='text-red-500 text-sm'>{errors.position.message}</p>
      )}
    </div>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Email
      </label>
      <input
        {...register('contact.email', {
          required: 'Email is required',
          pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' },
        })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.contact?.email ? 'border-red-500' : ''
        }`}
      />
      {errors.contact?.email && (
        <p className='text-red-500 text-sm'>{errors.contact.email.message}</p>
      )}
    </div>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Phone
      </label>
      <input
        {...register('contact.phone', { required: 'Phone is required' })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.contact?.phone ? 'border-red-500' : ''
        }`}
      />
      {errors.contact?.phone && (
        <p className='text-red-500 text-sm'>{errors.contact.phone.message}</p>
      )}
    </div>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        Country
      </label>
      <input
        {...register('contact.country', { required: 'Country is required' })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.contact?.country ? 'border-red-500' : ''
        }`}
      />
      {errors.contact?.country && (
        <p className='text-red-500 text-sm'>{errors.contact.country.message}</p>
      )}
    </div>
    <div>
      <label className='block text-sm font-medium text-gray-300 mb-2'>
        City
      </label>
      <input
        {...register('contact.city', { required: 'City is required' })}
        className={`mt-1 block w-full p-2 border border-form-input-border rounded-md ${
          errors.contact?.city ? 'border-red-500' : ''
        }`}
      />
      {errors.contact?.city && (
        <p className='text-red-500 text-sm'>{errors.contact.city.message}</p>
      )}
    </div>
  </div>
);
export default PersonalDetailsStep;
