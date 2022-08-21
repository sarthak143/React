import Child from "./Child";

function Parent() {

    let ParentHandler = (childData) => {
        console.log(childData);
    }
    return (
        <div>
            {/* <h1> {msg}</h1> */}
            <Child ParentCallback={ParentHandler} s="iyewbk" />
        </div>
    );
}

export default Parent;
