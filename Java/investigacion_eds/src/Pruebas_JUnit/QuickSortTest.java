package Pruebas_JUnit;

import Algoritmos_de_ordenamiento.QuickSort;
import Lista_enlazada.Linked_List;
import org.junit.jupiter.api.Test;


//import java.util.LinkedList;

class QuickSortTest extends QuickSort {

    public static void main(String[] args){
        Linked_List list = new Linked_List();
        list.addLast(15);
        QuickSort.quickSort(list);
        list.printL();

    }

    @Test
    /**
     *Prueba con un elemento
     */
    void Test1(){
        Linked_List list = new Linked_List();
        list.addLast(15);
        QuickSort.quickSort(list);
        list.printL();
    }
    @Test
    /**
     * Prueba con varios elementos
     */
    void Test2(){
        Linked_List list = new Linked_List();
        list.addLast(1);
        list.addLast(12);
        list.addLast(15);
        list.addLast(78);
        list.addLast(45);
        list.addLast(32);
        list.addLast(9);
        list.addLast(24);
        list.addLast(38);
        list.addLast(51);
        QuickSort.quickSort(list);
        list.printL();
    }
    @Test
    /**
     * Prueba con Strings
     */
    void Test3(){
        Linked_List list = new Linked_List();
        list.addLast("hola");
        list.addLast("adios");
        list.addLast("sabana");
        list.addLast("celular");
        list.addLast("televisor");
        list.addLast("mesa");
        list.addLast("raton");
        list.addLast("gato");
        list.addLast("perro");
        QuickSort.quickSort(list);
        list.printL();
    }

    @Test
    /**
     * Prueba con el mismo elemento
     */
    void Test4(){
        Linked_List list = new Linked_List();
        list.addLast(10);
        list.addLast(10);
        list.addLast(10);
        QuickSort.quickSort(list);
        list.printL();
    }

    @Test
    /**
     * Prueba con elementos ordenados
     */
    void Test5(){
        Linked_List list = new Linked_List();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.addLast(6);
        QuickSort.quickSort(list);
        list.printL();
    }
}