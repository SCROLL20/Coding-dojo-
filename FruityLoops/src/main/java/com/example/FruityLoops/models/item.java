package com.example.FruityLoops.models;

public class item {
    // MEMBER VARIABLES
    private String name;
    private double price;
    // CONSTRUCTOR
    public item(String name, double price) {
        this.name = name;
        this.price = price;
    }
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
    
    // As always, don't forget to generate Getters and Setters!
}

