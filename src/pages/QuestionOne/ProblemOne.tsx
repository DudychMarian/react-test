import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

interface ProblemOneProps {

}

export const ProblemOne: React.FC<ProblemOneProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: 48 }}>
      <Button variant="contained" style={{ padding: 5 }} onClick={() => setCount(count + 1)}>
        <p style={{ margin: 2 }}>I've been clicked: {count} times</p>
      </Button>
    </div>
  );
};
