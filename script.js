//your JS code here. If required.
// Select the table element
const table = document.querySelector('table');

// Add initial loading row
const loadingRow = document.createElement('tr');
const loadingCell = document.createElement('td');
loadingCell.setAttribute('colspan', 2);
loadingCell.textContent = 'Loading...';
loadingRow.appendChild(loadingCell);
table.appendChild(loadingRow);

// Create an array of 3 Promises
const promises = Array.from({ length: 3 }, () => {
  return new Promise(resolve => {
    const randomTime = Math.floor(Math.random() * 3) + 1;
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime * 1000);
  });
});

// Wait for all promises to resolve using Promise.all()
Promise.all(promises).then(results => {
  // Remove the loading row
  table.removeChild(loadingRow);

  // Populate the table with the results
  const row1 = document.createElement('tr');
  const row1Cell1 = document.createElement('td');
  const row1Cell2 = document.createElement('td');
  row1Cell1.textContent = 'Promise 1';
  row1Cell2.textContent = `${results[0]}`;
  row1.appendChild(row1Cell1);
  row1.appendChild(row1Cell2);
  table.appendChild(row1);

  const row2 = document.createElement('tr');
  const row2Cell1 = document.createElement('td');
  const row2Cell2 = document.createElement('td');
  row2Cell1.textContent = 'Promise 2';
  row2Cell2.textContent = `${results[1]}`;
  row2.appendChild(row2Cell1);
  row2.appendChild(row2Cell2);
  table.appendChild(row2);

  const row3 = document.createElement('tr');
  const row3Cell1 = document.createElement('td');
  const row3Cell2 = document.createElement('td');
  row3Cell1.textContent = 'Promise 3';
  row3Cell2.textContent = `${results[2]}`;
  row3.appendChild(row3Cell1);
  row3.appendChild(row3Cell2);
  table.appendChild(row3);

  const totalRow = document.createElement('tr');
  const totalCell1 = document.createElement('td');
  const totalCell2 = document.createElement('td');
  const totalTime = results.reduce((acc, curr) => acc + curr, 0).toFixed(3);
  totalCell1.textContent = 'Total';
  totalCell2.textContent = totalTime;
  totalRow.appendChild(totalCell1);
  totalRow.appendChild(totalCell2);
  table.appendChild(totalRow);
});