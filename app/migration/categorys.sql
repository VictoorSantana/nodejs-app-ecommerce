CREATE TABLE categorys ( 
id INT NOT NULL AUTO_INCREMENT, 
name VARCHAR(45) NOT NULL 
,PRIMARY KEY (id));ALTER TABLE categorys
                ADD COLUMN createdAt DATETIME NOT NULL,
                ADD COLUMN updatedAt DATETIME NOT NULL;
                

/* ALTER TABLE */ 

ALTER TABLE categorys 
ADD COLUMN name VARCHAR(45) NOT NULL 
