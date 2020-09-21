import React, { useEffect, useState } from 'react';
import styles from 'styles/home.module.scss';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import Svg from 'components/Svg';

function Test(): JSX.Element {
  const [json, setJson] = useState<any>();

  async function getExaple() {
    const { GET_LIST } = await import('services/demo.service');
    setJson(await GET_LIST({}));
  }

  function onChange(date: any, dateString: any) {
    console.log(dateString);
  }

  useEffect(() => {
    getExaple();
  }, []);
  return (
    <div>
      <DatePicker value={dayjs(new Date()) as any} onChange={onChange} />
      <div className={styles.bgOp}>scss-module</div>
      <div className={styles.bg}>背景图片测试</div>
      <div>{JSON.stringify(json)}</div>
      <h3>导入图片测试</h3>
      <Svg width='200px' name='logo' />
      <img src={require('assets/img/fy-test.png')} alt='aa' />
    </div>
  );
}

export default Test;
