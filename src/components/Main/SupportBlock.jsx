import CardSupport from '../cards/CardSupport';
import tipeeimg from '../../images/tipeeimg.png';
import ksimg from '../../images/kickstarterimg.png';


function SupportBlock () {
    return (
        <div className="supportBlock bg-dark row mx-auto">
            <div className="leftSupport col-6"><CardSupport img={ksimg}></CardSupport></div>
            <div className="rightSupport col-6"><CardSupport img={tipeeimg}></CardSupport></div>
        </div>
    );
}
export default SupportBlock;