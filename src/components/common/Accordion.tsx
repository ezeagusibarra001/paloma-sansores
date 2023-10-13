import { Icon } from "mdc-ui";
import Link from "next/link";
import React, { useState } from "react";

interface AccordionItem {
  title: string;
  description: string;
  date?: string;
  link?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  withButton?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, withButton = true }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  return (
    <div className="m-8 flex flex-col gap-6 lg:w-3/4 lg:mx-auto">
      {items.map((item, index) => (
        <div key={index} className="bg-gray-200/50 rounded-xl">
          <button
            onClick={() => handleToggle(index)}
            className="flex justify-between items-center w-full p-3"
          >
            <div className="font-medium text-xl text-gray-600">
              {item.title}
            </div>

            <div className="flex items-center gap-6">
              {withButton && (
                <div className="bg-blue-700 rounded-full text-white px-4 py-2">
                  {item.date}
                </div>
              )}
              <div
                className={`${
                  openIndex === index && "transform rotate-180"
                } w-8 h-8 hidden sm:flex`}
              >
                <Icon name="arrowDown" color="gray" />
              </div>
            </div>
          </button>
          {openIndex === index && (
            <div className="bg-gray-100 rounded-b-xl text-gray-600 p-6">
              <div
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              ></div>
              {item.link && (
                <Link href={item.link} target="_blank">
                  <div className="bg-blue-700 rounded-full text-white px-4 py-2 w-fit mt-5">
                    ¡Me interesa ser parte!
                  </div>
                </Link>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
