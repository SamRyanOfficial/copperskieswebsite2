import React from 'react';

const FAQ = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of events do Copper Skies perform at?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Copper Skies specializes in providing live music for weddings and corporate events throughout Mount Maunganui and the Bay of Plenty region. With over 200 successful events, we have extensive experience in creating the perfect atmosphere for ceremonies, receptions, product launches, and business functions."
        }
      },
      {
        "@type": "Question",
        "name": "What music styles do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We perform a diverse range of music including rock, country, blues, folk, and pop. Our unique arrangements and stunning harmonies allow us to adapt songs to suit your event's atmosphere, from intimate acoustic ceremonies to upbeat reception celebrations."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle wedding ceremony music?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For wedding ceremonies, we work closely with couples to select perfect songs for key moments including the processional, signing, and recessional. We can perform acoustic versions of modern songs or traditional wedding music, ensuring a seamless and memorable ceremony."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily service Mount Maunganui, Tauranga, and the wider Bay of Plenty region. We're happy to travel to venues throughout the region to provide entertainment for your special event."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Copper Skies ideal for corporate events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our professional experience, reliability, and versatile song list make us perfect for corporate events. We understand the importance of reading the room and adjusting our performance to match the event's energy, whether it's background music for networking or engaging entertainment for product launches."
        }
      }
    ]
  };

  const faqs = faqData.mainEntity;

  return (
    <section className="py-16 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:bg-black/90 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-400">{faq.name}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </div>
    </section>
  );
};

export default FAQ; 