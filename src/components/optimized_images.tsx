import type { CSSProperties, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  placeholder = 'empty',
  ...props
}: OptimizedImageProps) => {
  const style: CSSProperties = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
    aspectRatio: width && height ? `${width}/${height}` : undefined,
    objectFit: 'cover',
  };

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      style={style}
      decoding={priority ? 'auto' : 'async'}
      {...props}
    />
  );
};