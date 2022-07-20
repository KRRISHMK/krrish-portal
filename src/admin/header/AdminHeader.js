import React from "react";
import { Button, ButtonToolbar, Form, Uploader } from "rsuite";
import DefaultContent from "../../components/base/DefaultContent";
import Header from "../../components/base/Header";

const AdminHeader = () => {
  const handleLogoSelect = (e) => {
    console.log(e);
  };
  return (
    <DefaultContent>
      <Header text="Logo" />
      <Uploader
        className="ps-4"
        listType="picture-text"
        action="//jsonplaceholder.typicode.com/posts/"
        // defaultFileList={fileList}
        renderFileInfo={(file, fileElement) => {
          return (
            <div>
              <span>File Name: {file.name}</span>
              <p>File Type: {file.blobFile.type}</p>
            </div>
          );
        }}
        onUpload={handleLogoSelect}
      />

      <Form fluid>
        <Header text="Header Color" />
        <Form.Group className="ps-4" controlId="name-1">
          <Form.Control placeholder="Enter Header Color" name="headerColor" />
        </Form.Group>
        <Header text="Company Name" />
        <Form.Group className="ps-4" controlId="email-1">
          <Form.Control placeholder="Enter Company Name" name="companyName" />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar className="text-center">
            <Button appearance="primary">Save</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </DefaultContent>
  );
};

export default AdminHeader;
