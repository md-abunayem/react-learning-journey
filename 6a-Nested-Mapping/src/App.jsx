function App() {
  const users = [
    {
      fullname: "Nayem",
      age: 24,
      phones: [
        {
          home: "9787475",
          office: "458374498",
        },
      ],
    },
    {
      fullname: "Nazmus Saadat",
      age: 25,
      phones: [
        {
          home: "748758745",
          office: "47584763",
        },
      ],
    },
  ];

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "green",
          backgroundColor: "purple",
          padding: "20px",
        }}
      >
        Nested List (Mapping)
      </h1>

      {users.map((user, index) => {
        return (
          <div key={index}>
            <h3>Name : {user.fullname}</h3>
            <h5>Age: {user.age}</h5>
            {/* <p>{user.phones[0]?.office}</p> */}
            {user.phones.map((number) => {
              return (
                <div key={number}>
                  <p>Home: {number.home}</p>
                  <p>Office: {number.office}</p>
                </div>
              );
            })}

            <hr />
          </div>
        );
      })}
    </>
  );
}

export default App;
