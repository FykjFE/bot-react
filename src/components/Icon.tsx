import React from 'react';

interface IconProp {
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
  const { name, style, className, onClick } = props;
  return (
    <>
      {name &&
        React.createElement(require('@ant-design/icons')[name], {
          style,
          className,
          onClick,
        })}
    </>
  );
};

export default Icon;
