import { createStore } from 'zustand/vanilla';
import siteData from '../data/siteData.json';

export const createMyStore = () => {
  return createStore((set) => ({
    // 1. All Static Website Data
    ...siteData,

    // 2. Global UI State: Modal Controls
    isEnquiryModalOpen: false,
    openEnquiryModal: () => set({ isEnquiryModalOpen: true }),
    closeEnquiryModal: () => set({ isEnquiryModalOpen: false }),
    toggleEnquiryModal: () => set((state) => ({ isEnquiryModalOpen: !state.isEnquiryModalOpen })),

    // 3. Global UI State: Form Submission Status
    isFormSubmitting: false,
    setFormSubmitting: (status) => set({ isFormSubmitting: status }),
  }));
};