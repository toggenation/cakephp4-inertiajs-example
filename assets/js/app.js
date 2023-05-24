import axios from 'axios';
import React from 'react';
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

createInertiaApp({
    progress: {
        showSpinner: true
    },
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})