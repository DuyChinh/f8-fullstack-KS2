"use client";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import ContentEditable from "react-contenteditable";
import { fetcher } from "@/utils/fetcher";
import Map from "../Map"
import { useDataMindmap } from "@/app/context/DataProvider";
import ModalShare from "@/components/ModalShare";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import NotFound from "@/app/not-found";
import { updateMindmap } from "@/services/mindmap";
import { useUser } from "@auth0/nextjs-auth0/client";
import Loading from "@/app/components/Loading/Loading";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
const api = process.env.NEXT_PUBLIC_API;

function Detail({ id }) {
  // console.log(id);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dataMindmap } = useDataMindmap();
  const { data } = useSWR(`${api}/mindmaps/${id}`, fetcher);
  const { user } = useUser();
  const checkUser = data?.user_id === user?.sub;
  const status = data?.status;
  const titleRef = useRef("");
  const descRef = useRef("");
  useEffect(() => {
    titleRef.current = data?.title;
    descRef.current = data?.desc;
  }, [data]);
  useEffect(() => {
    document.title = titleRef.current;
  }, [titleRef, data]);
  if (typeof data === "object" && Object.keys(data).length === 0) {
    return <NotFound />;
  }
  const handleUpdate = async () => {
    const dataUpdate = {
      ...dataMindmap,
      title: titleRef.current,
      desc: descRef.current,
    };
    try {
      setLoading(true);
      const res = await updateMindmap(dataUpdate, id);
      toast.success("Update success!");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = () => {
    if (window.confirm("Bạn chắc chắn muốn thoát?")) {
      redirect("/my-mindmap");
    }
  }

  const handleChangeTitle = (e) => {
    // if (e.target.value != "&nbsp;") {
    //   console.log(e.target.value);
    // }
      const value = e.target.value.split("&nbsp;")[0];
      if (value.trim() !== "" && value !== " ") {
        // console.log(value);
        titleRef.current = value.trim();

        document.title = titleRef.current.trim();
      } else {
        document.title = "Không có tiêu đề mindmap";
      }
  };
  const handleChangeDesc = (evt) => {
    descRef.current = evt.target.value.trim();
  };
  if (parseInt(status) === 0 && !checkUser) {
    return <NotFound />;
  }

  return (
    <>
      <div className="flex items-start mt-5 mb-2 px-[35px] gap-6">
        <div className="w-[90%] flex items-start gap-8">
          <Link
            href={"/my-mindmap"}
            className="flex items-center gap-2 px-6 py-3 mb-3 text-white"
            style={{ background: "green", borderRadius: "8px" }}
            onClick={handleLinkClick}
          >
            Back
          </Link>
          {!user || (user && !checkUser) ? (
            <div className="flex flex-col">
              <h4 className="heading-1 !text-3xl outline-none">
                {titleRef.current}
              </h4>
              <h5 className="mt-2 text-xl font-thin text-black outline-none">
                {descRef.current}
              </h5>
            </div>
          ) : (
            <div className="flex flex-col">
              <ContentEditable
                className="heading-1 !text-3xl outline-none"
                html={titleRef.current || ""}
                onChange={handleChangeTitle}
              />
              <ContentEditable
                html={descRef.current}
                className="mt-2 text-xl font-thin text-black outline-none"
                onChange={handleChangeDesc|| ""}
              />
            </div>
          )}
        </div>
        {!user || (user && !checkUser) ? (
          <></>
        ) : (
          <div className="flex gap-6 ml-auto w-[40%] justify-end">
            <button
              className="btn-primary !rounded-md h-12 px-4 flex gap-2 items-center"
              onClick={handleUpdate}
            >
              Lưu
            </button>
            <button
              className="btn-secondary !rounded-md h-12 px-4 flex gap-2 items-center"
              onClick={() => setShow(true)}
            >
              Chia sẻ
            </button>
            <Avatar user={user} />
          </div>
        )}
      </div>
      <div className="h-[calc(100vh-6.5rem)]">
        <Map id={id} />
        {show && <ModalShare onShow={setShow} data={data} id={id} />}
      </div>
      {loading && (
        <div className={`relative`}>
          <Loading />
        </div>
      )}
    </>
  );
}

export default Detail;
