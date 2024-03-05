import React from 'react';
import Image from 'next/image';
import plus from '../../public/assets/plus.png';
import line from '../../public/assets/Line 70.png'
import two from '../../public/assets/Group 3 (1).png'
import one from '../../public/assets/Group 2 (4).png'

interface ParagraphProps {
  text: string;
}

const Faqs = () => {
  // FAQ data
  const faq = [
    "How does URL shortening work?",
    " Is it necessary to create an account to use the URL shortening service?",
    "Are the shortened links permanent? Will they expire?",
    "Are there any limitations on the number of URLs I can shorten?",
    " Can I customize the shortened URLs to reflect my brand or content?",
    "Can I track the performance of my shortened URLs?",
    " How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
    "What is a QR code and what can it do?",
    "Is there an API available for integrating the URL shortening service into my own applications or websites?"
  ];

  // Child component to display a single paragraph
  // Use the defined type for the text prop
  const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
    return (
      <div className='flex -gap-10 justify-between items-center p-4 border border-white border-b-gray-200 '>
        <p className='w-[70%]' >{text}</p>
        <button><Image src={plus} alt='hi' width={20} height={20} /></button>
      </div>
    );
  };

  // Parent component that maps through the faq object and renders Paragraph for each paragraph
  const FaqRenderer = ({ faq }: { faq: string[] }) => {
    return (
      <div>
        {faq.map((paragraph, index) => (
          <Paragraph key={index} text={paragraph} />
        ))}
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-center items-center p-10 md:p-20 relative'>

      <Image src={two} alt='one' width={300} height={200} className='absolute left-0' />
      <Image src={one} alt='one' width={400} height={300} className='absolute right-0 bottom-0' />
        
      <div className='flex gap-3 items-center pb-8 '>
            <Image src={line} alt='line' width={5} height={5} />
            <h1 className='font-bold text-3xl'>FAQs </h1>

        </div>
      <FaqRenderer faq={faq} />
    </div>
  );
};

export default Faqs;
