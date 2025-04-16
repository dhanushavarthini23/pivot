import React, { useState } from 'react';

const aggregateFunctions = ['SUM', 'COUNT', 'AVG', 'MIN', 'MAX', 'MEDIAN'];

const PivotControls = ({ data, setPivotData }) => {
  const headers = data[0];

  const [rowField, setRowField] = useState('');
  const [columnField, setColumnField] = useState('');
  const [valueField, setValueField] = useState('');
  const [aggregateFunction, setAggregateFunction] = useState('SUM');

  const generatePivot = () => {
    const rowIndex = rowField ? headers.indexOf(rowField) : -1;
    const columnIndex = columnField ? headers.indexOf(columnField) : -1;
    const valueIndex = valueField ? headers.indexOf(valueField) : -1;

    const pivot = {};
    const allColumns = new Set();
    const grandTotals = {};

    data.slice(1).forEach(row => {
      const rowVal = rowIndex !== -1 ? row[rowIndex] : 'All';
      const colVal = columnIndex !== -1 ? row[columnIndex] : 'All';
      const raw = valueIndex !== -1 ? row[valueIndex] : '1';
      const val = parseFloat(raw);

      if (!pivot[rowVal]) pivot[rowVal] = {};
      if (!pivot[rowVal][colVal]) pivot[rowVal][colVal] = [];
      if (!isNaN(val)) pivot[rowVal][colVal].push(val);

      if (!grandTotals[colVal]) grandTotals[colVal] = [];
      grandTotals[colVal].push(val);

      allColumns.add(colVal);
    });

    setPivotData({
      rowField,
      columnValues: Array.from(allColumns).sort(),
      pivot,
      aggregateFunction,
      grandTotals,
    });
  };

  return (
    <div>
      <h3>Pivot Table Controls</h3>
      <label>Row:</label>
      <select value={rowField} onChange={e => setRowField(e.target.value)}>
        <option value="">None</option>
        {headers.map(header => (
          <option key={header} value={header}>{header}</option>
        ))}
      </select>

      <label>Column:</label>
      <select value={columnField} onChange={e => setColumnField(e.target.value)}>
        <option value="">None</option>
        {headers.map(header => (
          <option key={header} value={header}>{header}</option>
        ))}
      </select>

      <label>Value:</label>
      <select value={valueField} onChange={e => setValueField(e.target.value)}>
        <option value="">None</option>
        {headers.map(header => (
          <option key={header} value={header}>{header}</option>
        ))}
      </select>

      <label>Aggregate:</label>
      <select value={aggregateFunction} onChange={e => setAggregateFunction(e.target.value)}>
        {aggregateFunctions.map(func => (
          <option key={func} value={func}>{func}</option>
        ))}
      </select>

      <button onClick={generatePivot}>Generate Pivot Table</button>
    </div>
  );
};

export default PivotControls;
