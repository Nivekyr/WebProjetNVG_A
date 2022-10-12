import yt from '../images/youtube.png';
import dd from '../images/discorde.png';

function Footer () {
    return (
        <footer className="row footer d-flex align-items-end ">
            <h3 className="col-6 text-light">2022 NIVEGAMES STUDIO. ALL RIGHTS RESERVED.</h3>
            <div className="col-6">
                <img class="iconMedia" src={yt} alt="youtubechannel" />
                <img class="iconMedia" src={dd} alt="discordserver" />
            </div>
        </footer>
    );
}

export default Footer;