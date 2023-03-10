import { useAppDispatch, useAppSelector } from '../../Store/hooks/redux';
import { calculatorConstructorSlice } from '../../Store/reducers/CalculatorConstructorSlice';
import { Action } from './Action/action';
import style from './tumbler.module.css';

export const Tumbler: React.FC = () => {
    const is_constructor = useAppSelector(state => state.calculatorConstructorSlice.is_constructor)
    const dispatch = useAppDispatch()
    const actions = calculatorConstructorSlice.actions
    return (
        <div className={style.container}>
            <Action
                title={"Runtime"}
                icon_url={!is_constructor?'/icons/runtime_active.png':'/icons/runtime.png'}
                is_active={!is_constructor}
                action={() => { dispatch(actions.setIsConstructor(false)) }}
            />
            <Action
                title={"Construnctor"}
                icon_url={is_constructor?'/icons/constructor_active.png':'/icons/constructor.png'}
                is_active={is_constructor}
                action={() => { dispatch(actions.setIsConstructor(true)) }}
            />
        </div>
    );
}

