-- Consulte as intenções com maior % de aprovação no mês de julho. 
use smarkiodb;

select B.intencao,
sum(B.msg) as total,
sum(case when B.status = "Aprovada" then B.msg end) as "aprovacao",
sum(case when B.status = "Aprovada" then B.msg end)/sum(B.msg) as "percentual"
from
(select A.intencao,
count(A.msg) as "msg",
A.status
 from(
select intencoes.nome as intencao,
mensagens.idmensagem as msg,
status.status as status
from mensagens
inner join intencoes on mensagens.idintencao = intencoes.idintencao
inner join status on mensagens.idstatus = status.idstatus
where month(mensagens.data) = 7 and year(mensagens.data) = 2020
-- group by mensagens.idintencao
) as A
group by A.intencao,A.status
) as B
group by B.intencao
order by percentual desc