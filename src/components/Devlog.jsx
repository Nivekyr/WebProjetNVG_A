import CardDevlog from "./cards/CardDevlog";
import { DataDev } from "./DevData";
import { useState } from "react";
import ToggledCard from "./cards/ToggledCard";

function Devlog () {
    const [show, setShow] = useState(false);
    const handleClick = event => {
        setShow(current => !current)
      }
    const dataDevCard = DataDev.map((data) =>{
        return (
            <CardDevlog
            key={data.key}
            id={data.id}
            name={data.name}
            img={data.img}
            />
        )
    }) 
    const dataDevLog = DataDev.map((data)=> {
        return (
            <ToggledCard
            key={data.key}
            id={data.id}
            name={data.name}
            />
        )
    })
    return (
        <section>
            <div class="row devLogBlock d-flex">
                {dataDevCard}
            </div>
            <div className="">{dataDevLog}</div>
        </section>
        
    );
    }
    
    export default Devlog;