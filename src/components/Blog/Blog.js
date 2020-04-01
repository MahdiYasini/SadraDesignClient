import React from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { makeStyles, Hidden } from '@material-ui/core'

import logoUrl from '../../assets/images/logo.png';

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const useStyles = makeStyles({
    rootHeader: {
        position: "sticky",
        top: "0",
        height: "26vh",
        background: "rgb(255, 255, 255, 0.7)",
    },
    logo: {
        margin: "0 auto",
        width: "100%",
        height: "70%",
        borderBottom: "1px solid black"
    },
    imageLogo: {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "cover",
        margin: "0 auto",
        display: "block"
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


const Blog = () => {
    const classes = useStyles();
    return (
        <>
            <header className={classes.rootHeader}>
                <div className={classes.logo} >
                    <img className={classes.imageLogo} src={logoUrl} alt="logo" />
                </div>
                <div className={classes.menubar}>
                    <ul>
                        <li><Link>About Me</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>My Concepts</Link></li>
                        <li><Link>Contact</Link></li>
                        <li><Link>Courses</Link></li>
                    </ul>
                </div>
            </header>
            <footer className={classes.rootFooter}>
                <div className={classes.socialMedia}>
                    {/* //! Link doesn't correct. */}
                    <a href="/insta" target="blanked">
                        <FaInstagram />
                    </a>
                    <a href="/linkedin" target="blanked">
                        <FaLinkedin />
                    </a>
                    <a href="/facebook" target="blanked">
                        <FaFacebookF />
                    </a>
                </div>
                <p>Mohammad Sadra Babaei, All Rights Reserved</p>
            </footer>
        </>
    );
}

export default connect()(Blog);