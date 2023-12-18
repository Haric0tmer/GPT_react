import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import { useState } from 'react';

function Menu() {
    return <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
}
function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='gpt3__navbar-links_container'>
                    <Menu></Menu>
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>  
            <div className='gpt3__navbar-menu'>
                {toggleMenu 
                ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(!toggleMenu)}></RiCloseLine> 
                : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(!toggleMenu)}></RiMenu3Line> 
                }
                {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                            <Menu></Menu>
                            <div className='gpt3__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;