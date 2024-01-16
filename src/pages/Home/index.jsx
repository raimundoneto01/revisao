import { Card } from "../../components/Card";
import { useHome } from "./useHome";

export default function Home() {
  const {users} = useHome()
 
  return (
    
      <div className="bg-gray-300 min-h-screen p-5">
         { users.length > 0 && users.map((user) => <Card key={user.id} email={user.email} nome={user.name}/> )}
      </div>
   
  );
}
