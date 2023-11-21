//  reverse the array
function reverseArray(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        // Swap elements at the i-th and (arr.length - 1 - i)-th positions
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  
  fetchDatabase("/collection/photos.csv");
  
  //  timeout for database to finish loading
  setTimeout(() => {
    //  define counter for getting columns
    let columnCounter = 1; 
  
    //  get the database from fetchDatabase.js
    const photoData = reverseArray(database);
    console.log(photoData)
  
    for (let i = 0; i < photoData.length; i++) {
  
      document.getElementById("column" + columnCounter).innerHTML += `
      <div class="image">
        <div class="coreImage">
          <img src="/collection/photos/${photoData[i].filename}">
        </div>
        <a class="imageTitle" href="/collection/photos/originals/${photoData[i].filename}">${photoData[i].name}</a>
        <p class="imageDate">${photoData[i].date}</p>
      </div>`
  
      columnCounter++
      if (columnCounter == 4) columnCounter = 1
    }
  }, 50);