import React, { useState } from "react";
import Header from "./Header";
import { Modal, Button } from "rsuite";

const Slider = (props) => {
  const { label, images, width, isPreview } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [isImage, setImage] = useState();

  function handleOnclick(url) {
    if (isPreview) {
      setModalOpen(!isModalOpen);
      setImage(url);
    } else {
      window.location.href = { url };
    }
  }
  function toggle() {
    setModalOpen(!isModalOpen);
    setImage("");
  }
  return (
    <>
      <Header text={label ? label : "Slider"} />
      <div className="slider-card">
        {images &&
          images.map((image) => (
            <img
              onClick={() => {
                handleOnclick(isPreview ? image.img : image.url);
              }}
              style={{ width: width ? width : "100px" }}
              src={image.img}
              alt="img"
            />
          ))}
      </div>
      {isPreview && (
        <Modal
          backdrop={true}
          keyboard={false}
          open={isModalOpen}
          onClose={toggle}
        >
          <Modal.Header>
            <Modal.Title className="d-flex justify-content-center fw-bold">
              Preview
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={isImage} alt="" />
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center pt-2">
            <Button onClick={toggle} appearance="primary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Slider;
