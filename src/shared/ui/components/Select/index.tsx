import { Select as SelectAnt, SelectProps } from 'antd';
import React from 'react';
import style from './SelectComponent.module.scss';

const Select = ({ ...props }: SelectProps) => (
  <SelectAnt bordered={false} className={`${style.select}`} {...props} />
);

export default Select;
