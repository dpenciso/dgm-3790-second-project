import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './amiibo.css'

function Amiibo() {
  const [amiibos, setAmiibos] = useState(null);

  const apiURL = "https://www.amiiboapi.com/api/amiibo";

  const fetchData = async () => {
    const response = await axios.get(apiURL);

    setAmiibos(response.data.amiibo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      margin: '1rem',
    },
    media: {
      height: 400,
    },
  });

  const classes = useStyles();

  return (
    <div className="app">

      <div className='container-container'>
        {amiibos &&
          amiibos.map((amiibo) => {
            const name = amiibo.name;
            const game = amiibo.gameSeries;
            const image = amiibo.image
            const release = amiibo.release.na
            const key = amiibo.tail

            return (
              <div className='cards-container' key={key}>
                <Card className={classes.root}>
                  <CardActionArea onClick={()=> window.open( image , "_blank")}>
                    <CardMedia
                      className={classes.media}
                      image={ image }
                      title={ name }
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        { name }
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        The { name } Amiibo, from the { game } series, was originally released in North America on { release }
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      Share
                    </Button> */}
                    <Button size="small" color="primary" onClick={()=> window.open('https://www.nintendo.com/amiibo/', "_blank")}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Amiibo;