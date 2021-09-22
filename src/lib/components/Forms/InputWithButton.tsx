import { Label as InputButtonContainer } from "@windmill/react-ui";
import React from "react";
import { Button } from "../Buttons/Button";
import { TextInput } from "./TextInput";
import { Label } from "./Label";

export const InputWithButton: React.FC<{
  buttonLabel: string;
  inputLabel: string;
  placeholder: string;
  onClick: () => any;
}> = ({ buttonLabel, placeholder, inputLabel, onClick }) => {
  return (
    <InputButtonContainer className="mt-4">
      <Label label="Video URL" />
      <div className="relative text-gray-500 focus-within:text-purple-600">
        <TextInput placeholder={placeholder} />
        <button
          className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-brand-green border border-transparent rounded-r-md active:bg-brand-green-light hover:bg-brand-green-dark focus:outline-none focus:shadow-outline-green"
          onClick={onClick}
        >
          Analyse
        </button>
      </div>
    </InputButtonContainer>
  );
};
