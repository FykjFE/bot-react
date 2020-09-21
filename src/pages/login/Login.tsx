import React, { useEffect, useState } from 'react';
import styles from 'styles/login.module.scss';
import { useHistory } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import Svg from 'components/Svg';
import { GET_CAPTCHA, POST_LOGIN } from 'services/user.service';
import { User } from 'interfaces/user';
import { useDispatch } from 'react-redux';
import { clearRoute } from '../../store/actions/routes';
import { logout } from '../../store/actions/user';
import { ASYNC_SET_USER } from '../../store/constants/user';

function Login(): JSX.Element {
  const history = useHistory();
  const [imgUrl, setImgUrl] = useState();
  const [uuid, setUuid] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onFinish = async (values: User) => {
    setLoading(true);
    const { code, token } = await POST_LOGIN({ ...values, uuid });
    if (code === 200) {
      sessionStorage.setItem('token', String(token));
      sessionStorage.setItem('isLogin', String(true));
      dispatch({ type: ASYNC_SET_USER });
      history.push('/');
      setLoading(false);
    } else {
      getCaptcha();
      setLoading(false);
    }
  };

  async function getCaptcha() {
    const { code, img, uuid } = await GET_CAPTCHA({});
    if (code === 200) {
      setImgUrl(img);
      setUuid(uuid);
    }
  }

  useEffect(() => {
    sessionStorage.clear();
    // todo 登录页清除登录和权限
    // dispatch(logout());
    // dispatch(clearRoute());
    getCaptcha();
  }, []);
  return (
    <div className={styles.login}>
      <Svg className={styles.logo} width={'200px'} name={'logo'} />
      <Form
        size={'large'}
        style={{ width: '20%' }}
        name='basic'
        initialValues={{ username: 'admin', password: 'admin123' }}
        onFinish={onFinish}
      >
        <Form.Item name='username' rules={[{ required: true, message: '用户名必填!' }]}>
          <Input placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: '密码必填!' }]}>
          <Input.Password placeholder='请输入密码' />
        </Form.Item>
        <Form.Item>
          <Form.Item
            rules={[{ required: true, message: '密码必填!' }]}
            style={{ display: 'inline-block', width: 'calc(100% - 106px)' }}
            name='code'
          >
            <Input placeholder='验证码' />
          </Form.Item>
          <img
            className={styles.img}
            onClick={getCaptcha}
            style={{ display: 'inline-block', height: '40px', width: '106px' }}
            src={`data:image/gif;base64,${imgUrl}`}
            alt='验证码'
          />
        </Form.Item>
        <Form.Item>
          <Button loading={loading} block type='primary' htmlType='submit'>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
