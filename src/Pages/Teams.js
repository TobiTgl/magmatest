import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Link} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
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
    },
    title: {
        color: theme.palette.primary.light,
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


const tileData = [
    {
        img: "https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://img.abiosgaming.com/competitors/Natus-Vincere-Navi-new-logo.png",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png",
        title: 'VirtusPro',
        author: 'author',
    },
    {
        img: "https://img.abiosgaming.com/competitors/Natus-Vincere-Navi-new-logo.png",
        title: 'NaVi',
        author: 'author',
    },
    {
        img: "https://img.abiosgaming.com/competitors/Natus-Vincere-Navi-new-logo.png",
        title: 'Image',
        author: 'author',
    },
];


export default function SingleLineGridList() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.container}>
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <Link href="#">
                                <img src={tile.img} alt={tile.title} className={classes.logo} />
                            </Link>

                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton color={"primary"} aria-label={`star ${tile.title}`}>
                                        <StarBorderIcon className={classes.title} />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Container>
    );
}