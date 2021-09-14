import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';

import Divider from '@material-ui/core/Divider';
// import { Android } from '@material-ui/icons';
// import Pets from '@material-ui/icons/Pets';
// import BugReport from '@material-ui/icons/BugReport';

import styles from './ProblemThree.module.css';

export const QuestionListItem = ({ name, species, description, Icon }: any) => {
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
                <Typography variant="subtitle2" className={styles.header}>
                  Description:
                </Typography>
                <Typography variant="body2" className={styles.label}>
                  {description}
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle2" className={styles.header}>
                  Guid:
                </Typography>
                <Typography variant="body2" className={styles.label}>
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
