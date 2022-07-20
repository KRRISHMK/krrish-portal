import React from "react";
import { Button, Form, Modal } from "rsuite";

const Add = (props) => {
  const { isOpen, handleClose } = props;
  return (
    <div>
      <Modal
        backdrop={true}
        keyboard={false}
        open={isOpen}
        onClose={handleClose}
      >
        <Modal.Header className="text-center">
          <Modal.Title className="fs-5">Add Category</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form fluid>
            <Form.Group controlId="name-1">
              <Form.ControlLabel>Name</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button onClick={handleClose} appearance="primary">
            Add
          </Button>
          <Button onClick={handleClose} appearance="default">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
