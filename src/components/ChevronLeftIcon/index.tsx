import useTheme from '../../hooks/useTheme';
import themes from '../../styles/themes';

const ChevronLeftIcon: React.FC = () => {
  const { theme } = useTheme();
  const color = themes[theme].colors.text1;

  return (
    <svg
      width="25"
      height="19"
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 3.5L9.5 9.5L15.5 15.5"
        stroke={color}
        strokeOpacity="0.43"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
