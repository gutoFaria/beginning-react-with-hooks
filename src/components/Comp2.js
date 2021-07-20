import React from 'react';

function formatName(user){
  return user.firsName + "" + user.lastName;
}

function Comp2() {
  const user ={
    firsName:'Greg',
    lastName:'Lim'
  }
  return (
    <div>
        <h1>
          Hello,{formatName(user)}
        </h1>
    </div>
  );
}

export default Comp2;
