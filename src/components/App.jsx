import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile
        username="Jacques Gluke"
        tag="jgluke"
        location="Ocho Rios, Jamaica"
        avatar="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        stats={{
          followers: 5603,
          views: 4827,
          likes: 1308
        }}
      />

      <Statistics
        title="Upload stats"
        stats={[
          { id: "id-1", label: ".docx", percentage: 4 },
          { id: "id-2", label: ".mp3", percentage: 14 },
          { id: "id-3", label: ".pdf", percentage: 41 },
          { id: "id-4", label: ".mp4", percentage: 12 }
        ]}
      />

      <FriendList
        friends={[
          {
            id: 1,
            isOnline: true,
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            name: "John Doe"
          },
          {
            id: 2,
            isOnline: false,
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            name: "Jane Smith"
          },
          // Add more friend objects here
        ]}
      />

      <TransactionHistory
        items={[
          {
            id: "id-1",
            type: "Invoice",
            amount: "$125",
            currency: "USD"
          },
          {
            id: "id-2",
            type: "Withdrawal",
            amount: "$85",
            currency: "USD"
          },
          // Add more transaction objects here
        ]}
      />
    </div>
  );
};

export default App;
