import './App.css';
import { fixFirst } from './utils'
import Row from './components/Row'
import BlackMan from './components/pieces/BlackMan'
import WhiteMan from './components/pieces/WhiteMan'
import BlackKing from './components/pieces/BlackKing'
import WhiteKing from './components/pieces/WhiteKing'

function App() {
  const data = [
    [null, BlackMan, null, BlackMan, null, BlackMan, null, BlackMan],
    [BlackMan, null, BlackMan, null, BlackMan, null, BlackMan, null],
    [null, BlackMan, null, BlackMan, null, BlackMan, null, BlackMan],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [WhiteMan, null, WhiteMan, null, WhiteMan, null, WhiteMan, null],
    [null, WhiteMan, null, WhiteMan, null, WhiteMan, null, WhiteMan],
    [WhiteMan, null, WhiteMan, null, WhiteMan, null, WhiteMan, null]
  ]

  const makeRow = fixFirst(makeRowIn, data.length)

  return (
    <table className='no-border'>
      <thead>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </thead>
      <tbody>
        {data.map(makeRow)}
      </tbody>
      <tfoot>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </tfoot>
    </table>
  )
}

function makeRowIn(numberOfRows, rowData, index) {
  const number = numberOfRows - index;

  return <Row key={number.toString()} number={number} data={rowData} />;
}

export default App;
