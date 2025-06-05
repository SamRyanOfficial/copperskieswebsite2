"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Review, reviews } from '@/data/reviews';

const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = review.text.length > 200;

  return (
    <div 
      className={cn(
        "bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-lg p-8 shadow-xl",
        "hover:from-gray-900/90 hover:to-black/90 transition-all duration-300",
        "flex flex-col h-full"
      )}
    >
      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="font-semibold text-orange-400 text-lg mb-2">{review.author}</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-200 leading-relaxed">
            {shouldTruncate && !isExpanded ? `${review.text.slice(0, 200)}...` : review.text}
          </p>
          
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1 text-sm font-medium mt-2"
            >
              {isExpanded ? (
                <>
                  Read less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Read more
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-800/50">
        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-orange-400" />
            <span>{review.event}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span>{review.venue}</span>
          </div>
          <p className="font-medium">{review.date}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredReviews = reviews.filter(review => {
    if (filter === 'all') return true;
    if (filter === 'weddings') return review.event.toLowerCase().includes('wedding');
    if (filter === 'corporate') return review.event.toLowerCase().includes('corporate');
    return review.event.toLowerCase().includes('birthday');
  });

  return (
    <section className="py-16 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-white">What Our Clients Say</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Read reviews from our amazing clients who have experienced our live music at their special events.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            {['all', 'weddings', 'corporate', 'birthdays'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  filter === type
                    ? "bg-orange-500 text-white"
                    : "bg-gray-900/50 text-gray-400 hover:bg-gray-900 hover:text-white"
                )}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 