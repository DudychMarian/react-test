import React from 'react';
import List from '@material-ui/core/List';

import Paper from '@material-ui/core/Paper';

import { QuestionListItem } from './QuestionListItem';

import styles from './ProblemThree.module.css';

const ProblemThree = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('https://613fd6fa5cb9280017a11066.mockapi.io/three')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return setData(json);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Paper>
        <List className={styles.root}>
          {data.map((item) => {
            return (
              <QuestionListItem
                name={item.name}
                species={item.species}
                description={item.description}
                Icon={item.Icon}
              />
            );
          })}
        </List>
      </Paper>
    </div>
  );
};
export default ProblemThree;
