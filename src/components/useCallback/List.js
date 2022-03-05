import React, { useEffect, useState } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems())
    console.log('Updating numbers')
  }, [getItems])

  return (
    <div>
      {items}
    </div>)
}

export default List;