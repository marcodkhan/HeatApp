import 'react-native-gesture-handler';
import React from 'react';
import RootNavigation from '~/Navigation/RootNavigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as mapping } from '../mapping.json';
import { FeatherIconsPack } from './components/FeatherIcons';
import { MaterialIconsPack } from './components/MaterialIcons';

const App = () => {
  return (
    <>
      <IconRegistry icons={[FeatherIconsPack, MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
        <RootNavigation />
      </ApplicationProvider>
    </>
  );
};

export default App;
