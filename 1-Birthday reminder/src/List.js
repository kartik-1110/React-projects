import React from "react";

const List = ({ people }) => {
  return (
    <div className="person">
      {/* mapping over the data array */}
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="individual-person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
