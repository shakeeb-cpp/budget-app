import React, { useState, useContext } from 'react'
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost('');
    };

    return (
        <form className="row g-3 mb-5" onSubmit={onSubmit}>

            <div className="col-sm">
                <label htmlFor="name" className="form-label">Name</label>
                <input required='required' value={name} onChange={(event) => setName(event.target.value)} id='name' type="text" className="form-control" placeholder="Enter Name" aria-label="name" />
            </div>
            <div className="col-sm">
                <label htmlFor="cost" className="form-label">Cost</label>
                <input required='required' value={cost} onChange={(event) => setCost(event.target.value)} id='cost' type="text" className="form-control" placeholder="Enter Cost" aria-label="cost" />
            </div>
            <div className="col-sm pt-2">
                <button type="submit" className="btn btn-primary px-4 mt-sm-4 mt-0">Save</button>
            </div>
        </form>
    )
}

export default AddExpenseForm
