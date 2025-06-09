// Meta Pixel tracking utilities
declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, any>) => void;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};

// Predefined event tracking functions
export const trackContactFormSubmit = () => {
  trackEvent('Contact', {
    content_name: 'Contact Form',
    content_category: 'Lead Generation'
  });
};

export const trackQuoteRequest = () => {
  trackEvent('Lead', {
    content_name: 'Quote Request',
    content_category: 'Business Inquiry'
  });
};

export const trackServiceView = (service: string) => {
  trackEvent('ViewContent', {
    content_name: service,
    content_category: 'Service Page'
  });
};

export const trackReviewView = () => {
  trackEvent('ViewContent', {
    content_name: 'Reviews Section',
    content_category: 'Social Proof'
  });
};

export const trackFAQView = () => {
  trackEvent('ViewContent', {
    content_name: 'FAQ Section',
    content_category: 'Information'
  });
}; 