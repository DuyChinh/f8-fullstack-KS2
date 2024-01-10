"use client";
import { ReactFlowProvider } from "reactflow";
import AddNode from "./AddNode"

function Flow({ id }) {
  // console.log("id flow", id);
  return (
    <ReactFlowProvider>
      <AddNode id={id} />
    </ReactFlowProvider>
  );
}

export default Flow;
