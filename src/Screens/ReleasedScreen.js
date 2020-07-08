import React from 'react';
import { Layout, Button, Icon } from '@ui-kitten/components';

const FacebookIcon = (props) => {
  return <Icon name="facebook" {...props} pack="feather" />;
};

const ReleasedScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
    </Layout>
  );
};

export default ReleasedScreen;
