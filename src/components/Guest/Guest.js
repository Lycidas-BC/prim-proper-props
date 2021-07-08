import './Guest.css';

function Guest ({guest, deleteGuestFromDb, DeleteGuest}) {
  console.log('In Guest Component with:');

  return (
    <>
      <tr key={guest.id}>
        <td>{guest.name}</td>
        <td>{String(guest.kidsMeal)}</td>
        <DeleteGuest guestId={guest.id} deleteGuestFromDb={deleteGuestFromDb}/>
      </tr>
    </>
  );
}

export default Guest;
