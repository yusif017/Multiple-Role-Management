import { ReactNode, useEffect, FC, useState } from 'react';
import { useRouter } from 'next/router';

type PrivateRouteProps = {
  children: ReactNode;
  roles: string[];
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children, roles }) => {
// const myrole=["admin"]
//   if (roles.some(role => myrole.includes(role))) {
    
//   }
  // const router = useRouter();
  // const [authorized, setAuthorized] = useState(false);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('authUser');
  //   const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  //   const userRole = parsedUser?.role || 'auth';

  //   if (userRole && roles.includes(userRole)) {
  //     setAuthorized(true); 
  //   } else {
  //     router.push('/auth/login'); 
  //   }
  // }, [router, roles]);

  // if (!authorized) {
  //   return null; 
  // }

  return <>{children}</>;
};

export default PrivateRoute;
