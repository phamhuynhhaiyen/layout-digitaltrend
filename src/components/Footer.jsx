import React from 'react'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__row">
                <div className="footer__row__item">
                    <h1>We make creative <span>brands</span> only.</h1>
                </div>
                <div className="footer__row__item">
                    <div>
                        <h3>CONTACT INFO</h3>
                        <p><i class="fas fa-phone-alt"></i>+99 080 070 4224</p>
                        <a href="#"><i class="fas fa-envelope"></i>hello@company.com</a>
                    </div>
                </div>
                <div className="footer__row__item">
                    <div>
                        <h3>OUR STUDIO</h3>
                        <p><i class="fas fa-home"></i>Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil</p>
                    </div>
                </div>
            </div>
            <div className="footer__row">
                <div className="footer__row__item">
                    <p>Copyright © {new Date().getFullYear()} Your Company</p>
                </div>
                <div className="footer__row__item">
                    <a href="#">Stories</a>
                    <a href="#">Work with us</a>
                    <a href="#">Privacy</a>
                </div>
                <div className="footer__row__item">
                    <a href="#" className="footer__row__item__icon" ><i class="fab fa-facebook"></i></a>
                    <a href="#" className="footer__row__item__icon"><i class="fab fa-instagram"></i></a>
                    <a href="#" className="footer__row__item__icon"> <i class="fab fa-youtube"></i></a>
                    <a href="#" className="footer__row__item__icon"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Footer
