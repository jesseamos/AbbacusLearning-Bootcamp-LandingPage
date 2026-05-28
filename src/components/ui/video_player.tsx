import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function VideoPlayerComponent() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Clean demo embed URL ensuring the JS API interface is enabled
  const videoId = "dQw4w9WgXcQ";
  const iframeUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0`;

  // Helper function to dispatch stringified command objects to the YouTube API
  const sendPlayerCommand = (command: string, args: unknown[] = []) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: args }),
        'https://www.youtube.com'
      );
    }
  };

  // Toggle Video playback stream state
  const togglePlayPause = () => {
    if (isPlaying) {
      sendPlayerCommand('pauseVideo');
      setIsPlaying(false);
    } else {
      sendPlayerCommand('playVideo');
      setIsPlaying(true);
    }
  };

  // Listen to postMessage frames broadcasted by the IFrame
  useEffect(() => {
    const handleYoutubeMessages = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;

      try {
        const data = JSON.parse(event.data);
        
        // Initial setup and lifecycle syncing
        if (data.event === 'onReady') {
          sendPlayerCommand('getDuration');
        }

        // Catching information delivery events from the player instance
        if (data.event === 'infoDelivery' && data.info) {
          if (data.info.duration !== undefined) {
            setDuration(data.info.duration);
          }
          if (data.info.currentTime !== undefined) {
            setCurrentTime(data.info.currentTime);
          }
          if (data.info.playerState !== undefined) {
            // Player state map: 1 = Playing, 2 = Paused
            if (data.info.playerState === 1) setIsPlaying(true);
            if (data.info.playerState === 2) setIsPlaying(false);
          }
        }
      } catch {
        // Safe catch block ignoring unparsable background browser frames
      }
    };

    window.addEventListener('message', handleYoutubeMessages);
    return () => window.removeEventListener('message', handleYoutubeMessages);
  }, []);

  // Update visual timeline bar state based on active timeline calculations
  useEffect(() => {
    if (duration > 0) {
      setProgress(currentTime / duration);
    }
  }, [currentTime, duration]);

  // Format tracking seconds safely to MM:SS structures
  const formatTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      id="overview"
      className="relative w-full max-w-5xl mx-auto"
    >
      {/* Soft background glow */}
      <div className="absolute -inset-6 bg-gradient-soft rounded-[2rem] blur-2xl opacity-60 pointer-events-none" />
      
      <div className="gradient-border relative overflow-hidden shadow-glow rounded-2xl">
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[540px] bg-gradient-to-br from-[#0e0a2e] via-[#1a1148] to-[#0c2a6b]">
          
          {/* Native HTML IFrame Player Layer */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <iframe
              ref={iframeRef}
              src={iframeUrl}
              className="w-full h-full border-0 object-cover scale-105" // scale prevents thin black layout bars
              allow="autoplay; encrypted-media"
              title="Embedded YouTube Video"
            />
          </div>

          {/* Core Interactive Click Area Over the Screen Viewport */}
          <div 
            className="absolute inset-0 z-10 bg-black/5 cursor-pointer"
            onClick={togglePlayPause}
          />

          {/* Window Mock Status Controls */}
          <div className="absolute top-4 left-4 flex gap-1.5 z-20 pointer-events-none">
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          </div>

          {/* Floating Center Actions Overlay */}
          <div className="absolute inset-0 grid place-items-center z-20 pointer-events-none">
            <AnimatePresence>
              {!isPlaying && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    togglePlayPause();
                  }}
                  className="pointer-events-auto group relative grid place-items-center h-20 w-20 rounded-full bg-white text-brand-purple shadow-glow cursor-pointer"
                >
                  <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                  <Play className="h-7 w-7 fill-current translate-x-0.5" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Dynamic Footer Controls HUD Layout */}
          <div className="absolute bottom-0 inset-x-0 p-5 flex items-center gap-4 text-white/90 text-xs z-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none">
            <button 
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              className="pointer-events-auto text-white hover:text-purple-400 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
            </button>

            {/* Micro progress status timeline tracking */}
            <div className="flex-1 h-1.5 rounded-full bg-white/20 overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-100 ease-out" 
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            
            <span className="tabular-nums select-none">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Background Ambient Spotlight Element */}
          <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-[#FFCE21]/20 blur-3xl pointer-events-none" />
        </div>
      </div>

   
    </motion.div>
  );
}