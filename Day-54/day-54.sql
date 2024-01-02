--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: book_rooms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.book_rooms (
    id character varying(20) NOT NULL,
    id_room character varying(20) NOT NULL,
    id_customer character varying(20) NOT NULL,
    order_date date,
    started_at time without time zone,
    ended_at time without time zone,
    deposits numeric(8,3),
    note character varying(1000),
    status character varying(20)
);


ALTER TABLE public.book_rooms OWNER TO postgres;

--
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    id character varying(20) NOT NULL,
    name character varying(50) NOT NULL,
    address character varying(1000),
    phone character varying(15)
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- Name: rooms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rooms (
    id character varying(20) NOT NULL,
    category character varying(20) NOT NULL,
    max integer,
    price numeric(8,3),
    "desc" character varying(1000)
);


ALTER TABLE public.rooms OWNER TO postgres;

--
-- Name: service_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_detail (
    id_room character varying(20) NOT NULL,
    id_service character varying(20) NOT NULL,
    quantity integer
);


ALTER TABLE public.service_detail OWNER TO postgres;

--
-- Name: services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.services (
    id character varying(20) NOT NULL,
    name character varying(100) NOT NULL,
    bill_unit character varying(50),
    price numeric(8,3)
);


ALTER TABLE public.services OWNER TO postgres;

--
-- Data for Name: book_rooms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.book_rooms (id, id_room, id_customer, order_date, started_at, ended_at, deposits, note, status) FROM stdin;
DP0001	P0001	KH0002	2023-01-01	12:00:00	15:00:00	50.000	Booking Note 1	confirmed
DP0002	P0001	KH0003	2023-02-01	14:00:00	17:00:00	75.000	Booking Note 2	cancel
DP0003	P0002	KH0002	2023-04-01	18:00:00	23:00:00	95.000	Booking Note 3	confirmed
DP0004	P0003	KH0001	2023-04-01	20:00:00	22:00:00	75.000	Booking Note 4	confirmed
DP0005	P0002	KH0001	2023-09-01	15:00:00	18:00:00	50.000	Booking Note 5	confirmed
DP0006	P0002	KH0003	2023-09-05	19:00:00	23:00:00	70.000	Booking Note 6	confirmed
\.


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers (id, name, address, phone) FROM stdin;
KH0001	Nguyen Van A	Dong Da	5551234
KH0002	Nguyen Van B	Thanh Xuan	3331234
KH0003	Phan Van A	Cau Giay	7771234
KH0004	Phan Van B	Ha Dong	2221234
\.


--
-- Data for Name: rooms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rooms (id, category, max, price, "desc") FROM stdin;
P0001	Loai 1	20	60.000	Description
P0002	Loai 1	25	80.000	Description
P0003	Loai 2	15	50.000	Description
P0004	Loai 3	20	50.000	Description
\.


--
-- Data for Name: service_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_detail (id_room, id_service, quantity) FROM stdin;
DP0001	DV0001	20
DP0001	DV0003	3
DP0001	DV0002	10
DP0002	DV0002	10
DP0003	DV0003	2
\.


--
-- Data for Name: services; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.services (id, name, bill_unit, price) FROM stdin;
DV0001	Beer	lon	20.000
DV0002	Fruits	dia	55.000
DV0003	Cake	cai	99.000
\.


--
-- Name: book_rooms book_rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_rooms
    ADD CONSTRAINT book_rooms_pkey PRIMARY KEY (id);


--
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- Name: rooms rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);


--
-- Name: service_detail service_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_detail
    ADD CONSTRAINT service_detail_pkey PRIMARY KEY (id_room, id_service);


--
-- Name: services services_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);


--
-- Name: book_rooms book_rooms_id_customer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_rooms
    ADD CONSTRAINT book_rooms_id_customer_fkey FOREIGN KEY (id_customer) REFERENCES public.customers(id);


--
-- Name: book_rooms book_rooms_id_room_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_rooms
    ADD CONSTRAINT book_rooms_id_room_fkey FOREIGN KEY (id_room) REFERENCES public.rooms(id);


--
-- Name: service_detail service_detail_id_room_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_detail
    ADD CONSTRAINT service_detail_id_room_fkey FOREIGN KEY (id_room) REFERENCES public.book_rooms(id);


--
-- Name: service_detail service_detail_id_service_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_detail
    ADD CONSTRAINT service_detail_id_service_fkey FOREIGN KEY (id_service) REFERENCES public.services(id);


--
-- PostgreSQL database dump complete
--

