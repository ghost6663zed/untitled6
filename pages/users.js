import {useEffect, useState} from "react";
import Link from "next/link";

const Users = ({users}) => {



    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link legacyBehavior href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>


                )}
            </ul>
            
        </div>
    );
};

export default Users;

