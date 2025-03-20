import Badge from '@/ui/Badge';
import { Briefcase, Clock4Icon, MapPinIcon } from 'lucide-react';

const JobCard = ({
  title,
  employer,
  employerLogo,
  description,
  date,
  location,
  applyLink,
  type,
  tag,
}) => {
  return (
    <div className='bg-foreground border border-border-color rounded-lg p-8'>
      <div className='flex gap-4 mb-2'>
        <img src={employerLogo} alt='' className='h-14 rounded-lg' />

        <div>
          <div className='flex gap-2 mb-2'>
            <h2 className='font-semibold'>{title}</h2>
            <Badge
              number={tag}
              className={'bg-emerald-400/10 text-emerald-400'}
            />
          </div>
          <h4 className='text-gray-300 mb-1'>{employer}</h4>
        </div>
      </div>

      <div className='flex gap-4 mb-4'>
        <div className='flex gap-1'>
          <Clock4Icon className='text-primary size-5' />
          <span className='text-sm text-gray-300'>{date}</span>
        </div>
        <div className='flex gap-1'>
          <MapPinIcon className='text-primary size-5' />
          <span className='text-sm text-gray-300'>{location}</span>
        </div>
        <div className='flex gap-1'>
          <Briefcase className='text-primary size-5' />
          <span className='text-sm text-gray-300'>{type}</span>
        </div>
      </div>
      <p className='line-clamp-2 text-gray-200'>{description}</p>
      <div className='flex justify-end mt-4'>
        <a
          href={applyLink}
          target='_blank'
          className='bg-primary hover:bg-primary-on-hover duration-200 rounded px-4 py-1.5
         inline-block w-fit'
        >
          apply
        </a>
      </div>
    </div>
  );
};
export default JobCard;
