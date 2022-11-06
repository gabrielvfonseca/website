import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `/${src}?w=${width}&q=${quality}`;
};

const Picture = ({ src, alt, width, height, quality }: Props) => {
  return (
    <Image
      className="rounded-sm"
      priority
      quality={quality}
      loader={imageLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Picture;
