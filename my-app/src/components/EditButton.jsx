import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "8px",
  borderRadius: "8px"
};

export const EditButton = (props) => {
  const { isAdmin } = useContext(AdminFlagContext);
  console.log("EditButton");

  return (
    <button style={style} disabled={!isAdmin}>編集</button>
  )
}