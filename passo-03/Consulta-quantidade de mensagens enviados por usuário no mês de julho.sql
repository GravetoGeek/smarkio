-- Consulte a quantidade de mensagens enviados por usuário no mês de julho.
-- Por cada usuário:
use smarkiodb;
select usuarios.nome as "Nome",
count(mensagens.idusuario) as "Mensagens"
from mensagens
inner join usuarios on mensagens.idusuario = usuarios.idusuario
where month(mensagens.data) = 7 and year(mensagens.data) = 2020
group by mensagens.idusuario