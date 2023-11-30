import { createContext, useState } from "react";

export const MemberContext = createContext();

function MemberContextProvider({ children }) {
  const [selectedMemberName, setSelectedMemberName] = useState("all");
  return (
    <MemberContext.Provider
      value={{ selectedMemberName, setSelectedMemberName }}
    >
      {children}
    </MemberContext.Provider>
  );
}

export default MemberContextProvider;
