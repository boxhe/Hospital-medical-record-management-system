import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  const defaultMessage = '何子豪';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'CUSFT',
          title: 'CUSFT',
          href: 'https://www.csuft.edu.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com',
          blankTarget: true,
        },
        {
          key: 'web-box',
          title: 'web-box',
          href: 'https://www.web-box.cloud',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
