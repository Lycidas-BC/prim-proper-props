import './SilverWare.css';

function SilverWare ({name, count}) {
  console.log('In SilverWare Component with:', {name, count});

  return (
    <>
        <div>
            {name}: {count * 2}
        </div>
    </>
  );
}

export default SilverWare;
