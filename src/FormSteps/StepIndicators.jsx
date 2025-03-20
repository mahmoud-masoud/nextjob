const StepIndicators = ({ steps, currentStep }) => {
  return (
    <div className='flex gap-10 pt-10 min-w-fit text-nowrap'>
      {steps.map((step, index) => (
        <div key={step.id} className='flex-1 flex flex-col items-center'>
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${
              index <= currentStep
                ? 'bg-primary text-white'
                : 'bg-foreground border border-border-color text-gray-300'
            }`}
          >
            {step.id}
          </div>
          <span className='text-sm text-gray-300'>{step.title}</span>
        </div>
      ))}
    </div>
  );
};
export default StepIndicators;
