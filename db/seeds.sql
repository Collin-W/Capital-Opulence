INSERT INTO user_info (user_first_name, user_last_name, user_create_date, user_email, user_password)
VALUES
    ('Brenda', 'Spenda', '2021-11-11', 'brenda.spenda@gmail.com', 'sPend@llc4$h'),
    ('Griff', 'Thrift', '2021-11-10', 'big_griff@gmail.com', 'p3nNyP1NcHeR$'),
    ('Jane', 'Plain', '2021-11-09', 'janeplain@gmail.com', '$pendsomesavesom3');

INSTER INTO expense_track(tx_date, tx_type, tx_description, tx_amount, tx_from_user)
VALUES
    ('2021-11-11', 'expense', 'dinner for four', '341.45', 1),
    ('2021-11-11', 'expense', 'dog grooming', '201.85', 1),
    ('2021-11-11', 'income', 'paycheck', '612.32', 1),
    ('2021-11-11', 'expense', 'gas', '40.00', 1),
    ('2021-11-11', 'income', 'found money on sidewalk', '20.00', 2),
    ('2021-11-11', 'income', 'payments from renters', '2000.00', 2),
    ('2021-11-11', 'income', 'paycheck', '812.45', 2),
    ('2021-11-11', 'expense', 'dinner', '12.44', 2),
    ('2021-11-11', 'expense', 'dinner', '25.00', 3),
    ('2021-11-11', 'expense', 'electric bill', '104.44', 3),
    ('2021-11-11', 'income', 'paycheck', '740.48', 3),
    ('2021-11-11', 'income', 'dividend payment', '56.21', 3);