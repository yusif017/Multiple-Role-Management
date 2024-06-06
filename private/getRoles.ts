import { NextPageWithLayout } from 'next';
import { Pages } from './Pages';

type RoleMap = {
  [key: string]: string[]; 
};

const roles: RoleMap = {
  
  [Pages.AdminPage]: ['admin'],
  [Pages.HomePage]: ['admin'],
  [Pages.LoginPage]: ['admin', 'auth'],
};

export const getRoles = (Component: NextPageWithLayout): string[] => {
  const componentName = Component.displayName || Component.name || '';
  return roles[componentName] || [];
};

export const getAllRoles = (): RoleMap => {
  return roles;
};