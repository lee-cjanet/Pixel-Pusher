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
headshot_url    | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

has_many: :photos
has_many: teachers (following)
has_many: students (followers)

## Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
url         | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
location_id | integer    | not null, foreign key (references users), indexed
tags        | integer    | not null

has_many: :tags
has_one: location
has_one: artist


## Follows
column name | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
teacher_id   | integer   | not null, foreign key (references users), indexed
student_id   | integer   | not null, foreign key (references users), indexed

has_many :student, (follower)
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "Users"

has_many :teacher, (following)
  primary: :id,
  foreign_key: :user_id,
  class_name: "Users"


## Location Names
column name | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
location     | string    | not null

has_many: :photos



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
