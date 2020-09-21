import React from 'react';
import ErrorBoundary from './ErrorBoundary';

interface IconProp extends Record<string, any> {
  readonly name: string | undefined;
  readonly style?: Record<string, string | number>;
  readonly className?: string[] | string;
  readonly onClick?: () => void;
}

/**
 * antd 组件icon图标
 * @param props
 * @constructor
 */
const Icon: React.FC<IconProp> = (props) => {
  const { name, style, className, onClick, ...rest } = props;
  return (
    <>
      {/*<ErrorBoundary>*/}
      {name &&
        React.createElement(require('@ant-design/icons')[name], {
          style,
          className,
          onClick,
          ...rest,
        })}
      {/*</ErrorBoundary>*/}
    </>
  );
};

export default Icon;
