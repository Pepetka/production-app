import { memo } from 'react';
import { isDesktop } from 'react-device-detect';
import { SideBarDesktop } from '../SideBarDesctop/SideBarDesktop';
import { SideBarMobile } from '../SideBarMobile/SideBarMobile';

export const SideBar = memo(() => (isDesktop ? <SideBarDesktop /> : <SideBarMobile />));
