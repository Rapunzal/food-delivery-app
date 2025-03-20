import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

//Contact page
const ContactUs = () => {
  return (
    <div className="h-[500px]">
      <div>
        <h1 className="text-center py-10 text-2xl"> Contact Us</h1>
      </div>
      <div className="flex justify-center w-full py-2 ">
        <div className="w-1/2 flex justify-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem hic
          dolore neque mollitia assumenda, voluptatem fuga accusamus perferendis
          culpa alias architecto est voluptate provident suscipit, expedita
          corrupti
        </div>
      </div>
      <div className="flex justify-center py-10 gap-16">
        <div>
          <IoLocationSharp className="w-20 h-20" />
          Address:<p>Fake Street 123</p>
          <p>USA</p>
        </div>
        <div>
          <FaPhoneAlt className="w-20 h-20" />
          Phone
          <p>123-456-7890</p>
        </div>
        <div>
          <MdOutlineMailOutline className="w-20 h-20" />
          Email
          <p>fakemail@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
