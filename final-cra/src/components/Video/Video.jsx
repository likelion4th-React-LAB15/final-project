import { memo, useEffect, useRef } from 'react'

export const Video = memo(function Video({ src, isPauseVideo, ...restProps}) {
  const videoRef = useRef();
  useEffect(() => {
    if (isPauseVideo)
      videoRef.current.pause();
    else
      videoRef.current.play();
  }, [isPauseVideo]);

  return (
    <video
      ref={videoRef}
      src={src}
      {...restProps}
    />
  )
});