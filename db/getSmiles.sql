SELECT COUNT(smile) AS smiles,
COUNT(frown) AS frowns 
FROM smiles
WHERE comment_id = $1;