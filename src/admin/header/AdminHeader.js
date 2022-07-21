import React from "react";
import { Button, ButtonToolbar, Form, Input, InputGroup, Uploader } from "rsuite";
import { CopyrightsIcon, PaintIcon, TextIcon } from "../../assets/icons";
import DefaultContent from "../../components/base/DefaultContent";
import Header from "../../components/base/Header";

const AdminHeader = () => {
  const handleLogoSelect = (e) => {
    console.log(e);
  };
  const styles = {
    height: 50,
    marginBottom: 10,
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
        <div className="px-4">
          <InputGroup inside style={styles}>
            <InputGroup.Addon className="pe-5">
              <PaintIcon size="2em" />
            </InputGroup.Addon>
            <Input placeholder="Enter Header Color" className="ps-5" />
          </InputGroup>
        </div>
        <Header text="Company Name" />
        <div className="px-4">
          <InputGroup inside style={styles}>
            <InputGroup.Addon className="pe-5">
              <TextIcon size="2em" />
            </InputGroup.Addon>
            <Input placeholder="Enter Company Name" className="ps-5" />
          </InputGroup>
        </div>
          <ButtonToolbar className="text-center">
            <Button appearance="primary">Save</Button>
            <Button appearance="default">Cancel</Button>
          </ButtonToolbar>
      </Form>
    </DefaultContent>
  );
};

export default AdminHeader;
