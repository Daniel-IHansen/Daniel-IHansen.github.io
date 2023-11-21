var database = [];

// Function to fetch and parse CSV using pure JavaScript
function fetchDatabase(csvFile) {
    fetch(csvFile)
      .then(response => response.text())
      .then(csvData => {
        // Parse CSV data
        const rows = csvData.split('\n');
        const headers = rows[0].split(';');
  
        var parsedData = [];
  
        for (let i = 1; i < rows.length; i++) {
          const values = rows[i].split(';');
          const entry = {};
  
          for (let j = 0; j < headers.length; j++) {
            entry[headers[j]] = values[j];
          }
  
          parsedData.push(entry);
        };
  
        database = parsedData;
      })
      .catch(error => console.error('Error fetching CSV:', error));
  }