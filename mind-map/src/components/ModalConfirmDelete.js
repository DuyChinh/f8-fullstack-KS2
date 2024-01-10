"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { IoWarningOutline } from "react-icons/io5";
import { useSWRConfig } from "swr";
import { deleteMindmap } from "@/services/mindmap";
import { errorText } from "@/utils/exception";
function ModalConfirmDelete({
  onShowConfirm,
  id,
  fetchApi,
  dataMaps,
  onLoading,
  onRemove,
}) {
  const { mutate } = useSWRConfig();
  const handleDelete = async () => {
    onShowConfirm(false);
    try {
      onLoading(true);
      await deleteMindmap(id);
      mutate(fetchApi);
      toast.success("Delete mindmap success!");
      const newDataMaps = dataMaps.filter((m) => m.id !== id);
      onRemove(newDataMaps);
    } catch (error) {
      console.log(error);
      toast.error(errorText);
    } finally {
      onLoading(false);
    }
  };
  return (
    <div
      className="fixed inset-0 h-[100vh] w-full !z-50"
      style={{ background: "rgba(17,24,39,0.6)" }}
    >
      <div className="bg-[#fff] !z-[51] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-8 rounded-xl">
        <div className="flex items-center gap-4 !opacity-100 text-black">
          {/* <div className="p-3 border grid place-items-center border-solid border-[#333] rounded-full">
            <IoWarningOutline fontSize={"2rem"} color="red" />
          </div> */}
          <div>
            <h3 className="text-2xl font-bold">Delete this mindmap?</h3>
            <h4 className="mt-2 text-lg font-thin">
              Warning: recovery is impossible!
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 mt-6">
          <button
            className="px-5 py-2 rounded-md bg-green"
            onClick={() => onShowConfirm(false)}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 rounded-md bg-pink text-white"
            style={{background: "red"}}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmDelete;
