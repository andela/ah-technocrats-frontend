import React from 'react';
import './Articles.scss';
import Moment from 'react-moment';
import { Modal, Button, Icon } from 'semantic-ui-react';


const EditButton = ({
  setName, articleSlug, openModal, modalOpen, onDelete, name,
}) => (
  <Modal
    trigger={(
      <Icon name="trash" id="open-modal" className="delete-icon" color="red" onClick={() => { setName(articleSlug); openModal(); }} />
            )}
    size="tiny"
    open={modalOpen}
  >
    <Modal.Header>Delete Your Article</Modal.Header>
    <Modal.Content><p>Are you sure you want to delete this article</p></Modal.Content>
    <Modal.Actions>
      <Button positive id="cancel-delete" onClick={() => onDelete(null, false)}>Cancel</Button>
      <Button negative id="confirm-delete" onClick={() => { onDelete(name, true); }}>Delete</Button>
    </Modal.Actions>
  </Modal>
);

export default EditButton;
