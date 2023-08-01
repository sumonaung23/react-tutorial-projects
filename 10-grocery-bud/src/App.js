import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

<<<<<<< HEAD
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
=======
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show:false,msg:'',type:''});
>>>>>>> 2a2d162b2e17f7eb14333c746926f5eb27ffbc80

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      // display alert
<<<<<<< HEAD
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      //deal with edit
      setList(list.map((item) => {
        if(item.id === editID){
          return {...item,title:name}
        }
        return item
      }))
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true,'success', 'value changed')
    } else {
      // show alert
      showAlert(true,'success','item added to the list')
=======

    } else if (name && isEditing) {
      //deal with edit
    } else {
      // show alert
>>>>>>> 2a2d162b2e17f7eb14333c746926f5eb27ffbc80
      const newItem = {id: new Date().getTime().toString(),title:name};
      setList([...list,newItem]);
      setName('');
    }
  }

<<<<<<< HEAD
  const showAlert = (show=false, type="", msg="") => {
    setAlert({show, type, msg})
  }

  const clearList = () => {
    showAlert(true,'danger','empty list');
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true,'danger','item removed');
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  }, [list])

=======
>>>>>>> 2a2d162b2e17f7eb14333c746926f5eb27ffbc80
  return (
    <section className='section-center'> 
      <div className="grocery-container">
        <form className='grocery-form' onSubmit={handleSubmit}>
<<<<<<< HEAD
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
=======
          {alert.show && <Alert />}
>>>>>>> 2a2d162b2e17f7eb14333c746926f5eb27ffbc80
          <h3>grocery bud</h3>
          <div className="form-control">
            <input type="text" className='grocery' placeholder='eg.egg' value={name} onChange={(e) => setName(e.target.value) } />
            <button className='submit-btn' type='submit'>
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
        {list.length > 0 && 
          <div className="grocery-container">
<<<<<<< HEAD
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>clear items</button>
=======
            <List items={list} />
            <button className="clear-btn">clear items</button>
>>>>>>> 2a2d162b2e17f7eb14333c746926f5eb27ffbc80
          </div>
        }
      </div>
    </section>
  );
}

export default App
