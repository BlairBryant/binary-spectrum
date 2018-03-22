INSERT INTO comments (question_id, user_id, comment, a, b)
VALUES ($1, $2, $3, $4, $5);

SELECT users.user_id, question_id, username, comment_id, comment, a, b FROM users
JOIN comments ON users.user_id = comments.user_id
WHERE question_id = $1
ORDER BY users.user_id