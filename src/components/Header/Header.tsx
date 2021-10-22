import React from 'react';
import problem from './../../assets/images/Trollface.png';

export type IHeaderProps = {

}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <header>
            <img src={problem} alt="Problem?" /> {/* http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png */}
            <p>Meme Generator</p>
            <small> Beni ©</small>
        </header>
    );
}

export { Header };