import getFileData from "../action/getFileData";

export default async function data() {
  const files = await getFileData(null, "files");
  return files;
}
