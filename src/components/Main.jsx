import Footer from "./Footer";
import FirstBlock from "./Main/FirstBlock";
import NewsBlock from "./Main/NewsBlock";
import SupportBlock from "./Main/SupportBlock";

function Main () {
return (
    <>
    <FirstBlock></FirstBlock>
    <h1 class="text-light bg-dark">Most Recent News</h1>
    <NewsBlock></NewsBlock>
    <h1 class="text-light bg-dark">How To Support The Project ?</h1>
    <SupportBlock></SupportBlock>
    <Footer></Footer>
    </>
);
}

export default Main;