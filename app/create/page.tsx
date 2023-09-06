'use client';

import React, { useState } from 'react';

const page = () => {
  const [list, setList] = useState([]);
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formValue = new FormData(e.target as HTMLFormElement);
    let name = formValue.get('name') as string;
    let price = parseFloat(formValue.get('price') as string);
    let quantity = parseFloat(formValue.get('quantity') as string);
    let total = price * quantity;

    // console.log(name, price, quantity, total);
    let val = { id: new Date().getTime(), price, name, quantity, total };

    // setList((v) => v?.concat([val]));
    // console.log(list);
  };
  return (
    <>
      <form action="" onSubmit={handelSubmit}>
        <input type="text" name="name" />
        <input type="text" name="price" />
        <input type="text" name="quantity" />
        {/* <input type="text" name="total" /> */}
        <button>Add</button>
      </form>
    </>
  );
};

export default page;
