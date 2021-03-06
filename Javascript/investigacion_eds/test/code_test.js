// Definicion de modulos y variables para la ejecucion de las pruebas unitarias
expect = require('chai').expect;
should = require('chai').should;
const assert = require('chai').assert; 
const isSorted = require('../code').isSorted_shortcut;
const bubbleSort = require('../code').bubbleSort_shortcut;
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
        it ('Array ordenado con numeros', function()
        {
            let result = isSorted([1, 2, 3, 4, 5]);
            assert.isTrue(result);
        });
    
        it('Array desordenado con numeros', function()
        {
            let result = isSorted([5, 4, 3, 2, 1]);
            assert.isFalse(result);
        });

    });

    describe('Array con valores repetidos', function()
    {
        it('Array con los mismos numeros', function()
        {
            let result = isSorted([5, 5, 5, 5, 5]);
            assert.isTrue(result);
        });

        it('Array con numeros repetidos desordenados', function()
        {
            let result = isSorted([5, 5, 5, 0, 0, 0]);
            assert.isFalse(result);
        });

        it('Array con numeros repetidos ordenados', function()
        {
            let result = isSorted([0, 0, 0, 5, 5, 5]);
            assert.isTrue(result);
        });
    });

    describe('Pruebas con array lleno de letras', function()
    {
        // El array esta ordenado -> true
        it ('Array ordenado con letras', function()
        {
            let result = isSorted(['a', 'b', 'c','d', 'e', 'f', 'g']);
            assert.isTrue(result);
        });
    
         // El array esta desordenado -> false
        it('Array desordenado con letras', function()
        {
            let result = isSorted(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
            assert.isFalse(result);
        });
    });

    // El array contiene un solo elemento -> true
    describe('Parametro con solo un elemento', function()
    {
        it('Array con solo un elemento', function()
        {
            let result = isSorted([1]);
            assert.isTrue(result);
        });
        it('Parametro con solo un numero', function()
        {
            let result = isSorted(1);
            assert.isTrue(result);
        });
        it('Parametro con solo una letra', function()
        {
            let result = isSorted('a');
            assert.isTrue(result);
        });
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
        let bubbleSort = bblSort([6, 9, 2, 5, 3, 7, 1, 4, 8]);
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
        let bubbleSort = bblSort(array);
        expect(selection).deep.to.equal(bubbleSort);
    });
});