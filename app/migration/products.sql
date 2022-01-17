CREATE TABLE products ( 
id INT NOT NULL AUTO_INCREMENT, 
id_category INT NOT NULL 
, id_brand INT NOT NULL 
, stock_quantity INT NOT NULL 
, name VARCHAR(100) NOT NULL 
,description VARCHAR(1300) NULL 
,information VARCHAR(2000) NULL 
,price DECIMAL(7) NULL 
,discount DECIMAL(4) NULL 
,end_discount DATETIME NULL 
, status INT NULL 
, PRIMARY KEY (id));ALTER TABLE products
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE products 
ADD COLUMN id_category INT NOT NULL 
, ADD COLUMN id_brand INT NOT NULL 
, ADD COLUMN stock_quantity INT NOT NULL 
, ADD COLUMN name VARCHAR(100) NOT NULL 
,ADD COLUMN description VARCHAR(1300) NULL 
,ADD COLUMN information VARCHAR(2000) NULL 
,ADD COLUMN price DECIMAL(5,2).replace('.', ',')}) NULL 
,ADD COLUMN discount DECIMAL(5,2).replace('.', ',')}) NULL 
,ADD COLUMN end_discount DATETIME NULL 
, ADD COLUMN status INT NULL 
,