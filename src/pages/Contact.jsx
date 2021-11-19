import React from 'react'

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__title">
                <h1>
                    Hey there, Let's <span>talk</span> about <span>creative</span> projects
                </h1>
                <p>or email us at <a href="mailto:hello@company.com">hello@company.com</a></p>
                <p>Please follow our contact page to <span>setup</span> the contact form.</p>
            </div>
            <form className="contact__form">
                <div className="contact__form__input">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <textarea type="text" placeholder="Message" />
                <button type="submit">Send Messages</button>
            </form>
        </section>
    )
}

export default Contact
