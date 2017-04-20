drop schema if exists membership CASCADE;

create schema membership;
set search_path = membership;

select 'Schema Initialized' as result;
