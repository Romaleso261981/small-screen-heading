interface ContainerProps {
  label: string;
  heading: string;
}

const Container = ({ label, heading }: ContainerProps) => {
  const getResponsiveFontSize = (text: string) => {
    const baseSize = 42;
    const minSize = 8;
    const containerWidth = 290;

    const words = text.split(/\s+/);
    const longestWord = words.reduce(
      (a, b) => (a.length > b.length ? a : b),
      ""
    );

    const charWidth = baseSize * 0.6;
    const longestWordWidth = longestWord.length * charWidth;

    if (longestWordWidth <= containerWidth) {
      return baseSize;
    }

    const calculatedSize = containerWidth / longestWord.length / 0.6;
    const finalSize = Math.max(minSize, Math.min(baseSize, calculatedSize));

    return `clamp(${minSize}px, ${finalSize}px, ${baseSize}px)`;
  };

  return (
    <div className="container">
      <div className="label">{label}</div>
      <h1 style={{ fontSize: getResponsiveFontSize(heading) }}>{heading}</h1>
    </div>
  );
};

export default Container;
