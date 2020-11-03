-- Média por usuário:
use smarkiodb;

select avg(resultado.msg) as "Média" from
(select usuarios.nome as "Nome",
 -- mensagens.idusuario as "Usuário",
 count(mensagens.idusuario) as msg
from mensagens
inner join usuarios on mensagens.idusuario = usuarios.idusuario
where month(mensagens.data) = 7 and year(mensagens.data) = 2020
group by mensagens.idusuario
) as resultado