import { Form as FormAnt, FormItemProps } from 'antd';

import React from 'react';
import style from './FormItem.module.scss';

type TProps = FormItemProps & {
  children: React.ReactNode;
};

const FormItem = ({ children, ...props }: TProps) => (
  <FormAnt.Item className={style.form_item} {...props}>
    {children}
  </FormAnt.Item>
);

export default FormItem;
