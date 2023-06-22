import Title from './Title';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form:any = useRef(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_MAIL_TEMPLATE_ID,
                import.meta.env.VITE_MAIL_SERVICE_ID,
                form.current,
                import.meta.env.VITE_MAIL_PUBLIC_KEY)
            .then((result) => {
                alert('message sent successfully...');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title children={"Contact"} id={"contact_id"}/>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="user_email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={10}
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
                    >
                        Contact Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;