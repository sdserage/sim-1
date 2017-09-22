--This SQL is used to retrieve all bin info for the specified shelf.

SELECT * FROM Shelfie
WHERE  shelf = $1; -- $1 represents shelf('A'-'D')
