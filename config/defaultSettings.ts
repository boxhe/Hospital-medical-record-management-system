import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '病历管理系统',
  pwa: false,
  logo: 'https://web-box.cloud/wp-content/uploads/2022/03/cropped-B-removebg-preview.png',
  iconfontUrl: '',
};

export default Settings;
