import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <section className='section'>
                    <div className='imagge'>
                        <img className='iimage' src="https://i.etsystatic.com/26008012/r/il/7af80a/3192529796/il_794xN.3192529796_43cn.jpg" alt="fotocompu" />
                    </div>
                    <div className='contac'>
                        <h1 className='titulo'>Contact Us</h1>
                        <div className='palab'>
                            <h3 className='visitus'>Visit Us</h3>
                            <h3 className='contactus'>Contact Us</h3>
                        </div>
                        <div className='parraf1'>
                            <div className='div1'>
                                <p className='parr1'>105 Road Name</p>
                                <p>info@website.com</p>
                            </div>
                            <div className='div1'>
                                <p className='parr2'>Berlin</p>
                                <p>123 456 789</p>
                            </div>
                            <p>Germany</p>
                        </div>
                        <input className='gmail' type="email" placeholder='Email' />
                        <input className='butn' type="submit" value="Subscribe" />
                    </div>
                </section>
                <div className='ulti'>
                    <p className='parraf2'>&copy;Copyright 2023 All Right Reserved.</p>
                    <div className='images11'>
                        <img className='facebook1' src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt="facebook" />
                        <img className='instagram1' src="https://cdn-icons-png.flaticon.com/128/3670/3670125.png" alt="instagram" />
                        <img className='twitter1' src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="twitter" />
                        <img className='youtube1' src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="youtube" />
                    </div>
                </div>
                    <p className='diiv'></p>
            </footer>
        </>
    )
}

export default Footer