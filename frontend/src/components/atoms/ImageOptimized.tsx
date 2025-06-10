import React from 'react';
import Image from 'next/image';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function ImageOptimized({
  src,
  alt,
  width = 300,
  height = 200,
}: ImageOptimizedProps) {
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
