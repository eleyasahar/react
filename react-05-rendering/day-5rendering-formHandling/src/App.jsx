import React, { useState } from 'react' // 1. यहाँ useState इंपोर्ट किया

const App = () => {

  // useState = state maintain karne ke liye use hota hai own component ke rerendering state update krne kie liye or interactivity provide krne ke liye use hota hai 
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name: "John",
  })

  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>Name is - {user.name}</h1>

      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
      
      {/* 2. ऑब्जेक्ट को सही तरीके से अपडेट किया */}
      <button onClick={() => {
         setUser({ ...user, name: "Doe" }); 
      }}>Change Name</button>
    </div>
  )
}

export default App