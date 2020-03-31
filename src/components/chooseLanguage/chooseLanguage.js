import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import backgroundImage from '../../assets/images/languageBackground.jpg'
import * as actionCreators from '../../store/actions/index';

const useStyles = makeStyles({
    rootDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(90deg, rgb(157, 0, 2, 0.5) 10%, rgb(178, 148, 5, 0.5) 90%), url(${backgroundImage})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    showCaseContent: {
        backdropFilter: "blur(5px)",
        borderRadius: "10px",
        border: "1px solid rgb(66.3, 66.3, 66.3)"
    },
    button: {
        backgroundColor: "rgb(66.3, 66.3, 66.3, 0.5)",
        borderRadius: "5px",
        border: "1px solid rgb(66.3, 66.3, 66.3)",
        display: "inline-block",
        cursor: "pointer",
        color: "#ffffff",
        fontSize: "17px",
        padding: "16px 31px",
        textDecoration: "none",
        margin: "1.5rem",
        transition: "all 1s ease-in-out",
        "&:hover": {
            transform: "scale(2)",
        },
        "&:focus": {
            outline: "none",
            boxShadow: "0 0 3pt 2pt #fff"
        }
    }
});

const ChooseLanguage = (props) => {
    const classes = useStyles();
    return (
        <div className = {classes.rootDiv}>
            <div className = {classes.showCaseContent}>
                <button
                onClick = {() => props.onSetLanguage('en')}
                className={classes.button}>
                    English
                </button>
                <button
                onClick = {() => props.onSetLanguage('fa')}
                className={classes.button}>
                    فارسی
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSetLanguage: (lan) => dispatch(actionCreators.setLanguage(lan))
    }
};

export default connect(null, mapDispatchToProps)(ChooseLanguage);