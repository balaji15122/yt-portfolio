/**
 * Lightweight Analytics helper
 * Supports Google Analytics (gtag), Vercel Analytics (va), or console logs in development.
 */

export const trackEvent = (eventName, eventParams = {}) => {
  // 1. Google Analytics (gtag)
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }

  // 2. Vercel Web Analytics (window.va)
  if (typeof window !== 'undefined' && typeof window.va === 'function') {
    window.va('event', { name: eventName, data: eventParams });
  }

  // 3. Fallback dev logger
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event] ${eventName}:`, eventParams);
  }
};
