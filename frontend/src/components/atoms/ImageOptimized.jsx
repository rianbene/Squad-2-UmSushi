import Image from 'next/image';

export default function ImageOptimized({ src, alt, width = 300, height = 200 }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded"
      loading="lazy"
    />
  );
}
