import React from 'react'

const Table = ({ items }) => { // destructuring item
  return (
    <div className='table-container'>
        <table>
            <tbody>
                {items.map(item => (
                    <Row key={item.id} item={item} />
                ))}
            </tbody>
        </table>
        
    </div>
  )
}

export default Table