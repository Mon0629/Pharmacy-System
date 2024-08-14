package com.example.demo.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<ProductDTO> getAllProducts() {
        return productService.getAllProducts().stream().map(product -> {
            String base64Image = product.getImage() != null ? Base64.getEncoder().encodeToString(product.getImage()) : null;
            return new ProductDTO(product.getName(), product.getPrice(), product.getDescription(), product.getCategory(), product.getDosage(), base64Image);
        }).toList();
    }

    @GetMapping("/{id}")
    public Optional<ProductDTO> getProductById(@PathVariable int id) {
        Optional<Product> productOpt = productService.getProductById(id);
        if (productOpt.isPresent()) {
            Product product = productOpt.get();
            String base64Image = product.getImage() != null ? Base64.getEncoder().encodeToString(product.getImage()) : null;
            ProductDTO productDTO = new ProductDTO(product.getName(), product.getPrice(), product.getDescription(), product.getCategory(), product.getDosage(), base64Image);
            return Optional.of(productDTO);
        }
        return Optional.empty();
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
        product.setId(id);
        return productService.saveProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }
}
