import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';
import './style.css';

function Contact() {
    const { contactValue } = useContext(StoreContext)
    return (
        <div className="contact-container">
            <p>PT ABC</p>
            <p>Jl Setia Budi No 33</p>
            <p>{contactValue}</p>
        </div>
    );
}

export default Contact;