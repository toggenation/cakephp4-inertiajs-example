import React from 'react';
import Layout from '../../layouts/Layout';

/**
 * This view component will be rendered when visiting /pages/greet
 * when your application has been setup with inertiajs.
 */
function Display() {

    return <>
        <h2>Hello world!</h2>
    </>
}


Display.layout = page => <Layout children={page} title="Hi" />

export default Display;


