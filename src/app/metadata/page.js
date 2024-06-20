

export default function page() {
  return (
    <>
        <h1>Using generateMetaData</h1>
    </>
  )
}



export function generateMetadata({params}){
    return {
        title:"user page",
        description:"user page description"
    }
}