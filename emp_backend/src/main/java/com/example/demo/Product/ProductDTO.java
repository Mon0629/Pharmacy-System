package com.example.demo.Product;

public class ProductDTO {
    private String name;
    private double price;
    private String description;
    private String category;
    private String dosage;
    private String base64Image;

    public ProductDTO() {}

    public ProductDTO(String name, double price, String description, String category, String dosage, String base64Image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.dosage = dosage;
        this.base64Image = base64Image;
    }

    // Getters and setters
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getBase64Image() {
        return base64Image;
    }

    public void setBase64Image(String base64Image) {
        this.base64Image = base64Image;
    }
}
