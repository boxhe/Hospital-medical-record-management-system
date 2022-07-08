export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/Login',
      },
      {
        name: '注册',
        path: '/user/register',
        component: './user/Register',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: '用户管理',
    access: 'canAdmin',
    path: '/admin/user-manage',
    icon: 'table',
    component: './Admin/UserManage',
  },
  /*  {
name: '查询表格',
icon: 'table',
path: '/list',
component: './TableList',
}, */
  {
    name: '提交信息',
    icon: 'smile',
    access: 'canAdmin',
    path: '/sub-info',
    component: './Info/SubInfo',
  },
  {
    name: '查看病例',
    icon: 'table',
    path: '/info/user-info',
    component: './Info/UserInfo',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
