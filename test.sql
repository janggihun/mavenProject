-- testdb

create table memoTable(
cnt int auto_increment primary key,
userId varchar(10),
memoLine varchar(20)
);
create table companyTable(
cnt int auto_increment primary key,
company_Name varchar(10)
);

create table userTable(
cnt int auto_increment primary key,
userId varchar(10),
company_cnt int
);

create table positionTable(
cnt int,
position_Name varchar(10)
);
create table submitPhoneTable(
cnt int auto_increment primary key,
company_Name varchar(10),
Scondition varchar(20)

);
-- 당일 24시 이후에는 초기화 요망 



select * from positionTable;
select * from userTable;
select * from memoTable;
select * from companyTable;
select * from submitPhoneTable;



insert into  positionTable values(1000,"사장");
insert into  companyTable values(null,"(주)메시","지금몇시",'000-0000-0000','020-0000-0000',200000000,"인천시","몹시");
insert into  memoTable values(null,"박용현","저는 안좋아해요");
insert into  userTable values(null,"송태민",4);


select u.userId, p.position_Name, c.company_Name from userTable u
left join positionTable p
on p.cnt = u.position
left join companyTable c
on u.company_cnt = c.cnt

;



select m.cnt, m.userId, m.memoLine,c.company_Name, u.company_cnt from memoTable m
LEFT OUTER join userTable u
ON u.userId = m.userId 
join companyTable c
on c.cnt = u.company_cnt
where u.company_cnt = (select company_cnt from userTable where userId = '장기훈')
order by m.cnt asc;
