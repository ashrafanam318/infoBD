import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './routes/route';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryColor: '#FFFFFF',
  $darkText: '#343434',
  $border: '#E2E2E2',
});


export default () => <Navigator />;
/*
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryGray: '#4F6D7A',
});

export default () => <Home />;
*/
