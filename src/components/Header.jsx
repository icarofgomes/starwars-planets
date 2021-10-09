import React from 'react';
import { Filter } from '.';

function Header() {
  return(
    <div className="bg-black text-yellow-300 font-medium">
      <h1 className="text-center text-xl p-2">Star Wars Planets Search</h1>
      <Filter />
    </div>
  )
}

export default Header;
