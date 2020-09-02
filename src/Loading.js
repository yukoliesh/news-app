import React from 'react';
import { LoadingStyle }  from './styles/loading-style';


const Loading = (props) => {
  return (
    <React.Fragment>
      <LoadingStyle>
        <div className="lds-ellipsis" data-testid="loading-dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoadingStyle>
    </React.Fragment>
  );
}

export default Loading;