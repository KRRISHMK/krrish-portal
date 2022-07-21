import React from "react";
import { Button, ButtonToolbar, Form, Input, InputGroup } from "rsuite";
import {
  ColorPenIcon,
  CopyrightsIcon,
  FacebookIcon,
  InstagramIcon,
  PaintIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../assets/icons";
import DefaultContent from "../../components/base/DefaultContent";
import Header from "../../components/base/Header";

const AdminFooter = () => {
  const styles = {
    height: 50,
    marginBottom: 10,
  };
  return (
    <DefaultContent>
      <Form fluid>
        <Header text="Social Links" />
        <div className="px-4">
          <InputGroup inside style={styles}>
            <InputGroup.Addon className="pe-5">
              <InstagramIcon size="2em" />
            </InputGroup.Addon>
            <Input placeholder="Enter Instagram URL" className="ps-5" />
          </InputGroup>
          <InputGroup inside style={styles}>
            <InputGroup.Addon className="pe-5">
              <FacebookIcon size="2em" />
            </InputGroup.Addon>
            <Input placeholder="Enter Facebook URL" className="ps-5" />
          </InputGroup>
          <InputGroup inside style={styles}>
            <InputGroup.Addon className="pe-5">
              <YoutubeIcon size="2em" />
            </InputGroup.Addon>
            <Input placeholder="Enter Youtube URL" className="ps-5" />
          </InputGroup>
          <InputGroup inside style={styles}>
            <InputGroup.Addon className="pe-5">
              <TwitterIcon size="2em" />
            </InputGroup.Addon>
            <Input placeholder="Enter Twitter URL" className="ps-5" />
          </InputGroup>
        </div>
        <Header text="Copyrights Text" />
        <div className="px-4">
          <InputGroup inside style={styles}>
            <InputGroup.Addon className="pe-5">
              <CopyrightsIcon size="2em" />
            </InputGroup.Addon>
            <Input placeholder="Enter Copyrights Text" className="ps-5" />
          </InputGroup>
        </div>

        <Header text="Enter Footer Color" />
        <div className="px-4">
          <InputGroup inside style={styles}>
            <InputGroup.Addon className="pe-5">
              <PaintIcon size="2em" />
            </InputGroup.Addon>
            <Input placeholder="Enter Footer Color" className="ps-5" />
          </InputGroup>
        </div>

        <Header text="Enter Footer Text Color" />
        <div className="px-4">
          <InputGroup inside style={styles}>
            <InputGroup.Addon className="pe-5">
              <ColorPenIcon size="2em" />
            </InputGroup.Addon>
            <Input placeholder="Enter Footer Text Color" className="ps-5" />
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

export default AdminFooter;
