import Button from "./Button";

type AIPickerProps = {
  prompt: string;
  setPrompt: (value: string) => void;
  generatingImg: boolean;
  handleSubmit: (type: string) => void;
};

const AIPicker = ({
  prompt,
  setPrompt,
  generatingImg,
  handleSubmit,
}: AIPickerProps) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <Button type="outline" title="Asking AI..." customClass="text-xs" />
        ) : (
          <>
            <Button
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customClass="text-xs"
            />

            <Button
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customClass="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
