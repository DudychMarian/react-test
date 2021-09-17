import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import Divider from '@material-ui/core/Divider';

import styles from './ProblemThree.module.css';

interface QuestionListItemProps {
  name: string;
  species: string;
  description: string;
  Icon: string;
}

export const QuestionListItem: React.FC<QuestionListItemProps> = ({ name, species, description, Icon }: any) => {
  const guid = uuidv4();

  return (
    <Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <img width={28} height={28} src={Icon} alt={name} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`${name}: ${species ? species : 'Other'}`}
          secondary={
            <React.Fragment>
              <div>
                <Typography component={'span'} variant="body1" className={styles.header}>
                  Description:
                </Typography>
                <Typography component={'span'} variant="body2" className={styles.label}>
                  {description}
                </Typography>
              </div>
              <div>
                <Typography component={'span'} variant="body1" className={styles.header}>
                  Guid:
                </Typography>
                <Typography component={'span'} variant="body2" className={styles.label}>
                  {guid}
                </Typography>
              </div>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="middle" />
    </Fragment>
  );
};
