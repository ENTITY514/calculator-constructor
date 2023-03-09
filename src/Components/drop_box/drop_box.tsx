import { EmptyDropBox } from './Components/EmptyDropBox/empty_drop_box';
import style from './drop_box.module.css';

export const DropBox: React.FC = () => {
  return (
    <div className={style.container}>
      <EmptyDropBox />
    </div>
  );
}
