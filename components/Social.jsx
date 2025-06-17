import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

import Link from "next/link";

const socials = [
    {
        icon: <FaGithub />,
        path: ""
    },
    {
        icon: <FaLinkedinIn />,
        path: ""
    },
    {
        icon: <FaTwitter />,
        path: ""
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
