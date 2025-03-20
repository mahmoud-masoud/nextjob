import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileUp } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import LoadingIndicator from '@/ui/Loading';
import { useNavigate } from 'react-router';
import { useStore } from '@/store';

const uploadFile = async (file) => {
  const API_URL =
    'https://find-work-using-ai-main-pymnbx.laravel.cloud/api/upload-cv';
  const formData = new FormData();
  formData.append('cv', file);

  const response = await fetch(API_URL, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to upload CV');
  }

  return response.json();
};

const UploadCV = ({ setIsCvUploaded }) => {
  const navigate = useNavigate();
  const { setCvData } = useStore();

  const mutation = useMutation({
    mutationFn: uploadFile,
    onMutate: () => setIsCvUploaded(true),
    onSuccess: (response) => {
      setIsCvUploaded(true);
      setCvData(response.data);
      navigate('/generate-cv');
    },
    onError: (error) => {
      setIsCvUploaded(false), console.error('Upload failed:', error.message);
    },
  });

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length > 0) {
        mutation.mutate(acceptedFiles[0]);
      }
    },
    [mutation]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
  });

  return (
    <section className='flex justify-center items-center'>
      {mutation.isPending ? (
        <LoadingIndicator />
      ) : (
        <div
          {...getRootProps()}
          className={`group bg-blue-400/15
           rounded-3xl flex flex-col justify-center items-center
           p-8 cursor-pointer border border-border-color hover:border-primary
            duration-300 h-full aspect-square
          `}
        >
          <input {...getInputProps()} />
          <div className='flex flex-col  gap-4 items-center justify-center text-center'>
            <div
              className='flex size-20 items-center justify-center border
             p-4 rounded-full border-blue-600/50 bg-sky-900/50'
            >
              <FileUp className='size-10 text-emerald-400' />
            </div>
            <h3 className='text-2xl'>
              {isDragActive ? 'Drop your CV here...' : 'Upload Existing CV'}
            </h3>
            <p className='text-gray-300'>
              Already have a CV? Upload it to enhance, update, or convert to
              different formats.
            </p>

            <button
              className='w-full border text-lg mt-10
             font-medium text-white rounded-md py-2 px-6 hover:bg-emerald-500
              group-hover:border-primary
              group-hover:bg-primary duration-300'
            >
              Upload CV
            </button>
            {mutation.isError && (
              <p className='text-red-500'>Upload failed. Try again.</p>
            )}
            {mutation.isSuccess && (
              <p className='text-green-500'>Upload successful!</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default UploadCV;
