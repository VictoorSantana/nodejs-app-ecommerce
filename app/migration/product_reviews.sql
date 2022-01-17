CREATE TABLE product_reviews ( 
id INT NOT NULL AUTO_INCREMENT, 
id_product INT NOT NULL 
, id_user INT NOT NULL 
, stars INT NULL 
, comment VARCHAR(450) NOT NULL 
,PRIMARY KEY (id));ALTER TABLE product_reviews
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE product_reviews 
ADD COLUMN id_product INT NOT NULL 
, ADD COLUMN id_user INT NOT NULL 
, ADD COLUMN stars INT NULL 
, ADD COLUMN comment VARCHAR(450) NOT NULL 
