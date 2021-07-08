import './DinnerSupplies.css';

function DinnerSupplies ({guestList}) {
  console.log('In DinnerSupplies Component with:', guestList);

  return (
    <>
        <h2>Dinner Supplies</h2>
        <div>
            Spoons: {guestList.length * 2}
        </div>
        <div>
            Forks: {guestList.length * 2}
        </div>
        <div>
            Knives: {guestList.length * 2}
        </div>
    </>
  );
}

export default DinnerSupplies;
