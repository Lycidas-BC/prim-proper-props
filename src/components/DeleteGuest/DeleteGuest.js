import './DeleteGuest.css';

function DeleteGuest ({guestId, deleteGuestFromDb}) {
  console.log('In DeleteGuest Component with:', guestId);

  const handleDelete = () => {
    console.log('in handleDelete', guestId);
    deleteGuestFromDb(guestId);
  };

  return (
    <>
      <td><button style={{border: "0", backgroundColor: "red", borderRadius: "20%"}} onClick={handleDelete}>Delete</button></td>
    </>
  );
}

export default DeleteGuest;
