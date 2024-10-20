import GalleryProvider from "./store/GalleryProvider";


function App() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <div className="font-EstedadRegular bg-lightmodeBg dark:bg-darkmodeBg">
      <main>
        <GalleryProvider>
        

        </GalleryProvider>
      </main>
      
    </div>
  );
}

export default App;
