interface CareFitLogoProps {
  size?: number;
  className?: string;
}

const CareFitLogo = ({ size = 58, className = "" }: CareFitLogoProps) => {
  return (
    <img 
      src="/lovable-uploads/54ccc4a6-81b1-46e8-86da-db7cfd7c0c85.png"
      alt="CareFit Run Base"
      className={className}
      style={{ width: size, height: size }}
    />
  );
};

export default CareFitLogo;