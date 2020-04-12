import React, { useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { makeStyles, Hidden, List, ListItem, ListItemText, Button, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import logoUrl from '../../assets/images/logo.png';

import { FaInstagram, FaYoutube, FaLinkedin, FaTelegram } from "react-icons/fa";

import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe';
import BlogContainer from '../../containers/BlogContainer/BlogContainer';

const useStyles = makeStyles({
    rootHeader: {
        position: "sticky",
        top: "0",
        height: "26vh",
        background: "rgb(255, 255, 255, 0.7)",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "70%",
        borderBottom: "1px solid black",
        "& a": {
            margin: "0",
            padding: "0",
            position: "relative"
        },
        "& img": {
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "cover",
        }
    },
    menubar: {
        display: "flex",
        justifyContent: "center",
        height: "30%",
        "& ul": {
            listStyle: "none",
            display: "flex",
            alignItems: "center"
        },
        "& ul li ": {
            textAlign: "center"
        },
        "& ul li a": {
            fontSize: "1.5rem",
            color: "#333",
            padding: "0.75rem",
            margin: "0 0.25rem"
        },
        "& ul li a:hover": {
            background: "#ecf3f9",
            borderRadius: "5px"
        },
    },
    list: {
        width: 250,
        "& a": {
            color: "#000"
        }

    },
    phoneMenuHomeOption: {
        borderBottom: "1px solid #ccc"
    },
    rootFooter: {
        background: "#2B2B2B",
        color: "#fff",
        textAlign: "center",
        display: "flow-root",
        "& p": {
            margin: "1.7rem"
        }
    },
    socialMedia: {
        display: "flex",
        justifyContent: "center",
        padding: "0.5rem",
        "& a": {
            color: "#fff"
        },
        "& svg": {
            fontSize: "2.3rem",
            display: "block",
            margin: "0 1.7rem",
        }
    }
});


const Blog = (props) => {
    const classes = useStyles();

    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List component={Link} to="/">
                <ListItem button className={classes.phoneMenuHomeOption}>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>
            <List component={Link} to="/aboutMe">
                <ListItem button>
                    <ListItemText primary="About Me" />
                </ListItem>
            </List>
            <List component={Link} to="/blog">
                <ListItem button>
                    <ListItemText primary="Blog" />
                </ListItem>
            </List>
            <List component={Link} to="/myConcepts">
                <ListItem button>
                    <ListItemText primary="My Concepts" />
                </ListItem>
            </List>
            <List component={Link} to="/contact">
                <ListItem button>
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
            <List component={Link} to="/courses">
                <ListItem button>
                    <ListItemText primary="Courses" />
                </ListItem>
            </List>
            <a href="https://m.youtube.com/channel/UCu26vSi5TM-gLwkAoMj0lSA">
                <ListItem button>
                    <ListItemText primary="YouTube" />
                </ListItem>
            </a>
        </div>
    );

    const phoneMenu = (
        <>
            <Hidden smUp>
                <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    {sideList('left')}
                </Drawer>
            </Hidden>
        </>
    );


    const desktopMenu = (
        <Hidden xsDown>
            <ul>
                <li><Link to="/aboutMe" >About Me</Link></li>
                <li><Link to="/blog" >Blog</Link></li>
                <li><Link to="/myConcepts" >My Concepts</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                <li><Link to="/courses" >Courses</Link></li>
                <li><a href="https://m.youtube.com/channel/UCu26vSi5TM-gLwkAoMj0lSA">YouTube</a></li>
            </ul>
        </Hidden>
    );

    return (
        <>
            <header className={classes.rootHeader}>
                <div className={classes.logo} >
                    <Link to="/">
                        <img src={logoUrl} alt="logo" />
                    </Link>
                </div>
                <div className={classes.menubar}>
                    {desktopMenu}
                    {phoneMenu}
                </div>
            </header>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/aboutMe" exact component={AboutMe} />
                <Route path="/blog" exact component={BlogContainer} />
            </Switch>
            <footer className={classes.rootFooter}>
                <div className={classes.socialMedia}>
                    <a href="https://m.youtube.com/channel/UCu26vSi5TM-gLwkAoMj0lSA" target="blanked">
                        <FaYoutube />
                    </a>
                    <a href="https://www.instagram.com/mohammadsadra_babaei_3D/" target="blanked">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-sadra-babaei-7ba877187" target="blanked">
                        <FaLinkedin />
                    </a>
                    <a href="https://t.me/Mohammadsadrababaei" target="blanked">
                        <FaTelegram />
                    </a>
                </div>
                <p>Mohammad Sadra Babaei, All Rights Reserved</p>
            </footer>
        </>
    );
}

export default connect()(Blog);