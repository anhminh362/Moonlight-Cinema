import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UnblockUser = () => {
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

  const handleUnblock = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/unblock/${selectedUserId}`, {
        status: 1,
      });
      Swal.fire('User unblocked successfully', 'Success');
      navigate('/ShowUser', { replace: true }); // Redirect to the user list page
    } catch (error) {
      console.error('Error unblocking user:', error);
    }
  };

  const handleCancelUnblock = () => {
    navigate('/ShowUser', { replace: true });
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Unblock</h5>
            <button type="button" className="close" onClick={handleCancelUnblock}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to unblock {user && user.name}?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleCancelUnblock}>
              Cancel
            </button>
            <button type="button" className="btn btn-success" onClick={handleUnblock}>
              Unblock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnblockUser;
