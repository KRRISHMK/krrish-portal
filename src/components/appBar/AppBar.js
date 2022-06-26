import React from "react";
import { Button, Modal } from "rsuite";
import "./style.css";
const AppBar = (props) => {
  const { isOpen, toggle } = props;
  return (
    <>
      <Modal size={"xs"} open={isOpen} onClose={toggle}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Testing</Modal.Body>
        <Modal.Footer>
          <Button onClick={toggle} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={toggle} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AppBar;
