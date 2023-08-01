// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, teamImageUrl, name} = teamCardDetails
  return (
    <li className="team-Card-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="team-url" />
        <h1 className="team-name">{name}</h1>
      </Link>
    </li>
  )
}
export default TeamCard
