import React from 'react';

interface ImgCheckboxProps {
  id: string;
  checked: boolean;
  handleCheckbox: () => void;
}

const ImgCheckbox = ({ id, checked, handleCheckbox }: ImgCheckboxProps) => {
  return (
    <form className="formCheckbox">
      <input
        className="inputCheckbox"
        checked={checked}
        onChange={handleCheckbox}
        type="checkbox"
        id={id}
      />
      <label className="labelCheckbox" htmlFor={id}></label>
    </form>
  );
};

export default ImgCheckbox;
