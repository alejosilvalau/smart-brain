import React from 'react';

const Navigation = ( {onRouteChange, isSignedIn} ) => {
        if (isSignedIn) {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signout')} className='f3 link dim b--pink underline pa3 pointer calisto ttu ba solid pink'>Sign out</p>
                </nav>

            )    
        } else {
            return (
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <p onClick={() => onRouteChange('signin')} className='f3 link dim b--pink underline pa3 pointer calisto ttu ba solid pink'>Sign in</p>
                        <p onClick={() => onRouteChange('register')} className='f3 link dim b--pink underline pa3 pointer calisto ttu ba solid pink'>Register</p>
                    </nav>
            );
        }

}

export default Navigation;