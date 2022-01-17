CREATE TABLE product_gallerys ( 
id INT NOT NULL AUTO_INCREMENT, 
id_file INT NOT NULL 
, id_product INT NOT NULL 
, cover_image INT NULL 
, PRIMARY KEY (id));ALTER TABLE product_gallerys
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE product_gallerys 
ADD COLUMN id_file INT NOT NULL 
, ADD COLUMN id_product INT NOT NULL 
, ADD COLUMN cover_image INT NULL 
,