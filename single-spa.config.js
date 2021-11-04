import { registerApplication, start } from 'single-spa'

registerApplication(
    'react-counter',
    () => import('./packages/react-counter'),
    location => location.pathname === '/'
)

registerApplication(
    'vue-counter',
    () => import('./packages/vue-counter'),
    location => location.pathname === '/' || location.pathname === '/vue'
)

start()
