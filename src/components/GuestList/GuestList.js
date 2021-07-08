import './GuestList.css';

function GuestList ({guestList, deleteGuestFromDb, Guest, DeleteGuest}) {
  console.log('In GuestList Component with:', guestList);

  return (
    <>
    <h2>Guest List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Kid's Meal</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map(guest => (
            <Guest guest={guest} deleteGuestFromDb={deleteGuestFromDb} DeleteGuest={DeleteGuest}/>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GuestList;