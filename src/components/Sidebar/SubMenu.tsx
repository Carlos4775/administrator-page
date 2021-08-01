import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import * as S from './SubMenu.styles';

const SubMenu = ({
  menu: { title, items = [], icon, target },
}: SubMenuProps) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = () => {
    setOpen(!open);
  };

  const isItemActive = (item) => location.pathname === item.target;

  const props = items.length
    ? { onClick: toggle }
    : {
        as: Link,
        to: target,
      };

  const active = items.length
    ? items.some(isItemActive)
    : location.pathname === target;

  return (
    <div>
      <S.Item {...(props as any)} active={active}>
        <S.IconWrapper>{icon}</S.IconWrapper>
        <S.MenuTitle>{title}</S.MenuTitle>
        {items.length ? (
          <S.ArrowWrapper>
            <S.StyledChevronDownIcon open={open} />
          </S.ArrowWrapper>
        ) : (
          <></>
        )}
      </S.Item>
      {open && (
        <S.SidebarSubmenuList>
          {items.map((item, index) => (
            <S.SidebarSubmenu
              to={item.target}
              key={index}
              active={isItemActive(item)}
            >
              {item.title}
            </S.SidebarSubmenu>
          ))}
        </S.SidebarSubmenuList>
      )}
    </div>
  );
};

interface SubMenuProps {
  menu: {
    title: string;
    items?: SubMenuItem[];
    icon: JSX.Element;
    target?: string;
  };
}

interface SubMenuItem {
  title: string;
  target: string;
}

export default SubMenu;
