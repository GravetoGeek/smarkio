-- Status:

select A.status,
A.msg,
A.msg/(select count(*) from mensagens)*100 as percentual
from(
select status.status,
count(mensagens.idstatus) as "msg",
(select count(*) from mensagens) as total
from mensagens
join status on mensagens.idstatus = status.idstatus
group by mensagens.idstatus
) as A



-- Intenções:
select A.nome,
A.Mensagens,
A.Mensagens/(select count(*) from mensagens)*100 as percentual
from
(select intencoes.nome,
count(mensagens.idintencao) as "Mensagens"
from mensagens
join intencoes on mensagens.idintencao = intencoes.idintencao
group by mensagens.idintencao
) as A

