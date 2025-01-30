-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories Table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Products Table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category_id INT,
    stock INT DEFAULT 0,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Orders Table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total DECIMAL(10,2) NOT NULL,
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Order Items Table
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Payments Table
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    amount DECIMAL(10,2) NOT NULL,
    payment_method ENUM('Credit Card', 'PayPal', 'Bank Transfer') NOT NULL,
    status ENUM('Pending', 'Completed', 'Failed') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

-- Seed Data
INSERT INTO users (name, email, password, address) VALUES
('John Doe', 'john@example.com', 'hashedpassword123', '123 Main St, NY'),
('Jane Smith', 'jane@example.com', 'hashedpassword456', '456 Elm St, CA'),
('Alice Brown', 'alice@example.com', 'hashedpassword789', '789 Pine St, TX'),
('Bob Johnson', 'bob@example.com', 'hashedpassword321', '321 Oak St, FL'),
('Charlie Davis', 'charlie@example.com', 'hashedpassword654', '654 Maple St, IL'),
('David Wilson', 'david@example.com', 'hashedpassword987', '987 Cedar St, WA'),
('Emma Martinez', 'emma@example.com', 'hashedpassword741', '741 Birch St, NV'),
('Frank Clark', 'frank@example.com', 'hashedpassword852', '852 Walnut St, OR'),
('Grace Lewis', 'grace@example.com', 'hashedpassword963', '963 Spruce St, CO'),
('Henry Walker', 'henry@example.com', 'hashedpassword159', '159 Aspen St, AZ');

INSERT INTO categories (name) VALUES ('Electronics'), ('Books'), ('Clothing'), ('Home Appliances'), ('Toys');

INSERT INTO products (name, description, price, category_id, stock, image_url) VALUES
('Smartphone', 'Latest model smartphone with 128GB storage', 699.99, 1, 50, 'images/smartphone.jpg'),
('Laptop', 'Powerful laptop with 16GB RAM and 512GB SSD', 1299.99, 1, 30, 'images/laptop.jpg'),
('Novel', 'Best-selling fiction novel', 19.99, 2, 100, 'images/novel.jpg'),
('T-shirt', '100% cotton T-shirt', 9.99, 3, 200, 'images/tshirt.jpg'),
('Microwave', 'High efficiency microwave oven', 199.99, 4, 40, 'images/microwave.jpg'),
('Gaming Console', 'Next-gen gaming console', 499.99, 1, 20, 'images/console.jpg'),
('Headphones', 'Noise-cancelling over-ear headphones', 199.99, 1, 60, 'images/headphones.jpg'),
('Board Game', 'Fun family board game', 29.99, 5, 80, 'images/boardgame.jpg'),
('Dress', 'Stylish summer dress', 39.99, 3, 150, 'images/dress.jpg'),
('Refrigerator', 'Energy-efficient refrigerator', 899.99, 4, 15, 'images/refrigerator.jpg');

INSERT INTO orders (user_id, total, status) VALUES
(1, 719.98, 'Pending'),
(2, 19.99, 'Shipped'),
(3, 199.99, 'Delivered'),
(4, 39.99, 'Pending'),
(5, 1299.99, 'Shipped'),
(6, 699.99, 'Pending'),
(7, 29.99, 'Cancelled'),
(8, 499.99, 'Pending'),
(9, 19.99, 'Shipped'),
(10, 899.99, 'Delivered');

INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 699.99),
(1, 3, 1, 19.99),
(2, 3, 1, 19.99),
(3, 5, 1, 199.99),
(4, 9, 1, 39.99),
(5, 2, 1, 1299.99),
(6, 1, 1, 699.99),
(7, 8, 1, 29.99),
(8, 6, 1, 499.99),
(9, 3, 1, 19.99);

INSERT INTO payments (order_id, amount, payment_method, status) VALUES
(1, 719.98, 'Credit Card', 'Completed'),
(2, 19.99, 'PayPal', 'Completed'),
(3, 199.99, 'Bank Transfer', 'Completed'),
(4, 39.99, 'Credit Card', 'Pending'),
(5, 1299.99, 'PayPal', 'Completed'),
(6, 699.99, 'Bank Transfer', 'Pending'),
(7, 29.99, 'Credit Card', 'Failed'),
(8, 499.99, 'PayPal', 'Pending'),
(9, 19.99, 'Bank Transfer', 'Completed'),
(10, 899.99, 'Credit Card', 'Completed');