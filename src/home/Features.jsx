import {
  Sparkles,
  FileText,
  Search,
  PenTool,
  Clock,
  Target,
  BriefcaseBusiness,
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Sparkles className='text-emerald-400' size={24} />,
      title: 'AI-Powered CV Creation',
      description:
        'Our AI analyzes job descriptions and tailors your CV to highlight relevant skills and experience, increasing your chances of getting noticed.',
    },
    {
      icon: <FileText className='text-emerald-400' size={24} />,
      title: 'Beautiful Templates',
      description:
        'Choose from hundreds of professionally designed templates that are ATS-friendly and optimized for better readability.',
    },
    {
      icon: <Search className='text-emerald-400' size={24} />,
      title: 'Smart Job Matching',
      description:
        'Our intelligent algorithm matches your skills and experience with job listings to find the perfect opportunities for you.',
    },
    {
      icon: <PenTool className='text-emerald-400' size={24} />,
      title: 'Content Suggestions',
      description:
        'Get personalized suggestions to improve your CV with industry-specific keywords and achievements that stand out.',
    },
    {
      icon: <Clock className='text-emerald-400' size={24} />,
      title: 'Quick Applications',
      description:
        'Apply to multiple jobs with a single click using your tailored CV and personalized cover letters.',
    },
    {
      icon: <Target className='text-emerald-400' size={24} />,
      title: 'Career Insights',
      description:
        'Access detailed analytics about your job search progress and get recommendations to improve your application strategy.',
    },
  ];

  return (
    <section id='features' className='relative section-padding overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px]' />
        <div className='absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-800/30 rounded-full blur-[100px]' />
      </div>

      <div className='max-container relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center glass px-4 py-2 rounded-full mb-6'>
            <BriefcaseBusiness className='text-emerald-400 mr-2' size={16} />
            <span className='text-sm font-medium text-white'>
              Powerful Features
            </span>
          </div>

          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Everything You Need to Land Your{' '}
            <span className='text-emerald-400'>Dream Job</span>
          </h2>

          <p className='text-white/80'>
            Our platform combines AI technology with beautiful design to create
            CVs that stand out and match you with the perfect opportunities.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='glass-dark p-6 rounded-xl transition-all duration-300 hover:transform hover:translate-y-[-5px] group'
            >
              <div className='w-12 h-12 flex items-center justify-center glass rounded-xl mb-5 transition-all group-hover:bg-emerald-500/20'>
                {feature.icon}
              </div>

              <h3 className='text-xl font-medium text-white mb-3'>
                {feature.title}
              </h3>

              <p className='text-white/70'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
