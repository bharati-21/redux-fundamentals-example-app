import React from 'react';
import { TodoCount } from './TodoCount';
import { TodosActions } from './TodosActions';
import { ColorFilters } from './ColorsFilter';
import { StatusFilters } from './StatusFilter';
export const Footer = () => {
  return (
    <footer className="footer">
      <TodoCount />
      <TodosActions />
      <StatusFilters />
      <ColorFilters />
    </footer>
  );
};
