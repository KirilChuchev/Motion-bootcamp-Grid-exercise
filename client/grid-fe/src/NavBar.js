import React from 'react';

const NavBar = () =>
    (
        <tr>

            <th className='sort' id='identification'>
                <a type='submit' href='/sort/identification'>Identification</a>
            </th>

            <th className='sort' id='firstName'>
                <a type='submit' href='/sort/firstName'>First Name</a>
            </th>

            <th className='sort' id='lastName'>
                <a type='submit' href='/sort/lastName'>Last Name</a>
            </th>

            <th className='sort' id='email' >
                <a type='submit' href='/sort/email'>Email</a>
            </th>

            <th className='sort' id='position'>
                <a type='submit' href='/sort/position'>Position</a>
            </th>

            <th className='sort' id='department'>
                <a type='submit' href='/sort/department'>Department</a>
            </th>

        </tr>
    )

export default NavBar