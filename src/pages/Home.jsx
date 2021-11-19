import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/images/img_hero.png'
import img2 from '../assets/images/img_about.png'
import img3 from '../assets/images/female-avatar.png'
import Project from '../components/Project'
import FadeInSection from '../components/FadeInSection'

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__left">
                    <h2 className="hero__left__title">We are ready for your digital marketing</h2>
                    <Link to="/" className="hero__left__button">Let us discuss together!</Link>
                    <div className="hero__left__contact">
                        <i class="fas fa-phone-alt"></i>
                        <span>+99 080 070 4224</span>
                    </div>
                </div>
                <div className="hero__right">
                    <img src={img1} alt="" />
                </div>
            </section>
            <section className="about">
                <FadeInSection>
                    <div className="about__desc">
                        <h2>the best <span>Digital Marketing agency </span>  in Rio de Janeiro</h2>
                        <p>Total 5 HTML pages are included in this template from TemplateMo website. Please check 2 blog pages, project page, and contact page.</p>
                        <p>You are <span>allowed</span> to use this template for commercial or non-commercial purpose. You are NOT allowed to redistribute the template ZIP file on template collection websites.</p>
                    </div>
                    <div className="about__image">
                        <img src={img2} alt="" />
                    </div>
                </FadeInSection>
            </section>
            <FadeInSection>
                <Project />
            </FadeInSection>
            <FadeInSection>
                <section className="testimonial">
                    <div className="testimonial__image">
                        <img src={img3} alt="" />
                    </div>
                    <div className="testimonial__info">
                        <p className="testimonial__info__title">
                            CLIENT TESTIMONIALS
                        </p>
                        <h2 className="testimonial__info__desc">Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo.</h2>
                        <div className="testimonial__info__auth">
                            <strong>Mary Zoe</strong>
                            <span>/</span>
                            <small>Digital Agency (CEO)</small>
                        </div>
                    </div>
                </section>
            </FadeInSection>

        </>
    )
}

export default Home
