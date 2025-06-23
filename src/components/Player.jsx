import { useState } from "react"

function Players() {
  const [form, setForm] = useState({
    name:"",
    number:"",
    position:"",
    club:""
  })
  const [players, setPlayers] = useState([])
  const handleChange = (event)=>{
    const {name, value} = event.target
    setForm({...form, [name]:value})
  }
  const submit = (event)=>{
    event.preventDefault();
    let isFind = false
    const {name} = form
    for(let item of players){
      if(item.name===name){
        isFind=true
      }
    }
    if(!isFind){
      setPlayers(prevItems=>[...prevItems, {...form}])
    }
  }
   return (
    <div className="container">
      <div className="col-md-12 mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Football Player</h2>
              </div>
              <div className="card-body">
                <form onSubmit={submit} id="player">
                  <input type="text" onChange={handleChange} name="name" className="form-controll my-2" placeholder="Name..."/>
                  <input type="text" onChange={handleChange} name="number" className="form-controll my-2" placeholder="Player number..."/>
                  <input type="text" onChange={handleChange} name="position" className="form-controll my-2" placeholder="Position..."/>
                  <input type="text" onChange={handleChange} name="club" className="form-controll my-2" placeholder="Club..."/>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-success" form="player">Create</button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>Name</th>
                  <th>Player Number</th>
                  <th>Position</th>
                  <th>Club</th>
                </tr>
              </thead>
              <tbody>
                {
                  players.map((item, index)=>{
                    return <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.name}</td>
                      <td>{item.number}</td>
                      <td>{item.position}</td>
                      <td>{item.club}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Players
