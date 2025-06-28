import React from 'react'

const MenuOverlay = () => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {links.map((link) => (
                <li key={link.path}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay
