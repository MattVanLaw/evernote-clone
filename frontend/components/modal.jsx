import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import NotebookCreateFormContainer
from './client/notebooks_index/notebook_form_container';
import NotebookUpdateFormContainer
from './client/notebooks_index/update_form_container';
import NoteCreateForm from './client/menu/note_create_form';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) { //overload payload to give notebook
    case 'createNotebook':
      component = <NotebookCreateFormContainer />;
      break;
    case 'updateNotebook':
      component = <NotebookUpdateFormContainer notebook={modal.notebook}/>;
      break;
    case 'createNote':
      component = <NoteCreateForm notebooks={modal.notebook}/>;
      break;
    default:
      return null;
  }
  return (
    <div autoFocus={false} className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
