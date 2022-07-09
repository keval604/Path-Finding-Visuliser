import React from "react";

const VisContext=React.createContext({
    visArray : (new Array(20)).fill().map(function(){ return new Array(45).fill(false);}),

});

export default VisContext;