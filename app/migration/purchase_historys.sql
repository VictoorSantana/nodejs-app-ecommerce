CREATE TABLE purchase_historys ( 
id INT NOT NULL AUTO_INCREMENT, 
id_product INT NOT NULL 
, id_user INT NOT NULL 
, status INT NULL 
, PRIMARY KEY (id));ALTER TABLE purchase_historys
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE purchase_historys 
ADD COLUMN id_product INT NOT NULL 
, ADD COLUMN id_user INT NOT NULL 
, ADD COLUMN status INT NULL 
,