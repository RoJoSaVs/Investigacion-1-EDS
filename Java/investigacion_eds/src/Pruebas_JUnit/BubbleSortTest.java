package Pruebas_JUnit;

import Algoritmos_de_ordenamiento.BubbleSort;
import Lista_enlazada.Linked_List;
import org.junit.jupiter.api.Test;

class BubbleSortTest extends BubbleSort {


    @Test
    /**
     * Prueba con un Integer
     */
    void Test_Single_Num() {
        Linked_List<Integer> list = new Linked_List<>();
        list.addLast(15);
        BubbleSort.sort(list);
        list.printL();
    }

    @Test
    /**
     * Prueba con solo una letra (CHAR)
     */
    void Test_Single_Char() {
        Linked_List<Character> list = new Linked_List<>();
        list.addLast('a');
        BubbleSort.sort(list);
        list.printL();
    }

    @Test
    /**
     * Prueba con solo un String
     */
    void Test_Single_Str() {
        Linked_List<String> list = new Linked_List<>();
        list.addLast("CE4101");
        BubbleSort.sort(list);
        list.printL();
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @Test
    /**
     * Prueba con varios Integer desordenados
     */
    void Test_Num_No_Sort() {
        Linked_List<Integer> list = new Linked_List<>();
        list.addLast(9);
        list.addLast(8);
        list.addLast(7);
        list.addLast(6);
        list.addLast(5);
        list.addLast(4);
        list.addLast(3);
        list.addLast(2);
        list.addLast(1);
        list.addLast(0);
        BubbleSort.sort(list);
        list.printL();
    }


    @Test
    /**
     * Prueba con varios Integer ordenados
     */
    void Test_Num_Sort() {
        Linked_List<Integer> list = new Linked_List<>();
        list.addLast(0);
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        list.addLast(5);
        list.addLast(6);
        list.addLast(7);
        list.addLast(8);
        list.addLast(9);
        BubbleSort.sort(list);
        list.printL();
    }

    @Test
    /**
     * Prueba con letras (CHAR) desordenados
     */
    void Test_Char_No_Sorted() {
        Linked_List<Character> list = new Linked_List<>();
        list.addLast('j');
        list.addLast('i');
        list.addLast('h');
        list.addLast('g');
        list.addLast('f');
        list.addLast('e');
        list.addLast('d');
        list.addLast('c');
        list.addLast('b');
        list.addLast('a');
        BubbleSort.sort(list);
        list.printL();
    }

    @Test
    /**
     * Prueba con letras (CHAR) ordenados
     */
    void Test_Char_Sorted() {
        Linked_List<Character> list = new Linked_List<>();
        list.addLast('a');
        list.addLast('b');
        list.addLast('c');
        list.addLast('d');
        list.addLast('e');
        list.addLast('f');
        list.addLast('g');
        list.addLast('h');
        list.addLast('i');
        list.addLast('j');
        BubbleSort.sort(list);
        list.printL();
    }

    @Test
    /**
     * Prueba con Strings desordenados
     */
    void Test_String_No_Sorted() {
        Linked_List<String> list = new Linked_List<>();
        list.addLast("jabonoso");
        list.addLast("iris");
        list.addLast("himalaya");
        list.addLast("gondola");
        list.addLast("farandola");
        list.addLast("el");
        list.addLast("docena");
        list.addLast("coca-cola");
        list.addLast("bonaparte");
        list.addLast("asno");
        BubbleSort.sort(list);
        list.printL();
    }

    @Test
    /**
     * Prueba con Strings ordenados
     */
    void Test_String_Sorted() {
        Linked_List<String> list = new Linked_List<>();
        list.addLast("asno");
        list.addLast("bonaparte");
        list.addLast("coca-cola");
        list.addLast("docena");
        list.addLast("el");
        list.addLast("farandola");
        list.addLast("gondola");
        list.addLast("himalaya");
        list.addLast("iris");
        list.addLast("jabonoso");
        BubbleSort.sort(list);
        list.printL();
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    @Test
    /**
     * Prueba con el mismo Integer
     */
    void Test_Same_Int() {
        Linked_List<Integer> list = new Linked_List<>();
        list.addLast(10);
        list.addLast(10);
        list.addLast(10);
        BubbleSort.sort(list);
        list.printL();
    }

    @Test
    /**
     * Prueba con el mismo caracter (CHAR)
     */
    void Test_Same_Char() {
        Linked_List<Character> list = new Linked_List<>();
        list.addLast('a');
        list.addLast('a');
        list.addLast('a');
        BubbleSort.sort(list);
        list.printL();
    }

    @Test
    /**
     * Prueba con el mismo String
     */
    void Test_Same_String() {
        Linked_List<String> list = new Linked_List<>();
        list.addLast("CE4101");
        list.addLast("CE4101");
        list.addLast("CE4101");
        BubbleSort.sort(list);
        list.printL();
    }

}