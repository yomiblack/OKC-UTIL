import getFileData from "../action/getFileData";

export default async function data() {
  const files = await getFileData(null, "files");
  if (!files || files.length === 0) {
    throw new Error("File data is not available");
  }
  return files;
}
