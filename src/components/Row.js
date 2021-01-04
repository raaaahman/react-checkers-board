import Square from './Square'

function Row(props) {
    return (
        <tr>
            <th>{props.number}</th>
            {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map(column => {
                return (
                    <Square 
                        key={column + props.number}
                        row={props.number}
                        column={column}
                    />
                )
            })}
            <th>{props.number}</th>
        </tr>
    )
}

export default Row