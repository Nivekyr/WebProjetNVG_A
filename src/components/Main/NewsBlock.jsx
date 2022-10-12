import CardNews from "../cards/CardNews";

function NewsBlock () {
    return (
        <div className="newsBlock bg-dark row mx-auto">
            <div className="leftNews col-6"><CardNews text="bonjour"></CardNews></div>
            <div className="rightNews col-6"><CardNews text="bonjour"></CardNews></div>
            <div className="aboutNews d-flex justify-content-xl-center">
                <h1 className="text-light">New Update Each Two Weeks !</h1>
                
            </div>
        </div>
    );
}

export default NewsBlock;