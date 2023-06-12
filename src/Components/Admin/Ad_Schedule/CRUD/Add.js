import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import DataTable from "react-data-table-component";

const Add = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);


    useEffect(() => {
        componentDidMount();
    }, []);

    const componentDidMount = async () => {
        try {
            const response = await axios.get("https://63a572122a73744b008e28d5.mockapi.io/api/schedules");
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmitHandle = async (e) => {
        e.preventDefault();
        try {
             await axios.post("https://63a572122a73744b008e28d5.mockapi.io/api/schedules", {
                movie_id: $("#inputMovie").val(),
                room_id: $("#inputRoom").val(),
                movie_date: $("#inputMovieDate").val(),
                time_begin: $("#inputTimeBegin").val(),
                time_end: $("#inputTimeEnd").val(),
                price: $("#inputPrice").val(),
            });
            alert("Thêm thành công");
            $("#closeModalAddBtn").click();
            componentDidMount();
        } catch (error) {
            console.log(error);
            alert("Thêm không thành công");
        }
    };

    const deleteProduct = async (id) => {
        if (window.confirm(`Bạn muốn xóa sản phẩm có id là ${id}`)) {
            try {
                await axios.delete(`https://63a572122a73744b008e28d5.mockapi.io/api/schedules/${id}`);
                alert("Xóa thành công");
                componentDidMount();
            } catch (error) {
                console.log(error);
                alert("Xóa không thành công");
            }
        } else {
            alert("Xóa không thành công");
        }
    };

    const submitEditProduct = async (e) => {
        e.preventDefault();
        const id = $("#editID").val();
        try {
             await axios.put(`https://63a572122a73744b008e28d5.mockapi.io/api/schedules/${id}`, {
                movie_id: $("#editMovie").val(),
                room_id: $("#editRoom").val(),
                movie_date: $("#editMovieDate").val(),
                time_begin: $("#editTimeBegin").val(),
                time_end: $("#editTimeEnd").val(),
                price: $("#editPrice").val(),
            });
            alert("Sửa thành công");
            $("#closeModalEditBtn").click();
            componentDidMount();
        } catch (error) {
            console.log(error);
            alert("Sửa không thành công");
        }
    };

    const columns = [
        {
            name: "ID",
            selector: "id",
            sortable: true,
        },
        {
            name: "Movie",
            selector: "movie_id",
            sortable: true,
        },
        {
            name: "Room",
            selector: "room_id",
            sortable: true,
        },
        {
            name: "Movie Date",
            selector: "movie_date",
            sortable: true,
        },
        {
            name: "Time Begin",
            selector: "time_begin",
            sortable: true,
        },
        {
            name: "Time End",
            selector: "time_end",
            sortable: true,
        },
        {
            name: "Price",
            selector: "price",
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) => (
                <div >
                    <button data-tag="allowRowEvents" onClick={() => { editProduct(row); }} type="button" data-toggle="modal" data-target="#editModal"style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}><ion-icon name='pencil-outline'class='icon-ac-edit'/></button>
                    <button data-tag="allowRowEvents" type="button"  onClick={() => { deleteProduct(row.id); }}style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}><ion-icon name='trash-outline' class='icon-ac-del'/></button>
                </div>
            ),
            button: true,
        },
    ];

    const editProduct = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            <div className="container" >
                <DataTable columns={columns} data={products} fixedHeader={true} responsive={true} highlightOnHover={true}  
                customStyles={{
                    rows: {
                        style: {
                        background: "#0B1A2A",
                        color: "white", 
                        },
                    },
                   
                    }
                }
                />
            </div>
            {/* Modal Add */}
            <div className="modal fade" id="addModal" tabIndex={-1} role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header btn bg-danger text-white">
                            <h5 className="modal-title" id="addModalLabel"> Add Schedule</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModalAddBtn"></button>
                        </div>
                        <div className="modal-body" style={{background:"#0B1A2A"}}>
                            <form onSubmit={onSubmitHandle} style={{background:"#0B1A2A"}}>
                                <div className="mb-3">
                                    <label htmlFor="inputMovie" className="form-label text-white">Movie</label>
                                    <input type="name" className="form-control" id="inputMovie" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputRoom" className="form-label  text-white">Room</label>
                                    <input type="number" className="form-control" name="inputRoom" id="inputRoom" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputMovieDate" className="form-label  text-white">Movie Date</label>
                                    <input type="date" className="form-control" name="inputMovieDate" id="inputMovieDate" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputTimeBegin" className="form-label  text-white">Time Begin</label>
                                    <input type="time" className="form-control" name="inputTimeBegin" id="inputTimeBegin" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputTimeEnd" className="form-label  text-white">Time End</label>
                                    <input type="time" className="form-control" name="inputTimeEnd" id="inputTimeEnd" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPrice" className="form-label  text-white">Price</label>
                                    <input type="number" min={1000} className="form-control" name="inputPrice" id="inputPrice" required />
                                </div>
                                <button type="submit" className="btn bg-danger text-white">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                {/* Modal Edit */}
            <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header btn bg-danger text-white">
                            <h5 className="modal-title" id="editModalLabel">Edit Schedule</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeModalEditBtn">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {selectedProduct && (
                            <form onSubmit={submitEditProduct}>
                                <div className="modal-body" style={{background:"#0B1A2A"}}>
                                    <div className="form-group" style={{background:"#0B1A2A"}}>
                                        <label htmlFor="editID"className="text-white">ID</label>
                                        <input type="text" className="form-control" id="editID" defaultValue={selectedProduct.id} readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editMovie" className=" text-white">Movie</label>
                                        <input type="name" className="form-control" id="editMovie" defaultValue={selectedProduct.movie_id} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editRoom" className=" text-white">Room</label>
                                        <input type="number" className="form-control" id="editRoom" defaultValue={selectedProduct.room_id} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editMovieDate" className=" text-white">Movie Date</label>
                                        <input type="date" className="form-control" id="editMovieDate" defaultValue={selectedProduct.movie_date} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editTimeBegin" className=" text-white">Time Begin</label>
                                        <input type="time" className="form-control" id="editTimeBegin" defaultValue={selectedProduct.time_begin} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editTimeEnd" className=" text-white">Time End</label>
                                        <input type="time" className="form-control" id="editTimeEnd" defaultValue={selectedProduct.time_end} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editPrice" className=" text-white">Price</label>
                                        <input type="number" min={1000} className="form-control" id="editPrice" defaultValue={selectedProduct.price} />
                                    </div>
                                    <button type="submit" className="btn bg-danger text-white">Update</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
