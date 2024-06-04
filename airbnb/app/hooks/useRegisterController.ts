import { create } from 'zustand';

interface RegisterControllerStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegisterController = create<RegisterControllerStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useRegisterController;