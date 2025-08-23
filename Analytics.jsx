import React, { useEffect } from 'react'

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 (GA4) - Replace with actual tracking ID
    const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with actual GA4 tracking ID
    
    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    document.head.appendChild(script1)
    
    // Initialize Google Analytics
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: 'The Regency View Estate',
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'property_type',
          'custom_parameter_2': 'investment_focus'
        }
      });
      
      // Custom events for real estate tracking
      gtag('event', 'page_view', {
        'property_type': 'luxury_real_estate',
        'location': 'Happy Valley Oregon',
        'price_range': '2M-3M',
        'target_market': 'chinese_investors'
      });
    `
    document.head.appendChild(script2)
    
    // Facebook Pixel (Meta Pixel) - Replace with actual pixel ID
    const FB_PIXEL_ID = '1234567890123456' // Replace with actual Facebook Pixel ID
    
    const fbScript = document.createElement('script')
    fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FB_PIXEL_ID}');
      fbq('track', 'PageView');
      
      // Custom events for real estate
      fbq('track', 'ViewContent', {
        content_type: 'property',
        content_ids: ['regency-view-estate'],
        content_name: 'The Regency View Estate',
        value: 2685000,
        currency: 'USD'
      });
    `
    document.head.appendChild(fbScript)
    
    // Hotjar tracking - Replace with actual site ID
    const HOTJAR_ID = '1234567' // Replace with actual Hotjar site ID
    
    const hotjarScript = document.createElement('script')
    hotjarScript.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `
    document.head.appendChild(hotjarScript)
    
    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1)
      document.head.removeChild(script2)
      document.head.removeChild(fbScript)
      document.head.removeChild(hotjarScript)
    }
  }, [])
  
  return null // This component doesn't render anything
}

// Custom tracking functions for real estate events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      'property_type': 'luxury_real_estate',
      'location': 'Happy Valley Oregon',
      ...parameters
    })
  }
  
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
}

// Specific tracking functions for real estate actions
export const trackPropertyView = () => {
  trackEvent('view_property', {
    'property_id': 'regency-view-estate',
    'property_value': 2685000,
    'currency': 'USD'
  })
}

export const trackContactForm = (formType) => {
  trackEvent('contact_form_submit', {
    'form_type': formType,
    'lead_source': 'website'
  })
}

export const trackBrochureDownload = () => {
  trackEvent('download_brochure', {
    'content_type': 'property_brochure',
    'property_id': 'regency-view-estate'
  })
}

export const trackVideoView = (videoType, duration) => {
  trackEvent('video_view', {
    'video_type': videoType,
    'view_duration': duration,
    'property_id': 'regency-view-estate'
  })
}

export const trackScheduleViewing = () => {
  trackEvent('schedule_viewing', {
    'property_id': 'regency-view-estate',
    'lead_quality': 'high_intent'
  })
}

export default Analytics

