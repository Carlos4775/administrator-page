import * as S from './styles';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import Footer from './Footer';
import SubMenu from './SubMenu';
import tw from 'twin.macro';
import { ArchiveIcon, XIcon } from '@heroicons/react/outline';
import me from '../../img/ctorres.jpg';

const menus = [
  {
    title: 'Site Content',
    icon: <ArchiveIcon tw="h-6 w-6" />,
    items: [
      {
        title: 'Page 1',
        target: '/page-1',
      },
      {
        title: 'Page 2',
        target: '/page-2',
      },
      {
        title: 'Page 3',
        target: '/page-3',
      },
      {
        title: 'Page 4',
        target: '/page-4',
      },
      {
        title: 'Page 5',
        target: '/page-5',
      },
    ],
  },
  {
    title: 'Media Library',
    icon: <ArchiveIcon tw="h-6 w-6" />,
    target: '/medialibrary',
    items: [],
  },
];

export const LogoWrapper = tw.div`
  flex justify-center items-center
  py-4
  px-4
`;

export const MainMenu = tw.div`
  px-4 py-6
`;

const Sidebar = ({ open, onClose = () => {} }) => {
  const listMenu = menus.map((menu) => {
    return <SubMenu menu={menu} />;
  });
  return (
    <S.Wrapper open={open}>
      <LogoWrapper>
        <Link to="/" tw="inline-flex flex-row items-center">
          <Avatar size="100" round name="Juan" src={me} />
        </Link>
        <XIcon
          tw="h-6 w-6 sm:hidden absolute top-0 right-0 m-5"
          onClick={onClose}
        />
      </LogoWrapper>
      <div tw="flex flex-col">
        <p tw="text-center text-white" style={{ marginBottom: '5px' }}>
          Carlos Torres
        </p>
        <p tw="text-center" style={{ fontStyle: 'italic', fontSize: '15px' }}>
          carlostg@Ipsum.com
        </p>
      </div>
      <MainMenu>{listMenu}</MainMenu>
      <Footer />
    </S.Wrapper>
  );
};

export default Sidebar;
