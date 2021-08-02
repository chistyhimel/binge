import { Box, Typography } from "@material-ui/core";
import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { CardPrimaryWrapper } from "./CardPrimary.style";
import { useHistory } from "react-router-dom";

function CardPrimary({ movie, tv }) {
  const history = useHistory();
  return movie ? (
    <>
      <CardPrimaryWrapper
        onClick={() => {
          if (!tv) {
            history.push(`/details/${movie.id}`);
          }
        }}
      >
        <Box
          className="card__header"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {tv ? null : (
            <>
              <Typography
                variant="subtitle2"
                noWrap
                style={{ color: "#ffffff" }}
              >
                Add to Parent List
              </Typography>

              <button className="button">
                <span>+</span>
              </button>
            </>
          )}
        </Box>
        <img
          src={
            tv
              ? movie.backdrop_path
              : `https://image.tmdb.org/t/p/original${movie.poster_path}`
          }
          alt=""
        />
        <main className="card__text">
          <Typography
            className="card__text"
            variant="h6"
            noWrap
            style={{ textTransform: "uppercase", color: "#d8d8d8" }}
          >
            {tv ? movie.name : movie.title}
          </Typography>

          {tv ? null : (
            <>
              <Typography
                variant="subtitle2"
                noWrap
                style={{ color: "#8f8f8f" }}
              >
                Action/Thriller
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="caption"
                  noWrap
                  style={{ color: "#8f8f8f" }}
                >
                  Year: 2021
                </Typography>
                <Box display="flex" alignItems="center">
                  <StarIcon color="secondary" fontSize="small" />
                  <Typography
                    variant="caption"
                    noWrap
                    style={{ color: "#8f8f8f" }}
                  >
                    Year: 2021
                  </Typography>
                </Box>
              </Box>
            </>
          )}
        </main>
      </CardPrimaryWrapper>
    </>
  ) : null;
}

export default CardPrimary;
