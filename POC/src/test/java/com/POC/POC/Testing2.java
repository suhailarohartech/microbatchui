package com.POC.POC;

public class Testing2 {


    public static void main(String[] args){
        int[] xyz = {2,3,4,5,6};
        String x = "Hello Java";
        char[] y = x.toCharArray();

        for (int i = xyz.length-1; i>= 0;i--){
            System.out.println(xyz[i]);
        }
        String ulti = "";
        for (int i = y.length-1; i>=0;i--){
            System.out.println(y[i]);
            ulti = ulti + y[i];
    }
        System.out.println(ulti);
    }
}
