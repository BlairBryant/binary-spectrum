UPDATE smiles 
SET smile = smile + 1
WHERE comment_id = $1;

SELECT COUNT(smile) AS smiles,
COUNT(frown) AS frowns 
FROM smiles
WHERE comment_id = $1;