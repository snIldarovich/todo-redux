import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
    <div className="wrapper">   
        <div><span>Показать:  </span></div>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>Все</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Текущие</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Выполненные</FilterLink>
    </div>
);


export default Footer;