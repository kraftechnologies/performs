import React from "react";

const TopBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white text-black text-xs">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 py-2">
                {/* Social Icons as Images */}
                <div className="flex space-x-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src="/icons8-facebook-logo.svg" alt="Facebook" className="w-4 h-4 hover:opacity-80" />
                    </a>
                    <a href="https://www.instagram.com/kraftechnologies?igsh=MTZ2NncwM2xjOGU1NA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src="/icons8-instagram-logo.svg" alt="Instagram" className="w-4 h-4 hover:opacity-80" />
                    </a>
                    <a href="https://www.linkedin.com/company/kraftechnologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src="/icons8-linkedin-logo.svg" alt="LinkedIn" className="w-4 h-4 hover:opacity-80" />
                    </a>
                </div>

                {/* Contact Info */}
                <div className="flex space-x-4">
                    <span className="hover:opacity-80">PerformX@gmail.com</span>
                    <span className="hover:opacity-80">+91 8452318457</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
