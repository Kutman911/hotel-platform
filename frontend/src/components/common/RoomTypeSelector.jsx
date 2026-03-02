import React, {useEffect, useState} from 'react';
import {getRoomTypes} from "../utils/ApiFunctions.js";

const RoomTypeSelector = ({handleRoomInputChange, newRoom}) => {
    const [roomType, setRoomType] = useState([""]);
    const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
    const [newRoomType, setNewRoomType] = useState("");

    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomType(data);
        })
    }, []);

    const handleNewRoomTypeChange = (e) => {
        setNewRoomType(e.target.value);
    }

    const handleAddNewRoomType = () => {
        if (newRoomType !== "") {
            setRoomType([...roomType, newRoomType]);
            setNewRoomType("");
            setShowNewRoomTypeInput(false);
        }
    }

    return (
       <>
           {roomType.length > 0 && (
           <div>
               <select
                   id="roomType"
                   name="roomType"
                   value={newRoomType}
                   onChange={(e) => {
                       if (e.target.value === "Add New") {
                           setShowNewRoomTypeInput(true);
                       } else {
                           handleRoomInputChange(e);
                       }
                   }}>
                   <option value={""}>select a room type</option>
                   <option value={"Add new"}>Add new room</option>
                   {roomType.map((type, index) => (
                       <option key={index} value={type}>
                            {type}
                       </option>
                   ))}
               </select>
               {showNewRoomTypeInput && (
                   <div className="input-group">
                       <input
                           className="form-control mt-2"
                           type="text"
                           value={newRoomType}
                           onChange={handleNewRoomTypeChange}
                           placeholder="Enter a new room type"
                       />
                       <button onClick={handleAddNewRoomType} className="btn btn-primary mt-2">
                           Add Room Type
                       </button>
                   </div>
               )}
           </div>
           )}
       </>
    );
}

export default RoomTypeSelector;