CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    auth_id TEXT,
    username TEXT
    )

INSERT INTO users (auth_id, username)
VALUES ('t3st 1d', 'stick stickly')