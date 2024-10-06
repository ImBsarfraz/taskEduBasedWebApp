import React, { useState } from "react";
import axios from 'axios';

export const Contact = () => {
    const [ formData, setFormData ] = useState({ name: '', email: '', message: ''});

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value,
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_CLOUD_API || process.env.REACT_LOCAL_API}`, formData);
            alert(`Thank for your message, ${response.data.name}`);
            setFormData({ name: '', email: '', message: ''});
        }
        catch (error) {
            console.error('Error sending message: ', error);
            alert('There was error sending your message, try again later.');
        }
    };

    return(
        <>
        <div className="container contact p-5">
            <div className="row justify-content-center">
                <div className="col-md-5 shadow pb-4">
                    <h1 className="text-center">Contact Form!</h1>
                    <p className="text-center mb-0 mb-md-4">Feel Free To Message Us!</p>
                    <form onSubmit={handleSubmit}>
                        <label className="form-label" for="name">User Name</label>
                        <input onChange={handleChange} value={formData.name} className="form-control" name="name" id="name" type="text"/>
                        <label className="form-label mt-2 mt-md-3" for="email">User Email</label>
                        <input onChange={handleChange} value={formData.email} className="form-control" name="email" id="email" type="email"/>
                        <label className="form-label mt-2 mt-md-3" for="message">Message</label>
                        <textarea onChange={handleChange} value={formData.message} className="form-control" name="message" id="message"></textarea>
                        <button type="submit" className="btn mt-3 mt-md-4 ">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}