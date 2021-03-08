// Definicion de modulos y variables para la ejecucion de las pruebas unitarias
expect = require('chai').expect;
should = require('chai').should;
const assert = require('chai').assert; 
const isSorted = require('../code').isSorted_shortcut;
const bubble_Sort = require('../code').bubble_Sort_shortcut;
const selectionSort = require('../code').selectionSort_shortcut;

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @summary Verifica que el arreglo que se ingresa este ordenado de manera ascendente
 */
describe('Pruebas al algortimo isSorted', function()
{
    describe('Pruebas con array lleno de numeros', function()
    {
        // Test #1: Array ordenado -> True
        it ('Array ordenado con numeros', function()
        {
            let result = isSorted([1, 2, 3, 4, 5]);
            assert.isTrue(result);
        });
    
        // Test #2: Array desordenado -> False
        it('Array desordenado con numeros', function()
        {
            let result = isSorted([5, 4, 3, 2, 1]);
            assert.isFalse(result);
        });

    });

    describe('Array con valores repetidos', function()
    {
        // Test #3: Array con el mismo numeros -> True
        it('Array con los mismos numeros', function()
        {
            let result = isSorted([5, 5, 5, 5, 5]);
            assert.isTrue(result);
        });

        // Test #4: Array con numeros repetidos desordenado -> False
        it('Array con numeros repetidos desordenados', function()
        {
            let result = isSorted([5, 5, 5, 0, 0, 0]);
            assert.isFalse(result);
        });

        // Test #5: Array con numeros repetidos ordenado -> True
        it('Array con numeros repetidos ordenados', function()
        {
            let result = isSorted([0, 0, 0, 5, 5, 5]);
            assert.isTrue(result);
        });

        // Test #6: Array con la misma letra -> True
        it('Array lleno con la misma letra', function()
        {
            let result = isSorted(['a', 'a', 'a', 'a', 'a', 'a']);
            assert.isTrue(result);
        });
        
        // Test #7: Array con letras repetidos desordenado -> False
        it('Array con letras repetidas desordenadas', function()
        {
            let result = isSorted(['z', 'z', 'z', 'a', 'a', 'a']);
            assert.isFalse(result);
        });

        // Test #8: Array con letras repetidos ordenado -> True
        it('Array con letras repetidas ordenadas', function()
        {
            let result = isSorted(['a', 'a', 'a', 'z', 'z', 'z']);
            assert.isTrue(result);
        });
    });

    describe('Pruebas con array lleno de letras', function()
    {
        // Test #9: Array con letras ordenado -> True
        it ('Array ordenado con letras', function()
        {
            let result = isSorted(['a', 'b', 'c','d', 'e', 'f', 'g']);
            assert.isTrue(result);
        });

        // Test #10: Array con letras desordenado -> False
        it('Array desordenado con letras', function()
        {
            let result = isSorted(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
            assert.isFalse(result);
        });
    });

    describe('Parametro con solo un elemento', function()
    {
        // Test #11: Array con un solo numero -> True
        it('Array con solo un numero', function()
        {
            let result = isSorted([1]);
            assert.isTrue(result);
        });

        // Test #12: Array con solo una letra  -> True
        it('Array con solo una letra', function()
        {
            let result = isSorted(['a']);
            assert.isTrue(result);
        });

        // Test #13: Solo un numero en el parametro -> True
        it('Parametro con solo un numero', function()
        {
            let result = isSorted(1);
            assert.isTrue(result);
        });

        // Test #14: Solo una letra en el parametro -> True
        it('Parametro con solo una letra', function()
        {
            let result = isSorted('a');
            assert.isTrue(result);
        });

        // Test #15: Array vacio -> True
        it('Parametro con un arreglo vacio', function()
        {
            let result = isSorted([]);
            assert.isTrue(result);
        });
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @summary Verifica el algoritmo selectionsort retorne el array ordenado de manera ascendente
 */
 describe('Algoritmo selection sort', function()
 {
     it ('SelectionSort retorna el array ordenado', function()
     {
         let selection = selectionSort([6, 9, 2, 5, 3, 7, 1, 4, 8]);
         expect(selection).deep.to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
     });
 });

 /////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
 /**
 * @summary Verifica el algoritmo bubblesort retorne el array ordenado de manera ascendente
 */
describe('Algoritmos bubblesort', function()
{
    it ('BubbleSort retorna el array ordenado', function()
    {
        let bubbleSort = bubble_Sort([6, 9, 2, 5, 3, 7, 1, 4, 8]);
        expect(bubbleSort).deep.to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @summary Verifica que los algoritmos bubblesort y selectionsort retornen el array igualmente ordenado
 */
describe('Algoritmos de ordenamiento', function()
{
    it ('SelectionSort y BubbleSort retornan el mismo array ordenado', function()
    {
        let array = [ 9, 5 , 3 , 7 , 1, 4 , 8]
        let selection = selectionSort(array);
        let bubbleSort = bubble_Sort(array);
        expect(selection).deep.to.equal(bubbleSort);
    });
});