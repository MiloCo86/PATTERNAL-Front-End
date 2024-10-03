import * as React from 'react';

import { PaperProvider } from 'react-native-paper';

import Index from './app/index';

export default function Main() {
  return (
    <PaperProvider>
      <Index />
    </PaperProvider>
  );
}