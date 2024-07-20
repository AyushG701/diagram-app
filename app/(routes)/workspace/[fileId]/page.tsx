"use client";
import React from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";

const Workspace = () => {
  return (
    <div>
      <WorkspaceHeader />
      {/* Workspace Layout  */}
      <div
        className="grid grid-cols-1
      md:grid-cols-2"
      >
        {/* Document  */}
        <div className=" h-screen">
          <Editor
          // onSaveTrigger={triggerSave}
          // fileId={params.fileId}
          // fileData={fileData}
          />
        </div>
        {/* Whiteboard/canvas  */}
        <div className=" h-screen border-l">
          {/* <Canvas
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Workspace;
