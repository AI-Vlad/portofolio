import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export default function NavLink({ title, path, includes = false }: Props) {
  const router = useRouter();

  function verifyIsActive() {
    return includes ? router.pathname.includes(path) : router.pathname === path;
  }

  const isActive = verifyIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
