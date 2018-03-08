INSERT INTO smiles (comment_id, user_id, smile, frown)
VALUES ($1, $2, null, 1);

SELECT COUNT(smile) AS smiles,
COUNT(frown) AS frowns 
FROM smiles
WHERE comment_id = $1;