import React from "react";
import { InputFieldContainer } from "./InputField.style";

function InputField({ label = "", value = "", edit }) {
  console.log(edit);
  return (
    <>
      <InputFieldContainer edit={edit}>
        <label for="html">{label}</label>
        <input
          type="text"
          id="html"
          name="fav_language"
          value={value}
          disabled={edit ? true : false}
        />
      </InputFieldContainer>
    </>
  );
}

export default InputField;
