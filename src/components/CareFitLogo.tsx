interface CareFitLogoProps {
  size?: number;
  className?: string;
}

const CareFitLogo = ({ size = 48, className = "" }: CareFitLogoProps) => {
  return (
    <div className={`${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="hsl(var(--earth))"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
        />
        
        {/* Mountain with Flag */}
        <g transform="translate(50, 15)">
          {/* Flag Pole */}
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="30"
            stroke="hsl(var(--warm))"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Flag */}
          <path
            d="M 0,0 L 12,3 L 12,12 L 0,9 Z"
            fill="hsl(var(--warm))"
          />
          
          {/* Mountain Base */}
          <path
            d="M 0,30 L -15,50 L 15,50 Z"
            fill="hsl(var(--warm))"
            opacity="0.9"
          />
          
          {/* Mountain Peak */}
          <path
            d="M 0,30 L -8,40 L 8,40 Z"
            fill="hsl(var(--accent))"
          />
        </g>
        
        {/* CAREFIT Text */}
        <text
          x="50"
          y="70"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fontWeight="bold"
          fill="hsl(var(--warm))"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          CAREFIT
        </text>
        
        {/* runbase Text */}
        <text
          x="50"
          y="82"
          fontFamily="Inter, sans-serif"
          fontSize="6"
          fill="hsl(var(--warm))"
          textAnchor="middle"
          opacity="0.9"
        >
          runbase
        </text>
      </svg>
    </div>
  );
};

export default CareFitLogo;