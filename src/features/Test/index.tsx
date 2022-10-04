import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TestQuery, TestSlice } from 'store';
import style from './TestComponent.module.scss';

export const TestComponent = () => {
  const dispatch = useDispatch();

  const count = useSelector(TestSlice.getTestCount);

  const { data, isSuccess } = TestQuery.useGetTestDataQuery();

  const buttonHandler = () => dispatch(TestSlice.setTestNumber(count + 1));
  return (
    <div className={style.wrapper}>
      <span>{`Test count ${count}`}</span>
      <Button onClick={buttonHandler}>Нажми на меня</Button>
      {isSuccess && (
        <div>
          <span>{data.title}</span>
        </div>
      )}
    </div>
  );
};
