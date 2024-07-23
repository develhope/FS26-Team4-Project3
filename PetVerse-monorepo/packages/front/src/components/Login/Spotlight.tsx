interface SpotlightProps extends React.SVGProps<SVGSVGElement> {}

const Spotlight: React.FC<SpotlightProps> = (props) => (
  <svg
    id="Livello_2"
    data-name="Livello 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 652.99 975.29"
    {...props}
  >
    <defs>
      <style>
        {`.cls-1 {
          fill: #fde16f;
          stroke: #fde16f;
          stroke-miterlimit: 10;
        }`}
      </style>
    </defs>
    <polygon
      className="cls-1"
      points=".7 974.79 652.29 974.79 329.63 1.58 .7 974.79"
    />
  </svg>
);

export default Spotlight;
