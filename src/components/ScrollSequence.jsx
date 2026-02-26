import { useRef, useEffect, useState } from 'react';

const ScrollSequence = ({ framesCount, path, checkpointFrame }) => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const frameIndex = useRef(1);
    const [checkpointPassed, setCheckpointPassed] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [isAutopplaying, setIsAutoplaying] = useState(false);
    const autoplayRef = useRef(null);

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            const loadedImages = [];
            // First, preload the very first image for immediate display
            const firstImg = new Image();
            firstImg.src = `${path}/frame_0001.webp`;
            await new Promise((resolve) => {
                firstImg.onload = resolve;
                firstImg.onerror = resolve; // Continue even if error
            });

            // Then preload the rest of the frames
            for (let i = 1; i <= framesCount; i++) {
                const img = i === 1 ? firstImg : new Image();
                if (i !== 1) img.src = `${path}/frame_${i.toString().padStart(4, '0')}.webp`;
                loadedImages.push(img);
            }
            setImages(loadedImages);
        };
        loadImages();
    }, [framesCount, path]);

    const render = (idx) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;
        const context = canvas.getContext('2d');
        const img = images[idx - 1];
        if (img) {
            // Responsible for resizing/positioning on canvas
            const canvasRectWidth = canvas.width / (window.devicePixelRatio || 1);
            const canvasRectHeight = canvas.height / (window.devicePixelRatio || 1);
            const canvasRatio = canvasRectWidth / canvasRectHeight;
            const imgRatio = img.width / img.height;
            let drawWidth, drawHeight, drawX, drawY;

            if (canvasRatio > imgRatio) {
                drawWidth = canvasRectWidth;
                drawHeight = canvasRectWidth / imgRatio;
                drawX = 0;
                drawY = (canvasRectHeight - drawHeight) / 2;
            } else {
                drawWidth = canvasRectHeight * imgRatio;
                drawHeight = canvasRectHeight;
                drawX = (canvasRectWidth - drawWidth) / 2;
                drawY = 0;
            }

            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            context.clearRect(0, 0, canvasRectWidth, canvasRectHeight);
            context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
    };

    useEffect(() => {
        if (isAutopplaying) {
            let lastTime = 0;
            const frameDelay = 40; // ~25 FPS for a smoother, slower pour

            const play = (currentTime) => {
                if (!lastTime) lastTime = currentTime;
                const elapsed = currentTime - lastTime;

                if (elapsed > frameDelay) {
                    if (frameIndex.current < framesCount) {
                        frameIndex.current += 1;
                        render(frameIndex.current);
                        lastTime = currentTime;
                    } else {
                        setIsAutoplaying(false);
                        return;
                    }
                }
                autoplayRef.current = requestAnimationFrame(play);
            };
            autoplayRef.current = requestAnimationFrame(play);
            return () => cancelAnimationFrame(autoplayRef.current);
        }
    }, [isAutopplaying, framesCount, images]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const handleScroll = () => {
            if (isAutopplaying) return; // Don't allow scroll to fight with autoplay

            const scrollTop = window.scrollY;
            // Map scroll to 0.0 - 0.25 (since hero is 400vh, we use first 100vh for animation)
            const scrollFraction = Math.min(scrollTop / (window.innerHeight * 3), 1);
            let index = Math.min(
                framesCount,
                Math.ceil(scrollFraction * framesCount)
            );

            // Checkpoint Logic
            if (checkpointFrame && !checkpointPassed) {
                if (index >= checkpointFrame) {
                    index = checkpointFrame;
                    setShowButton(true);
                } else {
                    setShowButton(false);
                }
            } else {
                setShowButton(false);
            }

            if (index > 0 && index !== frameIndex.current) {
                frameIndex.current = index;
                render(index);
            }
        };

        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            const context = canvas.getContext('2d');
            context.scale(dpr, dpr);
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = 'high';
            render(frameIndex.current);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Initial render
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [images, framesCount, checkpointFrame, checkpointPassed, isAutopplaying]);

    return (
        <div className="canvas-container">
            <canvas
                ref={canvasRef}
                id="hero-canvas"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
            />
            {showButton && (
                <div style={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 100,
                    pointerEvents: 'auto'
                }}>
                    <button
                        onClick={() => {
                            const audio = new Audio('/clicksound.mp3');
                            audio.play().catch(e => console.error("Audio playback failed:", e));
                            setCheckpointPassed(true);
                            setShowButton(false);
                            setIsAutoplaying(true);
                        }}
                        style={{
                            background: 'var(--primary)',
                            color: '#fff',
                            border: 'none',
                            padding: '1rem 2.2rem',
                            borderRadius: '999px',
                            fontSize: '1.2rem',
                            fontWeight: 800,
                            cursor: 'pointer',
                            boxShadow: '0 12px 32px rgba(45, 90, 39, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            transition: 'all 0.3s ease',
                            animation: 'pulse 2s infinite'
                        }}
                        className="tap-to-pour-btn"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                        </svg>
                        TAP TO POUR
                    </button>
                    <style>{`
                        @keyframes pulse {
                            0% { transform: scale(1); box-shadow: 0 4px 12px rgba(45, 90, 39, 0.2); }
                            50% { transform: scale(1.05); box-shadow: 0 12px 32px rgba(45, 90, 39, 0.4); }
                            100% { transform: scale(1); box-shadow: 0 4px 12px rgba(45, 90, 39, 0.2); }
                        }
                        .tap-to-pour-btn:hover {
                            transform: scale(1.1) !important;
                            background: var(--secondary);
                        }
                    `}</style>
                </div>
            )}
        </div>
    );
};

export default ScrollSequence;
