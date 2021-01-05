import blackMan from '../assets/black-man.svg'
import whiteMan from '../assets/white-man.svg'

function Piece(props) {
    const player = props.data === 'O' ? 'white' : 'black'

    return (
        <img src={player === 'white' ? whiteMan : blackMan} alt={`A ${player} man.`} className={'piece'} />
    )
}

export default Piece