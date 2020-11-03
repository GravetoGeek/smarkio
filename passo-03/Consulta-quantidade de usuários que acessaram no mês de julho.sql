-- Consulte a quantidade de usuários que acessaram no mês de julho.
use smarkiodb;
select count(idusuario)
from usuarios
where month(data) = 7 and year(data) = 2020;