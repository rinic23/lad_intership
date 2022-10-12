import { Button as ButtonAntd, Form } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/components/index';
import { PlusIcon } from 'shared/ui/icons/PlusIcon';
import { TestQuery, TestSlice } from 'store';
import Select from 'shared/ui/components/Select';
import FormItem from 'shared/ui/components/FormItem';
import style from './TestComponent.module.scss';

type TProps = {
  a: number;
};

export const TestComponent = ({ a }: TProps) => {
  const dispatch = useDispatch();

  const options = [
    { value: 'light', label: 'Light' },
    { value: 'bamboo', label: 'Bamboo' },
  ];

  const [form] = Form.useForm();

  const count = useSelector(TestSlice.getTestCount);

  const { data, isSuccess } = TestQuery.useGetTestDataQuery({ id: 0 }, { skip: true });

  const buttonHandler = () => dispatch(TestSlice.setTestNumber(count + 1));
  return (
    <div className={style.wrapper}>
      <span>{`Test count ${count}`}</span>
      <div className={style.test_btn}>
        <ButtonAntd onClick={buttonHandler} type="dashed">
          Нажми на меня
        </ButtonAntd>
      </div>

      {/* варианты кнопок начало */}
      <div
        style={{
          background: '#01050D',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button size="large" type="default">
          Click
        </Button>
        <Button size="medium" type="default">
          Click
        </Button>
        <Button size="small" type="default">
          Click
        </Button>
        <Button size="rectangular__large" type="default" {...{ icon: <PlusIcon /> }} />
      </div>
      <div
        style={{
          background: '#01050D',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button size="rectangular__large" type="default" {...{ icon: <PlusIcon /> }} />
        <Button size="rectangular__medium" type="default" {...{ icon: <PlusIcon /> }} />
        <Button size="rectangular__small" type="default" {...{ icon: <PlusIcon /> }} />
      </div>
      <div
        style={{
          background: '#01050D',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button size="large" type="light">
          Click
        </Button>
        <Button size="rectangular__large" type="light" {...{ icon: <PlusIcon /> }} />
      </div>
      <div
        style={{
          background: '#01050D',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button size="large" type="transparent">
          Click
        </Button>
        <Button size="rectangular__large" type="transparent" {...{ icon: <PlusIcon /> }} />
      </div>
      <div
        style={{
          background: '#01050D',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button size="large" type="default" {...{ disabled: true }}>
          Click
        </Button>
        <Button size="rectangular__large" type="default" {...{ icon: <PlusIcon />, disabled: true }} />
      </div>
      <div
        style={{
          background: '#ffffff',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button size="large" type="transparent">
          Click
        </Button>
        <Button size="rectangular__large" type="transparent" {...{ icon: <PlusIcon /> }} />
        <Button size="rectangular__large" type="light" {...{ icon: <PlusIcon /> }} />
      </div>
      {/* варианты кнопок конец */}

      <Form form={form} layout="vertical">
        <FormItem
          rules={[
            {
              required: true,
              message: 'Поле должно быть заполнено',
            },
          ]}
          name="options"
          label="Категория"
        >
          <Select options={options} disabled={false} placeholder="Placeholder" />
        </FormItem>
        <Button size="large" type="default" htmlType="submit">
          Click
        </Button>
      </Form>

      {isSuccess && (
        <div>
          <span>{data.title}</span>
          <span>{a}</span>
        </div>
      )}
    </div>
  );
};
