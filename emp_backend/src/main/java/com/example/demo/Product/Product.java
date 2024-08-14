package com.example.demo.Product;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

@Entity
@Table(name ="Products")
public class Product {

    public Product() {}
    public Product(String name, double price, String description, String category, String dosage) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.dosage = dosage;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name ="name")
    private String name;

    @Column(name = "price")
    private double price;

    @Column(name = "category")
    private String category;


    @Column(name = "description")
    private String description;

    @Column(name = "dosage")
    private String dosage;

    //--------------------------
    public int getId(){
        return id;
    }
    
    public String getName(){
        return name;
    }

    public String getDosage(){
        return dosage;
    }

    public String getCategory(){
        return category;
    }

    public String getDescription(){
        return description;
    }

    public double getPrice(){
        return price;
    }

    public void setId(int id){
        this.id = id;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setDosage(String dosage){
        this.dosage = dosage;
    }

    public void setCategory(String category){
        this.category = category;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public void setPrice(double price){
        this.price = price;
    }

    @Column(name = "image", columnDefinition = "LONGBLOB")
    private byte[] image;

    public byte[] getImage() {
    return image;
    }   

    public void setImage(byte[] image) {
    this.image = image;
    }
}
