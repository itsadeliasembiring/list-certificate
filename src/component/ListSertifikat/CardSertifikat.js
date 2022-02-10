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
            <Link
              to={`/detail-sertifikat/${data.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  width: {
                    xs: "99%",
                  },
                  height: {
                    xs: 290,
                  },
                  mt: 2,
                  border: "#249EA0 solid",
                }}
              >
                {/* Image */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={data.id}
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
                    {data.title}
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
                    {data.description}
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
                    {data.date}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Data;
