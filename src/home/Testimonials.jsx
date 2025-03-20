import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Johnson',
      position: 'Software Engineer',
      company: 'TechCorp',
      image: 'https://placehold.co/100x100/1a1a2e/10b981?text=AJ',
      quote:
        'CVGenius helped me land my dream job! The AI suggestions made my CV stand out from the competition, and I received interview offers from 3 top tech companies within a week.',
      rating: 5,
    },
    {
      name: 'Sarah Miller',
      position: 'Marketing Director',
      company: 'CreativeAgency',
      image: 'https://placehold.co/100x100/1a1a2e/10b981?text=SM',
      quote:
        "The job matching feature is incredible. It found opportunities I wouldn't have discovered on my own, and the CV tailoring ensured my application was perfectly aligned with what employers were looking for.",
      rating: 5,
    },
    {
      name: 'David Chen',
      position: 'Data Scientist',
      company: 'AnalyticsPro',
      image: 'https://placehold.co/100x100/1a1a2e/10b981?text=DC',
      quote:
        "As someone who's switched careers twice, showcasing my transferable skills was challenging. CVGenius highlighted my relevant experience and helped me present my career change in a compelling way.",
      rating: 4,
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager',
      company: 'InnovateX',
      image: 'https://placehold.co/100x100/1a1a2e/10b981?text=ER',
      quote:
        'The templates are beautiful and professional. I received compliments on my CV design during interviews, and the content suggestions helped me quantify my achievements with impactful metrics.',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id='testimonials'
      className='relative section-padding overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px]' />
        <div className='absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-blue-900/30 rounded-full blur-[80px]' />
      </div>

      <div className='max-container relative z-10'>
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <div className='inline-flex items-center glass px-4 py-2 rounded-full mb-6'>
            <MessageCircle className='text-emerald-400 mr-2' size={16} />
            <span className='text-sm font-medium text-white'>
              Success Stories
            </span>
          </div>

          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            What Our Users <span className='text-emerald-400'>Say</span>
          </h2>

          <p className='text-white/80'>
            Thousands of professionals have transformed their careers with
            CVGenius. Here's what they have to say.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className='relative max-w-4xl mx-auto'>
          <div className='overflow-hidden' style={{ perspective: '1000px' }}>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className='min-w-full p-4'>
                  <div className='glass-dark rounded-2xl p-8 h-full'>
                    <div className='flex items-center mb-6'>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className='w-16 h-16 rounded-full mr-4'
                      />
                      <div>
                        <div className='text-white font-medium text-lg'>
                          {testimonial.name}
                        </div>
                        <div className='text-white/70 text-sm'>
                          {testimonial.position}, {testimonial.company}
                        </div>
                        <div className='flex mt-1'>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < testimonial.rating
                                  ? 'text-emerald-400 fill-emerald-400'
                                  : 'text-gray-500'
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <blockquote className='text-white/90 italic'>
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className='flex justify-center mt-8 gap-4'>
            <button
              onClick={prevTestimonial}
              className='w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-emerald-400 transition-colors'
              aria-label='Previous testimonial'
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className='w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-emerald-400 transition-colors'
              aria-label='Next testimonial'
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className='flex justify-center mt-4 gap-2'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-6 bg-emerald-400'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
