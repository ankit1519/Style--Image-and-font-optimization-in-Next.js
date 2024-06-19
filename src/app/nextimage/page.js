import Image from "next/image";
import im from "../../../public/vercel.svg"

function page() {
    
  return (
    <div>
        <h1>Image optimization in next.js</h1>
        <Image
            src={im}
            width={500}
            height={500}
        /> <br />

        {/* <img src={im.src} alt="" /> */}

        <Image
            src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/munnar/munnar-eravikulam-national-park-0.jpg/jcr:content/renditions/cq5dam.web.1024.576.jpeg"

            width={900}
            height={500}
        />
    </div>
  )
}

export default page;