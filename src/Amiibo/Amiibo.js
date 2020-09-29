import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Amiibo = () => {

  const [amiiboCharList, setAmiiboCharList] = useState(null);
  const [amiiboCharName, setAmiiboCharName] = useState(null);
  const [amiiboCharRelease, setAmiiboCharRelease] = useState(null);
  const [amiiboCharGame, setAmiiboCharGame] = useState(null);
  const [amiiboCharImg, setAmiiboCharImg] = useState(null);

  const fetchAmiiboList = async () => {
    try {
      const response = await axios.get("https://www.amiiboapi.com/api/amiibo");
      const amibList = response.data.amiibo;
      const amibName = amibList.map((char) => char.name);
      const amibRelease = amibList.map((char) => char.release.na);
      const amibGame = amibList.map((char) => char.gameSeries);
      const amibImg = amibList.map((char) => char.image);
      setAmiiboCharList(amibList);
      setAmiiboCharName(amibName);
      setAmiiboCharRelease(amibRelease);
      setAmiiboCharGame(amibGame);
      setAmiiboCharImg(amibImg)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAmiiboList();
  }, []);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  const names = amiiboCharList
  
  return (


   

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizards
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Amiibo;
