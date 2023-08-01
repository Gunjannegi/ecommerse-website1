import { useState } from 'react';
import classes from './contactUs.module.css';
const ContactUs = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredNumber, setEnteredNumber] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };
    const numberChangeHandler = (event) => {
        setEnteredNumber(event.target.value);
    }

    const submitHandler =async (event) => {
        event.preventDefault();
        const details = {
            name: enteredName,
            email: enteredEmail,
            number: enteredNumber
        }
        try {
            const response = await fetch('https://ecommercerequest-default-rtdb.firebaseio.com/details.json', {
                method: 'POST',
                body: JSON.stringify(details),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            if (response.ok) {
                console.log(data)
            }
        } catch {
            throw new Error('Something went wrong')

        }
        setEnteredName('');
        setEnteredEmail('');
        setEnteredNumber('');

    };
    return (
        <div className={classes.formcontainer }>
            <form onSubmit={submitHandler}>
                <div>
                    <label className={classes.formlabel }>Name : </label>
                    <input type='text' id='nameId' className='form-control' value={enteredName} onChange={nameChangeHandler} ></input>
                </div>
                <div>
                    <label className={classes.formlabel}>Email : </label>
                    <input type='email' id='emailId' className='form-control' value={enteredEmail} onChange={emailChangeHandler}></input>
                </div>
                <div>
                    <label className={classes.formlabel}>Phone Number : </label>
                    <input type='tel' id='numberId' className='form-control' value={enteredNumber} onChange={numberChangeHandler}></input>
                </div>
                <button type='submit' className={classes.formbutton}>Submit</button>
            </form>
        </div>
    )

};
export default ContactUs;