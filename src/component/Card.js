import React from "react";
// Import Component MUI
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
// Import Images
import images from "../assets/images/noimage.jpg";
import sertifikat from "../assets/images/sertifikat.png";

export default function Cards() {
  return (
    <>
      {/* Card */}
      <Grid
        container
        direction={{ xs: "column", md: "row", xl: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        {/* Card 1 */}
        <Grid item xs={12} md={6} xl={6}>
          <Card
            sx={{
              width: {
                lg: "90%",
                md: "90%",
                xs: "100%",
              },
              height: {
                lg: 318,
                md: 318,
                xs: 310,
              },
              mt: 2,

              border: "#249EA0 solid",
            }}
          >
            <CardActionArea>
              {/* Image */}
              <CardMedia
                component="img"
                height="220"
                image={sertifikat}
                alt="sertifikat"
              />
            </CardActionArea>
            {/* Content */}
            <CardContent>
              {/* Title */}
              <Typography
                sx={{
                  mt: -1.5,
                  mb: 0,
                  fontWeight: "bold",
                  fontSize: {
                    lg: "19px",
                    md: "19px",
                    xs: "16px",
                  },
                }}
              >
                KEJUARAAN WAKODAI MONAS CUP 2016
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
                Juara 2 - Kumite Perorangan Putri -48 Kg
              </Typography>
              {/* Date */}
              <Typography
                sx={{
                  fontSize: {
                    lg: "15px",
                    md: "15px",
                    xs: "14px",
                  },
                }}
              >
                26 Juli 2016
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={6} xl={6}>
          <Card
            sx={{
              width: {
                lg: "90%",
                md: "90%",
                xs: "100%",
              },
              height: {
                lg: 318,
                md: 318,
                xs: 310,
              },
              mt: 2,

              border: "#249EA0 solid",
            }}
          >
            <CardActionArea>
              {/* Image */}
              <CardMedia
                component="img"
                height="220"
                image={images}
                alt="sertifikat"
              />
            </CardActionArea>

            {/* Content */}
            <CardContent>
              {/* Title */}
              <Typography
                sx={{
                  mt: -1.5,
                  mb: 0,
                  fontWeight: "bold",
                  fontSize: {
                    lg: "19px",
                    md: "19px",
                    xs: "16px",
                  },
                }}
              >
                KEJUARAAN WAKODAI MONAS CUP 2016
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
                Juara 2 - Kumite Perorangan Putri -48 Kg
              </Typography>
              {/* Date */}
              <Typography
                sx={{
                  fontSize: {
                    lg: "15px",
                    md: "15px",
                    xs: "14px",
                  },
                }}
              >
                26 Juli 2016
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
