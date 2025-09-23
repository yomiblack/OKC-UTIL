import dynamic from "next/dynamic";

const SelectedFileDynamic = dynamic(() => import("./selectedFileComponent"), {
  ssr: false,
});

export default SelectedFileDynamic;
