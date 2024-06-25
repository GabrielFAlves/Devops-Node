import React from "react";

const Navbar = () => {
  return (
    <div className="bg-dark p-3 text-white">
        <img src="https://i.imgur.com/jnlbNsc_d.jpg?maxwidth=520&shape=thumb&fidelity=high" className="logo" />
        <a className="m-2 text-white text-decoration-none">
            <i class="fa-solid fa-house"></i> HOME
        </a>
        <a className="m-2 text-white text-decoration-none">
            <i class="fa-solid fa-user-plus"></i> CADASTRO
        </a>
        <a className="m-2 text-white text-decoration-none">
            <i class="fa-solid fa-list"></i> LISTA
        </a>
    </div>
  );
};

export default Navbar;