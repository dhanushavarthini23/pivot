import React from 'react';

const calculate = (values, type) => {
  if (!values.length) return '0';

  switch (type) {
    case 'SUM':
      return values.reduce((a, b) => a + b, 0).toFixed(2);
    case 'COUNT':
      return values.length;
    case 'AVG':
      return (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
    case 'MIN':
      return Math.min(...values).toFixed(2);
    case 'MAX':
      return Math.max(...values).toFixed(2);
    case 'MEDIAN':
      const sorted = [...values].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return (sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid]).toFixed(2);
    default:
      return '0';
  }
};

const PivotTable = ({ pivot }) => {
  const { rowField, columnValues, pivot: data, aggregateFunction, grandTotals } = pivot;

  return (
    <div>
      <h3>Pivot Table</h3>
      <table>
        <thead>
          <tr>
            <th>{rowField || 'Row'}</th>
            {columnValues.map((col, i) => <th key={i}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([row, cols]) => (
            <tr key={row}>
              <td>{row}</td>
              {columnValues.map((col, i) => {
                const values = cols[col] || [];
                return <td key={i}>{calculate(values, aggregateFunction)}</td>;
              })}
            </tr>
          ))}
          <tr>
            <th>{aggregateFunction}</th>
            {columnValues.map((col, i) => (
              <th key={i}><strong>{calculate(grandTotals[col] || [], aggregateFunction)}</strong></th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PivotTable;