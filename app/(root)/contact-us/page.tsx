"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    router.push("/thank-you");
  };

  return (
    <div className="w-full relative">
      <div
        className="h-[500px] flex items-center justify-center px-4 py-16"
        style={{
          background:
            "linear-gradient(135deg, #d4b896 0%, #c4a882 50%, #b8a078 100%)",
        }}
      >
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
      </div>

      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-7xl mx-auto">
        <div className="bg-[#380e4f] p-8 md:p-12 grid md:grid-cols-2 gap-8 items-start shadow-2xl">
          <div className="text-[#ffffff]">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-[#dadada] mb-8 leading-relaxed">
              Suspendisse leo mi cursus pharetra tellus tincidunt. Risus nulla
              penatibus donec elementum nulla
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-[#dadada]" />
                <div>
                  <h3 className="font-semibold text-[#dadada] mb-1">
                    Physical address
                  </h3>
                  <p className="text-[#ffffff] font-bold text-2xl">
                    60 Fremont Ave. Hamden,
                    <br />
                    CT 06514
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-1 text-[#dadada]" />
                <div>
                  <h3 className="font-semibold text-[#dadada] mb-1">
                    Phone number
                  </h3>
                  <p className="text-[#ffffff] font-bold text-2xl">01973227349</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-1 text-[#dadada]" />
                <div>
                  <h3 className="font-semibold text-[#dadada] mb-1">
                    Email address
                  </h3>
                  <p className="text-[#ffffff] font-bold text-2xl">
                    support.loyalfurniture@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="w-full resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-[#380e4f] hover:bg-[#380e4f]/90 text-white px-8 py-3 rounded-md font-medium transition-colors w-full md:w-auto"
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="h-96"></div>
    </div>
  );
};

export default ContactUs;
