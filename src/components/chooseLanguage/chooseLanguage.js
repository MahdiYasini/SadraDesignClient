import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Button, Box, Hidden } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';

import backgroundImage from '../../assets/images/languageBackground.jpg'
import * as actionCreators from '../../store/actions/index';

const useStyles = makeStyles(theme => ({
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
    chooseLanguageBox: {
        backgroundImage: "linear-gradient(90deg, rgb(157, 0, 2, 0.5) 10%, rgb(178, 148, 5, 0.5) 90%)",
    },
    paragraph: {
        color: blueGrey[200],
        fontSize: "36px",
        textAlign: "center"
    },
    button: {
        margin: theme.spacing(3),
        padding: theme.spacing(4),
        fontSize: "22px",
        color: blueGrey[200],
        borderColor: blueGrey[200],
    }
}));

const ChooseLanguage = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.rootDiv}>
            <Hidden mdUp>
            <Box border={1} borderColor={blueGrey[200]} borderRadius={4} className={classes.chooseLanguageBox}>
                    <Box p={1}
                        width="100%"
                        display="flex"
                        flexWrap="wrap"
                        flexDirection = "column"
                        alignItems = "center">
                        <Box>
                            <Button
                                size="large"
                                className={classes.button}
                                onClick={() => props.onSetLanguage("eng")}
                                variant="outlined">
                                English
                            </Button>
                        </Box>
                        <Box >
                            <Button
                                className={classes.button}
                                onClick={() => props.onSetLanguage("fa")}
                                variant="outlined">
                                فارسی
                        </Button>
                        </Box>
                    </Box>
                </Box>
            </Hidden>
            <Hidden smDown>
                <Box border={1} borderColor={blueGrey[200]} borderRadius={4} className={classes.chooseLanguageBox}>
                    <Box p={1}
                        width="100%"
                        display="flex"
                        flexWrap="wrap"
                        justifyContent="space-between">
                        <Box>
                            <Button
                                size="large"
                                className={classes.button}
                                onClick={() => props.onSetLanguage("eng")}
                                variant="outlined">
                                English
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                size="large"
                                className={classes.button}
                                onClick={() => props.onSetLanguage("fa")}
                                variant="outlined">
                                فارسی
                        </Button>
                        </Box>
                    </Box>
                </Box>
            </Hidden>
        </Box>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSetLanguage: (lan) => dispatch(actionCreators.setLanguage(lan))
    }
}

export default connect(null, mapDispatchToProps)(ChooseLanguage);