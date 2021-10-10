import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import OrderForm from './OrderForm';

const columnField = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

const comparisonField = ['maior que', 'menor que', 'igual a'];
const FIVE = 5;

function Filter() {
  const { handleChange, handleClick, filter, deleteClick } = (
    useContext(PlanetsContext)
  );
  const [localFilter, setLocalFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });
  const [filters, setFilters] = useState(columnField);

  useEffect(() => {
    const { filterByNumerics } = filter;
    if (!filterByNumerics) {
      return setFilters(columnField);
    }
    if (filterByNumerics.length > 0) {
      const arrayOfFilters = filterByNumerics.map((value) => value.column);
      return setFilters(columnField.filter((v) => !arrayOfFilters.includes(v)));
    }
  }, [filter]);

  const updateFilter = ({ target: { name, value } }) => {
    setLocalFilter({
      ...localFilter,
      [name]: value,
    });
  };

  const handleDelete = (column) => {
    setFilters([...filters, column]);
    deleteClick(column);
  }

  const createFilterArea = () => {
    if (filters.length < FIVE) {
      return (
        <div className="p-1">
          <hr/>
          <div>
            Filtros:
          </div>
          <div className="flex">
            {
              filter.filterByNumerics.map(({ column, comparison, value }, index) => (
                <div
                  className="flex items-center"
                  key={ index }
                  data-testid="filter"
                >
                  {
                    `${column} ${comparison} ${value}`
                  }
                  <button
                    className="mx-2 bg-yellow-400 text-black h-5 w-5 flex items-center
                      justify-center font-bold rounded"
                    type="button"
                    onClick={ () => handleDelete(column) }
                  >
                    X
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      );
    }
    return '';
  };

  return (
    <form>
      <div className="flex justify-center p-2">
        <label htmlFor="input-name">
          <input
            className="rounded-sm text-black"
            id="input-name"
            data-testid="name-filter"
            onChange={ handleChange }
            placeholder="Nome"
          />
        </label>
      </div>
      <hr />
      <div className="p-2 flex flex-col">
        <div className="flex justify-between p-1">
          <div>Categoria</div>
          <div className="w-32">
            <label htmlFor="column-filter">
              <select
                className="text-black w-full bg-gray-200 rounded-sm"
                id="column-filter"
                name="column"
                data-testid="column-filter"
                onChange={ updateFilter }
              >
                {
                  filters.map((field, i) => <option key={ i }>{ field }</option>)
                }
              </select>
            </label>
          </div>
        </div>
        <div className="flex justify-between p-1">
          <div>Comparação</div>
          <div className="w-32">
            <label htmlFor="comparison-filter">
              <select
                className="text-black w-full bg-gray-200 rounded-sm"
                id="comparison-filter"
                name="comparison"
                data-testid="comparison-filter"
                onChange={ updateFilter }
              >
                {
                  comparisonField.map((field, i) => <option key={ i }>{ field }</option>)
                }
              </select>
            </label>
          </div>
        </div>
        <div className="flex justify-between p-1">
          <div>Valor</div>
          <div className="w-32">
            <label
              className="flex justify-end text-black"
              htmlFor="value-filter">
              <input
                className="w-full h-5 bg-gray-200 rounded-sm"
                type="number"
                name="value"
                id="value-filter"
                data-testid="value-filter"
                onChange={ updateFilter }
              />
            </label>
          </div>
        </div>
        <button
          className="p-1 bg-yellow-400 text-black font-medium rounded-sm hover:bg-yellow-100"
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick(localFilter) }
        >
          Adicionar Filtro
        </button>
      </div>
      <hr />
      <OrderForm />
      <div>
        {createFilterArea()}
      </div>
    </form>
  );
}

export default Filter;
