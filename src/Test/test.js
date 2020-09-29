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

function Test() {
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
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <div className="app">
      <h1>Amiibos</h1>

      <div></div>
      <div>
        {amiibos &&
          amiibos.map((amiibo) => {
            const name = amiibo.name;
            const game = amiibo.gameSeries;
            const image = amiibo.image

            return (
              <div>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={ image }
                      title="Contemplative Reptile"
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
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
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

                <p>{name}</p>
                <p>{game}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Test;
