import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TestQuery, TestSlice } from 'store';
import style from './TestComponent.module.scss';

type TProps = {
  a: number;
};

export const TestComponent = ({ a }: TProps) => {
  const dispatch = useDispatch();

  const count = useSelector(TestSlice.getTestCount);

  const { data, isSuccess } = TestQuery.useGetTestDataQuery({ id: 0 }, { skip: true });

  const buttonHandler = () => dispatch(TestSlice.setTestNumber(count + 1));
  return (
    <div className={style.wrapper}>
      <span>{`Test count ${count}`}</span>
      <div className={style.test_btn}>
        <Button onClick={buttonHandler}>Нажми на меня</Button>
      </div>

      {isSuccess && (
        <div>
          <span>{data.title}</span>
          <span>{a}</span>
        </div>
      )}
    </div>
  );
};
