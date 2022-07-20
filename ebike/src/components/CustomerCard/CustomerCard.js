import React from 'react'
import styles from './CustomerCard.module.css'
import Star from '../Stars/Star'

const CustomerCard = () => {
const [users, setUsers] = React.useState([])
const [error, setError] = React.useState("")

  const fetchData = () => {
    fetch("https://62bc5d236b1401736cf8df8f.mockapi.io/api/v1/users")
      .then(response => 
        {
          if (response.ok) {
            return response.json()
          } 
          else {
            throw new Error("Sorry something went wrong!!!")
          }
        })
      .then(data => 
        setUsers(data)
      )
      .catch(error => {
        setError(error.message)
      })
  }
      React.useEffect(() => {
        fetchData()
      }, [])
    
  return (
    <section className={styles.container}>
        {error && <p style={{color: '#f00', fontSize: '2rem'}}>{error}</p>}
        {users.map(user => (
            <>      
                {user.comments.length > 0 && (
                  <div className={styles.cards}>
                      <p>{user.comments.map(comment =>
                          comment.text)}</p>
                      <div className={styles.info}>
                          <img src={user.avatar} alt="Avatar" className={styles.avatar}/>
                          <span>
                              <p className={styles.name}>{user.name}</p>
                              <Star/>
                          </span>
                      </div>
                  </div>
              )}
            </>
        ))}
    </section>
    
  )
}

export default CustomerCard
