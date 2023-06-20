import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const BlockUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setSelectedUserId(id);
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const handleBlock = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/block/${selectedUserId}`);
      Swal.fire('User blocked successfully', 'Success');
      navigate('/ShowUser', { replace: true }); // Redirect to the user list page
    } catch (error) {
      console.error('Error blocking user:', error);
    }
  };

  const handleCancelBlock = () => {
    navigate('/ShowUser', { replace: true });
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Block</h5>
            <button type="button" className="close" onClick={handleCancelBlock}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to block {user && user.name}?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCancelBlock}>
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={handleBlock}>
              Block
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockUser;
