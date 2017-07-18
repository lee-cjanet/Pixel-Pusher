# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
name            | string    | not null
bio             | text      |
profile_url     | string    |
cover_url       | string    |
headshot_url       | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
url         | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
location    | integer    | not null
<!-- tags        | integer    | not null -->

## Follows
column name | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
follower_id  | integer   | not null, foreign key (references users), indexed
following_id | integer   | not null, foreign key (references users), indexed



## Locations Join Table
column name | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
location_id  | integer   | not null
photo_id     | integer   | not null


## Location Names
column name | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
place_name   | string    | not null



## Category  ID  //taggings
column name | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
category id  | integer   |
picture id


## Name of Category // tags or categories
column name | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
name         | integer   | not null, foreign key (references users),
