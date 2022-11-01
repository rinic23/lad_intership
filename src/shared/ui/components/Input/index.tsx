import React from 'react';
import { Input as InputAntd, InputProps } from 'antd';
import { InputCloseIcon } from '../../../ui';
import { inputSize } from './constants';

type InputAntdPropsOmit = Omit<InputProps, 'size'>;

type TProps = InputAntdPropsOmit & {
  placehoderText: string;
  size?: 'default' | 'small';
};

export const Input = ({ placehoderText, size = 'default', ...props }: TProps) => (
  <div className={inputSize[size]}>
    <InputAntd
      placeholder={placehoderText}
      allowClear={{
        clearIcon: <InputCloseIcon />,
      }}
      {...props}
    />
  </div>
);
