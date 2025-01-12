package com.example.FruityLoops.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ItemController {

    @RequestMapping("/")
    public String index() {
        ArrayList<ItemController> fruits = new ArrayList<>();
        fruits.add(new itemController("Kiwi", 1.5));
        fruits.add(new ItemController("Mango", 2.0));
        fruits.add(new itemController("Goji Berries", 4.0));
        fruits.add(new itemController("Guava", 0.75));

        model.addAttribute("fruits", fruits);
        return "index.jsp";
    }
}

