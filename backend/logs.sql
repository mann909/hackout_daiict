create table user_info(
	id serial primary key,
	email text,
	phone varchar(10),
	type text,
	password text
)

create table user_info(
	id serial primary key,
	email text unique,
	phone varchar(10) unique,
	type text,
	password text
)

create table user_info(
	id serial primary key,
	name text,
	email text unique,
	phone varchar(10) unique,
	type text,
	password text
)