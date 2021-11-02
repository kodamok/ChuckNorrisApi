import MyContext from "./MyContext";

const MyProvider = (props) => {
 

  return (
    <MyContext.Provider
      value={{}}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
