import { useState } from "react";
import testimage from '../../images/testimage.png';

function CardNews (news) {
    return (
        <div class="newsCard card">
            <img class="card-img" src={testimage} alt="newsimage" />
            <div class="card-img-overlay d-flex align-items-end">
                    <p class="newsText">{news.text}</p>
            </div>
        </div>
    );
}

export default CardNews;