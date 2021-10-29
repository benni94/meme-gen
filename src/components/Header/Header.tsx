import React from 'react';
import problem from './../../assets/images/Trollface.png';

export type IHeaderProps = {

}

const Header: React.FC<IHeaderProps> = () => {
    return (
        <header>
            <img src={problem} alt="Problem?" /> 
            <p>Meme Generator</p>
            <small> Beni ©</small>
        </header>
    );
}

export { Header };