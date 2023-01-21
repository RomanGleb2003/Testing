import classes from './Header.module.css'
import {Link} from "react-router-dom";
import React from "react";

const Header = () => {

    const navData = [
        {name: 'Movies', link: '/movie'},
        {name: 'Tv Shows', link: '/tv_show'},
        {name: 'Kids', link: '/kids'},
        {name: 'Drama', link: '/drama'},
        {name: 'Top Rated', link: '/top'}
    ]

    return (
        <div className={classes.header}>
            <div className={classes.content}>
                <div className={classes.sub_media}>
                    <nav className={classes.nav_wrapper}>
                        <Link to="/" className={classes.logo}>
                            <img
                                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                                alt="The Movie Database"/>
                        </Link>
                        <ul className={classes.menu_navigation}>
                            {
                                navData.map((item) => {
                                    return (
                                        <div key={item.name}>
                                            <Link to={item.link}>{item.name}</Link>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className={classes.flex}>
                        <ul className={classes.primary}>
                            <div className={classes.link}>+</div>
                            <div className={classes.language}>EN</div>
                            <div className={classes.link}></div>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Header;