import React from 'react';
import { social } from '../../data/social.data';
import SocialLink from '../SocialLink/SocialLink';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="text-center py-4 mt-5">
            <ul className="social-icon my-3">
                {social.map((item) => (
                    <SocialLink {...item} key={item.id} />
                ))}
            </ul>
            <p>
                Copyright © Hossain {new Date().getFullYear()}. All rights
                reserved.
            </p>
        </footer>
    );
};

export default Footer;
