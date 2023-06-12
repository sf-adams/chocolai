import Button from "./Button";

type FilePickerProps = {
  file: any;
  setFile: any;
  readFile: any;
};

const FilePicker = ({ file, setFile, readFile }: FilePickerProps) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e: any) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customClass="text-xs"
        />
        <Button
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customClass="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
