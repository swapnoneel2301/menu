import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

let categories_arr = items.map(item=>item.category);
categories_arr = ['all',...new Set(categories_arr)];


function App() {

  const [allCategory,setAllCategory] = useState(categories_arr);
  const [allItems,setAllItems] = useState(items);

  
  const filterMenu = (category)=>{
    const newItems = items.filter((item)=>{
      if(category==='all') return true;
      return item.category===category;
    });
    setAllItems(newItems);
  }
  return <main>
     <section className='menu section'>
        <div className='title'>
           <h2>Our Menu</h2>
           <div className='underline'></div>
        </div>
        <Categories {...{allCategory,filterMenu}}/>
        <div className='section-center'>
           <Menu {...{allItems}}/>
        </div>
     </section>
  </main>;
}

export default App;
