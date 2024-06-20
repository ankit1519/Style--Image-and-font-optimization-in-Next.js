import getUsers from "../../../../services/getUsers"
export default async function Page(props){
    const gus=getUsers();
    const users=await gus;
    const id=props.params.userid;
    console.log(id);

    const userData=users[id-1];

    return(
        <>
            <h1>User detail page</h1>
            <h2>{userData.name}</h2>
            <h2>{userData.id}</h2>
            <h2>{userData.website}</h2>
          
            
        </>
    )
}



export async function generateStaticParams(){
    const gus=getUsers();
    const users=await gus;

    return users.map(user=>({
        userid:user.id.toString()
    }))
}