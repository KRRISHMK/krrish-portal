import React from "react";
import { Button, ButtonToolbar, Form, Input, InputGroup } from "rsuite";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "../../assets/icons";
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
        <InputGroup inside style={styles}>
          <InputGroup.Addon className="pe-5">
            <InstagramIcon size="2em" />
          </InputGroup.Addon>
          <Input className="ps-5" />
        </InputGroup>
        <InputGroup inside style={styles}>
          <InputGroup.Addon className="pe-5">
            <FacebookIcon size="2em" />
          </InputGroup.Addon>
          <Input className="ps-5" />
        </InputGroup>
        <InputGroup inside style={styles}>
          <InputGroup.Addon className="pe-5">
            <YoutubeIcon size="2em" />
          </InputGroup.Addon>
          <Input className="ps-5" />
        </InputGroup>
        <InputGroup inside style={styles}>
          <InputGroup.Addon className="pe-5">
            <TwitterIcon size="2em" />
          </InputGroup.Addon>
          <Input className="ps-5" />
        </InputGroup>
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

export default AdminFooter;
