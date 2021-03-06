// module.exports = function()
// {
//     return 'hello1';
// }
module.exports = 
{
    isSorted_shortcut: function(arr)
    {
        return isSorted(arr);
    },
    bblSort_shortcut: function(arr)
    {
        return bblSort(arr);
    },
    selectionSort_shortcut: function(arr)
    {
        return selectionSort(arr);
    }
}

function isSorted(arr)
{
    for (var i = 0; i < arr.length - 1; i++) 
    {
        if (arr[i] > arr[i+1]) 
        {
            return false;
        }
    }
    return true;
}

function selectionSort(items)
{  
    var length = items.length;
    for (var i = 0; i < length - 1; i++)
    {
        var min = i; 
        for (var j = i + 1; j < length; j++)
        { 
            if (items[j] < items[min])
            { 
                min = j; 
            }
        }
        if (min != i)
        {
            var tmp = items[i];
            items[i] = items[min];
            items[min] = tmp;
        }
    }
    return items
}
// selectionSort([ 9, 5 , 3 , 7 , 1, 4 , 8])


// Bubble sort Implementation using Javascript 
// Creating the bblSort function 
function bblSort(arr){ 
    for(var i = 0; i < arr.length; i++)
    {
      // Last i elements are already in place   
      for(var j = 0; j < ( arr.length - i -1 ); j++)
      {
        // Checking if the item at present iteration  
        // is greater than the next iteration 
        if(arr[j] > arr[j+1])
        {
          // If the condition is true then swap them 
          var temp = arr[j] 
          arr[j] = arr[j + 1] 
          arr[j+1] = temp 
        } 
      } 
    } 
    // Print the sorted array 
    // console.log(arr); 
    return arr;
   } 

// This is our unsorted array 
// var arr = [234, 43, 55, 63,  5, 6, 235, 547]; 
// Now pass this array to the bblSort() function 
// bblSort(arr);