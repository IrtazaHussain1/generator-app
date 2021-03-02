import React from "react";

import { ButtonS } from "./button.styles";
import InputField from "../input-field/input-field.comp";

interface Props {
  children: string;
  onClickHandler?: (e: any) => void;
}

const Button: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, onClickHandler, ...otherProps }) => (
  <ButtonS {...otherProps} onClick={onClickHandler}>
    {children}
  </ButtonS>
);

export default Button;
