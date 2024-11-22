// Function to fetch and parse CSV using pure JavaScript
async function fetchDatabase(csvFile) {
  const response = await fetch(csvFile);
  const csvData = await response.text();

  // Parse CSV data
  const rows = csvData.split(/\r?\n/);
  const headers = rows[0].split(';');

  var parsedData = [];

  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(';');
    const entry = {};

    for (let j = 0; j < headers.length; j++) {
      entry[headers[j]] = values[j];
    }

    parsedData.push(entry);
  }

  return parsedData;
}

// Example of how to use the function
// (async() => {
//   const database = await fetchDatabase('./collection/portfolio.csv');
//   console.log('Successfully fetched:', database);

//   // Rest of database-related code

// })();