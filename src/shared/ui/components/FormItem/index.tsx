import { Form } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import React from 'react';
import style from './FormItem.module.scss';

type TProps = {
  children: React.ReactNode;
  rules?: any[];
  name: string;
  title:string;
};

const FormItemComponent = ({ children, rules, name, title }: TProps) => (
  <FormItem
    rules={rules}
    name={name}
    label={title}
    className={style.form_item}
  >
    {children}
  </FormItem>
);

export default FormItemComponent;
