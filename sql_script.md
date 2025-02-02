# Create table

```sql
CREATE TABLE products (
    id VARCHAR(255) PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL
);
```

# Add products
```sql
INSERT INTO products (id, product_name, description, price, quantity) VALUES
('P001', 'Laptop', 'High-performance laptop with 16GB RAM and 512GB SSD', 999.99, 10),
('P002', 'Smartphone', 'Latest model smartphone with OLED display', 699.99, 20),
('P003', 'Wireless Headphones', 'Noise-canceling over-ear headphones', 149.99, 15),
('P004', 'Mechanical Keyboard', 'RGB backlit mechanical keyboard', 89.99, 25),
('P005', 'Gaming Mouse', 'Ergonomic gaming mouse with customizable DPI', 49.99, 30);
```

    "username": "admin_aef",
    "email": "admin_aef@borntodev.com",
    "password": "123456"