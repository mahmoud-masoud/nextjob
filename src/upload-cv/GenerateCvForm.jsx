import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import RandomCV from './RandomCV';
import StepIndicators from '@/FormSteps/StepIndicators';
import SummaryStep from '@/FormSteps/SummaryStep';
import EducationStep from '@/FormSteps/EducationStep';
import WorkExperienceStep from '@/FormSteps/WorkExperienceStep';
import PersonalDetailsStep from '@/FormSteps/PersonalDetailsStep';
import ProjectsStep from '@/FormSteps/ProjectsStep';
import SkillsLanguagesStep from '@/FormSteps/SkillsLanguageStep';
import SocialMediaStep from '@/FormSteps/SocialMediaStep';
import { useStore } from '@/store';
import { BriefcaseBusiness } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const defaultValues = {
  name: '',
  summary: '',
  position: '',
  contact: { email: '', phone: '', city: '' },
  education: {
    degree: '',
    institution: '',
    startingYear: '',
    graduationYear: '',
  },

  experience: [
    {
      position: '',
      company: '',
      start_year: '',
      end_year: '',
      description: '',
    },
  ],
  projects: [{ title: '', description: '' }],
  skills: '',
  languages: '',
  socialAccounts: { linkedin: '', github: '' },
};
const steps = [
  { id: 1, title: 'Personal Details' },
  { id: 2, title: 'Summary' },
  { id: 3, title: 'Education' },
  { id: 4, title: 'Work Experience' },
  { id: 5, title: 'Projects' },
  { id: 6, title: 'Skills & Languages' },
  { id: 7, title: 'Social Media' },
];

// Main GenerateCVForm Component
const GenerateCVForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState('forward');
  const { cvData, setCvData } = useStore();
  const navigate = useNavigate();
  const computedDefaultValues = cvData
    ? {
        ...cvData,
        education: cvData.education?.[0] || cvData.education,
      }
    : defaultValues;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    trigger,
    getValues,
    setValue,
  } = useForm({
    mode: 'onBlur',
    defaultValues: computedDefaultValues,
  });

  const handleNext = async () => {
    const fieldsToValidate =
      {
        0: [
          'name',
          'position',
          'contact.email',
          'contact.phone',
          'contact.city',
          'contact.country',
        ],
        1: ['summary'],
        2: [
          'education.degree',
          'education.institution',
          'education.startingYear',
          'education.graduationYear',
        ],

        3: getValues('experience').flatMap((_, index) => [
          `experience[${index}].position`,
          `experience[${index}].company`,
          `experience[${index}].start_date`,
          `experience[${index}].end_date`,
          `experience[${index}].description`,
        ]),
        4: getValues('projects').flatMap((_, index) => [
          `projects[${index}].title`,
          `projects[${index}].description`,
        ]),
        5: ['skills', 'languages'],
        6: ['socialAccounts.linkedin', 'socialAccounts.github'],
      }[currentStep] || [];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid && currentStep < steps.length - 1) {
      setDirection('forward');
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection('back');
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = (data) => {
    setCvData(data);
    navigate('/cv-viewer');
  };

  const variants = {
    initial: (dir) => ({
      x: dir === 'forward' ? '10%' : '-10%',
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }, // Custom cubic bezier
    },
    exit: (dir) => ({
      x: dir === 'forward' ? '-10%' : '10%',
      opacity: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }, // Smooth easing
    }),
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <PersonalDetailsStep register={register} errors={errors} />;
      case 1:
        return (
          <SummaryStep
            register={register}
            errors={errors}
            getValues={getValues}
            setValue={setValue}
          />
        );
      case 2:
        return <EducationStep register={register} errors={errors} />;
      case 3:
        return (
          <WorkExperienceStep
            register={register}
            errors={errors}
            control={control}
            getValues={getValues}
            setValue={setValue}
          />
        );
      case 4:
        return (
          <ProjectsStep
            register={register}
            errors={errors}
            control={control}
            getValues={getValues}
            setValue={setValue}
          />
        );
      case 5:
        return <SkillsLanguagesStep register={register} errors={errors} />;
      case 6:
        return <SocialMediaStep register={register} errors={errors} />;
      // case 7:
      //   return <RandomCV values={getValues} />;
      default:
        return null;
    }
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <main className='min-h-screen py-20 flex flex-col gap-10 items-center'>
      <StepIndicators currentStep={currentStep} steps={steps} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-4xl overflow-hidden border
         border-border-color h-fit rounded-xl bg-form-foreground flex flex-col p-6'
      >
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
            className=''
          >
            <h2 className='text-xl font-semibold mb-4'>
              {steps[currentStep].title}
            </h2>
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>

        <div className='flex pt-10 justify-between gap-4'>
          <button
            type='button'
            onClick={handleBack}
            disabled={currentStep === 0}
            className={` border px-8 py-2 rounded-md w-min text-white transition-colors ${
              currentStep === 0
                ? 'border-gray-400 cursor-not-allowed'
                : 'border-primary hover:border-primary/70'
            }`}
          >
            Back
          </button>
          {!isLastStep && (
            <button
              type='button'
              onClick={handleNext}
              className=' px-8 py-2 rounded-md w-min text-white
               bg-primary hover:bg-primary/70 transition-colors'
            >
              Next
            </button>
          )}
          {isLastStep && (
            <button className='bg-primary hover:bg-primary/70 duration-200 rounded-md px-4 py-2'>
              Create CV
            </button>
          )}
        </div>
      </form>
    </main>
  );
};

export default GenerateCVForm;
