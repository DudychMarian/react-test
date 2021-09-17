import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

import styles from './ProblemTwo.module.css';

interface ProblemTwoProps {
}

export const ProblemTwo: React.FC<ProblemTwoProps> = () => {
  const [info, setInfo] = React.useState<any[]>([]);

  //TO-DO: Promise.All  
  React.useEffect(() => {
    async function fetchData() {
      try {
        const infoResponse = await axios.get(
          process.env.REACT_APP_TWO_URL as string
        );

        setInfo(infoResponse.data);
      } catch (error) {
        alert("Error while requesting data");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {info.map((obj) => (
        <Card className={styles.card} key={obj.title}>
          <img className={styles.media} src={obj.imgSrc} alt={obj.title} />
          <CardContent className={styles.content}>
            <Typography className={styles.header} gutterBottom variant="h5" component="h2">
              {obj.title}
            </Typography>
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: obj.body }} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
