import { useRef } from "react";

export type AnimationCardType = {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
};
export default function AnimationCard({
  id,
  title,
  thumbnailUrl,
  videoUrl,
  description,
}: AnimationCardType) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <>
      <div>
        <button>
          <video
            
            poster={thumbnailUrl}
            crossOrigin="anonymous"
            ref={ref}
            className=" aspect-video transition-all"
            src={videoUrl}
            width={250}
            muted
            onMouseOver={() => {
              ref.current?.play();
            }}
            onMouseOut={() => {
              ref.current?.pause();
            }}
          ></video>
        </button>
      </div>
    </>
  );
}
