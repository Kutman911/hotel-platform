import React from 'react';
import {addRoom} from "../utils/ApiFunctions.js";
import RoomTypeSelector from "../common/RoomTypeSelector.jsx";

const AddRoom = () => {

    const [newRoom, setNewRoom] = React.useState({
        photo: null,
        roomType: '',
        roomPrice: ''
    });

    const [imagePreview, setImagePreview] = React.useState("");
    const [successMessage, setSuccessMessage] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleRoomInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === "roomPrice") {
            if (!isNaN(value)) {
                value = parseInt(value);
            } else {
                value = "";
            }
        }
        setNewRoom({...newRoom, [name]: value});
    }

    const handleImageChange = e => {
        const selectedImage = e.target.files[0];
        setNewRoom({...newRoom, photo: selectedImage});

        setImagePreview(URL.createObjectURL(selectedImage));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice);
            if (success !== undefined) {
                setSuccessMessage("Room added successfully!");
                setNewRoom({photo: null, roomType: '', roomPrice: ''});
                setImagePreview("");
                setErrorMessage("");
            } else {
                setErrorMessage("Failed to add room. Please try again.");
            }
        } catch {
            setErrorMessage("Failed to add room. Please try again.");
        }
    }


    return (
        <>
            <section className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <h2 className="mt-5 mb-2">Add a new Room</h2>
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="roomType" className="form-label">
                                    Room Type
                                </label>
                                <RoomTypeSelector
                                    handleRoomInputChange={handleRoomInputChange}
                                    newRoom={newRoom}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="roomPrice" className="form-label">
                                    Room Price
                                </label>
                                <input className="form-control" required
                                       id="roomPrice"
                                       name="roomPrice"
                                       type="number"
                                       value={newRoom.roomPrice}
                                       onChange={handleRoomInputChange}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="roomPhoto" className="form-label">
                                    Room Photo
                                </label>
                                <input className="form-control" required
                                       id="photo"
                                       name="photo"
                                       type="file"
                                       onChange={handleImageChange}/>
                                {imagePreview &&
                                    (<img src={imagePreview} alt="preview room photo"
                                          style={{maxWidth: "400px", maxHeight: "400px"}}
                                          className="mb-3"/>
                                    )}
                            </div>

                            <div className="d-grid gap-2 mt-2">
                                <button type="submit" className="btn btn-outline-primary">
                                    Save room
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddRoom;
