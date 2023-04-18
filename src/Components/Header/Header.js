import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bar from '../../assets/bars.png'
import { useState } from 'react'
import { FlatTree } from 'framer-motion'
import { Link } from 'react-scroll'

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className='header'>
            <img src={Logo} alt="Logo" className='logo' />
            {
                (menuOpened === false && mobile === true) ?
                    (<div style={{
                        backgroundColor: 'var(--appColor)', padding: "0.5rem",
                        borderRadius: '5px'

                    }} onClick={() => setMenuOpened(true)}> <img style={{ width: '1.5rem', height: '1.5rem' }} src={Bar} alt="" /></div>)
                    : (
                        <ul className='header-menu'>

                            <li onClick={() => setMenuOpened(false)}> <Link>Home</Link></li>
                            <li onClick={() => setMenuOpened(false)}>Programs</li>
                            <li onClick={() => setMenuOpened(false)}>Why use</li>
                            <li onClick={() => setMenuOpened(false)}>
                                <Link to='plans'
                                    span={true}
                                    smooth={true}
                                >Our Plans</Link>
                            </li>
                            <li onClick={() => setMenuOpened(false)}>

                                <Link to='contact'
                                    span={true}
                                    smooth={true}
                                >Contact</Link>
                            </li>



                        </ul>
                    )
            }



        </div >
    )
}

export default Header
