import React from 'react'
import Item from './ExpenditureItem';
import {MdDelete} from 'react-icons/md';
const ExpenditureList = ({expenses, handleDelete, handleEdit, clearItems}) => {
    return (
        <>
            <ul className="list">
                {expenses.map((expense) => {
                    return <Item key={expense.id} expense={expense} 
                    handleDelete={handleDelete} handleEdit={handleEdit} />;
                })}
            </ul>
            {expenses.length > 0 && (
                <button className="btn" onClick={clearItems} >
                    clear expenditure
                    <MdDelete className="btn-icon" />
                </button>)}
        </>
    )
}

export default ExpenditureList;
