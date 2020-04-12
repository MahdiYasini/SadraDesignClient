import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//! this is for testing in real, when we get data from server send post info from PostContainer.
import image from '../../assets/images/showCaseContentFirst_First_Main.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const CoursePosts = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Shrimp and Chorizo Paella"
            />
            <CardMedia
                className={classes.media}
                image={image}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="subtitle1" component="p">
                    Started At: September 14, 2016
                </Typography>
                <Typography variant="subtitle1"  component="p">
                    Finished At: September 14, 2016
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CoursePosts;
