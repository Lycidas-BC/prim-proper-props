import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestList from '../GuestList/GuestList';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm';
import PartyLeader from '../PartyLeader/PartyLeader';
import DeleteGuest from '../DeleteGuest/DeleteGuest';
import Guest from '../Guest/Guest';

function App() {
  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }

  const addGuest = () => {
    axios.post('/guests', { name: newGuestName, kidsMeal: newGuestMeal })
      .then(response => {
        // clear inputs
        setNewGuestName('');
        setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };

  const deleteGuestFromDb = (guestId) => {
    console.log('deleting guest:', guestId);
    axios.delete(`/guests/${guestId}`)
      .then(response => {
        // clear inputs
        setNewGuestName('');
        setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Deleting Guest');
        console.log(err);
      })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newGuestName) {
      addGuest();
    }
    else {
      alert('The new guest needs a name!');
    }
  }

  console.log(newGuestMeal)
  return (
  <div className="App">
    <Header />
    <PartyLeader leader={guestList[0]}/>
    <GuestForm
      newGuestName={newGuestName}
      setNewGuestName={setNewGuestName}
      newGuestMeal={newGuestMeal}
      setNewGuestMeal={setNewGuestMeal}
      handleSubmit={handleSubmit}
    />
    <GuestList
      guestList={guestList}
      deleteGuestFromDb={deleteGuestFromDb}
      Guest={Guest}
      DeleteGuest={DeleteGuest}
    />
    <DinnerSupplies guestList={guestList} />
    <Footer />
  </div>
  );
}

export default App;
