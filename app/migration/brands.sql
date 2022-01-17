CREATE TABLE brands ( 
id INT NOT NULL AUTO_INCREMENT, 
id_category INT NOT NULL 
, name VARCHAR(45) NOT NULL 
,PRIMARY KEY (id));ALTER TABLE brands
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE brands 
ADD COLUMN id_category INT NOT NULL 
, ADD COLUMN name VARCHAR(45) NOT NULL 
