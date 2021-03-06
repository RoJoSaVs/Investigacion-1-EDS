// var expect = chai.expect;
expect = require('chai').expect;
should = require('chai').should;
_ = require('lodash');
const assert = require('chai').assert; 
const bblSort = require('../code').bblSort_shortcut;
const isSorted = require('../code').isSorted_shortcut;
const selectionSort = require('../code').selectionSort_shortcut;

describe('Ordenado', function()
{
    it ('El array esta ordenado', function()
    {
        let result = isSorted([1, 2, 3, 4]);
        assert.isTrue(result);
    });
});

describe('Algoritmos de ordenamiento', function()
{
    it ('SelectionSort y BubbleSort el mismo array ordenado', function()
    {
        let selection = selectionSort([ 9, 5 , 3 , 7 , 1, 4 , 8]);
        let bubbleSort = bblSort([ 9, 5 , 3 , 7 , 1, 4 , 8]);
        expect(selection).deep.to.equal(bubbleSort);
    });
});