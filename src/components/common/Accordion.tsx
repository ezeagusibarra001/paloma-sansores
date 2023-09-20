import { Icon } from 'mdc-ui';
import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  return (
    <div className='m-8 flex flex-col gap-6'>
      {items.map((item, index) => (
        <div key={index} className="bg-gray-200/50 rounded-xl">
          <button
            onClick={() => handleToggle(index)}
            className="flex justify-between items-center w-full p-3"
          >
            <div className="font-medium text-xl text-gray-600">{item.title}</div>
            <div className={`${openIndex === index && 'transform rotate-180'} w-8 h-8`}>
              <Icon name="arrowRight"  color='gray'/>
            </div>
          </button>
          {openIndex === index && (
            <div className="bg-gray-100 rounded-b-xl text-gray-600 p-6">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
