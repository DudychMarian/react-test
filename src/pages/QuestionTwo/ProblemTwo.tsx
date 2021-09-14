import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './ProblemTwo.module.css';

export const ProblemTwo = () => {
  const [info, setInfo] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetch('https://613fd6fa5cb9280017a11066.mockapi.io/example')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return setInfo(json);
      });
  }, []);

  return (
    <div className={styles.container}>
      {info.map((obj) => (
        <Card className={styles.card}>
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
