import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Inquiry = () => {
    const [contactInfo,setContactInfo]=useState({
        name:"",
        email:"",
        remarks:""
    });

    const onChange=(e)=>{
        setContactInfo({...contactInfo,[e.target.id]:e.target.value});
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(contactInfo);

        emailjs.sendForm('service_8g5jxv9','template_3p06fhc',e.target,'user_MDPunHPYC4lq2PwJg2zRw').then((result)=>{
            console.log(result.text);
        },(error)=>{
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
        <form onSubmit={onSubmit} className="mt-2">
            <div className="form-group">
                <label htmlFor="name"> Name  </label>
                <input  id="name" type="text" 
                placeholder="Name"
                value={contactInfo.name}
                onChange={onChange}
                className="form-control"
                name="name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">  Email </label>
                <input id="email" type="email"
                value={contactInfo.email}
                placeholder="Email"
                className="form-control"
                onChange={onChange}
                name="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="remarks"> Remarks  </label>
                <input id="remarks" type="text"
                value={contactInfo.remarks}
                className="form-control"
                placeholder="Remarks"
                onChange={onChange}
                name="remarks"/>
            </div>
            <input type="submit" className="btn btn-primary mt-2"
            disabled={ !contactInfo.name || !contactInfo.email }
            value="submit"/> 
        </form>
    );
};

export default Inquiry;