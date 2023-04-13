import React from 'react';
import Search from '../commonUI/Search';
import FilterMenu from './Filtering/FilterMenu';
import ImgClose from '../images/ImgClose';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import {
  resetAllFilters,
  selectorCallsFilters,
  setFilterErrors,
  setFilterInOutCalls,
  setFilterPerson,
  setFilterSource,
  setFilterTypeCall
} from '../../store/reducers/callsFiltersSlice';
import { filtersValues, menuItemTypes } from '../../services/constants';
import { selectorCallsDataSlice } from '../../store/reducers/callsDataSlice';

const Filtering = () => {
  const dispatch = useAppDispatch();
  const { menuEmployees, isLoading } = useSelector(selectorCallsDataSlice);
  const { filters } = useSelector(selectorCallsFilters); ///
  const { in_out, from_type, from_persons, sources, errors } = filters;

  const getFilteredByInOut = (params: string) => {
    dispatch(setFilterInOutCalls(params));
  };
  const getFilteredByTypeCall = (params: string) => {
    dispatch(setFilterTypeCall(params));
  };
  const getFilteredByPerson = (params: string) => {
    dispatch(setFilterPerson(params));
  };
  const getFilteredBySource = (params: string) => {
    dispatch(setFilterSource(params));
  };
  const getFilteredByResults = (params: string) => {
    dispatch(setFilterErrors(params));
  };

  return (
    <div className="filtering">
      <div className="search-calls">
        <Search type="calls" text="Поиск по звонкам" />
      </div>
      <div className="filters">
        {in_out || from_type || from_persons || sources || errors ? (
          <div onClick={() => dispatch(resetAllFilters())} className="filter">
            <div className="filter-item">
              <div className="filter-item__text">Сбросить фильтры</div>
            </div>
            <div className="filter-item__close">
              <ImgClose />
            </div>
          </div>
        ) : null}

        <FilterMenu
          getFiltered={getFilteredByInOut}
          filter={in_out}
          menuItems={filtersValues.inOutCalls}
        />
        <FilterMenu
          getFiltered={getFilteredByPerson}
          filter={from_persons}
          menuItems={menuEmployees.length ? menuEmployees : filtersValues.personCalls}
        />
        <FilterMenu
          getFiltered={getFilteredByTypeCall}
          filter={from_type}
          menuItems={filtersValues.typesCalls}
        />
        <FilterMenu
          getFiltered={getFilteredBySource}
          filter={sources}
          menuItems={filtersValues.sources}
        />
        <FilterMenu
          getFiltered={getFilteredByResults}
          filter={errors}
          menuItems={filtersValues.results}
        />
        <FilterMenu
          getFiltered={getFilteredByResults}
          filter={errors}
          menuItems={filtersValues.errors}
        />
      </div>
    </div>
  );
};

export default Filtering;
