import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';

import showCaseContentFirst_First_Main_Image from '../../assets/images/showCaseContentFirst_First_Main.jpg'
import showCaseContentFirst_First_Main_Hover from '../../assets/images/showCaseContentFirst_Hover.jpg'

const useStyle = makeStyles({
    showCase: {
        display: "flex",
        flexWrap: "wrap",
        "& > div": {
            flex: "1",
            border: "1px solid #fff",
        },
    },
    showCaseContent: {
        transition: "background a 2s ease-in-out",
        "& > p": {
            fontSize: "1.7rem",
            padding: "1.7rem 1.7rem",
            transition: "all 1s ease-in-out",
        },
        "&:hover": {
            transition: "all 1s ease-in-out",
            "& > p": {
                display: "none"
            }
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
    LinkLineToLeft: {
        background: "linear-gradient(to left, #fdfcfb , rgba(0, 0, 0, 0))",
        textAlign: "right"
    },
    LinkLineToRight: {
        background: "linear-gradient(to right, #fdfcfb , rgba(0, 0, 0, 0))",
    },
    backgroundShowCase: {
        background: `url(${showCaseContentFirst_First_Main_Image}) no-repeat center center/cover`,
        "&:hover": {
            background: `url(${showCaseContentFirst_First_Main_Hover}) no-repeat center center/cover`,
            transition: "all 1s ease-in-out",
        },
    },
    imageOnly: {
        background: `url(${showCaseContentFirst_First_Main_Image}) no-repeat center center/cover`,
        padding: "8rem 0",
    },
    lastShowCaseContent: {
        paddingTop: "0.8rem",
    },

    LastShowCaseContentParagraph: {
        padding: "0 0.5rem 0 0.5rem",
        "& p": {
            padding: "1.5rem"
        }
    },
    headerLastShowCaseContent: {
        display: "flex",
        color: "#333",
        borderBottom: "3px solid black",
        "& > div": {
            margin: "1rem",
            "& a": {
                color: "black",
                fontSize: "1.7rem"
            }
        }
    }
});

const Home = () => {
    const classes = useStyle();
    return (
        <section>
            <div className={classes.showCase}>
                <div className={`${classes.showCaseContent} ${classes.backgroundShowCase}`}>
                    <div className={classes.showCaseContentLink}>
                        <div className={`${classes.showCaseContentLinkLine} ${classes.LinkLineToRight}`}>
                            <Link>Read More</Link>
                        </div>
                    </div>
                </div>
                <div className={`${classes.showCaseContent} ${classes.backgroundShowCase}`}>
                    <div className={classes.showCaseContentLink}>
                        <div className={`${classes.showCaseContentLinkLine} ${classes.LinkLineToLeft}`}>
                            <Link>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.showCase}>
                <div className={`${classes.showCaseContent} ${classes.backgroundShowCase}`} style = {{width: "100%"}}>
                    <div className={classes.showCaseContentLink}>
                        <div className={`${classes.showCaseContentLinkLine} ${classes.LinkLineToLeft}`}>
                            <Link>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.showCase}>
                    <div className={`${classes.showCaseContent} ${classes.backgroundShowCase}`}>
                        <div className={classes.showCaseContentLink}>
                            <div className={`${classes.showCaseContentLinkLine} ${classes.LinkLineToRight}`}>
                                <Link>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.showCaseContent} ${classes.backgroundShowCase}`}>
                        <div className={classes.showCaseContentLink}>
                            <div className={`${classes.showCaseContentLinkLine} ${classes.LinkLineToLeft}`}>
                                <Link>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.showCase}>
                    <div className={classes.lastShowCaseContent}>
                        <div className={classes.headerLastShowCaseContent}>
                            <div>
                                <Link>Blog</Link>
                            </div>
                            <div>
                                <p>
                                    Voluptate nulla ex sint ea id excepteur ut consequat veniam sunt ex incididunt adipisicing velit.
                                </p>
                            </div>
                        </div>
                        <div className = {classes.LastShowCaseContentParagraph}>
                            <p>Ex adipisicing laboris do ea ad voluptate laboris.Duis ullamco est laborum dolor sit veniam aliqua magna incididunt anim proident non consectetur.Exercitation culpa nisi ullamco do labore cillum Lorem laborum aute sit nisi officia ut.</p>
                        </div>
                    </div>
                    <div className={classes.imageOnly}></div>
                </div>
            </div>
        </section>
    )
};

export default Home;