import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const [dataId, setDataId] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  const apiUrl = `https://636dcdca91576e19e33052c1.mockapi.io/crud`; 

  useEffect(() => {
    if(state) {
      const {id, firstName, lastName} = state;
      setDataId(id);
      setFirstName(firstName);
      setLastName(lastName);
    } else {
      navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

    // ========== UPDATE (PUT/PATCH) Data : start ========== //
    const updateData = (e) => {
      e.preventDefault();
  
      if(firstName && lastName) {
        axios({
          method: 'put',
          url: `${apiUrl}/${dataId}`,
          data: {
            firstName,
            lastName
          }
        }).then(() => {
          setFirstName("");
          setLastName("");
          navigate('/');
        })
      }
    }
    // ========== UPDATE (PUT/PATCH) Data : end ========== //

  return (
    <>
      <section className="update">
        <div className="wrapper">
          {/* update list */}
          <h2 className="section-title">Update list</h2>
          <form
            name="updateForm"
            className="form update-form"
            onSubmit={(e) => updateData(e)}
          >
            <div className="input-group">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="first name..."
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="last name..."
              />
            </div>
            <div className="input-control">
              <input type="submit" value="update" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Update