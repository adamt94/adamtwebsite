import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  features?: string[];
  icons: ReactNode[];
  href?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  features = [],
  icons = [],
  href = "",
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="max-w-sm rounded surface overflow-hidden shadow-lg text-left relative"
    >
      <div className="flex flex-col h-full">
        <img className="w-full" src={image} alt="Sunset in the mountains" />

        <div className="px-6 py-4 pb-3">
          <div className="flex flex-row justify-between">
            <div className="font-bold text-xl mb-2 on-surface-text">
              {title}
            </div>
            <div className="flex flex-row justify-end gap-2 items-center title-large">
              {icons.map((icon) => (
                <div className="secondary-text">{icon}</div>
              ))}
            </div>
          </div>
          <p className=" body-medium secondary-text">{description}</p>
        </div>
        <div className="px-6 pb-2 flex-grow">
          {features.map((feature) => (
            <span className="inline-block px-1 py-1 body-medium secondary-text opacity-70">
              {feature}
            </span>
          ))}
        </div>
        <div className="flex flex-row justify-end p-5 primary-text flex-shrink">
          <a
            href={href}
            className="inline-block tertiary rounded-full px-3 py-1 text-sm font-semibold on-tertiary-text mr-2 mb-2"
          >
            Go to site
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
