import React, { useState, useRef, useEffect } from 'react'

const LazyVideo = ({ 
  src, 
  poster, 
  className = '', 
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
  onLoadedData,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (autoPlay && videoRef.current) {
            videoRef.current.play().catch(console.error)
          }
        } else {
          setIsInView(false)
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause()
          }
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [autoPlay])

  const handleLoadedData = () => {
    setIsLoaded(true)
    if (onLoadedData) {
      onLoadedData()
    }
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      {/* Poster image placeholder */}
      {poster && !isLoaded && (
        <img
          src={poster}
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      
      {/* Video element */}
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline
          preload="metadata"
          onLoadedData={handleLoadedData}
          onPlay={handlePlay}
          onPause={handlePause}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      
      {/* Loading indicator */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-12 h-12 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Play button overlay for non-autoplay videos */}
      {!autoPlay && !isPlaying && isLoaded && (
        <button
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
          aria-label="Play video"
        >
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
            <svg 
              className="w-6 h-6 text-forest-green ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </button>
      )}
    </div>
  )
}

export default LazyVideo

