import { Pages } from "@/private/Pages";
import { getAllRoles } from "@/private/getRoles";


const Header: React.FC = () => {
    const rol = getAllRoles()
    const roles=["user","admin"]
      const IsRolePage=(pagerole:string)=>{
    return roles.some(role => rol[pagerole].includes(role))
      }
    
     const IsHiden= IsRolePage(Pages.HomePage)
     console.log(IsHiden);
    return (
     <header>
      <ul>
      {IsRolePage(Pages.HomePage)?<li>home</li>:""}

        {IsRolePage(Pages.AdminPage)?<li>admin</li>:""}
      </ul>
     </header>
    );
  };
  
  export default Header;
  