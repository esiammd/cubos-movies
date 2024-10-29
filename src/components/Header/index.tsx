import useTheme from '../../hooks/useTheme';

import sunFillIcon from '../../assets/icons/sun-fill.svg';
import moonFillIcon from '../../assets/icons/moon-fill.svg';

import CubosLogo from '../CubosLogo';

import { HeaderContent, ProjectName, ToggleTheme } from './styles';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const title =
    theme === 'dark' ? 'Alterar para tema light' : 'Alterar para tema dark';
  const icon = theme === 'dark' ? sunFillIcon : moonFillIcon;

  return (
    <HeaderContent>
      <ProjectName>
        <CubosLogo />
        <strong>Movies</strong>
      </ProjectName>

      <ToggleTheme title={title} onClick={toggleTheme}>
        <img src={icon} />
      </ToggleTheme>
    </HeaderContent>
  );
};

export default Header;
