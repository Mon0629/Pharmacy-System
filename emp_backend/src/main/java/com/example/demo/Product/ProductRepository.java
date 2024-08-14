package com.example.demo.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    // JpaRepository provides CRUD methods including findAll()
}
