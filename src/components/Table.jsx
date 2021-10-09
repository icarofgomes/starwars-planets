import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { Films } from '.'

const headers = ['name', 'films', 'climate', 'created', 'diameter', 'edited', 'gravity',
  'orbital_period', 'population', 'rotation_period', 'surface_water',
  'terrain', 'url'];

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
            <div
              className="w-1/2 mx-auto font-bold text-xl text-yellow-600 p-2"
              key={ index }
              data-testid="planet-name"
            >
              { planet[field] }
            </div>
          );
        case 'films':
          return (
            <div
              className="flex flex-col mx-auto w-1/2 border-1 border-black
                border-solid shadow-md mb-1"
            >
              <div className="font-bold text-yellow-600 text-base">Films</div>
              <div className="" key={ index }>
                {
                  planet[field].map((film, i) => <div key={ i }><Films film={film}/></div>)
                }
              </div>
            </div>
          );
        case 'created':
        case 'edited':
        case 'url':
          return <div className="hidden mx-2 md:block" key={ index }>{ planet[field] }</div>;
        default:
          return (
            <div className="w-1/2 flex mx-auto p-1">
              <div className="font-bold md:hidden">{`${field}:`}</div>
              <div className="" key={ index }>
                { planet[field] }
              </div>
            </div>
          );
      }
    })
  }
  
  return (
    <div className="">
      <table className="table-auto text-xs text-center">
        <thead className="hidden">
          <tr>
            {headers.map((field, index) => <th key={ index }>{ field }</th>)}
          </tr>
        </thead>
        <tbody>
          { planets.map((planet, i) => (
            <div
              className={i % 2 === 0 ? 'bg-gray-200' : 'bg-yellow-100'}
              key={ planet.name }
            >
              <div className="flex flex-col w-screen">
                { createRow(planet) }
              </div>
            </div>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
