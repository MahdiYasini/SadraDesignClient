import React from 'react'
import {Box, makeStyles}  from '@material-ui/core';
import { Link } from "react-router-dom";

import BlogPosts from '../../components/BlogPosts/BlogPosts';

const useStyle = makeStyles({
    blogContainer: {
        display: "flex",
        flexWrap: "wrap",
        padding: "0 auto",
        justifyContent: "center",
        "& a": {
            margin: "1rem"
        }
    }
})

//! In here we get all posts that saved in DB 
//? Now we Only testing and we need to complete it.

const BlogContainer = () => {
    const classes = useStyle();
    return (
        <Box
            className = {classes.blogContainer}
            p={1}
            m={1}
            bgcolor="background.paper"
            css={{ maxWidth: "100%" }}>
            <Link>
                <Box p={1} bgcolor="grey.300">
                    <BlogPosts/> 
                </Box>
            </Link>
            <Link>
                <Box p={1} bgcolor="grey.300">
                    <BlogPosts/> 
                </Box>
            </Link>
            <Link>
                <Box p={1} bgcolor="grey.300">
                    <BlogPosts/> 
                </Box>
            </Link>
            <Link>
                <Box p={1} bgcolor="grey.300">
                    <BlogPosts/> 
                </Box>
            </Link>
            <Link>
                <Box p={1} bgcolor="grey.300">
                    <BlogPosts/> 
                </Box>
            </Link>
        </Box>
    )
};

export default BlogContainer;