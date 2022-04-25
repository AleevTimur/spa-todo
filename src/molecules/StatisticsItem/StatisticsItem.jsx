import React from 'react';
import s from './styles.module.scss';

export const StatisticsItem = ({text, amount}) => {
    return (
        <div className={s.component}>
            <div>
                <p>
                    {text}
                </p>
                <div className={s.circle}>
                    <h4 className={s.done}>{amount}</h4>
                    <p className={s.p}>задач</p>
                </div>
            </div>
        </div>
      )
}
