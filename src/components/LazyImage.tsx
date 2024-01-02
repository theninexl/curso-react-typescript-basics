import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";


type LazyImageProps = { 
  src: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({ src, onLazyLoad, ...imgProps }:Props):JSX.Element => {
  const node = useRef<HTMLImageElement> (null);
  const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);

  useEffect(() =>{
    if (isLazyLoaded) {
      return;
    }
    //crear nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
          observer.disconnect();
          setIsLazyLoaded(true);
        }

        if (typeof onLazyLoad === "function") {
          onLazyLoad(node.current);
        }
      })
    })

    //observe node
    if (node.current) {
      observer.observe(node.current)
    }

    //desconectar
    return () => {
      observer.disconnect()
    }
  },[src, onLazyLoad, isLazyLoaded])

  return <img 
    ref={node} 
    src={currentSrc} 
    {...imgProps} />
}