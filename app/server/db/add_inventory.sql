--This SQL is used when user adds an item into a bin.

UPDATE Shelfie
SET name = $2, price= $3  -- $2 represents name  $3 represents price
WHERE id = $1; -- $1 represents primary key (shelf+binnum)


