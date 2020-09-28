import React, { useMemo } from 'react';

function Demo({ name }: { name: string }): JSX.Element {
  console.log('aa');
  return useMemo(() => <div>{name}</div>, [name]);
}

export default Demo;
