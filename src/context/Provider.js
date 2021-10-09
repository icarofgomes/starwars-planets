import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: '',
    filterByNumerics: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const handleChange = ({ target }) => {
    setFilter({
      ...filter,
      filterByName: target.value,
    });
  };

  const handleClick = (state) => {
    setFilter({
      ...filter,
      filterByNumerics: [...filter.filterByNumerics, state],
    });
  };

  const deleteClick = (column) => {
    setFilter({
      ...filter,
      filterByNumerics: [
        ...filter.filterByNumerics.filter((f) => f.column !== column),
      ],
    });
  };

  const submitOrder = (state) => {
    setFilter({
      ...filter,
      order: state,
    });
  };

  useEffect(() => {
    const API = 'https://swapi-trybe.herokuapp.com/api/planets/';
    async function fetchData() {
      const request = await fetch(API);
      const json = await request.json();
      const results = json.results;
      setData(results);
    }
    fetchData();
  }, []);

  const context = { data, filter, handleChange, handleClick, deleteClick, submitOrder };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
