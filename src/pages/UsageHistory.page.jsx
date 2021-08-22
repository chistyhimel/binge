import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const data = [
  { title: "TODAY", time: "234 MIN" },
  { title: "YESTERDAY", time: "234 MIN" },
  { title: "LAST WEEK", time: "234 MIN" },
  { title: "LAST MONTH", time: "234 MIN" },
];

const useStyles = makeStyles((theme) => ({}));

function UsageHistory() {
  const classes = useStyles();
  const matchesSm = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Container maxWidth="sm">
        <Box color="#d8d8d8" paddingTop={10}>
          <Typography variant="h5" gutterBottom>
            USAGE HISTORY
          </Typography>
          <Divider style={{ backgroundColor: "#70707075", marginBottom: 15 }} />
          <Typography
            variant="subtitle1"
            style={{ maxWidth: 400, textAlign: "justify", marginBottom: 35 }}
          >
            As per your data uses you will be able to see those history in the
            below list. You can always clear out all the history and start using
            again.
          </Typography>

          {data.map((data, idx) => (
            <div key={idx}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding={2}
              >
                <Typography variant="subtitle1">{data.title}</Typography>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  234 MIN
                </Typography>
              </Box>
              <Divider style={{ backgroundColor: "#70707055" }} />
            </div>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default UsageHistory;
