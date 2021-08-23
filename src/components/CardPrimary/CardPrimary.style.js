import styled from "styled-components";

export const CardPrimaryWrapper = styled.div`
  height: 350px;
  width: 180px;
  cursor: pointer;
  @media (max-width: 1200px) {
    height: 330px;
    width: 160px;
  }
  @media (max-width: 600px) {
    height: 310px;
    width: 140px;
  }

  &:hover {
    transform: scale(1);
  }
  &:hover img {
    transform: scale(1.2);
    box-shadow: 0 0 20px 0 #850000;
    border: solid 3px rgba(154, 0, 0, 0.8);
  }

  &:hover .card__text {
    opacity: 1;
  }
  &:hover .card__header {
    opacity: 1;
  }

  img {
    transition: all 0.4s ease-in-out;
    object-fit: cover;
    width: 180px;
    height: 180px;
    border: solid 4px rgba(255, 255, 255, 0.1);
    border-radius: 10px;

    @media (max-width: 1200px) {
      height: 160px;
      width: 160px;
      /* padding: 0px 0 170px 0; */
    }
    @media (max-width: 600px) {
      height: 140px;
      width: 140px;
      /* padding: 0px 0 170px 0; */
    }
  }
  .card__text {
    transition: all 0.4s ease-in-out;
    opacity: 0;
    margin-top: 30px;
  }

  .card__header {
    transition: all 0.4s ease-in-out;
    padding-bottom: 30px;
    opacity: 0;
  }

  .button {
    border-radius: 8px;
    border: solid 3px rgba(154, 0, 0, 0.8);
    box-sizing: border-box;
    background: transparent;
    padding: 5px;
    span {
      background-color: #ffff;
      padding: 0.5px 3.5px;
      font-weight: bold;
    }
  }
`;
