import Card from "./Card";
import "./WebsiteDesing.scss"
import"./webSiteDesignData"
import { websiteDesignData } from "./webSiteDesignData";
interface Iprops {

}

const WebsiteDesign = ({}:Iprops)=>{
return(
    <div className="website-design">
       
        {websiteDesignData.map((e)=>{
            return(
                <Card name={e.name} link={e.link} description={e.description}/>
            )
        })}
    </div>
)
}

export default WebsiteDesign ; 