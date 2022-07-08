import { useRef } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { searchUsers } from '@/services/ant-design-pro/api';
import { PageContainer } from '@ant-design/pro-layout';

/* const dataB = sessionStorage.getItem('usernameData');
console.log(dataB || 123); */
const columns: ProColumns<API.CurrentUser>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '姓名',
    dataIndex: 'username',
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '入院次数',
    dataIndex: 'count',
  },
  {
    title: '入院时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
  },
  /* {
    title: '头像',
    dataIndex: 'avatarUrl',
    render: (_, record) => (
      <div>
        <Image src={record.avatarUrl} width={60} />
      </div>
    ),
  }, */
  {
    title: '性别',
    dataIndex: 'gender',
    valueType: 'select',
    valueEnum: {
      0: { text: '女' },
      1: {
        text: '男',
      },
    },
  },
  {
    title: '费用',
    dataIndex: 'cost',
  },
  {
    title: '科室',
    dataIndex: 'sectionId',
  },
  {
    title: '病床号',
    dataIndex: 'sickbedId',
  },
  {
    title: '主治医生',
    dataIndex: 'doctor',
  },
  {
    title: '用药',
    dataIndex: 'medicine',
  },
  {
    title: '症状',
    dataIndex: 'symptom',
    copyable: true,
    ellipsis: true,
  },
];
export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <PageContainer content="此页面用于查询病人的病历信息。">
      <ProTable<API.CurrentUser>
        columns={columns}
        actionRef={actionRef}
        bordered={true}
        cardBordered
        /*   request={async (params = {}, sort, filter) => {
        console.log(sort, filter, params);
        const userList = await searchUsers();
        return {
          data: userList,
          //success: true,
        };
      }} */

        request={async (params = {}) => {
          const userList = await searchUsers(params);
          return {
            data: userList,
            //success: true,
          };
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 10,
        }}
        dateFormatter="string"
        headerTitle="病历信息"
      />
    </PageContainer>
  );
};
