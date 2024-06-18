import custom from './custom.module.css'
import other from "./other.module.css"
import outside from "@/styles/outside.module.css"
export default function Home() {
  return (
    <main >
     <h1 className={custom.main}>CSS in next.js</h1>
     <h2 className={other.main}>some text</h2>
     <p className={outside.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat aliquam iure perferendis. Sapiente cupiditate, quaerat cum ab debitis iste. </p>
    </main>
  );
}
