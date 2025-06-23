"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7042 7250 07",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "apoorv654123@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Faridabad, Haryana, India",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setForm({ ...form, service: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, service, message } = form;
    console.log("Form submitted:", form);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "9867b9ae-8b0d-4e35-94c4-390e7feaf0c0",
                name: `${firstName} ${lastName}`,
                email: email,
                phone: phone,
                service: service,
                message: message,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                I'm actively seeking impactful opportunities where I can
                contribute with my full stack skills and grow with a
                forward-thinking team. If you're looking for a reliable
                developer who delivers quality and innovation—let's connect.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="firstName"
                  required
                  onChange={handleChange}
                  placeholder="Firstname"
                />
                <Input
                  type="lastname"
                  name="lastName"
                  required
                  onChange={handleChange}
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  placeholder="Email address"
                />
                <Input
                  type="phone"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Phone number"
                />
              </div>

              <Select required onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">
                      Web Development
                    </SelectItem>
                    {/* <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="game-development">Game Development</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                required
                onChange={handleChange}
                placeholder="Type your message here."
                className="h-[200px]"
              />

              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-around order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-
                    
                    [72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
