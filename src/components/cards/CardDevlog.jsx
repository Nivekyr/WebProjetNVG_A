import { useState } from "react";
import testimage from '../../images/testimage.png';

function CardDevlog (devlog) {
    const [show, setShow] = useState(null);
    return (
        <div class="logCard card col-4" id={devlog.id}>
            <h1>{devlog.name}</h1>
            <img class="card-img" src={testimage} alt="newsimage" />
            <div class="card-img-overlay d-flex align-items-end">
                    <p class="newsText">{devlog.added}</p>
            </div>
            <button className={`onToggle${devlog.id}` === show ? "logShowing" : "logHidden"} id={`onToggle${devlog.id}`} onClick={() => setShow(`onToggle${devlog.id}`)}>Show</button>
        </div>
    );
}

export default CardDevlog;