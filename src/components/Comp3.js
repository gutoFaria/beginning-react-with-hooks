import React from 'react';

function formatName(user){
  return user.firsName + " " + user.lastName;
}

function Comp3() {
  const user ={
    firsName:'Greg',
    lastName:'Tan',
    imageUrl:'https://picsum.photos/200/300'
  }
  return (
    <div>
        <h1>
          Hello,{formatName(user)}
          <br/>
          <img src={user.imageUrl}/>
        </h1>
    </div>
  );
}

export default Comp3;
