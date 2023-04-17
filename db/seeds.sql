INSERT INTO department
VALUES ("BackOfHouse"),
       ("FrontOfHouse"),
       ("TasteTester"),
       ("AdminHR");
        
INSERT INTO position (id, title, salary, department_id) 
VALUES (1, "Chef", 50000.00, 1),
       (2, "Waiter", 250.00, 2),
       (3, "Guest", 10.00, 3),
       (4, "Maintenance", 250.00, 3),
       (5, "Mom", 250000.25, 4);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Bob", "Belcher", 1, 1),
       (2, "Tina", "Belcher", 2, 2),
       (3, "Gene", "Belcher", 2, 2),
       (4, "Louise", "Belcher", 2, 2),
       (5, "Linda", "Belcher", 4, 5),
       (6, "Mort", "Tician", 3, 3),
       (7, "Teddy", "McGillicuddy", 3, 4);

