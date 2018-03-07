DELETE FROM comments
WHERE comment_id = $1;

SELECT users.user_id, question_id, username, comment_id, comment, a, b FROM users
JOIN comments ON users.user_id = comments.user_id
WHERE question_id = $2
ORDER BY users.user_id