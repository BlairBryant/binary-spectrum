UPDATE comments
SET comment = $1
WHERE comment_id = $2
RETURNING *;

-- I think 0 to 1 is harder just because creation