import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';
import Banner from '../../Photo/header.png';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(response => response.json())
            .then(data => {
                    const teamData = data.teams;
                    setTeams(teamData.slice(0, 15))
                }
            )
    }, [])

    return (
        <div className="home-area">
            <div className="banner-area">
                <img src={Banner} alt=""/>
            </div>

            <div className="teams-container">
                {
                    teams.map(team => <Teams team={team}></Teams>)
                }
            </div>
        </div>
    );
};

export default Home;