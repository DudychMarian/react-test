import React from 'react';
import Typography from '@material-ui/core/Typography';
import Solution from './images/solution.png';
import { Button, CardMedia } from '@material-ui/core';
import { useHistory } from 'react-router';
export const QuestionThree = () => {
  const history = useHistory();
  return (
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom>
        Question Three
      </Typography>
      <Typography variant="h5" gutterBottom>
        List on the fritz
      </Typography>
      <Typography variant="body1" gutterBottom>
        This task revolves around a bug in the render method of a basic component.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your task is to make the list appear as it does in the image below.
      </Typography>
      <Typography variant="body1" gutterBottom color="error">
        The code for this problem can be found at './src/pages/QuestionThree/ProblemThree.tsx'
      </Typography>
      <Typography variant="body1" gutterBottom>
        As with all the questions in this tech test, you may or may not wish to refactor some of the
        code.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Below is what the final solution should look like. (GUID'S will vary)
      </Typography>
      <CardMedia
        image={Solution}
        style={{
          width: '100%',
          height: 500,
          backgroundSize: 'contain',
        }}
        title="The Solution"
      />
      <Button variant="contained" color="secondary" onClick={() => history.push('./problemThree')}>
        Start Problem
      </Button>
    </div>
  );
};
