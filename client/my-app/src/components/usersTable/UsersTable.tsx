import React from 'react'
import UserModel from '../model/UserModel.js'

interface UserTableProps {
    user: UserModel
}

export const UsersTable = (props: UserTableProps) => {
    return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.first_name}</td>
            <td>{props.user.last_name}</td>
            <td>{props.user.user_name}</td>
        </tr>
    )
}
