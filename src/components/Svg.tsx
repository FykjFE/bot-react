import React from 'react';
import styles from 'styles/svg.module.less';
import classnames from 'classnames';
const reqSvgs = require.context(`../assets/svg/`, true, /\.svg$/);
reqSvgs.keys().forEach(reqSvgs);

interface SvgProp {
  // svg名字
  readonly name: string;
  // svg大小，对应字体大小
  readonly size?: string;
  // svg颜色
  readonly color?: string;
  // 自定义class
  readonly className?: string;
  // 自定义样式
  readonly style?: Record<string, any>;
}

/**
 * svg通用组件
 * @param props
 * @constructor
 */
const Svg: React.FC<SvgProp> = (props) => {
  const { name, color, size, className, style } = props;
  return (
    <svg
      style={{ color: color, fontSize: size, ...style }}
      className={classnames(styles.icon, className)}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  );
};

export default Svg;
