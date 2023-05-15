import create from 'zustand';
import { getHistorialScaner } from '../hooks/useHistorial';
import { persist, createJSONStorage } from 'zustand/middleware'
import { IHistorial } from '../hooks/types';




interface HistorialState {
    historial: IHistorial[];
    setHistorial: (data: IHistorial[]) => void;
}

interface historialACtions {
    getHistorial: () => void;
}


export const useHistorialStore = create(
    persist<HistorialState & historialACtions>(
        (set, get) => ({
            historial: [],
            setHistorial: (data) => set({ historial: data }),
            getHistorial: () => {
                getHistorialScaner().then((data) => {
                    set({ historial: data });
                });
            },
        }),
        {
            name: 'historial',
            storage: createJSONStorage(() => localStorage)
        },
    ),
);



