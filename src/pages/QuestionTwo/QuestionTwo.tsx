import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Button, CardMedia } from '@material-ui/core';
import Solution from './images/solution.png';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { themeType } from '../../theme';

const useStyles = makeStyles((theme: themeType) => ({
  link: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    marginLeft: 16,
  },
}));

export const QuestionTwo = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" gutterBottom>
        Question Two
      </Typography>
      <Typography variant="h5" gutterBottom>
        Api Call
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you started this application with 'yarn start' a json server should now be running on
        port 3001
      </Typography>
      <Typography variant="body1" gutterBottom>
        The Api can be found here:
        <Link href="http://localhost:3001/example" target="_blank" className={classes.link}>
          http://localhost:3001/example
        </Link>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your task is to make the card component display the data from the API as shown in this
        picture below.
      </Typography>
      <Typography variant="body1" gutterBottom color="error">
        The code for this problem can be found at './src/pages/QuestionTwo/ProblemTwo.tsx'
      </Typography>
      <Typography variant="body1" gutterBottom>
        As with all the questions in this tech test, you may or may not wish to refactor some of the
        code.
      </Typography>
      <Typography variant="h6" style={{ marginTop: 16, marginBottom: 16 }}>
        Below is what the final solution should look like.
      </Typography>
      <CardMedia
        image={Solution}
        style={{
          width: '100%',
          height: 500,
          backgroundSize: 'contain',
          marginBottom: 16,
        }}
        title="The Solution"
      />
      <Button variant="contained" color="secondary" onClick={() => history.push('./problemTwo')}>
        Start Problem
      </Button>
    </div>
  );
};
