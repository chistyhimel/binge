import {
  Typography,
  Container,
  Divider,
  Box,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import EditIcon from "@material-ui/icons/Edit";
import InputField from "./../components/InputField/InputField.component";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: 90,
    "& *": {
      color: "#d8d8d8",
    },
  },
  image: {
    maxWidth: 170,
    height: 170,
    borderRadius: 4,

    "@media(max-width:600px)": {
      maxWidth: 120,
      height: 120,
    },
  },
  editPhotoButton: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    margin: "0 auto",
    width: "120px",
    fontSize: "10px",
    backgroundColor: "rgba(154, 0, 0, 0.8)",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "0rem 0.9rem",
    marginTop: 20,
    "@media(max-width:600px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
}));

function UserProfile() {
  const classes = useStyles();
  const matchesSm = useMediaQuery("(max-width:600px)");
  const [editProfile, setEditProfile] = useState(false);

  return (
    <>
      <Container maxWidth="sm">
        <main className={classes.wrapper}>
          <Typography variant="h5">USER ACCOUNT</Typography>
          <Divider
            variant="fullWidth"
            style={{ backgroundColor: "#707070", margin: "20px 0" }}
          />
          <Box position="relative" width="fit-content">
            <img
              src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwOTI0NDYwNjQ2Mjc4MjMy/gettyimages-1061959920.jpg"
              alt=""
              className={classes.image}
            />

            <Button
              variant="contained"
              color="secondary"
              className={classes.editPhotoButton}
              startIcon={<CameraAltIcon />}
              size="small"
            >
              Edit Photo
            </Button>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginY={1}
          >
            <Typography variant="h6">User Details</Typography>

            {editProfile ? (
              <Box>
                <Button
                  variant="outlined"
                  style={{ border: "1px solid #FFFF", marginRight: 10 }}
                  onClick={() => setEditProfile(!editProfile)}
                  size="small"
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#008357" }}
                  onClick={() => setEditProfile(!editProfile)}
                  size="small"
                >
                  Save
                </Button>
              </Box>
            ) : (
              <Button
                startIcon={<EditIcon />}
                variant="contained"
                style={{ backgroundColor: "#8f8f8f49" }}
                onClick={() => setEditProfile(!editProfile)}
                size="small"
              >
                Edit Profile
              </Button>
            )}
          </Box>

          <form className={classes.form}>
            <InputField
              label="user name"
              value="Rock Johnson"
              edit={editProfile}
            />
            <InputField label="Gender" value="Male" edit={editProfile} />
            <InputField
              label="Mobile Number"
              value="0182 - 9876 - 9876"
              edit={editProfile}
            />
            <InputField
              label="email address"
              value="email@domain.com"
              edit={editProfile}
            />
            <InputField
              label="AREA / LOCATION"
              value="Mohammadpur, Dhaka."
              edit={editProfile}
            />
            <InputField
              label="INTERNET SERVICE PROVIDER NAME"
              value="CUE CLUB INTERNET SERVICE"
              edit={editProfile}
            />
            <InputField
              label="Date of Birth"
              value="08 / 07 / 87"
              edit={editProfile}
            />
            <InputField
              label="ALTERNATIVE MOBILE NUMBER"
              value="0182 - 9876 - 9876"
              edit={editProfile}
            />
          </form>

          <Divider
            variant="fullWidth"
            style={{ backgroundColor: "#707070", margin: "20px 0" }}
          />
          <Typography variant="h6">Subscription History</Typography>

          <Box
            bgcolor="#6e0000"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={matchesSm ? 2 : 3}
            marginY={2}
          >
            <div>
              <Typography
                variant="caption"
                display="block"
                style={{
                  color: "#ffcb87",
                  fontSize: `${matchesSm ? "8px" : ""}`,
                }}
              >
                ACTIVE PACKAGE
              </Typography>
              <Typography
                variant="h6"
                display="block"
                style={{ fontSize: `${matchesSm ? "15px" : ""}` }}
              >
                MONTHLY
              </Typography>
              <Typography
                variant="h6"
                display="block"
                style={{ fontSize: `${matchesSm ? "15px" : ""}` }}
              >
                SUBSCRIPTION
              </Typography>
              <Typography
                variant="caption"
                display="block"
                style={{
                  color: "#ffcb87",
                  fontSize: `${matchesSm ? "8px" : ""}`,
                }}
              >
                LAST PAID: 02 JANUARY 2021
              </Typography>
            </div>

            <div>
              <Button color="secondary" variant="contained" size="small">
                Change Plan
              </Button>
              <br />
              <Button
                color="primary"
                variant="contained"
                size="small"
                style={{
                  marginTop: 10,
                  backgroundColor: "#a00000",
                  border: "solid 1px #ce0000",
                }}
              >
                UNSUBSCRIBE
              </Button>
            </div>
          </Box>

          <Divider
            variant="fullWidth"
            style={{ backgroundColor: "#707070", margin: "30px 0" }}
          />
        </main>
      </Container>
    </>
  );
}

export default UserProfile;
