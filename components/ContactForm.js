import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
    const [sent, setSent] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        document.getElementById("messageForm").reset()
        setTimeout(() => {
            setSent(true)
            setTimeout(() => {
                setSent(false)
            }, 4000)
        }, 100)
    };

    return (
        <>

            <div id={sent ? 'sent' : 'unsent'} className="bg-yellow-600 shadow-[0px_0px_35px_15px_rgba(0,0,0,0.8)] opacity-0 invisbile z-[999] fixed w-screen h-[10%] left-0 bottom-0 flex items-center justify-center">
                <div id='popup' className="text-2xl text-center text-shadow">*ATTENTION* Contact form is unavailable at this time.</div>
                {/* Thank you for reaching out, I'll be in touch soon. */}
            </div>

            <form
                id="messageForm"
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
            >

                <h1 className="py-8 text-center text-3xl text-zinc-100 underline underline-offset-8 font-mono drop-shadow-[0px_0px_2px_rgba(255,255,255,0.6)]">Send A Message</h1>

                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="px-3 py-3 placeholder-gray-200 text-zinc-200 relative bg-zinc-700 rounded text-sm border-0 shadow outline-none focus:outline-none focus:none w-full"
                        required
                    />
                </div>

                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-200 text-zinc-200 relative bg-zinc-700 rounded text-sm border-0 shadow outline-none focus:outline-none focus:none w-full"
                        required
                    />
                </div>

                <div className="mb-3 pt-0">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="px-3 py-3 placeholder-gray-200 text-zinc-200 relative bg-zinc-700 rounded text-sm border-0 shadow outline-none focus:outline-none focus:none w-full h-52 resize-none"
                        required
                    />
                </div>

                <div className="mb-3 pt-0">
                    <button
                        className="bg-blue-500 text-zinc-100 active:bg-[#1e79e1] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>

            </form>
        </>
    );
};

export default ContactForm;