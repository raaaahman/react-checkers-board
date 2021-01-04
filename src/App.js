import './App.css';
import Row from './components/Row'

function App() {
  return (
    <table className='no-border'>
      <thead>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </thead>
      <tbody>
        {[8, 7, 6, 5, 4, 3, 2, 1].map(number => <Row key={number.toString()} number={number} />)}
      </tbody>
      <tfoot>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </tfoot>
    </table>
  );
}

export default App;
