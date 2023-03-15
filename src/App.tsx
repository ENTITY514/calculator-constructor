import style from './app.module.css';
import { DropBox } from './Components/drop_box/drop_box';
import { ItemsWrapper } from './Components/items_wrapper/items_wrapper';
import { Tumbler } from './Components/tumbler/tumbler';

function App() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.tumbler}>
          <Tumbler />
        </div>
        <div className={style.calculator}>
          <ItemsWrapper />
          <DropBox />
        </div>
      </div>
    </div>
  );
}

export default App;
