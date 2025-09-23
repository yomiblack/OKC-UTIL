import getfile

async function data() {
  const files = await getFileData(null, "files");
  return files;
}
