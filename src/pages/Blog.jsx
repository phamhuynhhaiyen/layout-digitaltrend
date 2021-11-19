import React from 'react'
import data from '../assets/data/blog'
import img from '../assets/images/newsletter.png'

const Blog = () => {
    const header = data[0]

    const sidebar = data.slice(1, 4)

    return (
        <section className="blog">
            <h1 className="blog__title">Digital Trend Blog</h1>
            <div className="blog__top">
                <div className="blog__top__header">
                    <img src={header.img} alt="" />
                    <div className="blog__top__header__info">
                        <h4>{header.title}</h4>
                        <p>{header.desc}</p>
                    </div>
                </div>
                <div className="blog__top__sidebar">
                    {
                        sidebar.map((item) => (
                            <div className="blog__top__sidebar__item">
                                <img src={item.img} alt="" />
                                <div className="blog__top__sidebar__item__info">
                                    <h4 style={{color: `${item.color}`}}>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="blog__bottom">
                <img src={img} alt=""/>
                <div className="blog__bottom__content">
                    <h5>EMAIL NEWSLETTER</h5>
                    <h2>Let’s stay up-to-date. We'll share you all good stuffs.</h2>
                    <input className="blog__bottom__content__email" type="email" placeholder="Please enter your email"/>
                    <p>We'll NOT share your email address to anyone else.</p>
                    {/* <div className="blog__bottom__content__check"> */}
                    <input type="checkbox"/><label for="vehicle1"> Please send me a monthly newsletter.</label>
                    {/* </div> */}
                    <button>Sign up</button>
                </div>
            </div>
        </section>
    )
}

export default Blog
