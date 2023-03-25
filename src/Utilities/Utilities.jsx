import React from 'react';

const Utilities = () => {
    const cosmetics=[
        {id:1,Name:'Alta',price:100},
        {id:2,Name:'palis',price:200},
        {id:3,Name:'blta',price:300},
        {id:4,Name:'mlta',price:400},
        {id:5,Name:'hlta',price:500},
    ]
    
    return (
        <div>
            
            
            {
        cosmetics.map(cosmetic=>{
            return (<>
            <h1>name:{cosmetic.Name}</h1>
            <p>price:{cosmetic.price}</p></>)
        })
    }
        </div>
    );
};

export default Utilities;