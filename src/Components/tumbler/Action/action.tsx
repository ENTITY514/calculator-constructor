
import { ImageUI } from '../../../UI/Image/image';
import style from './action.module.css';

interface IActionProps {
    title: string
    icon_url: string
    is_active: boolean
    action: () => void
}

export const Action: React.FC<IActionProps> = ({ title, icon_url, is_active, action }) => {
    return (
        <div className={is_active ? style.container_active : style.container} onClick={action}>
            <div className={style.image_wrapper}>
                <ImageUI url={icon_url} />
            </div>
            <div className={style.text}>{title}</div>
        </div>
    );
}

