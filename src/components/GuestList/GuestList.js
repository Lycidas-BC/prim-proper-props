import './GuestList.css';
import DeleteGuest from '../DeleteGuest/DeleteGuest';

function GuestList ({guestList, deleteGuestFromDb}) {
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
            <tr key={guest.id}>
              <td>{guest.name}</td>
              <td>{String(guest.kidsMeal)}</td>
              <DeleteGuest guestId={guest.id} deleteGuestFromDb={deleteGuestFromDb}/>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GuestList;