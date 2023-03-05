export const User = (user) => {
  return (
    <div className='user'>
      <img className='photo' src={user.avatar} alt={user.first_name} />
      <div className='username'>
        <h2 className='name'>{`${user.first_name} ${user.last_name}`}</h2>
        <span className='email'>{`${user.email}`}</span>
      </div>
      <button className='btn'>Accept</button>
    </div>
  )
}