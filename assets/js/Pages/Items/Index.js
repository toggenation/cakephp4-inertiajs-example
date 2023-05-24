import React, { useState } from 'react';
import Layout from '../../layouts/Layout';
import axios from 'axios';
import Alert from '../../components/Alert';
/**
 * This view component will be rendered when visiting /pages/greet
 * when your application has been setup with inertiajs.
 */
function Items(props) {

    const [number, setNumber] = useState(0);

    const update = async () => {
        const url = '/items/get-number';

        const res = await axios.get(url, {
            //We can add more configurations in this object
            headers: {
                'Accept': 'application/json'
                //This is one of the many options we can configure
            }
        });

        console.log(res.data)

        setNumber(res.data);

    }

    const message = props.flash.message || '';

    return <div><h1>Hello world From Items/Index!</h1>
        <Alert message={message} />
        <ul>
            {props.items && props.items.map(function (item) {
                return <li key={item}>{item}</li>
            })}
        </ul>
        <p>{number}</p>
        <button onClick={update}>Get data</button>
    </div>;
}


Items.layout = page => <Layout children={page} title="Welcome" />

export default Items
