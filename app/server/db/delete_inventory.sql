--This SQL is used when user clicks the 'Delete' button when in a bin.

UPDATE Shelfie
SET name = null, price= null
WHERE id = $1; -- $1 represents primary key (shelf+binnum)