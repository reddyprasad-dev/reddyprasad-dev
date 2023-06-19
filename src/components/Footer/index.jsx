import { Link } from 'react-router-dom';

import { AiOutlineCopyrightCircle, AiFillMail, AiFillPhone} from 'react-icons/ai';

import './index.css'

const Footer = () => (
    <footer className='footer'>
        <div className='footer-top'>
            <div className='container'>
                <ul className='footer-nav-list'>
                    <Link to='/'>
                        <li className='footer-item'> Home </li>
                    </Link>
                    <Link to='/projects'>
                        <li className='footer-item'> Projects </li>
                    </Link>
                </ul>
            </div>
            <div className='container'> 
                <h1 className='footer-text'> Address </h1>
                <address className='address'>
                    Dr.no: 2-6/2, Mee seva street, <br /> 
                    Meenavilluru, Pentapadu Mandal, <br /> 
                    West Godavari, AP - 534134
                </address>
            </div>
            <div className='container'>
                <h1 className='footer-text'> Contact </h1>
                <p>  chandrakanthmullangi.developer@gmail.com </p>
            </div>
            </div>
            <div className='footer-bottom'> 
                <section className='social-media-icons-container'>
                    <a href='mailto:chandrakanthmullangi.developer@gmail.com' target='_blank'>
                        <img src='https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg' alt='linkedin' className='social-media-icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/chandrakanth-mullangi/' target='_blank'>
                        <img src='https://www.svgrepo.com/show/110195/linkedin.svg' alt='linkedin' className='linkedin-icon' />
                    </a>
                    <a href='https://github.com/ChandrakanthMullangi/' target='_blank'>
                        <img src='https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg' alt='git' className='social-media-icon' />
                    </a>
                </section>
                <p className='copyright'> Copyright <AiOutlineCopyrightCircle /> 2023. All Rights Reserved. </p>
            </div>
    </footer>
)

export default Footer