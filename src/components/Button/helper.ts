interface WidthProps {
  width?: number;
  isLarge?: boolean;
}

export function getWidth({ width, isLarge }: WidthProps) {
  const defaultWidth = 100;

  if (isLarge) {
    if (width) return width * 2.02;
    return defaultWidth * 2.02;
  }
  return width ?? defaultWidth;
}
