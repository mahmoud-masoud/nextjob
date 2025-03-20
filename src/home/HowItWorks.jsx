// import { Button } from '../ui/Button';
import { ListOrdered, Upload, Sparkles, Search, ThumbsUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className='text-emerald-400' size={28} />,
      title: 'Upload Your Information',
      description:
        'Import your existing CV or enter your experience, skills, and education details into our user-friendly platform.',
    },
    {
      icon: <Sparkles className='text-emerald-400' size={28} />,
      title: 'AI Enhancement',
      description:
        'Our AI analyzes your information and job descriptions to suggest improvements and highlight relevant experience.',
    },
    {
      icon: <Search className='text-emerald-400' size={28} />,
      title: 'Discover Opportunities',
      description:
        'Browse job listings tailored to your profile or allow our AI to match you with the most relevant positions.',
    },
    {
      icon: <ThumbsUp className='text-emerald-400' size={28} />,
      title: 'Apply with Confidence',
      description:
        'Submit applications with your beautifully designed, ATS-optimized CV and personalized cover letter.',
    },
  ];

  return (
    <section
      id='how-it-works'
      className='relative section-padding bg-blue-950 overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className='absolute -top-[20%] right-[20%] w-[50%]
         h-[50%] bg-emerald-500/5 rounded-full blur-[100px]'
        />
        <div
          className='absolute bottom-[10%] left-[10%] w-[30%]
         h-[30%] bg-blue-900/40 rounded-full blur-[80px]'
        />
      </div>

      <div className='max-container relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center glass px-4 py-2 rounded-full mb-6'>
            <ListOrdered className='text-emerald-400 mr-2' size={16} />
            <span className='text-sm font-medium text-white'>
              Simple Process
            </span>
          </div>

          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            How <span className='text-emerald-400'>CVGenius</span> Works
          </h2>

          <p className='text-white/80'>
            Our streamlined process makes it easy to create professional CVs and
            find your perfect job in just a few simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className='relative'>
          {/* Connecting Line */}
          <div
            className='absolute top-0 bottom-0 
          left-[28px] md:left-1/2 w-0.5 bg-gradient-to-b
           from-emerald-500/80 to-emerald-500/20 hidden md:block'
          />

          <div className='space-y-12 md:space-y-0'>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12 relative`}
              >
                {/* Step Number */}
                <div
                  className={`
                  absolute z-10 left-0 md:left-1/2 w-14 h-14 
                  flex items-center justify-center glass-dark 
                  rounded-full border-2 border-emerald-500
                  ${
                    index % 2 === 0
                      ? 'md:-translate-x-1/2'
                      : 'md:-translate-x-1/2'
                  }
                  transform -translate-y-0 md:-translate-y-1/2
                `}
                >
                  <span className='text-emerald-400 font-bold text-lg'>
                    {index + 1}
                  </span>
                </div>

                {/* Step Content */}
                <div
                  className={`
                  glass-dark rounded-xl p-6 md:p-8 ml-20 md:ml-0 md:w-[calc(50%-40px)] 
                  ${
                    index % 2 === 0
                      ? 'md:text-right md:mr-auto'
                      : 'md:text-left md:ml-auto'
                  }
                `}
                >
                  <div className='flex items-center gap-4 mb-4 md:mb-5'>
                    <div className='w-12 h-12 flex items-center justify-center glass rounded-xl'>
                      {step.icon}
                    </div>
                    <h3 className='text-xl font-medium text-white'>
                      {step.title}
                    </h3>
                  </div>

                  <p className='text-white/70'>{step.description}</p>
                </div>

                {/* Empty Space for Alignment */}
                <div className={`hidden md:block md:w-[calc(50%-40px)]`} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='mt-20 text-center'>
          <button>Get Started Now</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
