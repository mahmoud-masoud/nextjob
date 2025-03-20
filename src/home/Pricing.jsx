import { useState } from 'react';
// import { Button } from '../ui/Button';
import { Check, CreditCard, Palette, Zap } from 'lucide-react';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for trying out CV creation',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        '1 Basic CV template',
        'Limited AI suggestions',
        'Job board access',
        'Export to PDF',
      ],
      ctaText: 'Start for Free',
      ctaVariant: 'outline',
    },
    {
      name: 'Professional',
      description: 'For active job seekers',
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        'All CV templates',
        'Advanced AI suggestions',
        'Job board access with alerts',
        'Export to multiple formats',
        'Cover letter generation',
        'Application tracking',
      ],
      ctaText: 'Get Professional',
      ctaVariant: 'primary',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For organizations and teams',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        'All Professional features',
        'Team management',
        'Branded templates',
        'Analytics dashboard',
        'Priority support',
        'API access',
      ],
      ctaText: 'Contact Sales',
      ctaVariant: 'secondary',
    },
  ];

  return (
    <section id='pricing' className='relative section-padding overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-[10%] left-[20%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px]' />
        <div className='absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[100px]' />
      </div>

      <div className='max-container relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center glass px-4 py-2 rounded-full mb-6'>
            <CreditCard className='text-emerald-400 mr-2' size={16} />
            <span className='text-sm font-medium text-white'>
              Simple Pricing
            </span>
          </div>

          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Choose the Plan That's{' '}
            <span className='text-emerald-400'>Right for You</span>
          </h2>

          <p className='text-white/80 mb-8'>
            No hidden fees, no contracts. Cancel anytime.
          </p>

          {/* Pricing Toggle */}
          <div className='inline-flex items-center p-1 glass-dark rounded-full'>
            <button
              className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                !annual ? 'bg-emerald-500 text-white' : 'text-white/70'
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                annual ? 'bg-emerald-500 text-white' : 'text-white/70'
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual <span className='text-xs opacity-80'>(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-dark rounded-2xl overflow-hidden transition-all hover:transform hover:translate-y-[-5px] ${
                plan.popular ? 'ring-2 ring-emerald-500 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className='absolute top-0 right-0'>
                  <div className='bg-emerald-500 text-blue-950 text-xs font-bold px-3 py-1 rounded-bl-lg'>
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className='p-6 md:p-8'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  {plan.name}
                </h3>
                <p className='text-white/70 text-sm mb-6'>{plan.description}</p>

                <div className='mb-6'>
                  <div className='flex items-end'>
                    <span className='text-4xl font-bold text-white'>
                      ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className='text-white/70 ml-2'>
                      {annual ? '/year' : '/month'}
                    </span>
                  </div>
                  {annual && plan.monthlyPrice > 0 && (
                    <div className='text-emerald-400 text-sm mt-1'>
                      That's just ${Math.round(plan.yearlyPrice / 12)}/mo
                    </div>
                  )}
                </div>

                <div className='space-y-4 mb-8'>
                  {plan.features.map((feature, i) => (
                    <div key={i} className='flex items-start'>
                      <Check
                        size={18}
                        className='text-emerald-400 mt-0.5 mr-3 shrink-0'
                      />
                      <span className='text-white/80'>{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.ctaVariant === 'outline' && (
                  <button className='border px-4 w-full py-2 rounded-md hover:bg-primary duration-200'>
                    {plan.ctaText}
                  </button>
                )}
                {plan.ctaVariant === 'primary' && (
                  <button className='px-4 w-full py-2 rounded-md bg-primary hover:bg-primary/70 duration-200'>
                    {plan.ctaText}
                  </button>
                )}
                {plan.ctaVariant === 'secondary' && (
                  <button className='px-4 w-full py-2 rounded-md bg-gray-200 text-black duration-200'>
                    {plan.ctaText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Banner */}
        <div className='mt-16 glass-dark rounded-2xl p-8 md:p-10'>
          <div className='md:flex items-center justify-between'>
            <div className='md:max-w-lg mb-6 md:mb-0'>
              <div className='flex items-center mb-4'>
                <Zap size={24} className='text-emerald-400 mr-2' />
                <h3 className='text-xl font-bold text-white'>
                  Need a custom solution?
                </h3>
              </div>
              <p className='text-white/80'>
                Contact our sales team for a tailored solution for your
                organization's recruitment and CV management needs.
              </p>
            </div>

            <button className='bg-primary px-4 py-2 rounded-md font-medium hover:bg-emerald-600 duration-200'>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
