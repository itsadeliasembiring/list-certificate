import React from "react";
// Import Component MUI
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { CardActionArea } from "@mui/material";

export default function CardSertificate(props) {
  return (
    <>
      <Grid container direction={{ xs: "column" }}>
        {/* Card*/}
        <Grid item xs={12} md={6} xl={6}>
          <Card
            sx={{
              width: {
                xs: "99%",
              },
              height: {
                xs: 270,
              },
              mt: 2,
              border: "#D3D3D3 solid",
            }}
          >
            {/* Image */}
            <CardActionArea>
              <CardMedia
                component="img"
                image={props.img}
                alt="sertifikat"
                sx={{
                  height: {
                    xs: 200,
                  },
                }}
              />
            </CardActionArea>

            <Divider />

            {/* Content */}
            <CardContent>
              {/* Title */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                  },
                  fontWeight: "bold",
                  mt: -1.5,
                  mb: 0,
                }}
              >
                {props.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  mb: 1,
                  fontSize: {
                    xs: "16px",
                  },
                }}
              >
                {props.description}
              </Typography>

              {/* Date */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                  },
                  color: "#808080",
                }}
              >
                {props.date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
