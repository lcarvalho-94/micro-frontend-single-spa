import { createNanoEvents } from 'nanoevents'; 

const emitter = createNanoEvents();

export const eventsEmitters = {
    addProduct: () => {
        console.log('emitted');
        emitter.emit('addProduct');
    },
    removeProduct: () => {
        console.log('emitted');
        emitter.emit('removeProduct');
    },
};

export const eventListeners = {
    addProduct: (amount) => {
        emitter.on('addProduct', () => {
            console.log('addProduct - RECEBIDO');
            amount += 1;
        });
    },
    removeProduct: (amount) => {
        console.log('removeProduct - RECEBIDO');
        emitter.on('removeProduct', () => {
            amount -= 1;
        });
    },
};