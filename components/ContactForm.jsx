import React, { useState } from 'react'
import { Button } from './ui/button'
import { trackContactForm } from '../Analytics'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xdkdqwvr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.fullName,
          phone: formData.phone,
          message: formData.message || 'Private viewing request for The Regency View Estate'
        })
      })

      if (response.ok) {
        // Track form submission
        trackContactForm('private_viewing_request')
        
        // Success
        setIsSubmitted(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error('Form submission failed')
      }
      
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'There was an error submitting your request. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-cream-white/10 rounded-lg p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold mb-4">Thank You!</h3>
          <p className="text-cream-white/90 mb-6">
            Your request has been received successfully. Our investment team will contact you within 24 hours to schedule your private viewing.
          </p>
          <p className="text-sm text-cream-white/70">
            For immediate assistance, please call: 408-202-5342
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-cream-white/10 rounded-lg p-8">
      <h3 className="text-2xl font-serif font-bold mb-6">Schedule Your Private Viewing</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            type="text"
            name="fullName"
            placeholder="Full Name *" 
            value={formData.fullName}
            onChange={handleInputChange}
            className={`w-full p-3 rounded bg-cream-white/20 border text-cream-white placeholder-cream-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold ${
              errors.fullName ? 'border-red-400' : 'border-cream-white/30'
            }`}
            disabled={isSubmitting}
          />
          {errors.fullName && (
            <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        
        <div>
          <input 
            type="email"
            name="email"
            placeholder="Email Address *" 
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-3 rounded bg-cream-white/20 border text-cream-white placeholder-cream-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold ${
              errors.email ? 'border-red-400' : 'border-cream-white/30'
            }`}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        
        <div>
          <input 
            type="tel"
            name="phone"
            placeholder="Phone Number" 
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full p-3 rounded bg-cream-white/20 border text-cream-white placeholder-cream-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold ${
              errors.phone ? 'border-red-400' : 'border-cream-white/30'
            }`}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        
        <div>
          <textarea 
            name="message"
            placeholder="Message (Optional)" 
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 rounded bg-cream-white/20 border border-cream-white/30 text-cream-white placeholder-cream-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold resize-none"
            disabled={isSubmitting}
          />
        </div>
        
        {errors.submit && (
          <p className="text-red-400 text-sm">{errors.submit}</p>
        )}
        
        <Button 
          type="submit"
          className="w-full bg-warm-gold hover:bg-warm-gold/90 text-charcoal disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-charcoal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'Request Private Viewing'
          )}
        </Button>
        
        <p className="text-xs text-cream-white/60 text-center">
          * Required fields. Your information will be kept confidential and used only to arrange your viewing.
        </p>
      </form>
    </div>
  )
}

export default ContactForm

