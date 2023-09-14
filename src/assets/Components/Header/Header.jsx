import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <section className='content'>
                <div className='logo'>
                    <img className='img' src="https://as1.ftcdn.net/v2/jpg/02/29/81/88/1000_F_229818811_uzXLJVITWVNqAyEb6zg1Z54P7uNLoIyY.jpg" alt="logoimg" />
                    <h1 className='h1'>Digital</h1>
                </div>
                <nav className='contenedor'>
                    <ul className='list'>
                        <li className='home'><a href="/Home">Home</a></li>
                        <li className='about'><a href="/AboutUs">About Us</a></li>
                        <li className='service'><a href="/Service">Service</a></li>
                        <li className='signup'><a href="#formulario">Sign up</a></li>
                    </ul>
                </nav>
            </section>
        </>
    );
}
export default Header;
