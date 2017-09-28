--This SQL is used when user adds an item into a bin.

UPDATE Shelfie
SET name = $3, price = $4
WHERE shelf = $1 AND bin = $2;
