CREATE TABLE Users (
  ID INTEGER PRIMARY KEY,
  username text,
  password text, 
  vote text
);


CREATE TABLE Question (
  ID INTEGER PRIMARY KEY,
  question text,
  A text, 
  B text,
  ansA integer,
  ansB integer
  
);

CREATE TABLE Messages (
  ID INTEGER PRIMARY KEY,
  username text,
  comment text, 
  voted text
  )
  
);