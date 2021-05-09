/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.svg';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      {/* <Image src={logo} sx={{ display: 'flex' }} alt="Abhinav AKhil" /> */}
      <h1 sx={{ display: 'flex' }} alt="Abhinav AKhil">Abhinav Akhil</h1>
    </Link>
  );
}
