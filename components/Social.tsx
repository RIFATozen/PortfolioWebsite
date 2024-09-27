import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RIFATozen" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/r%C4%B1fat-%C3%B6zen-879536171",
  },
  { icon: <FaXTwitter />, path: "https://x.com/RIFATozn" },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
