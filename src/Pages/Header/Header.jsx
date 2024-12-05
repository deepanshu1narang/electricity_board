import { Box } from '@mantine/core';
import logoUrl from '../../assets/icons/logo.png'
import { useStyles } from './style';
import SearchApplicationModal from './SearchApplicationModal/SaerchApplicationModal';
import { Link } from 'react-router-dom';

const Header = ({ }) => {
  const { classes, theme } = useStyles(useStyles);
  return (
    <>
      <Box className={classes.wrapperContainer}>
        <Box className={classes.wrapper}>
          <Link to={'/'}><img className={classes.logo} src={logoUrl} alt='logo' /></Link>

          {/* Search Application By ID modal  */}
          <SearchApplicationModal />
        </Box>
      </Box>
    </>
  );
}


export default Header;