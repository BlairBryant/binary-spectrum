SELECT users.user_id, username, comment_id, comment, a, b FROM users
JOIN comments ON users.user_id = comments.user_id
WHERE question_id = 1
ORDER BY users.user_id