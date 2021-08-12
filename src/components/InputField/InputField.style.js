import styled from "styled-components";

export const InputFieldContainer = styled.div`
  position: relative;
  margin-bottom: 20px;

  input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: ${({ edit }) => (edit ? "solid 1px #707070" : "none")};
    background-color: #131313;
    padding-left: 25px;
  }

  label {
    font-size: 11px;
    color: #8f8f8f;
    position: absolute;
    top: -8px;
    background-color: #131313;
    left: 15px;
    padding: 0 10px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
