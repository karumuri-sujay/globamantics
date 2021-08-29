import logo from './logo.png';
import './mainpage.css';

const Header=(props)=>(
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt='logoHere'/>
        </div>
        <div className="col-md-7 subtitle">
            {props.subtitle}
        </div>
    </header>
);
export default Header;