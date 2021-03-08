package Algoritmos_de_ordenamiento;

import Lista_enlazada.Linked_List;
import Lista_enlazada.Node;

public class QuickSort {

    // The main function to sort a linked list. It mainly calls _quickSort()
    public static void quickSort(Linked_List list)
    {
        _quickSort(list.getHead(), list.tail);
    }

    private static Node partition(Node left, Node right)
    {
        Comparable x = right.getValue();
        Node i = left.prev;
        for(Node j=left; j!=right; j=j.getNext())
        {
            if(j.getValue().compareTo(x) <= 0)
            {
                i = (i==null) ? left : i.getNext();
                Comparable temp = i.getValue();
                i.setValue(j.getValue());// = j.data;
                j.setValue(temp);// = temp;
            }
        }
        i = (i==null) ? left : i.getNext();
        Comparable temp = i.getValue();
        i.setValue(right.getValue());
        right.setValue(temp);
        return i;
    }

    /* A recursive implementation of quicksort for linked list */
    private static void _quickSort(Node left,Node right)
    {
        if(right!=null && left!=right && left!=right.getNext()){
            Node temp = partition(left,right);
            _quickSort(left,temp.prev);
            _quickSort(temp.getNext(),right);
        }
    }


}
