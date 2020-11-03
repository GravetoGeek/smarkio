-- Consulte a quantidade de mensagens por uma intenção de sua escolha por status no mês de julho.
use smarkiodb;

select resultado.intencao,
count(resultado.msg) as "msg",
resultado.status
 from(
select intencoes.nome as intencao,
mensagens.idmensagem as msg,
status.status as status
from mensagens
inner join intencoes on mensagens.idintencao = intencoes.idintencao
inner join status on mensagens.idstatus = status.idstatus
where month(mensagens.data) = 7 and year(mensagens.data) = 2020
-- group by mensagens.idintencao
) as resultado
where resultado.intencao = "Aplicar"
group by resultado.intencao,resultado.status