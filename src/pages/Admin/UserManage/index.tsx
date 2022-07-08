import { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { searchUsers } from '@/services/ant-design-pro/api';
import { PageContainer } from '@ant-design/pro-layout';

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
    copyable: true,
  },
  {
    title: '用户账户',
    dataIndex: 'userAccount',
    copyable: true,
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
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '入院次数',
    dataIndex: 'count',
  },
  {
    title: '身份证',
    dataIndex: 'cardId',
    copyable: true,
  },
  {
    title: '地址',
    dataIndex: 'address',
    copyable: true,
    ellipsis: true,
  },
  {
    title: '角色',
    dataIndex: 'userRole',
    valueType: 'select',
    valueEnum: {
      0: { text: '患者', status: 'Default' },
      1: {
        text: '医生',
        status: 'Success',
      },
    },
  },
  /*   {
    title: '病历',
    valueType: 'option',
    key: 'option',
    render: (_, record) => [
      <a
        href="../info/user-info"
        rel="noopener noreferrer"
        key="view"
        onClick={() => {
          //   传入当前的record.username.
          console.log(record.username);
          const orderData = record.username;
          sessionStorage.setItem('usernameData', orderData);
          //sessionStorage.setItem('usernameData', JSON.stringify(orderData)
        }}
      >
        查看
      </a>,
    ],
  }, */
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (_text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
    ],
  },
];
export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <PageContainer content="此页面页用于查询病人的基本信息。">
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
        headerTitle="用户基本信息"
      />
    </PageContainer>
  );
};
