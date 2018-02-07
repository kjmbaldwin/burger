INSERT INTO burgers (burger_name) VALUES ('Taco Burger');
INSERT INTO burgers (burger_name) VALUES ('Bacon Cheeseburger');
INSERT INTO burgers (burger_name) VALUES ('Black Bean Burger');

use burgers_db;
UPDATE burgers SET devoured=false WHERE id = 1;
UPDATE burgers SET devoured=false WHERE id = 2;
UPDATE burgers SET devoured=false WHERE id = 3;