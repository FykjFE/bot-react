import React from 'react';

const reqSvgs = require.context(`../assets/svg/`, true, /\.svg$/);
const all = reqSvgs.keys();

interface SvgProp {
  readonly name: string;
  readonly scale?: number;
  readonly width?: string;
  readonly height?: string;
  readonly className?: string;
}

const Svg: React.FC<SvgProp> = (props) => {
  const { name, scale, width, height, className } = props;
  const icon = all.find((item: string) => item === `./${name}.svg`);
  return (
    <>
      {icon ? (
        <img
          className={className}
          style={{ transform: `scale(${scale})`, width, height }}
          src={reqSvgs(icon)}
          alt={`${name}.svg`}
        />
      ) : (
        <img
          style={{ transform: `scale(${scale})`, width, height }}
          src={reqSvgs('./error.svg')}
          alt='error.svg'
        />
      )}
    </>
  );
};

export default Svg;
