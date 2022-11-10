import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./home.module.scss";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className={classes.featureSection}>
      <Container>
        <h1>Features</h1>

        <Grid
          container
          rowSpacing={5}
          columnSpacing={5}
          justifyContent="center"
        >
          {Array(5)
            .fill(0)
            .map((i) => {
              return (
                <Grid item key={i}>
                  <Card
                    sx={{
                      maxWidth: "320px",
                      backgroundColor: "white",
                      borderRadius: "0.85rem",
                      boxShadow: "0 5px 25px rgb(0 0 0 / 8%)",
                      padding: "2rem",
                    }}
                  >
                    <CardMedia>
                      {/* <svg className="svgIcon">
                      <use xlinkHref="#arrow-target-1"> </use>
                    </svg> */}

                      <TrackChangesIcon />
                    </CardMedia>

                    <CardContent>
                      <h3>AI-enabled cheating detection</h3>
                      <p>
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </p>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
