import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import EditUserName from "../EditUserName";
import { UpdateUserInfos } from "../../services/ApiCall";
import { UserInfos } from "../../services/ApiCall";

function Username(props) {
  const first = useSelector((state) => state.Actions.firstName);
  const last = useSelector((state) => state.Actions.lastName);
  const [isEditActive, setIsEditActive] = useState(false);
  const token = useSelector((state) => state.Actions.token)
  const [firstName, setNewFirstName] = useState()
  const [lastName, setNewLastName] = useState()
  const dispatch = useDispatch();


  const isEdit = () => {
    if(!isEditActive) {
      setIsEditActive(true)
    }
  }
  const cancelFunction = () => {
    if(isEditActive) {
      setIsEditActive(false)
    }
  }
 const edit = async (e) => {
    e.preventDefault();
    await UpdateUserInfos(firstName, lastName, token)
    const infos = await UserInfos(token)
    dispatch({
      type: "UpdateName",
      firstName: infos.firstName,
      lastName : infos.lastName,
  })
    setIsEditActive(false)
  }

  function changeFirstName(e) {
     setNewFirstName(e.target.value)
  }

  function changeLastName(e) {
    setNewLastName(e.target.value)
  }


    return (
      <div>
        {
          isEditActive ? (
            <EditUserName
              save={edit}
              cancel={cancelFunction}
              changeFirstName={changeFirstName}
              changeLastName={changeLastName}
            />
          ) : (
                <div className="header">
                  <h1>Welcome back<br />{first} {last}!</h1>
                  <button className="edit-button" onClick={isEdit}>Edit Name</button>
                </div>
              )
          }
      </div>
    )
}

export default Username