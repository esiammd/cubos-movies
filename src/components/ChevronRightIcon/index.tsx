import useTheme from '../../hooks/useTheme';
import themes from '../../styles/themes';

const ChevronRightIcon: React.FC = () => {
  const { theme } = useTheme();
  const color = themes[theme].colors.text1;

  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.5 6L15.5 12L9.5 18" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default ChevronRightIcon;
