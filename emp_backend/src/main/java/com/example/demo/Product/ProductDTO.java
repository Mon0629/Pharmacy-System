package com.example.demo.Product;

public class ProductDTO {
	private int id;
    private String name;

	private double price;

	private String description;
    private String category;
    private String dosage;
    private String base64Image;
    private int stock;
    public ProductDTO(int id, String name, double price, String description, String category, String dosage, String base64Image, int stock) {
		this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.dosage = dosage;
        this.base64Image = base64Image;
		this.stock = stock;
    }
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
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

	public int getStock() {
		return stock;
	}

    public void setStock(int stock) {
		this.stock = stock;
	}
}
