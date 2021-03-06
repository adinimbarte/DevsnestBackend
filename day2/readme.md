# Postgress
#### [Download link](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
#### [Tutorial Link](https://www.postgresqltutorial.com/)

# Commands of PostgresSQL



###  Start the PostgresSql
```
 psql -U postgres 
```
###  Create a user and Password
```
Create user ak with PASSWORD 'password';  
```

###  Create database 
```
CREATE DATABASE devs;
```

###  Grant all Privileges on database 
``` 
GRANT ALL PRIVILEGES ON DATABASE database_Name to user_Name;
```

###  Check the database is Created
```
\l
```

###  Connect to database 
```
\c database_Name
```

###  Create Table
```
CREATE TABLE COMPANY(
ID INT NOT NULL,
NAME CHAR[50],
AGE INT,
ADDRESS TEXT
);
```
###  Check The Table is Created 

>\d *or* \
> \d table_name *or* \
> SELECT * FROM table_Name;



###  Delete the Database 
```
DROP database_Name;
```
###  Delete the  Table
```
DROP table_Name;
```
###  Quit the psql server
```
\q
```

###  Insert Single Data  into Table 
```
INSERT INTO table_Name VALUES (1 , 'AK' , 10 , 'ABCD');
```
###  INSERT Multiple Rows
```
Ex:-

DROP TABLE IF EXISTS links;

CREATE TABLE links (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);

INSERT INTO 
    links (url, name)
VALUES
    ('https://www.google.com','Google'),
    ('https://www.yahoo.com','Yahoo'),
    ('https://www.bing.com','Bing');

    SELECT * FROM links;
```
###  Inserting multiple rows and returning inserted rows 
```
INSERT INTO 
    links(url,name, description)
VALUES
    ('https://duckduckgo.com/','DuckDuckGo','Privacy & Simplified Search Engine'),
    ('https://swisscows.com/','Swisscows','Privacy safe WEB-search')
RETURNING *;
```

###  Delete Row form Table
``` 
DELETE FROM table_name
WHERE condition(id =1);

Ex:-
DROP TABLE IF EXISTS links;

CREATE TABLE links (
    id serial PRIMARY KEY,
    url varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    description varchar(255),
    rel varchar(10),
    last_update date DEFAULT now()
);

INSERT INTO  links VALUES 
   ('1', 'https://www.postgresqltutorial.com', 'PostgreSQL Tutorial', 'Learn PostgreSQL fast and easy', 'follow', '2013-06-02'),
   ('2', 'http://www.oreilly.com', 'O''Reilly Media', 'O''Reilly Media', 'nofollow', '2013-06-02'),
   ('3', 'http://www.google.com', 'Google', 'Google', 'nofollow', '2013-06-02'),
   ('4', 'http://www.yahoo.com', 'Yahoo', 'Yahoo', 'nofollow', '2013-06-02'),
   ('5', 'http://www.bing.com', 'Bing', 'Bing', 'nofollow', '2013-06-02'),
   ('6', 'http://www.facebook.com', 'Facebook', 'Facebook', 'nofollow', '2013-06-01'),
   ('7', 'https://www.tumblr.com/', 'Tumblr', 'Tumblr', 'nofollow', '2013-06-02'),
   ('8', 'http://www.postgresql.org', 'PostgreSQL', 'PostgreSQL', 'nofollow', '2013-06-02');

DELETE FROM links
WHERE id = 8;
```

###  Delete all Rows from the table  
```
DELETE FROM table_Name;
```

###   Delete a row and Return the Deleted row  
```
DELETE FROM table_Name
WHERE id = 7
RETURNING *;
```

###  BETWEEN operator
```
value(row_name) BETWEEN low AND high;      
value >= low and value <= high   -it will print all the data.
value NOT BETWEEN low AND high;  -it will print all the data .
value < low OR value > high;    

Ex:-
SELECT
	customer_id,
	payment_id,
	amount
FROM
	payment
WHERE
	amount BETWEEN 8 AND 9;
```

###  Create Auto-increment Column
```
CREATE TABLE table_name(
    id SERIAL
);

Ex:-
CREATE TABLE fruits(
   id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL
);

INSERT INTO fruits(name) 
VALUES('Orange');

INSERT INTO fruits(id,name) 
VALUES(DEFAULT,'Apple');

SELECT * FROM fruits;
```
###  inserts a new row into the fruits table and returns the value generated for the id column
``` 
INSERT INTO fruits(name) 
VALUES('Banana')
RETURNING id;
```
###  ADD COLUMN
```
ALTER TABLE table_name
ADD COLUMN new_column_name data_type constraint;

//constraint means null or not null

Ex:-
DROP TABLE IF EXISTS customers CASCADE;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR NOT NULL
);

ALTER TABLE customers 
ADD COLUMN phone VARCHAR;


ALTER TABLE customers
ADD COLUMN fax VARCHAR,
ADD COLUMN email VARCHAR;
```

