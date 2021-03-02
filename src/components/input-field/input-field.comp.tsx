import React from "react";

import { InputFieldS } from "./input-field.styles";

interface Props {
  value?: string | number;
  name?: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: any) => void;
}

const InputField: React.FC<Props> = ({ ...allProps }) => (
  <InputFieldS {...allProps} />
);

export default InputField;
