import React from "react";

export interface TextInputProps {
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  return (
    <input
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
      placeholder={placeholder}
    />
  );
};
