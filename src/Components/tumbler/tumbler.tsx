import { ImageUI } from '../../UI/Image/image';
import style from './tumbler.module.css';

export const Tumbler: React.FC = () => {
    return (
        <div className={style.container}>

            <div className={style.runtime}>
                <div className={style.image_wrapper}>
                    <ImageUI url='/icons/runtime.png' />
                </div>
                <div className={style.text}>Runtime</div>
            </div>
            
            <div className={style.construct}>
                <div className={style.image_wrapper}>
                    <ImageUI url='/icons/constructor.png' />
                </div>
                <div className={style.text}>Construnctor</div>
            </div>

        </div>
    );
}

