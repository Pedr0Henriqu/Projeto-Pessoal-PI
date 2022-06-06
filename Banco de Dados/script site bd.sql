create database skateboarding;
use skateboarding;


create table usuario(
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varbinary(150)
);

select * from usuario;


-- insert into usuario (nome,email,senha) values
            -- ('alex','alex@', aes_encrypt('12345', 'luanOliveira'));

-- SELECT * FROM usuario WHERE email = 'alex@sptech.school' AND senha = aes_encrypt('ñ ØjäàñusóÌÜÌ' , 'luanOliveira');

insert into usuario values
(null, 'pedro','pedro@sptech.school', aes_encrypt('12345', 'luanOliveira'));

-- insert into usuario values
-- (null , 'Paulo', 'paulo.souza@sptech.school', md5('luanOliveira'));

-- drop database skateboarding;