### Joints 
```
->we  have two tables called basket_a and basket_b that store fruits:

CREATE TABLE basket_a (
    a INT PRIMARY KEY,
    fruit_a VARCHAR (100) NOT NULL
);

CREATE TABLE basket_b (
    b INT PRIMARY KEY,
    fruit_b VARCHAR (100) NOT NULL
);

INSERT INTO basket_a (a, fruit_a)
VALUES
    (1, 'Apple'),
    (2, 'Orange'),
    (3, 'Banana'),
    (4, 'Cucumber');

INSERT INTO basket_b (b, fruit_b)
VALUES
    (1, 'Orange'),
    (2, 'Apple'),
    (3, 'Watermelon'),
    (4, 'Pear');

```
###  Inner join 
->The first table (basket_a) with the second table (basket_b) by matching the values in the fruit_a and fruit_b columns:
```
SELECT
    a,
    fruit_a,
    b,
    fruit_b
FROM
    basket_a
INNER JOIN basket_b
    ON fruit_a = fruit_b;
```

###  Left join  
->The left join starts selecting data from the left table. It compares values in the fruit_a column with the values in the fruit_b column in the basket_b table.
```
SELECT
    a,
    fruit_a,
    b,
    fruit_b
FROM
    basket_a
LEFT JOIN basket_b 
   ON fruit_a = fruit_b;
```

 ###  Left Outer Join
 ->To select rows from the left table that do not have matching rows in the right table, you use the left join with a WHERE clause.
```
 SELECT
    a,
    fruit_a,
    b,
    fruit_b
FROM
    basket_a
LEFT JOIN basket_b 
    ON fruit_a = fruit_b
WHERE b IS NULL;
```
###  Right join
->The right join is a reversed version of the left join. The right join starts selecting data from the right table.
It compares each value in the fruit_b column of every row in the right table with each value in the fruit_a column of every row in the fruit_a table.
```
SELECT
    a,
    fruit_a,
    b,
    fruit_b
FROM
    basket_a
RIGHT JOIN basket_b ON fruit_a = fruit_b;
```
 ###  Right Outer Join
->Similarly, you can get rows from the right table that do not have matching rows from the left table by adding a WHERE clause as follows:
```
 SELECT
    a,
    fruit_a,
    b,
    fruit_b
FROM
    basket_a
RIGHT JOIN basket_b 
   ON fruit_a = fruit_b
WHERE a IS NULL;
```
###  Full outer join
->The full outer join or full join returns a result set that contains all rows from both left and right tables, 
with the matching rows from both sides if available. In case there is no match, the columns of the table will be filled with NULL.
```
SELECT
    a,
    fruit_a,
    b,
    fruit_b
FROM
    basket_a
FULL OUTER JOIN basket_b 
    ON fruit_a = fruit_b;

```
 ![All Joins](https://www.postgresqltutorial.com/wp-content/uploads/2018/12/PostgreSQL-Joins.png)

 ###  Self-join
```
 CREATE TABLE employee (
	employee_id INT PRIMARY KEY,
	first_name VARCHAR (255) NOT NULL,
	last_name VARCHAR (255) NOT NULL,
	manager_id INT,
	FOREIGN KEY (manager_id) 
	REFERENCES employee (employee_id) 
	ON DELETE CASCADE
);
INSERT INTO employee (
	employee_id,
	first_name,
	last_name,
	manager_id
)
VALUES
	(1, 'Windy', 'Hays', NULL),
	(2, 'Ava', 'Christensen', 1),
	(3, 'Hassan', 'Conner', 1),
	(4, 'Anna', 'Reeves', 2),
	(5, 'Sau', 'Norman', 2),
	(6, 'Kelsie', 'Hays', 3),
	(7, 'Tory', 'Goff', 3),
	(8, 'Salley', 'Lester', 3);
    SELECT
    e.first_name || ' ' || e.last_name employee,
    m .first_name || ' ' || m .last_name manager
FROM
    employee e
INNER JOIN employee m ON m .employee_id = e.manager_id
ORDER BY manager;
```
![Image](https://www.postgresqltutorial.com/wp-content/uploads/2018/03/PostgreSQL-Self-Join-Reporting-Structure.png)