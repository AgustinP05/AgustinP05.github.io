window.onscroll = ()=> {
    const header = document.getElementById("header");

    header.className = document.documentElement.scrollTop > 50 
    ? "backdrop-blur-sm bg-gray-900/50 bg-opacity-50  fixed top-0 left-0 right-0 py-3 sm:text-[24px] font-extrabold shadow-xl shadow-gray-800/50 rounded-b-3xl flex items-center justify-center z-30 transition-all duration-300"
    : "fixed top-0 left-0 right-0 py-3 text-[18px] font-bold flex items-center justify-center z-30 transition all duration-300"
};