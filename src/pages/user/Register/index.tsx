import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import { ProFormText, LoginForm } from '@ant-design/pro-form';
import { history, Link } from 'umi';
import Footer from '@/components/Footer';
import { register } from '@/services/ant-design-pro/api';
import styles from './index.less';
import { SYSTEM_LOGO } from '@/constant';

const Register: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const handleSubmit = async (values: API.RegisterParams) => {
    const { userPassword, checkPassword } = values;
    //校验
    if (userPassword !== checkPassword) {
      message.error('两次输入的密码不一致');
      return;
    }
    try {
      // 注册
      const id = await register(values);
      if (typeof id == 'number') {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
        /** 此方法会跳转到 redirect 参数所在的位置 */

        if (!history) return;
        const { query } = history.location;
        history.push({
          pathname: 'user/login',
          query,
        });
        return;
      }
    } catch (error: any) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO} />}
          title="病历管理系统"
          subTitle={'病历管理系统的开发和实现'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'账号密码注册'} />
          </Tabs>

          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入账号'}
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  },
                  {
                    min: 4,
                    type: 'string',
                    message: '长度不能小于4',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '长度不能小于8',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '确认密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '长度不能小于8',
                  },
                ]}
              />
              <ProFormText.Password
                name="cardId"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入身份证'}
                rules={[
                  {
                    required: true,
                    message: '身份证是必填项！',
                  },
                  {
                    min: 18,
                    type: 'string',
                    message: '长度不能小于18位',
                  },
                  {
                    max: 18,
                    type: 'string',
                    message: '长度不能大于18位',
                  },
                ]}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <Link to="/user/login" style={{ float: 'right', marginBottom: '15px' }}>
              去登录
            </Link>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
