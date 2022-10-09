import { Select } from 'antd';
import React from 'react';
import style from './SelectComponent.module.scss';

type TProps = {
  selectData: string[];
  disabled: boolean;
  placeholder: string;
};

const SelectComponent = ({ selectData, disabled, placeholder }: TProps) => (
  <Select
    disabled={disabled}
    bordered={false}
    className={!disabled ? `${style.select}` : `${style.select} ${style.select_disabled}`}
    placeholder={placeholder}
  >
    {selectData.map((elem) => (
      <Select.Option key={elem} value={elem}>
        {elem}
      </Select.Option>
    ))}
  </Select>
);

export default SelectComponent;
