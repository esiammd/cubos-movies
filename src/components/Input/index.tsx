import React, { type InputHTMLAttributes, useState, useCallback } from 'react';

import searchIcon from '../../assets/icons/search.svg';

import { InputContent } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <InputContent $isFocused={isFocused}>
      <input {...rest} onFocus={handleInputFocus} onBlur={handleInputBlur} />
      <img src={searchIcon} />
    </InputContent>
  );
};

export default Input;
