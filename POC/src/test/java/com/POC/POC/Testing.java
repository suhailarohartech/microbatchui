package com.POC.POC;

import com.POC.POC.dto.User;

import java.util.ArrayList;
import java.util.List;

public class Testing {

    public static  void main(String[] args){
//        int[] sts = new int[6];
//        sts[0] = 2;
//        sts[1] = 6;
//        sts[2] = 9;
//        sts[3] = 10;

        int[] ls = {2,6,9,10};
        User use1 = new User(1L,"ankit","data");
        User use2 = new User(2L,"sts1","data1");

        List<User> lst = new ArrayList<>();
        List<User> ankitNameList = new ArrayList<>();
        lst.add(use1);
        lst.add(use2);
//        lst.add(6);

        for(int i = ls.length-1; i>=0;i--){
            if(ls[i] == 50){
                System.out.println("Hello");
            }
            System.out.println(ls[i]);
//            i++;
        }
 for(User u:lst){
     System.out.println(u.getName());
     if(u.getName().equals("ankit")){
         ankitNameList.add(u);
     }
 }

    }
}
