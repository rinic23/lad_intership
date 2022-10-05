import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomButton } from 'shared/ui/components/index';
import { PlusIcon } from 'shared/ui/components/CustomButton/PlusIcon';
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

      {/* варианты кнопок начало */}
      <div style={{ background: '#01050D', padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <CustomButton customSize="large">Click</CustomButton>
        <CustomButton customSize="medium">Click</CustomButton>
        <CustomButton customSize="small">Click</CustomButton>
        <CustomButton customSize="rectangular" {...{ icon: <PlusIcon /> }} />
      </div>
      <div style={{ background: '#01050D', padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <CustomButton customSize="large" customType="light">Click</CustomButton>
        <CustomButton customSize="rectangular" customType="light" {...{ icon: <PlusIcon /> }} />
      </div>
      <div style={{ background: '#01050D', padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <CustomButton customSize="large" customType="transparent">Click</CustomButton>
        <CustomButton customSize="rectangular" customType="transparent" {...{ icon: <PlusIcon /> }} />
      </div>
      <div style={{ background: '#01050D', padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <CustomButton customSize="large" {...{ disabled: true }}>Click</CustomButton>
        <CustomButton customSize="rectangular" {...{ icon: <PlusIcon />, disabled: true }} />
      </div>
      <div style={{ background: '#ffffff', padding: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <CustomButton customSize="large" customType="transparent">Click</CustomButton>
        <CustomButton customSize="rectangular" customType="transparent" {...{ icon: <PlusIcon /> }} />
        <CustomButton customSize="rectangular" customType="light" {...{ icon: <PlusIcon /> }} />
      </div>
      {/* варианты кнопок конец */}

      {isSuccess && (
        <div>
          <span>{data.title}</span>
          <span>{a}</span>
        </div>
      )}
    </div>
  );
};
