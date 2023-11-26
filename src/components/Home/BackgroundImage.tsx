export default function BackgroundImage({ url }: { url: string }) {
  return (
    <div
      className="absolute left-0 top-0 z-[-1] hidden h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat md:flex md:bg-background-secondary"
      style={{
        backgroundImage: `url("${url}")`,
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0,0,0, 0.6)",
      }}
    ></div>
  );
}
