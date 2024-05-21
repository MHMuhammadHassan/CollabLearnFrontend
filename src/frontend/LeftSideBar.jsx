import React, { useState } from 'react';
import '../App.css'; // Make sure to import your Tailwind CSS file

const LeftSidebar = () => {
  const [activeTab, setActiveTab] = useState('chat');

  
  return (
    <aside className= ' bg-white shadow-md border-r h-screen transition-all '>
      {/* Profile Section */}
      <div className="flex items-center p-4 border-b justify-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10 mr-3"
        />
        
          <div>
            <h4 className="font-semibold">Daniyal Azfar Malik</h4>
            <p className="text-sm text-gray-500">student</p>
          </div>
        
      </div>

      {/* Activity Section */}
      <div className="p-4 border-b">
        <h4 className="text-gray-600 font-semibold mb-2">Activity</h4>
        <div className="bg-gray-100 p-3 rounded-lg">
          <h5 className="font-semibold">Talha Asad</h5>
          <p className="text-sm text-gray-600">Your postable Talha Asad got the highest upvotes in the post</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-between p-4 border-b">
        <button
          onClick={() => setActiveTab('chat')}
          className={`w-1/2 text-center py-2 ${activeTab === 'chat' ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"}`}
        >
          Chat
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`w-1/2 text-center py-2 ${activeTab === 'events' ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"}`}
        >
          Events
        </button>
      </div>

      {/* User List Section */}
      <div className="p-4 flex-1 overflow-y-auto">
        {activeTab === 'chat' && (
          <ul>
            {['Talha Asad', 'Ibrahim', 'Muhammad Hansen', 'Quddoos Abbas', 'Ghulam Haider', 'Hafiz Abdul Raheem', 'Abdullah Naveed', 'Anjum Naveed'].map(user => (
              <UserListItem key={user} name={user} />
            ))}
          </ul>
        )}
        {activeTab === 'events' && (
          <div>Events content here...</div>
        )}
      </div>

      {/* Footer Section */}
      
    </aside>
  );
}

const UserListItem = ({ name }) => (
  <li className="flex items-center p-2 rounded-lg hover:bg-gray-100">
    <img
      src="https://via.placeholder.com/30"
      alt={name}
      className="rounded-full w-8 h-8 mr-3"
    />
    <span>{name}</span>
  </li>
);


export default LeftSidebar;
