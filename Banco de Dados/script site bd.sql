create database skateboarding;
use skateboarding;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varbinary(150)
);

create table votacao(
idVotacao int primary key auto_increment,
modalidade varchar(45),
skatista varchar(45),
fkUsuario int, foreign key (fkUsuario) references usuario (idUsuario)
);


select * from usuario;
select * from votacao;

insert into votacao(modalidade , skatista, fkUsuario) values
('Bowl','Tony Hawk', 1);

insert into votacao(modalidade , skatista, fkUsuario) values
('Street','Bob Burnquist', 1);

insert into votacao(modalidade , skatista, fkUsuario) values
('Vertical','Rodney Mullen', 1);

insert into votacao(modalidade , skatista, fkUsuario) values
('FreeStyle','Nyjah Huston', 1);

insert into votacao(modalidade , skatista, fkUsuario) values
('Downhill','Rodney Mullen', 1);


select count(idVotacao) AS 'QUANTIDADE', skatista from votacao where skatista = 'Luan de Oliveira';
select count(idVotacao) AS 'QUANTIDADE', skatista from votacao where skatista = 'Nyjah Huston';
select count(idVotacao) AS 'QUANTIDADE', skatista from votacao where skatista = 'Bob Burnquist';
select count(idVotacao) AS 'QUANTIDADE', skatista from votacao where skatista = 'Tony Hawk';
select count(idVotacao) AS 'QUANTIDADE', skatista from votacao where skatista = 'Rodney Mullen';

select count(idVotacao), modalidade from votacao where modalidade = 'Downhill';

-- insert into usuario (nome,email,senha) values
            -- ('alex','alex@12345', aes_encrypt('12345', 'luanOliveira'));

-- SELECT * FROM usuario WHERE email = 'alex@sptech.school' AND senha = aes_encrypt('ñ ØjäàñusóÌÜÌ' , 'luanOliveira');
 insert into usuario values
(null, 'pedro','pedro@sptech.school', aes_encrypt('12345', 'luanOliveira'));



update usuario set nome = 'pedro henrique' where idUsuario = 1;

-- insert into usuario values
-- (null , 'Paulo', 'paulo.souza@sptech.school', md5('luanOliveira'));

-- drop database skateboarding;
