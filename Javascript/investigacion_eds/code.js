// Se exportan las funciones para ser llamadas desde otro directorio
module.exports = 
{
    isSorted_shortcut: function(arr)
    {
        return isSorted(arr);
    },
    bubbleSort_shortcut: function(arr)
    {
        return bubbleSort(arr);
    },
    selectionSort_shortcut: function(arr)
    {
        return selectionSort(arr);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @summary Verififca que un arreglo se encuentre ordenado de forma ascendente
 * @param {Array} arr 
 * @returns true si el array esta ordenado
 */
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @summary Ordena un array de n numeros de forma ascendente utilizando el algoritmo de ordenamiento selectionsort
 * @param {Array} items 
 * @returns Array ordenado de forma ascendente
 */
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

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @summary Ordena un array de n numeros de forma ascendente utilizando el algoritmo de ordenamiento bubblesort
 * @param {Array} arr 
 * @returns Array ordenado de forma ascendente
 */
function bubbleSort(arr){ 
    for(var i = 0; i < arr.length; i++)
    {
      for(var j = 0; j < ( arr.length - i -1 ); j++)
      {
        if(arr[j] > arr[j+1])
        {
          var temp = arr[j] 
          arr[j] = arr[j + 1] 
          arr[j+1] = temp 
        } 
      } 
    } 
    return arr;
   } 