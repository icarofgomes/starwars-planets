import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
// import { Films } from '.'

const headers = ['name', 'films', 'climate', 'diameter', 'gravity',
  'orbital_period', 'population', 'rotation_period', 'surface_water',
  'terrain'];

const filterPlanets = (data, filter) => {
  const { filterByName: name, filterByNumerics, order } = filter;

  let nameFilter = data.filter((planet) => planet.name.includes(name));

  filterByNumerics.forEach((f) => {
    const { column, comparison, value } = f;
    nameFilter = nameFilter.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return parseInt(planet[column], 10) > value;
      case 'menor que':
        return parseInt(planet[column], 10) < value;
      case 'igual a':
        return planet[column] === value;
      default:
        return '';
      }
    });
  });

  const sortValues = (a, b) => {
    const { column } = order;
    const ONE = 1;
    const item1 = column === 'name' ? a[column] : parseInt(a[column], 10);
    const item2 = column === 'name' ? b[column] : parseInt(b[column], 10);

    if (item1 < item2) {
      return -ONE;
    }
    if (item1 > item2) {
      return ONE;
    }
    return 0;
  };

  nameFilter = nameFilter.sort((a, b) => {
    const { sort } = order;
    return sort === 'ASC' ? sortValues(a, b) : sortValues(b, a);
  });

  return nameFilter;
};

function Table() {
  const { data, filter } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const filteredPlanets = filterPlanets(data, filter);
    setPlanets(filteredPlanets);
  }, [data, filter]);
  
  const createRow = (planet) => {
    return headers.map((field, index) => {
      switch(field) {
        case 'name':
          return (
            <td
              className="w-1/2 mx-auto font-bold text-xl text-yellow-600 p-2
                md:text-xs md:my-auto md:p-1 md:w-1/12"
              key={ index }
              data-testid="planet-name"
            >
              { planet[field] }
            </td>
          );
        case 'films':
          return (
            <td
              className="flex flex-col mx-auto w-1/2 border-1 border-black border-solid shadow-md
                mb-1 md:shadow-none md:w-1/12 md:table-cell"
              key={ index }
            >
              <div className="font-bold text-yellow-600 text-base md:hidden">Films</div>
              <div className="md:flex md:flex-col">
                {
                  planet[field].map((film, i) => <div key={ i }>A New Hope</div>)
                }
              </div>
            </td>
          );
        default:
          return (
            <td
              className="w-1/2 flex mx-auto p-1 md:table-cell md:w-32"
              key={ index }
            >
              <div className="font-bold md:hidden">{`${field}:`}</div>
              <div className="mx-auto">
                { planet[field] }
              </div>
            </td>
          );
      }
    })
  }
  
  return (
      <table className="table-auto text-xs text-center">
        <thead className="hidden md:table-header-group md:bg-yellow-400 md:h-12">
          <tr className="justify-around font-bold text-lg">
            {headers.map((field, index) => <td key={ index }>{ field }</td>)}
          </tr>
        </thead>
        <tbody className="">
          { planets.map((planet, i) => (
            <tr
              className={`${i % 2 === 0 ? 'bg-gray-200' : 'bg-yellow-100'} flex flex-col
                md:table-row`}
              key={ planet.name }
            >
              { createRow(planet) }
            </tr>))}
        </tbody>
      </table>
  );
}

export default Table;
