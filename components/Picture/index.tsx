import Image from 'next/image';
import type { ImageLoaderProps } from 'next/image';

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality: number;
  title?: string;
  className?: string;
  label?: string /* Picture's description label*/;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `/${src}?w=${width}&q=${quality}`;
};

const Picture = ({ src, alt, width, height, quality, label, title, className }: Props) => {
  if (label) {
    return (
      <div>
        <span className="space-y-2">
          <Image
            className={`rounded-sm my-10 ${className}`}
            priority
            quality={quality}
            loader={imageLoader}
            src={src}
            alt={alt}
            width={width}
            height={height}
            title={title ? title : ''}
          />
          <span className="font-serif font-regular italic text-left text-t text-gray text-opacity-40">{label}</span>
        </span>
      </div>
    );
  }
  return (
    <div>
      <Image
        className={`rounded-sm my-10 ${className}`}
        priority
        quality={quality}
        loader={imageLoader}
        src={src}
        alt={alt}
        width={width}
        height={height}
        title={title ? title : ''}
      />
    </div>
  );
};

export default Picture;
