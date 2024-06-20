import getUsers from "../../../services/getUsers"
import Link from "next/link";
export default async function Page(){
    const gus=getUsers();
    const users=await gus;
    return(
        <>
            <h1>User list</h1>
            {
                users.map((item)=>(
                    <h2 key={item.id}>
                        <Link href={`/users/${item.id}`}>{item.name}</Link>
                    </h2>
                ))
                
            
            }
            
        </>
    )
}