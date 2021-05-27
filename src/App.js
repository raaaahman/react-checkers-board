import './App.css';
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

  return (
    <table className='no-border'>
      <thead>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </thead>
      <tbody>
        {data.map((rowData, index) => {
          const number = data.length - index
          
          return <Row key={number.toString()} number={number} data={rowData} />
        })}
      </tbody>
      <tfoot>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </tfoot>
    </table>
  );
}

export default App;
