import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <img
          src="https://i01piccdn.sogoucdn.com/be5731c3f207fe08"
          style={{ width: 1200, height: 800 }}
        />
        {/*         "
    width: 1000px;
    height: 600px;
    margin-left: 9%;
" */}
      </Card>
    </PageContainer>
  );
};

export default Welcome;
