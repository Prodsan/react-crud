import React, { Fragment, useState } from "react";
import { useGetUsers } from './../hooks/users/useGetUsers';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const AddUser = (props) => {
    const API_USERS = 'https://reqres.in/api/users';
    const history = useHistory();

    const [datos, setDatos] = useState({
        first_name: '',
        last_name: '',
        email: '',
        avatar: ''
    });

    const handleInputChange = event => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value,
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(`Submitting datos ${datos}`)
        axios.post(API_USERS, datos)
            .then((response) => {
                console.log(response);
                (response.status === 201) ? alert('201: Usuario creado') : alert('Error creando usuario')
            })
            .catch((error) => {
                console.error(error);
            })

    };
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="last_name">
                        Apellidos:
                    </label>
                    <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="avatar">
                        Avatar:
                    </label>
                    <input
                        type="url"
                        name="avatar"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                </div>

                <input type="submit" value="Submit" />
            </form>
            {datos?.avatar ? (
                <img src={datos?.avatar} alt="Avatar" />
            ) : null}
            <button
                onClick={(event) => {
                    event.preventDefault();
                    history.goBack();
                }}
            >Volver</button>
        </Fragment>
    );
}