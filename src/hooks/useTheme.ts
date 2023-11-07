const useTheme = () => {
  const handleModeClick = () => {
    const currentTheme = localStorage.getItem("theme");

    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", currentTheme === "dark" ? "light" : "dark");
  };

  return { handleModeClick };
};

export default useTheme;
