import { Digits } from './Components/Digits/digits';
import { Display } from './Components/Display/display';
import { Equals } from './Components/Equal/equals';
import { Operators } from './Components/Operators/operators';
import style from './items.module.css';

export const Items: React.FC = () => {
  return (
    <div className={style.container}>
      <Display />
      <Operators />
      <Digits />
      <Equals />
    </div>
  );
}

