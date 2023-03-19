import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Read = () => {
  const [data, getData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [change, setChange] = useState(false);
  const navigate = useNavigate();
  const [errApi, setErrApi] = useState('');

  const apiUrl = `https://636dcdca91576e19e33052c1.mockapi.io/crud`;

  // ========== GET Data : start ========== //
  const getApiData = async () => {
    try {
      const response = await axios.get(apiUrl);
      getData(response.data);
    } catch (error) {
      if(error.request.status !== 200) {
        setErrApi(error.message);
      }
    }
  }

  useEffect(() => {
    getApiData();
    if(errApi !== "") {
      setErrApi("")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [change]);
  // ========== GET Data : end ========== //

  // ========== POST Data : start ========== //
  const postData = (e) => {
    e.preventDefault();

    if(firstName && lastName) {
      axios({
        method: 'post',
        url: apiUrl,
        data: {
          firstName,
          lastName
        }
      }).then(() => {
        setChange(!change);
        setFirstName("");
        setLastName("");
      })
    }
  }
  // ========== POST Data : end ========== //

  // ========== DELETE Data : start ========== //
  const deleteData = (id) => axios.delete(`${apiUrl}/${id}`).then(() => setChange(!change));
  // ========== DELETE Data : end ========== //

  // ========== Redirect to Update Page : start ========== //
  const goToUpdataPage = (item) => navigate("/update", { state: item });
  // ========== Redirect to Update Page : end ========== //

  //   // ************************************************ // 
  //   // ========== Axios interceptors : start ========== //

  //   // axios.interceptors.request.use((config) => {
  //   //   console.log(`method: ${config.method.toUpperCase()}, url: ${config.url} & request time: ${new Date().toLocaleTimeString()}`);
  //   //   return config;
  //   // }, (err) => {
  //   //   return Promise.reject(err);
  //   // })

  //   // axios.interceptors.response.use((response) => {
  //   //   return response;
  //   // }, (err) => {
  //   //   return Promise.reject(err);
  //   // })

  //   // ========== Axios interceptors : end ========== //
  //   // ************************************************ //  

  const finalData = data.map((item) => {
    const {id, firstName, lastName} = item;
    return (
      <li className="item list" key={id}>
        <span className='id'>{id}</span>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span className='update'><button className='update-btn' onClick={() => goToUpdataPage(item)}>update</button></span>
        <span className='delete'><button className='delete-btn' onClick={() => deleteData(id)}>delete</button></span>
      </li>
    );
  })

  return (
    <>
      <section className="read">
        <div className="wrapper">
          {/* create lists */}
          <h2 className="section-title">Create list</h2>
          <form
            name="readForm"
            className="form read-form"
            onSubmit={(e) => postData(e)}
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
              <input type="submit" value="create" />
            </div>
          </form>
          {/* read lists */}
          <h2 className="section-title">read list</h2>
          <ul className="list-items">
            <li className="list-heading list">
              <span className="id">id</span>
              <span>first name</span>
              <span>last name</span>
              <span className="update">update</span>
              <span className="delete">delete</span>
            </li>
            {errApi !== "" ? (<span className="error-msg">{errApi}</span>) : (finalData)}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Read