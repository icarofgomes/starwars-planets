import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const arrayOptions = ['name', 'population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

function OrderForm() {
  const { submitOrder } = useContext(PlanetsContext);
  const [localOrder, setLocalOrder] = useState({
    column: 'name',
    sort: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    setLocalOrder({
      ...localOrder,
      [name]: value,
    });
  };

  return (
    <div className="p-2 flex flex-col">
      <div className="flex justify-between p-1">
        <div>Categoria</div>
        <label htmlFor="select-options">
          <select
            className="text-black"
            name="column"
            id="select-options"
            onChange={ handleChange }
            data-testid="column-sort"
          >
            { arrayOptions.map((opt, i) => <option key={ i }>{ opt }</option>)}
          </select>
        </label>
      </div>
      <div className="flex justify-around">
        <label
        className="text-lg"
          htmlFor="asc-opt">
          <input
            className="appearance-none mx-2 w-4 h-4 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-yellow-200"
            type="radio"
            id="asc-opt"
            value="ASC"
            name="sort"
            onChange={ handleChange }
            data-testid="column-sort-input-asc"
          />
          Crescente
        </label>
        <label
          className="text-lg"
          htmlFor="desc-opt">
          <input
            className="appearance-none w-4 h-4 mx-2 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-yellow-200"
            type="radio"
            id="desc-opt"
            value="DESC"
            name="sort"
            onChange={ handleChange }
            data-testid="column-sort-input-desc"
          />
          Descrescente
        </label>
      </div>
      <button
        className="p-1 bg-yellow-400 text-black font-medium rounded-sm hover:bg-yellow-100"
        data-testid="column-sort-button"
        type="button"
        onClick={ () => submitOrder(localOrder) }
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrderForm;
