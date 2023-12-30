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
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    id integer NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    phone character varying NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- Name: listOrder; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."listOrder" (
    id integer NOT NULL,
    status boolean NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."listOrder" OWNER TO postgres;

--
-- Name: order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."order" (
    id integer NOT NULL,
    status boolean NOT NULL,
    list_order_id integer NOT NULL,
    customer_id integer NOT NULL,
    product_id integer NOT NULL,
    product_name character varying NOT NULL,
    customer_name character varying NOT NULL,
    amount integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."order" OWNER TO postgres;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying NOT NULL,
    price integer NOT NULL,
    amount integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers (id, name, email, phone, created_at, updated_at) FROM stdin;
1	Nguyễn Hoàng An	hoangan@gmail.com	0909009900	2023-12-30 15:01:19.670904+07	2023-12-30 15:01:19.670904+07
2	Phạm Văn Máy Tính	mt@gmail.com	0849879852	2023-12-30 15:01:19.670904+07	2023-12-30 15:01:19.670904+07
3	Bùi Văn Lớn	lonbv@stu.ptit.edu.vn	0363036744	2023-12-30 15:01:19.670904+07	2023-12-30 15:01:19.670904+07
\.


--
-- Data for Name: listOrder; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."listOrder" (id, status, created_at, updated_at) FROM stdin;
1	t	2023-12-30 15:02:05.358759+07	2023-12-30 15:02:05.358759+07
2	t	2023-12-30 15:02:05.358759+07	2023-12-30 15:02:05.358759+07
3	t	2023-12-30 15:02:05.358759+07	2023-12-30 15:02:05.358759+07
4	t	2023-12-30 15:11:26.232626+07	2023-12-30 15:11:26.232626+07
\.


--
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."order" (id, status, list_order_id, customer_id, product_id, product_name, customer_name, amount, created_at, updated_at) FROM stdin;
1	t	1	2	1	Laptop	Nguyễn Văn Máy Tính	2	2023-12-30 15:03:17.303229+07	2023-12-30 15:03:17.303229+07
2	t	2	1	3	Keyboard DC	Nguyễn Hoàng An	3	2023-12-30 15:07:29.728457+07	2023-12-30 15:07:29.728457+07
3	t	3	1	2	Iphone 16 pro max	Nguyễn Hoàng An	1	2023-12-30 15:09:19.522946+07	2023-12-30 15:09:19.522946+07
4	t	4	3	1	Laptop	Bùi Văn Lớn	4	2023-12-30 15:11:34.540486+07	2023-12-30 15:11:34.540486+07
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, price, amount, created_at, updated_at) FROM stdin;
1	Laptop	15000000	10	2023-12-30 14:57:03.562246+07	2023-12-30 14:57:03.562246+07
2	Iphone 16 pro max	45000000	15	2023-12-30 14:57:49.421918+07	2023-12-30 14:57:49.421918+07
3	Keyboard DC	1200000	5	2023-12-30 14:58:45.56461+07	2023-12-30 14:58:45.56461+07
\.


--
-- Name: customers customer_id_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customer_id_pkey PRIMARY KEY (id);


--
-- Name: listOrder list_order_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."listOrder"
    ADD CONSTRAINT list_order_id PRIMARY KEY (id);


--
-- Name: order order_id_prk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_id_prk PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: order customer_id_foreign_key; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT customer_id_foreign_key FOREIGN KEY (customer_id) REFERENCES public.customers(id) NOT VALID;


--
-- Name: order order_id_foreign_key; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_id_foreign_key FOREIGN KEY (list_order_id) REFERENCES public."listOrder"(id) NOT VALID;


--
-- Name: order product_id_foreign_key; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT product_id_foreign_key FOREIGN KEY (product_id) REFERENCES public.products(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

