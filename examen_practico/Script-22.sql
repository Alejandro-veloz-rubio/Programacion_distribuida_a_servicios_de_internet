create database Movies;

create table sign_in_users(id int not null auto_increment,username_email varchar(150),pass varchar(200),
primary key (id)
);

create table sign_up_users(id int not null auto_increment,username varchar(150),email varchar(150),pass varchar(200),
primary key (id)
);

create table New_Movies (id int not null auto_increment,name varchar(150),description varchar(1000),
primary key (id)
);


select * from sign_in_users siu ;

select * from sign_up_users suu ;

select * from new_movies nm ;