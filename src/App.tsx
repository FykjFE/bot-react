import React from 'react';
import Router from './routes/Router';
import ErrorBoundary from 'components/ErrorBoundary';

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}

export default App;
