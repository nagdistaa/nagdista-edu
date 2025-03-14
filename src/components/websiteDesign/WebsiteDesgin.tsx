import Card from "./Card";
import { websiteDesignData } from "./webSiteDesignData";
import "./WebsiteDesing.scss"



const WebsiteDesign = ()=>{
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