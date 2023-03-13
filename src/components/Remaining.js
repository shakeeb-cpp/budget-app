
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {

    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`} role="alert">
            <span>Remaining: {budget - totalExpenses} pkr</span>
        </div>
    )
}

export default Remaining
