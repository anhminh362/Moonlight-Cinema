import React, { useState, useEffect } from "react";
import axios from "axios";

const Add = () => {
	const [roomOptions, setRoomOptions] = useState([]);
	const [formData, setFormData] = useState({
		movie_id: "",
		room_id: "",
		time_begin: "",
		time_end: "",
		movie_date: "",
		price: ""
	});

	useEffect(() => {
		fetchRoomOptions();
	}, []);

	const fetchRoomOptions = async () => {
		try {
			const response = await axios.get("http://127.0.0.1:8000/api/room");
			setRoomOptions(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmitHandle = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://127.0.0.1:8000/api/schedule", {
				...formData
			});
			alert("Thêm thành công");
			document.getElementById("closeModalAddBtn").click();
		} catch (error) {
			console.log(error);
			alert("Thêm không thành công");
		}
	};

	return (
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">FORM ADD SCHEDULE</h5>
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModalAddBtn"></button>
				</div>
				<div className="modal-body" id="modal-body">
					<form onSubmit={onSubmitHandle} className="form-form">
						<br />
						<input type="hidden" id="schedule-id" name="id" />
						<input type="hidden" id="movie_id" name="movie_id" />
						{/* <label htmlFor="movie_id" className="title-title"> Movie: </label>
						<input name="movie_id" id="movie_id" type="number" className="input-btn" value={formData.movie_id} onChange={handleChange} /> */}
						<label htmlFor="room_id" className="title-title"> Room:</label>
						<select id="room_id" name="room_id" value={formData.room_id} onChange={handleChange} >
							{roomOptions.map((room) => (
								<option key={room.id} value={room.id}>{room.name}</option>
							))}
						</select>
						<br />
						<br />
						<label htmlFor="time_begin" className="title-title"> Time begin: </label>
						<input name="time_begin" id="time_begin" type="time" className="input-btn" value={formData.time_begin} onChange={handleChange} />
						<br /> <br />
						<label htmlFor="time_end" className="title-title"> Time end: </label>
						<input name="time_end" id="time_end" type="time" className="input-btn" value={formData.time_end} onChange={handleChange} />
						<br /> <br />
						<label htmlFor="movie_date" className="title-title"> Movie date: </label>
						<input type="date" id="movie_date" className="input-btn" name="movie_date" value={formData.movie_date} onChange={handleChange} />
						<br />
						<br />
						<label htmlFor="price" className="title-title"> Price:</label>
						<input name="price" id="price" type="number" className="input-btn" value={formData.price} onChange={handleChange} />
						<br /> <br />
						<div className="modal-footer">
							<button type="submit" className="btn bg-danger text-white">  Add </button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Add;
