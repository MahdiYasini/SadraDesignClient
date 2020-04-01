import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';

import showCaseContentFirst_First_Main_Image from '../../assets/images/showCaseContentFirst_First_Main.jpg'
import showCaseContentFirst_First_Main_Hover from '../../assets/images/showCaseContentFirst_Hover.jpg'

const useStyle = makeStyles({
    showCaseContent: {
        display: "flex",
        background: "red",
        "& > div": {
            flex: "1",
            border: "1px solid #fff",
            // padding: "7rem"
        },
    },
    showCaseContentLink: {
        opacity: 0,
        padding: "6rem",
        transition: "all 1s ease-in-out",
        "& a": {
            color: "#000"
        },
        "&:hover": {
            opacity: 1
        }
    },
    showCaseContentLinkLine: {
        padding: "1rem",
        fontSize: "1.7rem",
        borderRadius: "5px",
    },
    showCaseContentHide: {
        opacity: 1,
        "&:hover":{
            opacity: 0
        }
    },
    LinkLineToLeft: {
        background: "linear-gradient(to left, #fdfcfb , rgba(0, 0, 0, 0))",
        textAlign: "right"
    },
    LinkLineToRight: {
        background: "linear-gradient(to right, #fdfcfb , rgba(0, 0, 0, 0))",
    },
    showCaseContentFirst_First_Main: {
        background: `url(${showCaseContentFirst_First_Main_Image}) no-repeat center center/cover`,
        transition: "background a 2s ease-in-out",
        "&:hover": {
            background: `url(${showCaseContentFirst_First_Main_Hover}) no-repeat center center/cover`,
            transition: "all 2s ease-in-out"
        }
    }
});

const Home = () => {
    const classes = useStyle();
    return (
        <section>
            <div className={classes.showCaseContent}>
                <div className={classes.showCaseContentFirst_First_Main}>
                    <div className={classes.showCaseContentLink}>
                        <div className={`${classes.showCaseContentHide} ${classes.LinkLineToRight}`}>
                            <Link>Read More</Link>
                        </div>
                        <div className={`${classes.showCaseContentLinkLine} ${classes.LinkLineToRight}`}>
                            <Link>Read More</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.showCaseContentFirst_First_Main}>
                    <div className={classes.showCaseContentLink}>
                        <div className={`${classes.showCaseContentLinkLine} ${classes.LinkLineToLeft}`}>
                            <Link>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
};

export default Home;