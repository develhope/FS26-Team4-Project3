interface CardPreviewProps {
  img: any;
}
export function CardPreview({ img }: CardPreviewProps) {
  if (!img) {
    return null;
  }

  return <img src={img} alt="anteprima-feed-foto" />;
}
