import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';



import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GridListTile from "@material-ui/core/GridListTile";
import {Link} from "@material-ui/core";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import GridList from "@material-ui/core/GridList";


const useStyles = makeStyles((theme) => ({
    tabs:{
        backgroundColor: "#121521",
    },
    matchesTabs:{
        marginBottom: "30px",
        marginTop: "10px",

    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: "#121521",
    },
    gridList: {
        width: "100%",
        height: "auto",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
    },
    title: {
        color: "#fff",
        textAlign: "center",
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    logo: {
        width: "150px",
    },
    listTitle: {
        alignItems: "center",
        justifyContent: "center",
    },
    container:{
        marginTop: "40px",
    },
}));



export default function Matches() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="md" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Profile
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    User:
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Email:
                </Typography>
                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                    <GridListTile key={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} cols={1}>
                        <Link href="#">
                            <img src={"https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"} alt={"Image"} className={classes.logo} />
                        </Link>

                        <GridListTileBar
                            title={"Virtus pro"}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                </GridList>
            </Container>

        </React.Fragment>
    );
}


