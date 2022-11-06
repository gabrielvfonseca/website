import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality: number;
}

const imgLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `/${src}?w=${width}&q=${quality}`;
};

const Figure = ({ src, alt, width, height, quality }: Props) => {
  return (
    <Image
      className="rounded-sm"
      priority
      quality={quality}
      loader={imgLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Figure;
