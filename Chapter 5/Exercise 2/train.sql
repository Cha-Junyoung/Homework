--Query #1
select users.id, users.name, tickets.seat_number
from tickets join users on users.id = tickets.user
where tickets.train = 11
order by tickets.seat_number;

--Query #2
select users.id, users.name, count(*) as trains_count, sum(trains.distance) / 10 as total_distance
from (tickets join trains on tickets.train = trains.id) join users on users.id = tickets.user
group by users.id
order by total_distance desc
limit 6;

--Query #3
select trains.id, types.name as type, source.name as src_stn, destination.name as dst_stn, timediff(trains.arrival, trains.departure) as travel_time
from ((trains join types on trains.type = types.id) join stations as source on source.id = trains.source) join stations as destination on destination.id = trains.destination
order by travel_time desc
limit 6;

--Query #4
select types.name as type, source.name as src_stn, destination.name as dst_stn, trains.departure, trains.arrival, round(types.fare_rate * trains.distance / 1000, -2) as fare
from ((trains join types on trains.type = types.id) join stations as source on source.id = trains.source) join stations as destination on destination.id = trains.destination
order by trains.departure;

--Query #5
select trains.id, types.name as type, source.name as src_stn, destination.name as dst_stn, count(*) as occupied, types.max_seats as maximum
from (((tickets join trains on tickets.train = trains.id) join types on types.id = trains.type) join stations as source on source.id = trains.source) join stations as destination on destination.id = trains.destination
group by tickets.train
order by trains.id;

--Query #6
select trains.id, types.name as type, source.name as src_stn, destination.name as dst_stn, count(tickets.id) as occupied, types.max_seats as maximum
from (((tickets right outer join trains on tickets.train = trains.id) join types on types.id = trains.type) join stations as source on source.id = trains.source) join stations as destination on destination.id = trains.destination
group by tickets.train
order by trains.id;