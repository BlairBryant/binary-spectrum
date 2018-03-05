CREATE TABLE COMMENTS (
    comment_id SERIAL PRIMARY KEY,
    question_id INTEGER
    REFERENCES questions(question_id),
    user_id INTEGER
    REFERENCES users(user_id),
    comment VARCHAR(500)
)

INSERT INTO comments (question_id, user_id, comment)
VALUES (1, 1, 'I think 0 to 1 is harder just because')