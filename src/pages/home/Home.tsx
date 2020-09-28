import React, { useMemo, useState } from 'react';
import Demo from './Demo';
function Home(): JSX.Element {
  const [user, setUser] = useState({ name: 'aaa', age: 11 });
  return (
    <div>
      <div>
        <button onClick={() => setUser({ ...user, name: 's' })}>++</button>
        <Demo name={'user.name'} />
      </div>
    </div>
  );
}

export default Home;
