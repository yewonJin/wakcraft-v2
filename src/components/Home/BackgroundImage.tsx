export default function BackgroundImage() {
  return (
    <div
      className="bg-background-secondary absolute left-0 top-0 z-[-1] flex h-full w-full items-center justify-center bg-main bg-cover bg-center bg-no-repeat"
      style={{
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0, 0.6)",
      }}
    ></div>
  );
}
