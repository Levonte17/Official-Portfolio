import { login, logout } from '../Firebase';



function Sidebar({user}){

    return(
<div className="sidebar">

        <br/>
        <section>

        { 
            user ? 
            <>
            <div className='user'>
            Welcome, {user.displayName}
            </div>
        <div className='user'
            onClick={logout}>
            LOGOUT
        </div>
            </>
        :
        <div onClick={login}>
            LOGIN
        </div>
        }

    </section>
</div>
    )
};

export default Sidebar;