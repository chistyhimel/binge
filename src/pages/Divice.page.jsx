import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const useStyles = makeStyles((theme) => ({}));

const specificationData = [
  { name: "Version", data: "Android TV 9" },
  { name: "Cpu", data: "1.8 GHz Quad Core Processor" },
  { name: "Ram", data: "16GB" },
  { name: "Storage", data: "8GB" },
  { name: "Oficial Warrenty", data: "1 Year" },
];

function Divice() {
  const classes = useStyles();
  const matchesSm = useMediaQuery("(max-width:600px)");
  const [images, setImages] = useState([
    {
      original:
        "https://backend.robishop.com.bd/pub/media/catalog/product/m/s/mshk6715.jpg",
      thumbnail:
        "https://backend.robishop.com.bd/pub/media/catalog/product/m/s/mshk6715.jpg",
    },
    {
      original:
        "https://backend.robishop.com.bd/pub/media/catalog/product/m/s/mshk6715.jpg",
      thumbnail:
        "https://backend.robishop.com.bd/pub/media/catalog/product/m/s/mshk6715.jpg",
    },
    {
      original:
        "https://backend.robishop.com.bd/pub/media/catalog/product/m/s/mshk6715.jpg",
      thumbnail:
        "https://backend.robishop.com.bd/pub/media/catalog/product/m/s/mshk6715.jpg",
    },
    {
      original:
        "https://backend.robishop.com.bd/pub/media/catalog/product/m/s/mshk6715.jpg",
      thumbnail:
        "https://backend.robishop.com.bd/pub/media/catalog/product/m/s/mshk6715.jpg",
    },
    {
      original:
        "https://backend.robishop.com.bd/pub/media/catalog/product/m/s/mshk6715.jpg",
      thumbnail:
        "https://backend.robishop.com.bd/pub/media/catalog/product/m/s/mshk6715.jpg",
    },
  ]);

  return (
    <>
      <Box marginTop={15} color="#d8d8d8">
        <Container>
          <Typography variant="h5">BINGE PRODUCT DETAILS</Typography>

          <Box
            border="solid 2px rgba(255, 255, 255, 0.1)"
            bgcolor="#1c1c1c"
            padding={matchesSm ? 2 : 5}
            marginTop={3}
          >
            <Grid container spacing={matchesSm ? 3 : 8}>
              <Grid item xs={12} md={5}>
                {images.length ? (
                  <ImageGallery
                    thumbnailPosition="bottom"
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showBullets={true}
                  />
                ) : null}
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: "bold", color: "#FFFF" }}
                >
                  Binge TV Box
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Tk 3,999
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Enter in to the world of endless entertainment at home with
                  your Binge powered by Android TV. It is very easy to use, just
                  plug and play. Search your favorite content with the all new
                  smart RCU.{" "}
                </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "15px 0" }}
                  size="small"
                >
                  Watch Installation Video
                </Button>
                <Typography variant="subtitle2" color="secondary" gutterBottom>
                  SPACIFICATION
                </Typography>

                {specificationData.map((data, idx) => (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    borderBottom="1px solid #c4c4c430"
                    key={idx}
                  >
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ padding: "15px" }}
                    >
                      {data.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ padding: "15px" }}
                    >
                      {data.data}
                    </Typography>
                  </Box>
                ))}

                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{ marginTop: 20 }}
                  fullWidth
                >
                  Place Order
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Divice;
