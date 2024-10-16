import { create } from 'zustand';

interface LoginControllerStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLoginController = create<LoginControllerStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useLoginController;