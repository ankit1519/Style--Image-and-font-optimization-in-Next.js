
import outside from "@/styles/outside.module.css"
import { Roboto } from "next/font/google";
const roboto=Roboto({
        weight:'100',
        subsets:["latin"],
        display:"swap"
    })
function page() {
    
  return (
    <div>
        <h1>font optimization in next.js</h1>


        <p className={outside.pa}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nobis autem eos, natus consequuntur modi officiis fugiat, consectetur facere vel minima dolor blanditiis ab doloremque! Dolore recusandae tempora omnis expedita praesentium perferendis, cum officia repudiandae eaque, numquam assumenda vel doloribus cumque eveniet culpa? Eos ipsam obcaecati assumenda delectus deleniti vero </p>

        <p className={roboto.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia obcaecati harum, cupiditate assumenda quisquam voluptatibus rerum corrupti inventore distinctio eligendi veritatis fugit porro fuga sit ea quasi. Fugit sint facilis vero iure expedita, ipsum voluptas labore dolore dolor commodi veritatis, laudantium aut ea nesciunt. Consequuntur saepe ea illum eveniet exercitationem tenetur iusto itaque aspernatur, nesciunt quasi labore sapiente dolorum? Maiores aut consequatur necessitatibus sunt similique ullam nobis quisquam atque? Numquam sint omnis facilis, perferendis dolore amet dignissimos? Voluptatem debitis distinctio unde quod quae alias quos, quia dolorum. Unde fugit voluptatibus saepe nesciunt esse veritatis sunt amet corrupti est beatae!</p>
    </div>
  )
}

export default page;