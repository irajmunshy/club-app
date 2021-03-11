import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapPin, faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Male from '../../Photo/male.png';
import FeMale from '../../Photo/female.png';
import './TeamDetails.css';

const TeamDetails = () => {
    const {idTeam} = useParams();
    const [team, setTeam] = useState({});
    const {strTeam, intFormedYear, strStadiumThumb, strDescriptionEN, strTeamBanner, strGender, strSport, strCountry, strTeamBadge, strStadiumDescription, strYoutube, strTwitter, strFacebook} = team;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam])
    
    return (
        <div className="Team-details-area">
            <div className="details-banner-area">
                {/* <img className="banner" src={strStadiumThumb} alt=""/> */}
                <img className="banner" src={strTeamBanner} alt=""/>
                <img className="logo" src={strTeamBadge} alt=""/>
            </div>

            <div className="teamDetails-container">
                <div className="team-details">
                    <div>
                        <h2>{strTeam}</h2>
                        <p><FontAwesomeIcon icon={faMapPin} />Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} />Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} />Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} />Gender: {strGender}</p>
                    </div>

                    <div>
                        <img src={strGender === 'Male' ? Male : FeMale} alt=""/>
                    </div>
                </div>

                <div className="description">
                    <p>{strDescriptionEN}</p>

                    <p>{strStadiumDescription}</p>
                </div>

                <div className="social-icon">
                    <a className="twitter-icon" href={`https://www.${strTwitter}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a className="facebook-icon" href={`https://${strFacebook}`} target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="youtube-icon" href={`https://${strYoutube}`} target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;