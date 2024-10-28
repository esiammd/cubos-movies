import useTheme from '../../hooks/useTheme';

import sunFillIcon from '../../assets/icons/sun-fill.svg';
import moonFillIcon from '../../assets/icons/moon-fill.svg';

import CubosLogo from '../CubosLogo';

import { HeaderContainer, ProjectName, ButtonSwitchTheme } from './styles';

const Header: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  const title =
    theme === 'dark' ? 'Alterar para tema light' : 'Alterar para tema dark';
  const icon = theme === 'dark' ? sunFillIcon : moonFillIcon;

  return (
    <HeaderContainer>
      <ProjectName>
        <CubosLogo />
        <strong>Movies</strong>
      </ProjectName>

      <ButtonSwitchTheme title={title} onClick={changeTheme}>
        <img src={icon} />
      </ButtonSwitchTheme>
    </HeaderContainer>
  );
};

export default Header;
