"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Facebook, Instagram, LucideYoutube } from "lucide-react";
import Image from "next/image";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.6 0.75H15.054L9.692 7.01L16 15.25H11.062L7.196 10.036L2.77 15.25H0.316L6.049 8.595L0 0.75H5.063L8.558 5.565L12.6 0.75ZM11.74 13.77H13.099L4.324 2.145H2.865L11.74 13.77Z"
      fill="currentColor"
    />
  </svg>
);

const footerData = {
  contact: {
    address: "60 Fremont Ave, Hamden, CT 06514",
    email: "fstore@gmail.com",
    phone: "+1 (203) 555-0123",
  },
  socialMedia: [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: XIcon, href: "#", label: "X (Twitter)" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: LucideYoutube, href: "#", label: "Youtube" },
  ],
  sections: [
    {
      title: "Shop",
      links: [
        { label: "Chairs", href: "/chairs" },
        { label: "Beds", href: "/beds" },
        { label: "Sofas", href: "/sofas" },
        { label: "Cabinets", href: "/cabinets" },
        { label: "Armchairs", href: "/armchairs" },
        { label: "Sale", href: "/sale" },
      ],
    },
    {
      title: "Customer service",
      links: [
        { label: "Orders", href: "/orders" },
        { label: "Addresses", href: "/addresses" },
        { label: "Returns", href: "/returns" },
        { label: "Account details", href: "/account" },
        { label: "F.A.Q", href: "/faq" },
      ],
    },
    {
      title: "Delivery",
      links: [
        { label: "Orders", href: "/delivery/orders" },
        { label: "Return", href: "/delivery/return" },
        { label: "Free Delivery", href: "/delivery/free" },
      ],
    },
  ],
  paymentMethods: [
    { name: "Visa", src: "/payments/visa.png", alt: "Visa" },
    { name: "Mastercard", src: "/payments/mastercard.svg", alt: "Mastercard" },
    {
      name: "American Express",
      src: "/payments/amex.png",
      alt: "American Express",
    },
    { name: "PayPal", src: "/payments/paypal.png", alt: "PayPal" },
  ],
};

const FooterLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    className={`text-gray-300 font-light hover:text-white transition-colors duration-200 ${className}`}
  >
    {children}
  </a>
);

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h3 className="font-bold mb-4 text-white">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <FooterLink href={link.href}>{link.label}</FooterLink>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#380e4f] text-white mt-16">
      {/* Newsletter Section */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Subscribe to our newsletter
              </h2>
              <p className="text-lg text-gray-300">
                Don't miss latest news & promotions
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-[#000000] border-none flex-1 md:w-80"
              />
              <Button className="bg-[#380e4e] hover:bg-[#380e4e]/90 text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-4 py-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="mb-2 text-gray-300 font-light">
                {footerData.contact.address}
              </p>
              <p className="mb-2 text-gray-300 font-light">
                Email: {footerData.contact.email}
              </p>
              <p className="mb-4 text-gray-300 font-light">
                Phone: {footerData.contact.phone}
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                {footerData.socialMedia.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-8 h-8 flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {footerData.sections.map((section) => (
              <FooterSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 font-light">
              © Copyright 2025. Design by Prashanta Dey
            </p>

            <div className="flex gap-4 mt-4 md:mt-0 items-center">
              {footerData.paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="h-10 w-10 relative opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={method.src}
                    alt={method.alt}
                    fill
                    priority
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
