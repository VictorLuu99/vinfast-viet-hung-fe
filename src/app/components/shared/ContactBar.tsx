"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { PhoneIcon, FacebookIcon, ZaloIcon, LocationIcon } from "../Icons";
import { contactInfo } from "@/lib/data/stores";

type ContactLink = {
  href: string;
  label: string;
  bgClass: string;
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const ContactBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleStoresClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === "/") {
      // On home page - scroll to stores section
      const storesElement = document.getElementById("stores");
      if (storesElement) {
        storesElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Not on home page - navigate to home page stores section
      router.push("/#stores");
    }
  };

  const links: ContactLink[] = [
    {
      href: `tel:${contactInfo.phone}`,
      label: "Gọi điện thoại",
      bgClass: "bg-green-500 hover:bg-green-600",
      icon: <PhoneIcon size={20} className="text-white" />,
    },
    {
      href: contactInfo.socialMedia?.facebook || "#",
      label: "Facebook Chính",
      bgClass: "bg-blue-600 hover:bg-blue-700",
      icon: <FacebookIcon size={20} className="text-white" />,
    },
    {
      href: contactInfo.socialMedia?.facebook2 || "#",
      label: "Facebook 2",
      bgClass: "bg-blue-500 hover:bg-blue-600",
      icon: <FacebookIcon size={20} className="text-white" />,
    },
    {
      href: contactInfo.socialMedia?.zalo || "#",
      label: "Zalo Chat",
      bgClass: "bg-blue-400 hover:bg-blue-500",
      icon: <ZaloIcon size={20} className="text-white" />,
    },
    {
      href: "#stores",
      label: "Tìm cửa hàng gần nhất",
      bgClass: "bg-red-500 hover:bg-red-600",
      icon: <LocationIcon size={20} className="text-white" />,
      onClick: handleStoresClick,
    },
  ];

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-2">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={item.label}
          className={`${item.bgClass} text-white shadow-lg rounded-full p-2.5 transition-all duration-200 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-400`}
          onClick={item.onClick}
        >
          <span className="sr-only">{item.label}</span>
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default ContactBar;