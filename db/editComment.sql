UPDATE comments
SET comment = $1
WHERE comment_id = $2;

SELECT users.user_id, username, question_id, comment_id, comment, a, b FROM users
JOIN comments ON users.user_id = comments.user_id
WHERE question_id = $3
ORDER BY users.user_id


-- I think 0 to 1 is harder just because creation