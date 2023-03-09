import style from './app.module.css';
import { DropBox } from './Components/drop_box/drop_box';
import { Items } from './Components/Items/items';
import { Tumbler } from './Components/tumbler/tumbler';

function App() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.items_wrapper}>
          <Items />
        </div>
        <div className={style.drop_box_wrapper}>
          <Tumbler />
          <DropBox />
        </div>
      </div>
    </div>
  );
}

export default App;
