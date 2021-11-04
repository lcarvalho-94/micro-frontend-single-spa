import { createNanoEvents } from 'nanoevents'; 

const emitter = createNanoEvents();

export const events = {
    addProduct: (amount) => {
        console.log('ADD');
        emitter.on('addProduct', () => {
            amount += 1;
        });
    },
    removeProduct: (amount) => {
        console.log('REMOVER');
        emitter.on('removeProduct', () => {
            amount -= 1;
        });
    },
};