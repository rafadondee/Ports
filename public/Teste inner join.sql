create table categorias(
    id_categorias int PRIMARY KEY not null,
    nome_categorias varchar(50) not null
)
    
	Create table pedidos(
    id_pedidos int PRIMARY KEY not null,
    data date not null,
	valor_total int not null,
	id_categorias int REFERENCES categorias(id_categorias)
		
)
	
	
    insert into categorias (id_categorias, nome_categorias) values 
	(01, 'Séries'),
	(02, 'Bebidas'),
	(03, 'Carros'),
	(04, 'Livros'),
	(05, 'Filmes');
	
	insert into pedidos (id_pedidos, data, valor_total, id_categorias) values 
	(01,'2006-07-24',1550,01),
	(02,'2006-08-23',1440,02),
	(03,'2006-09-22',1330,03),
	(04,'2006-10-21',1220,04),
	(05,'2006-11-20',1110,05);
    

    select * from categorias
	select * from pedidos
	
drop table pedidos