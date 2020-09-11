import React from 'react';
import { ErrorPageWrapper }  from './styles/style';

const ErrorPage = (props) => {
  return (
    <ErrorPageWrapper>
      <h1>Error</h1>
      <h2>Sorry... Something went wrong...</h2>
    </ErrorPageWrapper>
  );
}

export default ErrorPage;