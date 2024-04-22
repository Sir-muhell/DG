import React from "react";
import {
  Input,
  Select,
  Textarea,
  Option,
  Button,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="lg:p-20 p-10">
      <section className="">
        <div className="bg-tertiary rounded-2xl p-3 w-fit">
          <p className="font-trispace announce">Want to work us?</p>
        </div>
        <div className="lg:w-3/6 lg:mt-10 mt-5">
          <p className="font-inter banner-text">
            Contact us, lets get started already.
          </p>
        </div>
        <div className="mt-10 font-trispace">
          <div className="flex lg:w-4/12 m-auto  flex-col items-end gap-6">
            <Input
              variant="outlined"
              label="First Name "
              type="text"
              className="outline-1"
            />
            <Input
              variant="outlined"
              label="Last Name "
              type="text"
              className="outline-1"
            />
            <Input
              variant="outlined"
              label="Company Name "
              type="text"
              className="outline-1"
            />
            <Input
              variant="outlined"
              label="Phone Number"
              type="number"
              className="outline-1"
            />
            <Input
              variant="outlined"
              label="Work Mail "
              type="email"
              className="outline-1"
            />
            <Select label="Type of Enquiry" className="outline-1">
              <Option>Consultation</Option>
              <Option>Brand Identity Design Project</Option>
              <Option>Creative Art Director</Option>
              <Option>Website Design Project</Option>
            </Select>
            <div className=" flex w-max gap-4">
              <Button variant="outlined">outlined</Button>

              <Button variant="outlined">outlined</Button>
            </div>
            <Textarea label="Message" rows={8} className="outline-1" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
