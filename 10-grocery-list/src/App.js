import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

// getting data from local storage to set items during initial render
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  // form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // setting up alert
      showAlert(true, "danger", "Please enter value");
    } else if (name && isEditing) {
      // edit function
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      // show alert
      showAlert(true, "success", "item added to list");
      const newItems = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItems]);
      setName("");
    }
  };

  // function for alert feature
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  // function for clearing the list
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  // function for deleting single item
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  // function for editing the item
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  // adding items to local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg. chicken"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
