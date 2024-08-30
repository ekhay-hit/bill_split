/* eslint-disable react/prop-types */
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // const [isOpen, setisOpen] = useState(false);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

//**************************** */ Friend list component *******************************************
function FriendList() {
  const friends = [...initialFriends];
  return (
    <ul>
      {friends.map((friend) => (
        <>
          <Friend friend={friend} key={friend.id} />
        </>
      ))}
    </ul>
  );
}

//******************************* */ friend component ****************************************
function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {/* render the condition for the text color base on how owe */}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="red">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

// *************** Button component: because button is used in may places**************************

function Button({ children }) {
  return <button className="button">{children}</button>;
}

//************Add friend form Componenet **********************************************************
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Name</label>
      <input type="text"></input>
      <label>🎞️ Image URL</label>
      <input type="text"></input>
      <Button>Add</Button>
    </form>
  );
}

// *** Form split bill component ********************************************************************
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>SPILIT A BILL WITH X</h2>
      <label>💰Bill value</label>
      <input type="text" />

      <label>🙎‍♂️Your expense</label>
      <input type="text" disabled />

      <label>🧑‍🤝‍🧑X's expense</label>
      <input type="text" />

      <label>💸Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">friend</option>
      </select>
      <Button>Split the bill</Button>
    </form>
  );
}
