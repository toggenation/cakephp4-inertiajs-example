import axios from 'axios';
import React from 'react';
// import { InertiaApp } from '@inertiajs/inertia';
// import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
// Setup CSRF tokens.
axios.defaults.xsrfCookieName = 'csrfToken';
axios.defaults.xsrfHeaderName = 'X-Csrf-Token';
import 'bootstrap/dist/css/bootstrap.min.css';

const el = document.getElementById('app');
if (!el) {
    throw new Error('Could not find application root element');
}

// render(
//     <InertiaApp
//         initialPage={JSON.parse(el.dataset.page || '')}
//         resolveComponent={(name) =>
//             import(`./Pages/${name}`).then((module) => module.default)
//         }
//     />,
//     el
// );




createInertiaApp({
    // resolve: name => {
    //     const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    //     return pages[`./Pages/${name}.jsx`]
    // },
    progress: false,
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})