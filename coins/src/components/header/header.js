const Header = (props) => {
   return (
      <div className='header'>
        <button onClick={() => props.changeCur('GEL')}>GEL</button>
        <button onClick={() => props.changeCur('USD')}>USD</button>
      </div>
   )
}

export default Header