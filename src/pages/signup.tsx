import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

function Signup() {
  const { user, isAuthenticated, isLoading} = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    <div>
        <img src={user!.picture} alt={user!.name} />
        <h2>{user!.name}</h2>
        <p>{user!.email}</p>
        <p>{user!.sub}</p>
        <p>{user!.zoneinfo}</p>
        <p>dada</p>
        
    </div>
  );
}
export default Signup;