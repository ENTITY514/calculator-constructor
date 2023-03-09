import { ImageUI } from '../../../../UI/Image/image';
import style from './empty_drop_box.module.css';

export const EmptyDropBox: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.image_wrapper}>
                <ImageUI url={"/icons/dnd.png"} />
            </div>
            <div className={style.text}>
                <div className={style.title}>Перетащите сюда</div>
                <div className={style.title2}>любой элемент из левой панели</div>
            </div>
        </div>
    );
}
