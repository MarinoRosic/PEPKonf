import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'

const Coverflow = ({ data, onImageClick }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [loadedSrcs, setLoadedSrcs] = useState(new Set())
  const [windowSize, setWindowSize] = useState(() => ({
    height: window.innerHeight,
    isMobile: window.matchMedia('(max-width: 768px)').matches,
  }))

  useEffect(() => {
    const onResize = () =>
      setWindowSize({
        height: window.innerHeight,
        isMobile: window.matchMedia('(max-width: 768px)').matches,
      })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    setActiveIndex(0)
  }, [data])

  const { SIDE_COUNT, CARD_H, CARD_W, CARD_SPACING } = useMemo(() => {
    const { height, isMobile } = windowSize
    const SIDE_COUNT   = isMobile ? 1 : 2
    const CARD_H       = isMobile ? Math.floor(height * 0.50) : Math.floor(height * 0.58)
    const CARD_W       = Math.floor(CARD_H * (isMobile ? 0.722 : 0.739))
    const CARD_SPACING = Math.floor(CARD_H * (isMobile ? 0.542 : 0.50))
    return { SIDE_COUNT, CARD_H, CARD_W, CARD_SPACING }
  }, [windowSize])

  // Keep a ref so drag handlers stay stable across activeIndex changes
  const activeIndexRef = useRef(activeIndex)
  useEffect(() => { activeIndexRef.current = activeIndex }, [activeIndex])

  const goTo = useCallback((index) => {
    if (index >= 0 && index < data.length) setActiveIndex(index)
  }, [data.length])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft')  goTo(activeIndexRef.current - 1)
    else if (e.key === 'ArrowRight') goTo(activeIndexRef.current + 1)
  }, [goTo])

  const handleDragEnd = useCallback((_, info) => {
    if (info.offset.x < -60)      goTo(activeIndexRef.current + 1)
    else if (info.offset.x > 60)  goTo(activeIndexRef.current - 1)
  }, [goTo])

  return (
    <div
      className="relative w-full flex flex-col items-center select-none outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* 3D Stage */}
      <div
        className="relative w-full"
        style={{ height: CARD_H + 80, perspective: '1800px' }}
      >
        {data.map((slide, i) => {
          const offset = i - activeIndex
          const abs = Math.abs(offset)
          if (abs > SIDE_COUNT) return null

          const isCenter = offset === 0

          return (
            <motion.div
              key={i}
              animate={{
                x: offset * CARD_SPACING,
                rotateY: -offset * 30,
                scale: isCenter ? 1 : 0.83 - (abs - 1) * 0.08,
                opacity: isCenter ? 1 : 0.78 - (abs - 1) * 0.28,
                z: isCenter ? 40 : -abs * 40,
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              drag={isCenter ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              onClick={() => (isCenter ? onImageClick(activeIndex) : goTo(i))}
              whileTap={isCenter ? { scale: 0.97 } : undefined}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: -CARD_W / 2,
                marginTop: -(CARD_H / 2) - 20,
                zIndex: 10 - abs * 2,
                cursor: 'pointer',
                borderRadius: 16,
                overflow: 'hidden',
                willChange: 'transform',
                boxShadow: isCenter
                  ? '0 25px 70px rgba(0,0,0,0.7), 0 0 40px rgba(219,155,213,0.2)'
                  : '0 8px 30px rgba(0,0,0,0.5)',
              }}
            >
              {/* Shimmer shown until image loads */}
              {!loadedSrcs.has(slide.src) && (
                <div className="img-shimmer" style={{ position: 'absolute', inset: 0 }} />
              )}
              <img
                src={slide.src}
                alt={slide.description}
                style={{
                  width: CARD_W, height: CARD_H, objectFit: 'cover',
                  objectPosition: slide.objectPosition || 'center center',
                  display: 'block',
                  opacity: loadedSrcs.has(slide.src) ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }}
                loading="lazy"
                decoding="async"
                draggable={false}
                onLoad={() => setLoadedSrcs(prev => new Set(prev).add(slide.src))}
              />
              {!isCenter && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.3)',
                    pointerEvents: 'none',
                  }}
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Navigation dots */}
      <div className="flex items-center gap-2 mt-3">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slika ${i + 1}`}
            style={{
              height: '6px',
              width: i === activeIndex ? '20px' : '6px',
              borderRadius: '3px',
              background: i === activeIndex ? '#db9bd5' : 'rgba(255,255,255,0.25)',
              transition: 'all 0.3s ease',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      {[
        {
          dir: 'left',
          label: 'Prethodna slika',
          symbol: '‹',
          onClick: () => goTo(activeIndex - 1),
          disabled: activeIndex === 0,
        },
        {
          dir: 'right',
          label: 'Sljedeća slika',
          symbol: '›',
          onClick: () => goTo(activeIndex + 1),
          disabled: activeIndex === data.length - 1,
        },
      ].map(({ dir, label, symbol, onClick, disabled }) => (
        <button
          key={dir}
          onClick={onClick}
          disabled={disabled}
          aria-label={label}
          style={{
            position: 'absolute',
            [dir]: '8px',
            top: CARD_H / 2 + 10,
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'white',
            fontSize: '22px',
            cursor: disabled ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: disabled ? 0.25 : 1,
            transition: 'opacity 0.2s, background 0.2s',
            zIndex: 20,
          }}
        >
          {symbol}
        </button>
      ))}
    </div>
  )
}

export default Coverflow
