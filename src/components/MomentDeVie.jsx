import React from 'react';
import grossessePhoto from "../assets/photos/grossesse.webp";
import couplePhoto from "../assets/photos/couple.webp";
import naissancePhoto from "../assets/photos/headerKaro.webp";
import famillePhoto from "../assets/photos/famille.webp"

const MomentDeVie = () => {
    return (
        <div>
        <div className='momentDeVie'>
            <h1 className='title-moment'>MOMENTS DE VIE</h1>
            <div className='content-moment'>
                <div className='moment'>
                    <img src={grossessePhoto} alt='grossesse'/>
                    <h2>Grossesse</h2>
                </div>
                <div className='moment'>
                    <img src={naissancePhoto} alt='naissance' />
                    <h2>Naissance</h2>
                </div>
                <div className='moment'>
                    <img src={famillePhoto} alt='famille'/>
                    <h2>Famille</h2>
                </div>
                <div className='moment'>
                    <img src={couplePhoto} alt='couple'/>
                    <h2>Couple</h2>
                </div>
            </div>
        </div>
        <div className='momentDeVie'>
            <h1 className='title-moment'>ÉVÈNEMENTS DE VIE</h1>
            <div className='content-moment'>
                <div className='moment'>
                    <img src={grossessePhoto} alt='grossesse'/>
                    <h2>Anniversaire</h2>
                </div>
                <div className='moment'>
                    <img src={naissancePhoto} alt='naissance' />
                    <h2>Mariage</h2>
                </div>
                <div className='moment'>
                    <img src={famillePhoto} alt='famille'/>
                    <h2>Baptême</h2>
                </div>
                
            </div>
        </div>
        <div className='momentDeVie'>
            <h1 className='title-moment'>ÉVÈNEMENTS DE VIE</h1>
            <div className='content-moment'>
                <div className='moment'>
                    <img src={grossessePhoto} alt='grossesse'/>
                    <h2>Gender Reveal</h2>
                </div>
                <div className='moment'>
                    <img src={naissancePhoto} alt='naissance' />
                    <h2>Evjf</h2>
                </div>
                <div className='moment'>
                    <img src={famillePhoto} alt='famille'/>
                    <h2>Professionnel</h2>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MomentDeVie;