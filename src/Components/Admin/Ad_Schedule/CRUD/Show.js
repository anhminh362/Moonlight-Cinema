import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import DataTable from "react-data-table-component";
import '../Ad_Schedule.css';
import '../../Admin.css';
const Show = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);



    useEffect(() => {
        componentDidMount();
    }, []);

    const componentDidMount = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/schedule');
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const deleteProduct = async (id) => {
        if (window.confirm(`Bạn muốn xóa sản phẩm có id là ${id}`)) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/schedule/${id}`);
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
            await axios.put(`http://127.0.0.1:8000/api/schedule/${id}`, {
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
                    <button data-tag="allowRowEvents" onClick={() => { editProduct(row); }} type="button" data-toggle="modal" data-target="#editModal" style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}><ion-icon name='pencil-outline' class='icon-ac-edit' /></button>
                    <button data-tag="allowRowEvents" type="button" onClick={() => { deleteProduct(row.id); }} style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}><ion-icon name='trash-outline' class='icon-ac-del' /></button>
                </div>
            ),
            button: true,
        },
    ];

    const editProduct = (product) => {
        setSelectedProduct(product);
    };
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2 background-left ">
                    <div><img class="logo" src="../../asset/picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png" alt="" /><b class="logo_text">MoonLight</b></div>
                    <div class="row">
                        <a href="ad_user.php" class="icon-play">
                            <ion-icon name="person"></ion-icon>
                            <b> Users</b>
                        </a>
                    </div><br /><br />
                    <div class="row">
                        <a href="ad_film.php" class="icon-play">
                            <ion-icon name="play-circle"></ion-icon>
                            <b> Films</b>
                        </a>
                    </div><br /><br />
                    <div class="row">
                        <a href="ad_schedule.php" class="icon-item">
                            <i class="fa-solid fa-calendar-days"></i>
                            <b> Schedule</b>
                        </a>
                    </div>
                </div>
                <div class="col-lg-10 background-right">
                    <div class="row">
                        <div class="col-lg-10">
                        </div>
                        <div class="col-lg-2">
                            <div class="icon-user">
                                <ion-icon name="person-circle" class="icon-acc"></ion-icon>
                                <a class="text-signout" href="#">Kieu</a>
                            </div>
                        </div>
                    </div>
                    <div class="row backgroud-bar">
                        <div class="col-sm-3">
                            <span class="bar-user">User </span>
                            <span class="line-line">/</span>
                            <span class="bar-film">Schedule</span>
                        </div>
                        <div class="col-sm-6">

                        </div>
                        <div class="col-sm-3">
                            <span class="mess">Hello!</span>
                            <span class="name-acc">Kieu hi</span>
                        </div>
                    </div>

                    <div class="container"> <br /><br />
                        {/* Modals Mở */}
                        <div className="container">
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
                               
                                {/* Modal Edit */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Show;