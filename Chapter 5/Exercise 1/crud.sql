--Query #1
select id, c3, c5 from crud where c1 = 11 and c2 = 2;

--Query #2
select * from crud where c1 > 18 or c2 < 2;

--Query #3
insert into crud values(default, 7, 4, 'col101', default, 0);

--Query #4
insert into crud values(103, 3, 3, 'col103', default, 1);

--Query #5
select * from crud where id > 100;

--Query #6
update crud set c3 = 'col0', c5 = 0 where c1 > 4 and c1 < 9 and c2 = 1;

--Query #7
select * from crud where c1 > 4 and c1 < 9 and c2 = 1;

--Query #8
delete from crud where c5 = 0;

--Query #9
select * from crud where c5 = 0;
