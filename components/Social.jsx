import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

import Link from "next/link";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/apoorv654123"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/apoorv654123/"
    },
    {
        icon: <FaTwitter />,
        path: "https://x.com/Apoorv654123"
    },
];

const Social = ({containerStyles,iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        target="_blank"
                        className={iconStyles}
                    >
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
