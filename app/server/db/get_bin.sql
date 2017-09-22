--This SQL is used to retrieve all bin info for the specified bin.

SELECT * FROM Shelfie
WHERE  id = $1; -- $1 represents a specific bin id
