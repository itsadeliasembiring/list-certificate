import React from "react";
// Import Component MUI
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
// Import Images
import sertifikat from "../../assets/images/sertifikat.png";
// Import Card Data
import lotsOfData from "./CardData";

import { Link } from "react-router-dom";
const Data = () => {
  return (
    <>
      {lotsOfData.map((data, index) => (
        <Grid
          container
          direction={{ xs: "column", md: "row", xl: "row" }}
          key={index}
        >
          {/* Card*/}
          <Grid item xs={12} md={6} xl={6}>
            <Card
              sx={{
                width: {
                  lg: "85%",
                  md: "85%",
                  xs: "99%",
                },
                height: {
                  lg: 328,
                  md: 328,
                  xs: 290,
                },
                mt: 2,
                border: "#249EA0 solid",
              }}
            >
              {/* Image */}
              <Link to="/detailsertifikat">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={sertifikat}
                    alt="sertifikat"
                    sx={{
                      height: {
                        lg: 230,
                        md: 230,
                        xs: 200,
                      },
                    }}
                  />
                </CardActionArea>
              </Link>

              {/* Content */}
              <CardContent>
                {/* Title */}
                <Typography
                  sx={{
                    fontSize: {
                      lg: "19px",
                      md: "19px",
                      xs: "16px",
                    },
                    fontWeight: "bold",
                    mt: -1.5,
                    mb: 0,
                  }}
                >
                  {data.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    mb: 1,
                    fontSize: {
                      lg: "18px",
                      md: "18px",
                      xs: "16px",
                    },
                  }}
                >
                  {data.description}
                </Typography>

                {/* Date */}
                <Typography
                  sx={{
                    fontSize: {
                      lg: "15px",
                      md: "15px",
                      xs: "14px",
                    },
                    color: "#808080",
                  }}
                >
                  {data.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Data;
