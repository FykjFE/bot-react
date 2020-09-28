import React from 'react';
import { Button, Result } from 'antd';
import { RouteComponentProps } from 'react-router-dom';

/**
 * 404组件
 * @param history
 * @constructor
 */
const NoMatch: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button onClick={(): void => history.push('')} type='primary'>
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NoMatch;
