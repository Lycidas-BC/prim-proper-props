import './PartyLeader.css';

function PartyLeader ({leader}) {
  console.log('In PartyLeader Component with:', leader);

  return (
    <>
        <h2>Party Leader</h2>
        {leader && <h3>{leader.name}</h3>}
    </>
  );
}

export default PartyLeader;
