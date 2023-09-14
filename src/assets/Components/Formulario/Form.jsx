import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';
export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c05wbtb', 'template_efthsrj', form.current, 'R2PbQuD9BfNZsNICQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className='form'>
            <div className='formleft'>
                <h2 className='title'>sweet cake.</h2>
                <div className='contenido'>
                    <div className='ubicacion'>
                        <img className='ubiimage' src="https://cdn-icons-png.flaticon.com/128/3794/3794134.png" alt="ubicacion" />
                        <p>Rua Nove de Julho - 43 <br />Belo Horizonte - Minas Gerais</p>
                    </div>
                    <div className='mensaje'>
                        <img className='menimage' src="https://cdn-icons-png.flaticon.com/128/855/855502.png" alt="mensaje" />
                        <p>louisefajardo@gmail.com <br />louisefajardo.com.br</p>
                    </div>
                    <div className='telefono'>
                        <img className='telimage' src="https://cdn-icons-png.flaticon.com/128/8410/8410711.png" alt="telefono" />
                        <p>(11) 9 9999-9999</p>
                    </div>
                </div>
                <div className='imgcont'>
                    <img className='whatsapp' src="https://cdn-icons-png.flaticon.com/128/311/311337.png" alt="whatsapp" />
                    <img className='instagram' src="https://cdn-icons-png.flaticon.com/128/216/216506.png" alt="instagram" />
                    <img className='facebook' src="https://cdn-icons-png.flaticon.com/128/216/216502.png" alt="facebook" />
                </div>
            </div>
            <form className='formulario' ref={form} onSubmit={sendEmail}>
                <div className='separate'>
                    <div className='nome'>
                        <label className='name'>Nome</label>
                        <input type="text" placeholder='Seu nome' className='tock tokc' />
                    </div>
                    <div className='telefone'>
                        <label className='name'>Telefone</label>
                        <input type="text" placeholder='(11) 9 9999-9999' className='tock tokc' />
                    </div>
                </div>
                <div className='email'>
                    <label className='name'>Email</label>
                    <input type="email" placeholder='contato@gmail.com' className='tock' />
                </div>
                <div className='mensagem'>
                    <label className='name'>Mensagem</label>
                    <input placeholder='O que vocé precisa?' className='tock' />
                </div>
                <p className='center-content'>
                    <input type="submit" value="Enviar Mensagem" className='btn' />
                </p>
            </form>
        </section>
    );
};
export default ContactUs;