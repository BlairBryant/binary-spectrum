UPDATE smiles
SET smile = 1
WHERE comment_id = $1 AND user_id = $2;

SELECT COUNT(smile) AS smiles,
COUNT(frown) AS frowns 
FROM smiles
WHERE comment_id = $1;