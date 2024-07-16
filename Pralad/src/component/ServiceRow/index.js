import { ServiceBlock } from "../ServiceBlock"

export const ServiceRow = ()=>{
    const services = [
        {id:1,title:"Pellentesque adipis",content:"Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.",imgsrc:"/images/pic01.jpg"},
        {id:2,title:"Morbi interdum mol",content:"Cumsan mollis eros. Pellentesque a diam sit amet mi magna ullamcorper vehicula. Integer adipiscin sem. Nullam quis massa sit amet lorem ipsum feugiat tempus.",imgsrc:"/images/pic02.jpg"}
    ];
    return (  <section id="two">
        <div className="inner">
            {
                services.map(item=><ServiceBlock key={item.id} title={item.title} content={item.content} imgsrc={item.imgsrc} />)
            }
        
      </div>
    </section> )
}