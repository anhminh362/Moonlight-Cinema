import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminUsersDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    setSelectedUserId(id);
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://647783419233e82dd53bc684.mockapi.io/mypham/users/${selectedUserId}`);
      Swal.fire('Đã xóa thành công',"Successful");
      navigate('/ShowUser', { replace: true }); // Redirect to the user list page
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleCancelDelete = () => {
    navigate('/ShowUser', { replace: true });
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Delete</h5>
            <button type="button" className="close" onClick={handleCancelDelete}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this user?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCancelDelete}>
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersDelete;
