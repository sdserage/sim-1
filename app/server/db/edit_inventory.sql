--This SQL is used when user clicks the 'Edit' button when in a bin.

UPDATE Shelfie
SET name = $2, price= $3 -- $2 represents name  $3 represents price
WHERE id = $1; -- $1 represents shelf('A'-'D')
