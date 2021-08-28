import { Label } from "@windmill/react-ui";
import React from "react";

export const InputWithButton: React.FC<{
  buttonLabel: string;
  inputLabel: string;
  placeholder: string;
  onClick: () => any;
}> = ({ buttonLabel, placeholder, inputLabel, onClick }) => {
  return (
    <Label className="mt-4">
      <span className="text text-lg">{inputLabel}</span>
      <div className="relative text-gray-500 focus-within:text-purple-600">
        <input
          className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
          placeholder={placeholder}
        />
        <button
          onClick={onClick}
          className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          {buttonLabel}
        </button>
      </div>
    </Label>
  );
};
