import { message } from 'antd';
import ProForm, {
  ProFormMoney,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { history, useRequest } from 'umi';
import type { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { submitForm } from '@/services/ant-design-pro/api';

const SubInfo: FC<Record<string, any>> = () => {
  const { run } = useRequest(submitForm, {
    manual: true,
  });
  //提交表单后
  const onFinish = async (values: Record<string, any>) => {
    run(values);
    message.success('提交成功');
    if (!history) return;
    const { query } = history.location;
    history.push({
      pathname: 'info/user-info',
      query,
    });
    return;
  };

  return (
    <PageContainer content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。">
      <ProCard hoverable bordered>
        <ProForm
          hideRequiredMark
          style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
          name="basic"
          layout="vertical"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
        >
          <ProFormText
            label="姓名"
            width="sm"
            name="username"
            rules={[
              {
                required: true,
                message: '姓名是必填项',
              },
            ]}
            placeholder="给输入姓名"
          />
          <ProFormText
            label="账号"
            width="sm"
            name="userAccount"
            rules={[
              {
                required: true,
                message: '账号是必填项',
              },
              {
                min: 4,
                type: 'string',
                message: '长度不能小于4',
              },
            ]}
            placeholder="请输入账号"
          />
          <ProFormSelect
            options={[
              {
                value: '1',
                label: '男',
              },
              {
                value: '0',
                label: '女',
              },
            ]}
            // initialValue=""
            name="gender"
            width="xs"
            label="性别"
            rules={[
              {
                required: true,
                message: '性别是必填项证',
              },
            ]}
          />
          <ProFormText
            label="年龄"
            width="md"
            name="age"
            rules={[
              {
                required: true,
                message: '年龄是必填项证',
              },
            ]}
            placeholder="请输入年龄"
          />
          <ProFormText
            label="身份证"
            width="md"
            name="cardId"
            rules={[
              {
                required: true,
                message: '身份是必填项证',
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
            placeholder="请输入身份证"
          />
          <ProFormText
            label="地址"
            width="lg"
            name="address"
            rules={[
              {
                required: true,
                message: '地址是必填项',
              },
            ]}
            placeholder="请输入地址"
          />
          <ProFormText
            label="电话"
            width="md"
            name="phone"
            rules={[
              {
                required: true,
                message: '电话是必填项',
              },
              {
                min: 11,
                type: 'string',
                message: '电话号码长度不匹配',
              },
              {
                max: 11,
                type: 'string',
                message: '电话号码长度不匹配',
              },
            ]}
            placeholder="请输入电话"
          />
          <ProFormMoney
            label="费用"
            width="md"
            name="cost"
            rules={[
              {
                required: true,
                message: '电话是必填项',
              },
            ]}
            placeholder="请输入费用"
          />
          <ProFormText
            label="科室"
            width="md"
            name="sectionId"
            rules={[
              {
                required: true,
                message: '电话是必填项',
              },
            ]}
            placeholder="请输入科室"
          />
          <ProFormText
            label="病床号"
            width="md"
            name="sickbedId"
            rules={[
              {
                required: true,
                message: '电话是必填项',
              },
            ]}
            placeholder="请输入病床号"
          />
          <ProFormText
            label="用药"
            width="md"
            name="medicine"
            rules={[
              {
                required: true,
                message: '用药是必填项证',
              },
            ]}
            placeholder="请输入用药"
          />
          <ProFormText
            label="主治医生"
            width="md"
            name="doctor"
            rules={[
              {
                required: true,
                message: '主治医生是必填项',
              },
            ]}
            placeholder="请输入主治医生"
          />
          <ProFormTextArea label="病状" width="lg" name="symptom" placeholder="请输入病状" />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
//console.log(basic);

export default SubInfo;
