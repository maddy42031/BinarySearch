// ACESS DOM TO GET BUTTON
const searchNode = document.getElementById("searchNode");

// BINARY SEARCH FUNCTION 
function binarySearch(arr, x) {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (arr[mid] === x) return `ELEMENT FOUND AT INDEX ${mid}`;
    // Else look in left or right half accordingly
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }

  return 'ELEMENT NOT FOUND ';
}

// INSERTING ELEMENTS
function insertNode() {
  let arr = [];
  let head = prompt("ENTER THE STARTING VALUE");
  let tail = prompt("ENTER THE ENDING VALUE");
  if (head === null || head === "") return;
  if (isNaN(head) || isNaN(tail)) {
    alert("NUMBERS ONLY ACCEPTED");
    return;
  }
  if (head >= tail) {
    alert(`TAIL IS GREATER THAN TAIL [${head}] >= [${tail}]`);
    return;
  }
  for (let i = Number(head); i <= Number(tail); i++) {
    arr.push(i);
  }
  let searchValue = prompt(`ENTER THE SEARCH VALUE ${head} - ${tail}`);
  if (searchValue === null || searchValue === "") {
    return;
  }
  if (isNaN(searchValue)) {
    alert("NUMBERS ONLY ACCEPTED");
    return;
  }
  let returnValue = binarySearch(arr, Number(searchValue));
  alert(returnValue);
}


searchNode.addEventListener("click", insertNode);

