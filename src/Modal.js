import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Card from "./Card"

import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {modalActionCreators} from "./state/actions/index"

function getModalStyle() {
  return {
    top: `${"50"}%`,
    left: `${"50"}%`,
    transform: `translate(-${50}%, -${50}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const state = useSelector((state) => state)

  const dispatch = useDispatch()
  const { CLOSE, SET } = bindActionCreators(modalActionCreators, dispatch)

  const handleClose = () => {
    SET({movie_id:null})
    CLOSE({})
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Card></Card>
    </div>
  );

  return (
    <div>
      
      <Modal
        open={state.ModalReducer.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        align="center"
      >
        {body}
      </Modal>
    </div>
  );
}
