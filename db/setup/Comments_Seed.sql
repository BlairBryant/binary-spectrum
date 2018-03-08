CREATE TABLE COMMENTS (
    comment_id SERIAL PRIMARY KEY,
    question_id INTEGER
    REFERENCES questions(question_id),
    user_id INTEGER
    REFERENCES users(user_id),
    comment VARCHAR(500),
    a INTEGER,
    b INTEGER
)

INSERT INTO comments (question_id, user_id, comment, a, b)
VALUES (1, 1, 'I think 0 to 1 is harder just because creation', 1, null)

INSERT INTO comments (question_id, user_id, comment, a, b)
VALUES (1, 2, 'I think 1 to 1000 is harder because I am not creative', 1, null)

INSERT INTO comments (question_id, user_id, comment, a, b)
VALUES (1, 3, 'I think 1 to 1000 is harder because optimization', null, 1)