import { Send } from "lucide-react";

interface Iprops {
name : string;
link : string
description:string ;
}

const Card = ({name , link , description}:Iprops)=>{
return(
    
          <div className="card">
            <div className="title">
            <h3>{name}</h3>
            <a href={link} target="_blank"><Send className="send
             " size={20}/></a>
            </div>
             <div className="discriptoin">
             <p>{description}</p>
             </div>
             
        </div>
   
)
}

export default Card ; 