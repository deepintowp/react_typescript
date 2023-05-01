import React from "react";
type inputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
const Input = ({handleChange, value}: inputProps) => {
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Input;
