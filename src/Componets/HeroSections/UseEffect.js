import { useEffect } from "react";

const navUseEffect = ()=>{
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
    
        // Initial check
        if (mediaQuery.matches) {
          setShowNav(true); // desktop = show nav
        } else {
          setShowNav(false); // mobile = hide nav
        }
    
        const handleMediaChange = (e) => {
          if (e.matches) {
            setShowNav(true); // desktop
          } else {
            setShowNav(false); // mobile
          }
        };
    
        mediaQuery.addEventListener("change", handleMediaChange);
    
        // Cleanup
        return () => {
          mediaQuery.removeEventListener("change", handleMediaChange);
        };
      }, []);
}


export default navUseEffect