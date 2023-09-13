import { login } from '@/api/firebase'
import { Button, Input } from 'mdc-ui'
import React from 'react'

export default function Admin() {
    const [user, setUser] = React.useState({
        email: '',
        password: ''
    })

    const handleLogin = async () => {
        try {
            const userData = await login(user.email as string, user.password as string)
            console.log(userData)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='h-[calc(100vh-6rem)] bg-gradient-to-r from-violet-500/20 via-violet-500 to-violet-500/40 flex flex-col gap-6 justify-center items-center'>
            <div className='w-1/3 flex flex-col gap-6 items-end'>
                <Input
                    label={
                        { text: 'Email' }
                    }
                    type="text"
                    value={user.email}
                    onChange={(value) => setUser({ ...user, email: value })}
                />
                <Input
                    label={
                        { text: 'Contraseña' }
                    }
                    type="password"
                    value={user.password}
                    onChange={(value) => setUser({ ...user, password: value })}
                />

                <div>
                    <Button label='Iniciar sesión' shade='900' onClick={handleLogin} />
                </div>
            </div>
        </div>
    )
}
