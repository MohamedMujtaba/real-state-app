import Svg, { Path } from "react-native-svg";

const SettIcon = (props) => {
  return (
    <Svg
      data-name="Outline / Interface / Settings-adjust"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="#94a3b8"
      {...props}
    >
      <Path d="M16 10.75a2.761 2.761 0 0 1-2.647-2H4a.75.75 0 0 1 0-1.5h9.35a2.751 2.751 0 0 1 5.3 0H20a.75.75 0 0 1 0 1.5h-1.35a2.761 2.761 0 0 1-2.65 2Zm0-4A1.25 1.25 0 1 0 17.25 8 1.252 1.252 0 0 0 16 6.75Z" />
      <Path
        data-name="Shape"
        d="M8 18.75a2.761 2.761 0 0 1-2.65-2H4a.75.75 0 0 1 0-1.5h1.35a2.751 2.751 0 0 1 5.3 0H20a.75.75 0 0 1 0 1.5h-9.35a2.759 2.759 0 0 1-2.65 2Zm0-4A1.25 1.25 0 1 0 9.25 16 1.252 1.252 0 0 0 8 14.75Z"
      />
    </Svg>
  );
};

export default SettIcon;
