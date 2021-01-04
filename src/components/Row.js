import Square from './Square'

function Row(props) {
    return (
        <tr>
            <th>{props.number}</th>
            {props.data.map((squareData, index) => {
                const file = String.fromCharCode(97 + index)

                return (
                    <Square 
                        key={file + props.number} 
                        row={props.number} 
                        column={file} 
                        data={squareData} 
                    />
                )
            })}
            <th>{props.number}</th>
        </tr>
    )
}

export default Row