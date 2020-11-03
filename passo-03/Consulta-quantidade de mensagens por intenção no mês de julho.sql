-- Consulte a quantidade de mensagens por intenção no mês de julho.
use smarkiodb;
select intencoes.nome as intencao,
count(mensagens.idusuario) as msg
from mensagens
inner join intencoes on mensagens.idintencao = intencoes.idintencao
where month(mensagens.data) = 7 and year(mensagens.data) = 2020
group by mensagens.idintencao