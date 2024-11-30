import "./style.css";
import { useParams } from "react-router-dom";

export default function Detail ({data}){
    const param = useParams();
const url = param.id.slice(1);
for(let i = 0; i < data.length; i++){
    if( data[i].id === Number(url)){
        var dataActualise = data[i];
    }
}
    return(
    <div className="detailAdjustment">
        <div className="bloc1"><img src={dataActualise.img2} /></div>
        <div className="bloc2">
            <h1>Détails sur le projet</h1>
            <p>{dataActualise.contexte}</p>
        </div>
    </div>)
}