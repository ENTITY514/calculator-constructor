import style from './app.module.css';
import { CalculatorWrapper } from './Components/calculator_wrapper/calculator_wrapper';
import { ItemsWrapper } from './Components/items_wrapper/items_wrapper';

function App() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <ItemsWrapper />
        <CalculatorWrapper />
      </div>
    </div>
  );
}

export default App;
