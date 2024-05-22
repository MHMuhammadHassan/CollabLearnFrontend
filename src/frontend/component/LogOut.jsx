// eslint-disable-next-line no-unused-vars
import { Import } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import cross from '../../assets/cross_icon1.png';
export function LogOut() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const profileinfo = {
    name: 'Muhammad Hassan',
    img: '',
    type: 'Student'
  };

  return (
    <>
      <div className="flex items-center cursor-pointer" onClick={toggleModal}>
      <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10 mr-3"
        />
        
          <div>
            <h4 className="font-semibold">Daniyal Zafar Malik</h4>
            <p className="text-sm text-gray-500">student</p>
          </div>
      </div>

      {isModalOpen && (
        <div className="absolute right-60 flex items-center justify-center z-50 rounded-lg shadow-lg" onClick={toggleModal}>
          <div className="bg-white p-4 w-full max-w-xs md:max-w-sm lg:max-w-md border rounded-lg shadow-lg relative" onClick={e => e.stopPropagation()}>
            <a href="/UserProfile">
              <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
                <img src={profileinfo.img} alt="Profile" className="w-8 h-8 rounded-full" />
                <p className="ml-2">My Profile</p>
              </div>
            </a>
            <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
              <p>Settings & Privacy</p>
            </div>
            <a href="/signOut">
              <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
                <p>Log out</p>
              </div>
            </a>
            <img src={cross} alt="Close" className="w-3 h-3 absolute top-2 right-2 cursor-pointer" onClick={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default LogOut;
