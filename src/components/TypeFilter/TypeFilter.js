import React from "react";

export default function TypeFilter(props) {
    let types = ["All"];
    props.data.map((item, index) => types.push(item.types));
    // console.log("types==>", types);
    // let stringTypes = types.map(JSON.stringify);
    // console.log("Stringy==>", stringTypes);
    // let uniqueTypes = new Set(stringTypes);
    // console.log(uniqueTypes);
    // let uniqueFinal = Array.from(uniqueTypes, JSON.parse);
    // console.log("THIS IS WHAT YOU WANT==>", uniqueFinal);

    let UniqueTypes = Array.from(new Set(types.map(JSON.stringify)), JSON.parse);
    console.log("THIS IS WHAT YOU WANT==>", UniqueTypes);

    return ( <
        div >
        <
        select className = "form-control form-control-sm"
        style = {
            {
                width: "100%",
            }
        } > {
            " "
        } {
            UniqueTypes.map((item, index) => ( <
                option key = {
                    index
                } > {
                    item
                } < /option>
            ))
        } <
        /select>{" "} < /
        div >
    );
}