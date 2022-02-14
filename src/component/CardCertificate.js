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
// Import Theme
import Colors from "../Theme/Color";

export default function CardCertificate(props) {
  return (
    <>
      <Grid container direction="column" mt={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              width: "99%",
              height: 270,
              border: 1,
              borderColor: Colors.lightGray,
            }}
          >
            {/* Image */}
            <CardActionArea>
              <CardMedia
                component="img"
                image={props.img}
                alt="certificate"
                sx={{
                  height: 190,
                }}
              />
            </CardActionArea>

            <Divider />

            {/* Content */}
            <CardContent>
              {/* Title */}
              <Typography
                className="title"
                sx={{
                  mt: -1,
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {props.title}
              </Typography>

              {/* Description */}
              <Typography
                className="description"
                sx={{
                  fontSize: "14px",
                }}
              >
                {props.description}
              </Typography>

              {/* Date */}
              <Typography
                className="date"
                sx={{
                  fontSize: "13px",
                  color: Colors.gray,
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
