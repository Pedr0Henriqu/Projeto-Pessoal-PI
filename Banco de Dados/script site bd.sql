create database skateboarding;
use skateboarding;

create table usuario(
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varbinary(150)
);

select * from usuario;

SELECT * FROM usuario WHERE email = 'alex@sptech.school' AND senha = aes_encrypt('ñ ØjäàñusóÌÜÌ' , 'luanOliveira');

insert into usuario values
(null, 'alex','alex@sptech.school', aes_encrypt('123', 'luanOliveira'));

