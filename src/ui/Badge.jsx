import { twMerge } from 'tailwind-merge';
const Badge = ({ number, className }) => {
  return (
    <div
      className={twMerge(
        'rounded-full font-medium text-sm py-0.5 px-3 w-fit text-white',
        className
      )}
    >
      {number}% Match
    </div>
  );
};
export default Badge;
