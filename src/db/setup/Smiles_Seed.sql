CREATE TABLE smiles (
    smile_id SERIAL PRIMARY KEY,
    comment_id INTEGER
    REFERENCES comments(comment_id),
    user_id INTEGER 
    REFERENCES users(user_id),
    smile INTEGER,
    frown INTEGER
)

INSERT INTO smiles (comment_id, user_id, smile, frown)
VALUES (1, 1, 1, 0)