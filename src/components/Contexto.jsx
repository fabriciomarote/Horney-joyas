import React, { useState } from "react";

export const Context = React.createContext();

    const ModalContext = ({children, other}) => {

        const [contextState, setContextState] = useState(false);

        return(
            <>
                <Context.Provider value = {[contextState, setContextState]}>{children}</Context.Provider>
            </>
        )
}

export default ModalContext;