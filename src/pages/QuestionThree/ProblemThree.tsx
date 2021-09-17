import React from 'react';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import axios from "axios";

import { QuestionListItem } from './QuestionListItem';

import styles from './ProblemThree.module.css';

const ProblemThree: React.FC = () => {
  const [data, setData] = React.useState<any[]>([]);

  //TO-DO: Promise.All
  React.useEffect(() => {
    async function fetchData() {
      try {
        const dataResponse = await axios.get(
          process.env.REACT_APP_THREE_URL as string
        );

        setData(dataResponse.data);
      } catch (error) {
        alert("Error while requesting data");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Paper>
        <List className={styles.root}>
          {data.map((item) => {
            return (
              <QuestionListItem
                key={item.name}
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
