import { useState } from "react";

function ToggledCard (devlog) {
const [show, setShow] = useState(null);
    return (
        <div className={`onToggle${devlog.id}` === show ? "logShowing" : "logHidden"} id={`onToggle${devlog.id}`} onClick={() => setShow(`onToggle${devlog.id}`)}>{devlog.id}</div>
    )
}

export default ToggledCard;