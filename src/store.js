import { create } from 'zustand';

export const useStore = create((set) => ({
  isCvUploaded: false,
  setCvUploaded: (isUploaded) => set(() => ({ isCvUploaded: isUploaded })),
  cvData: null,
  setCvData: (data) => set({ cvData: data }),
  clearCvData: () => set({ cvData: null }),
  jobsData: null,
  setJobs: (data) => set({ jobsData: data }),
  clearJobs: () => set({ jobs: null }),
}));
