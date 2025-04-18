import React from 'react';
import grossessePhoto from "../assets/photos/grossesse.webp";
import couplePhoto from "../assets/photos/couple.webp";
import naissancePhoto from "../assets/photos/headerKaro.webp";
import famillePhoto from "../assets/photos/famille.webp";
import mariage2 from "../assets/photos/mariage2.webp";
import pro from "../assets/photos/pro.webp";
import evjf from "../assets/photos/evjf-julie-1-12-_2_.webp";
import bapteme from "../assets/photos/bapteme.webp"
import gateau from "../assets/photos/gateau.webp"

const MomentDeVie = () => {
    return (
        <div>
        <div className='momentDeVie momentDeVie1'>
            <h1 className='title-moment'>MOMENTS DE VIE</h1>
            <div className='content-moment'>
                <div className='moment'>
                    <img src={grossessePhoto} alt='grossesse'/>
                    <h2 className='momentTitle'>Grossesse</h2>
                </div>
                <div className='moment'>
                    <img src={naissancePhoto} alt='naissance' />
                    <h2 className='momentTitle' >Naissance</h2>
                </div>
                <div className='moment'>
                    <img src={famillePhoto} alt='famille'/>
                    <h2  className='momentTitle'>Famille</h2>
                </div>
                <div className='moment'>
                    <img src={couplePhoto} alt='couple'/>
                    <h2 className='momentTitle' >Couple</h2>
                </div>
            </div>
        </div>
        <div className='momentDeVie momentDeVie2'>
            <h1 className='title-moment'>ÉVÈNEMENTS DE VIE</h1>
            <div className='content-moment'>
                <div className='moment'>
                    <img src={gateau} alt='anniversaire'/>
                    <h2  >Anniversaire</h2>
                </div>
                <div className='moment'>
                    <img src={mariage2} alt='mariage' />
                    <h2>Mariage</h2>
                </div>
                <div className='moment'>
                    <img src={bapteme} alt='baptême'/>
                    <h2>Baptême</h2>
                </div>
                
            </div>
        </div>
        <div className='momentDeVie momentDeVie3'>
            <div className='content-moment'>
                <div className='moment'>
                    <img src={grossessePhoto} alt='gender reveal'/>
                    <h2 className='momentTitle2' >Gender Reveal</h2>
                </div>
                <div className='moment'>
                    <img src={evjf} alt='evjf' />
                    <h2 className='momentTitle2'>Evjf</h2>
                </div>
                <div className='moment'>
                    <img src={pro} alt='professionnel'/>
                    <h2 className='momentTitle2' >Professionnel</h2>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MomentDeVie;