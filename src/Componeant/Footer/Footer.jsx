import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <h3>What is the different in props and state ?</h3>


            <p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component</p>


            <h3>How to Work useState ? </h3>

            <p>It can be used like this: const [state, setState] = useState(initialValue); Here, the initialValue is the value you want to start with, and state is the current state value that can be used in your component. The setState function can be used to update the state , triggering a re-render of your component.</p>

            <h3>Does the useEffect work without dataload ? </h3>

            <p>The purpose of the useEffect hook is to handle side effects in functional components. Side effects can include tasks such as data fetching, subscribing to events, manipulating the DOM, setting up timers, and more. However, it can also be used for other purposes that don't involve data loading.</p>
        </div>
    );
};

export default Footer;