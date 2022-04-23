import React from 'react';

const Categories = ({allCategory,filterMenu}) => {

  return <div className='btn-container'>
     {allCategory.map((category,index)=>{
       return <button type='button' key={index} className='filter-btn' onClick={()=>filterMenu(category)}>{category}</button>
     })}
  </div>;
};

export default Categories;
