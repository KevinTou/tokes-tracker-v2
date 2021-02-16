import React from 'react';
import { connect } from 'react-redux';
import {
  makeStyles,
  List,
  Divider,
  Container
} from '@material-ui/core';

import Toke from './Toke';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  list: {
    color: 'white',
    height: '71vh',
    overflow: 'auto',
    margin: '1rem 0 0 0',
  },
  divider: {
    backgroundColor: 'white',
  },
}));

const TokesDetail = ({ tokes }) => {
  const classes = useStyles();

  const renderTokes = (tokes) => {
    return tokes.map((toke, index) => (
      <React.Fragment key={toke.id}>
        {index !== 0 && <Divider className={classes.divider} />}
        <Toke toke={toke} />
      </React.Fragment>
    ));
  };

  return (
    <Container className={classes.content} component="main" maxWidth="xs">
      <List className={classes.list} id="listed">
        {renderTokes(tokes)}
      </List>
    </Container>
  );
}

const mapStateToProps = state => {
  const { tokes } = state.tokes;

  return {
    tokes: tokes
  }
}

export default connect(mapStateToProps, {})(TokesDetail)
