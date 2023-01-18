---old active Players

WITH t1 AS(
SELECT  l.uid from mdpoker.login_info l
INNER JOIN (
    SELECT distinct uid FROM mdpoker.game_record_action WHERE ds>=20221220 AND ds<=20230101
) r ON (l.uid = r.uid)
WHERE l.uid not in (select uid from kkpoker_staff) 
AND l.uid NOT IN (
select distinct l.uid
from mdpoker.login_info l
inner join mdpoker.user_info u on l.uid = u.uid
where ver=1
and ds >= 20221120 and ds <20221220
and time_register <'2022-11-20 00:00:00'
)),

t2 AS (
    select distinct l.uid
from mdpoker.login_info l
inner join mdpoker.user_info u on l.uid = u.uid
INNER JOIN (
    SELECT distinct uid FROM mdpoker.game_record_action WHERE ds>=20221220 AND ds<=20230101
) r ON (l.uid = r.uid)
where ver=1
and ds >= 20221120 and ds <20221220
and time_register <'2022-11-20 00:00:00'
),

t3 AS(
 SELECT DISTINCT  l.uid,TO_DATE(l.ds,'YYYYMMDD') AS ds1,  
 DATEADD( TO_DATE(l.ds,'YYYYMMDD'), 7 , 'dd') AS ds2
 FROM mdpoker.login_info l INNER JOIN (
     SELECT distinct uid, ds FROM mdpoker.game_record_action WHERE ds>=20221220 AND ds<=20230108
 ) r ON (l.ds = r.ds and l.uid = r.uid) WHERE l.uid in (SELECT uid from t2) AND  l.ds>=20221220 AND l.ds<=20230108),

t4 AS(
SELECT uid, ds1  FROM t3 a
WHERE ds1 in (SELECT ds2 from t3 b WHERE a.uid = b.uid)),

t5 AS(
 SELECT DISTINCT  l.uid,TO_DATE(l.ds,'YYYYMMDD') AS ds1,  
 DATEADD( TO_DATE(l.ds,'YYYYMMDD'), 1 , 'dd') AS ds2
 FROM mdpoker.login_info l INNER JOIN (
     SELECT distinct uid, ds FROM mdpoker.game_record_action WHERE ds>=20221220 AND ds<=20230102
 ) r ON (l.ds = r.ds and l.uid = r.uid)
 WHERE l.uid in (SELECT uid from t2) AND  l.ds>=20221220 AND l.ds<=20230102),

t6 AS(
SELECT uid, ds1  FROM t5 a
WHERE ds1 in (SELECT ds2 from t5 b WHERE a.uid = b.uid)),

t7 AS(
      SELECT distinct l.uid,l.ds
 FROM mdpoker.login_info l
 INNER JOIN (
     SELECT distinct uid, ds FROM mdpoker.game_record_action WHERE ds>=20221220 AND ds<=20230101
 ) r ON (l.ds = r.ds and l.uid = r.uid)
  WHERE l.uid in (SELECT uid from t2) AND  l.ds>=20221220 AND l.ds<=20230101)

SELECT 
(SELECT COUNT(uid)  FROM t4) AS total_next_day_return_person_time,
(SELECT COUNT(uid)  FROM t6) AS total_7_day_return_person_time,
COUNT(uid)  AS total_return_person_time FROM t7;