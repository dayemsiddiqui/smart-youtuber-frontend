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
        <Button onClick={onClick}> Analyse </Button>
      </div>
    </InputButtonContainer>
  );
};
