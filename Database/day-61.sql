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
-- Name: Permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Permissions" (
    id integer,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Permissions" OWNER TO postgres;

--
-- Name: Roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Roles" (
    id integer,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Roles" OWNER TO postgres;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.permissions (
    id integer NOT NULL,
    value character varying(100) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.permissions OWNER TO postgres;

--
-- Name: permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.permissions_id_seq OWNER TO postgres;

--
-- Name: permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.permissions_id_seq OWNED BY public.permissions.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    content character varying(255) NOT NULL,
    user_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    categories_id integer
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.posts_id_seq OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: providers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.providers (
    id integer NOT NULL,
    name character varying,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.providers OWNER TO postgres;

--
-- Name: providers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.providers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.providers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: role_permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role_permission (
    id integer NOT NULL,
    role_id integer,
    permission_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.role_permission OWNER TO postgres;

--
-- Name: role_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.role_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.role_permission_id_seq OWNER TO postgres;

--
-- Name: role_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.role_permission_id_seq OWNED BY public.role_permission.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: user_role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_role (
    id integer NOT NULL,
    role_id integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.user_role OWNER TO postgres;

--
-- Name: user_role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_role_id_seq OWNER TO postgres;

--
-- Name: user_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_role_id_seq OWNED BY public.user_role.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50),
    email character varying(100) NOT NULL,
    password character varying(100),
    status boolean DEFAULT false,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    phone character varying(15),
    address character varying(200),
    provider_id integer
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_permissions (
    id integer NOT NULL,
    user_id integer,
    permission_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.users_permissions OWNER TO postgres;

--
-- Name: users_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_permissions_id_seq OWNER TO postgres;

--
-- Name: users_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_permissions_id_seq OWNED BY public.users_permissions.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permissions ALTER COLUMN id SET DEFAULT nextval('public.permissions_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: role_permission id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role_permission ALTER COLUMN id SET DEFAULT nextval('public.role_permission_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: user_role id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_role ALTER COLUMN id SET DEFAULT nextval('public.user_role_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: users_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_permissions ALTER COLUMN id SET DEFAULT nextval('public.users_permissions_id_seq'::regclass);


--
-- Data for Name: Permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Permissions" (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Roles" (id, name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20240116135416-create_users_table.js
20240116143701-create_posts_table.js
20240116144843-add_column_users_table.js
20240116145922-change_column_users_table.js
20240116150535-create_categories_table.js
20240116150803-add_column_categories_table.js
20240116151503-add_foreign_posts_table.js
20240123130950-change_column_users_table_auth.js
20240123144058-roles.js
20240123144616-permissions.js
20240123144819-role_permission.js
20240123145539-user_role.js
20240123145741-users_permissions.js
20240123150213-create-role.js
20240123150640-create-permission.js
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.permissions (id, value, created_at, updated_at) FROM stdin;
1	user.view	2024-01-26 23:57:13.026+07	2024-01-26 23:57:13.026+07
2	user.edit	2024-01-26 23:57:13.093+07	2024-01-26 23:57:13.093+07
3	role.add	2024-01-26 23:57:13.127+07	2024-01-26 23:57:13.127+07
4	user.delete	2024-01-26 23:59:24.121+07	2024-01-26 23:59:24.121+07
5	role.edit	2024-01-26 23:59:24.216+07	2024-01-26 23:59:24.216+07
6	role.view	2024-01-27 00:48:22.378+07	2024-01-27 00:48:22.378+07
7	user.add	2024-01-27 08:28:03.058+07	2024-01-27 08:28:03.058+07
8	role.delete	2024-01-27 08:28:08.315+07	2024-01-27 08:28:08.315+07
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, title, content, user_id, created_at, updated_at, categories_id) FROM stdin;
\.


--
-- Data for Name: providers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.providers (id, name, created_at, updated_at) FROM stdin;
1	email	2024-01-23 20:57:19.025415+07	2024-01-23 20:57:19.025415+07
\.


--
-- Data for Name: role_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.role_permission (id, role_id, permission_id, created_at, updated_at) FROM stdin;
1	7	1	2024-01-26 23:57:13.053+07	2024-01-26 23:57:13.053+07
2	7	2	2024-01-26 23:57:13.105+07	2024-01-26 23:57:13.105+07
3	7	3	2024-01-26 23:57:13.141+07	2024-01-26 23:57:13.141+07
9	9	1	2024-01-27 00:48:22.359+07	2024-01-27 00:48:22.359+07
10	9	6	2024-01-27 00:48:22.394+07	2024-01-27 00:48:22.394+07
31	8	\N	2024-01-27 08:08:40.666+07	2024-01-27 08:08:40.666+07
37	9	\N	2024-01-27 08:11:11.22+07	2024-01-27 08:11:11.22+07
41	8	1	2024-01-27 08:31:54.101+07	2024-01-27 08:31:54.101+07
42	8	6	2024-01-27 08:31:54.101+07	2024-01-27 08:31:54.101+07
43	8	3	2024-01-27 08:31:54.101+07	2024-01-27 08:31:54.101+07
44	8	8	2024-01-27 08:31:54.101+07	2024-01-27 08:31:54.101+07
45	11	1	2024-01-27 09:18:02.047+07	2024-01-27 09:18:02.047+07
46	11	7	2024-01-27 09:18:02.072+07	2024-01-27 09:18:02.072+07
47	11	2	2024-01-27 09:18:02.089+07	2024-01-27 09:18:02.089+07
48	11	4	2024-01-27 09:18:02.115+07	2024-01-27 09:18:02.115+07
49	11	6	2024-01-27 09:18:02.138+07	2024-01-27 09:18:02.138+07
50	11	3	2024-01-27 09:18:02.154+07	2024-01-27 09:18:02.154+07
51	11	5	2024-01-27 09:18:02.174+07	2024-01-27 09:18:02.174+07
52	11	8	2024-01-27 09:18:02.202+07	2024-01-27 09:18:02.202+07
53	12	1	2024-01-27 09:48:40.435+07	2024-01-27 09:48:40.435+07
54	12	3	2024-01-27 09:48:40.456+07	2024-01-27 09:48:40.456+07
55	15	1	2024-01-27 09:53:49.472+07	2024-01-27 09:53:49.472+07
56	15	6	2024-01-27 09:53:49.472+07	2024-01-27 09:53:49.472+07
57	16	1	2024-01-27 12:55:35.36+07	2024-01-27 12:55:35.36+07
58	16	7	2024-01-27 12:55:35.375+07	2024-01-27 12:55:35.375+07
59	16	3	2024-01-27 12:55:35.389+07	2024-01-27 12:55:35.389+07
60	8	7	2024-01-27 13:20:00.784+07	2024-01-27 13:20:00.784+07
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name, created_at, updated_at) FROM stdin;
11	super admin	2024-01-27 09:18:01.982+07	2024-01-27 09:18:01.982+07
8	maneger	2024-01-26 23:59:23.979+07	2024-01-27 13:20:00.724+07
9	admin	2024-01-27 00:48:22.279+07	2024-01-27 08:11:16.17+07
\.


--
-- Data for Name: user_role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_role (id, role_id, user_id, created_at, updated_at) FROM stdin;
4	9	14	2024-01-27 09:08:23.716+07	2024-01-27 09:08:23.716+07
5	8	14	2024-01-27 09:09:05.088+07	2024-01-27 09:09:05.088+07
6	9	40	2024-01-27 09:11:39.407+07	2024-01-27 09:11:39.407+07
7	8	39	2024-01-27 09:14:54.072+07	2024-01-27 09:14:54.072+07
8	8	41	2024-01-27 09:15:43.141+07	2024-01-27 09:15:43.141+07
9	9	41	2024-01-27 09:15:43.141+07	2024-01-27 09:15:43.141+07
13	11	42	2024-01-27 09:22:12.379+07	2024-01-27 09:22:12.379+07
14	11	39	2024-01-27 09:28:11.51+07	2024-01-27 09:28:11.51+07
15	11	40	2024-01-27 09:36:40.362+07	2024-01-27 09:36:40.362+07
16	11	14	2024-01-27 09:37:32.502+07	2024-01-27 09:37:32.502+07
17	8	42	2024-01-27 12:55:25.321+07	2024-01-27 12:55:25.321+07
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, status, created_at, updated_at, phone, address, provider_id) FROM stdin;
14	Duy Chinh	doanchinhit21@gmail.com	$2b$10$2/ZEFc1Y8uUrYDXNYML5wOPO507gjky6nnlYDhMD7F30wfcNwfLKS	t	2024-01-26 14:44:10.009+07	2024-01-26 14:44:10.009+07	\N	\N	\N
39	Wilma Muller	Leonor97@gmail.com	$2b$10$TvgDQz1hoFPdTArAGUUcYePz3W7GAMJFhXDcebEwEc/p79hLp8E1e	f	2024-01-27 09:11:10.423+07	2024-01-27 09:11:10.423+07	\N	99213 Highfield Close	\N
40	Janie McCullough	Modesto.Jones@hotmail.com	$2b$10$xBOpybQBiQrImPpt5vSVJ.cujLduJsM4gjRyhddh9QVzMp7pyZ7lG	f	2024-01-27 09:11:10.568+07	2024-01-27 09:11:10.568+07	\N	845 Armstrong Haven	\N
41	Derek Marks	Shany.Quitzon@yahoo.com	$2b$10$YBNC4QO6jQdKhW./dUcU/uIkAPyEkrCBPY4JvvCp8xZhLFv8pcFDW	f	2024-01-27 09:11:10.74+07	2024-01-27 09:11:10.74+07	\N	585 Buckingham Road	\N
42	Mr. Willis Wintheiser	Ole.Brakus@hotmail.com	$2b$10$/GM/YbXLR06.XhKVsa65/.G71sXJzkvyDy0FzIC81LY7lvdcFeUKe	t	2024-01-27 09:11:10.914+07	2024-01-27 09:11:10.914+07	\N	537 Swift Extensions	\N
43	Ms. Florence Hessel	Madisyn6@hotmail.com	$2b$10$XXm1Omn8uKyyGZmmUPMuhOOuqtpEQ//vSGJsCjH3xhEcbYAiSBox2	t	2024-01-27 09:11:11.078+07	2024-01-27 09:11:11.078+07	\N	384 Allene Tunnel	\N
44	Dr. Stewart Casper	Elias.Frami59@hotmail.com	$2b$10$BHMM/AP5WrKvoLJN/rm/F./n/mUpF/6xEN4799VTY6VWlrdtfZ5iK	t	2024-01-27 09:11:11.227+07	2024-01-27 09:11:11.227+07	\N	97152 Quinten Keys	\N
45	Priscilla Heathcote	Kaitlin48@yahoo.com	$2b$10$EKZpUHb3HQR6YrjPvExpAe4IaG0VmOHm4GoTGrXbhwNLivyRFBEge	t	2024-01-27 09:11:11.383+07	2024-01-27 09:11:11.383+07	\N	823 N East Street	\N
46	Angel Wyman	Albertha13@hotmail.com	$2b$10$CACNBiAWOjAHAcQGHDNw8.2jWzURCQnpCb71PYSCd.uQNj6yX/AEW	t	2024-01-27 09:11:11.546+07	2024-01-27 09:11:11.546+07	\N	64533 W Center Street	\N
47	Jason Lind Jr.	Santa70@gmail.com	$2b$10$/AfblLFIgFTbSiv3nCsIDemadeCEkmz13JbVng/zpooUir5KA8EZ.	f	2024-01-27 09:11:11.704+07	2024-01-27 09:11:11.704+07	\N	6143 Janis Cape	\N
48	Elmer Schowalter	Eryn_Hansen-Yost@yahoo.com	$2b$10$5YptKu7ofpeKsOX0qXvJMeFmwj5UEmdEIcg6yMSXkSceBAoUKPk5y	t	2024-01-27 09:11:11.873+07	2024-01-27 09:11:11.873+07	\N	695 Anne Falls	\N
\.


--
-- Data for Name: users_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_permissions (id, user_id, permission_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 1, false);


--
-- Name: permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.permissions_id_seq', 8, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 1, false);


--
-- Name: providers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.providers_id_seq', 1, true);


--
-- Name: role_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.role_permission_id_seq', 60, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 16, true);


--
-- Name: user_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_role_id_seq', 17, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 48, true);


--
-- Name: users_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_permissions_id_seq', 1, false);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: permissions permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: providers providers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.providers
    ADD CONSTRAINT providers_pkey PRIMARY KEY (id);


--
-- Name: role_permission role_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role_permission
    ADD CONSTRAINT role_permission_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: user_role user_role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT user_role_pkey PRIMARY KEY (id);


--
-- Name: users_permissions users_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_permissions
    ADD CONSTRAINT users_permissions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: posts posts_category_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_category_id_foreign FOREIGN KEY (categories_id) REFERENCES public.categories(id);


--
-- Name: posts posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

