# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
name            | string    | not null
bio             | text      |
cover_url       | string    |
profile_url     | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
title       | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
location    | string    | not null
category    | string    | not null

## Follows
column name | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
follower_id  | integer   | not null, foreign key (references users), indexed
following_id | integer   | not null, foreign key (references users), indexed
