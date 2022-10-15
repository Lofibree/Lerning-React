import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
// import ProfItem from './ProfItem/ProfItem';
import FrendItem from './FrendItem/FrendItem';

const Navbar = (props) => {

    const navBarEl = props.state.map(n => <FrendItem name={n.name} id={n.id} />)

    return (
        <div className={s.navdiv}>
            <nav className={s.nav}>

                <div>
                    <NavLink to='/profile' className={(navigationData) => navigationData.isActive
                        ? s.activeLink
                        : null}
                    >
                        Profile
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' className={(navigationData) => navigationData.isActive
                        ? s.activeLink
                        : null}
                    >
                        Dialogs
                    </NavLink>
                </div>
                <div >
                    <div>
                        Friends
                    </div>
                     <div className={s.friends}>
                        {navBarEl}
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;