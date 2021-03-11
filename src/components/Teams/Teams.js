import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Teams.css';
import { useHistory } from 'react-router';

const Teams = (props) => {
    const {idTeam, strTeamBadge, strTeam, strSport} = props.team;

    const history = useHistory();
    const handleTeamDetails = () => {
        history.push(`/Team/${idTeam}`);
    }
    
    return (
        <div className="team-info">
            <img src={strTeamBadge} alt=""/>
            <h2>{strTeam}</h2>
            <p>Sports Type: {strSport}</p>
            <button onClick={() => handleTeamDetails(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Teams;