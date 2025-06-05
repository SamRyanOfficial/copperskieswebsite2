import React from 'react';

const Testimonials = () => {
  const testimonialData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah and Mike"
        },
        "reviewBody": "Copper Skies made our wedding day absolutely perfect! Their acoustic rendition of our first dance song was magical, and they kept the dance floor full all night. Highly professional and talented!",
        "datePublished": "2024-01-15",
        "itemReviewed": {
          "@type": "MusicEvent",
          "name": "Wedding Reception Performance",
          "performer": {
            "@type": "MusicGroup",
            "name": "Copper Skies"
          }
        }
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "John Smith"
        },
        "reviewBody": "We hired Copper Skies for our company's annual gala and they exceeded all expectations. Their ability to read the room and adjust their performance accordingly was impressive. True professionals!",
        "datePublished": "2023-12-10",
        "itemReviewed": {
          "@type": "MusicEvent",
          "name": "Corporate Gala Performance",
          "performer": {
            "@type": "MusicGroup",
            "name": "Copper Skies"
          }
        }
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Emma and David"
        },
        "reviewBody": "From the ceremony to the reception, Copper Skies created the perfect atmosphere. Their song selection and timing were impeccable. So many guests commented on how amazing the music was!",
        "datePublished": "2024-02-20",
        "itemReviewed": {
          "@type": "MusicEvent",
          "name": "Wedding Ceremony and Reception",
          "performer": {
            "@type": "MusicGroup",
            "name": "Copper Skies"
          }
        }
      }
    ]
  };

  const testimonials = testimonialData.itemListElement;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <p className="font-semibold">{testimonial.author.name}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.reviewBody}</p>
              <p className="text-sm text-gray-500 mt-4">
                {new Date(testimonial.datePublished).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialData) }}
        />
      </div>
    </section>
  );
};

export default Testimonials; 