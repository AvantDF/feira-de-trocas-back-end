import encryptPassword from '../../utils/passwords/encryptPassword.js'
import {createUser, findUserByEmail} from '../../repositories/userRepository.js'

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        
        const emailExists = await findUserByEmail(email)
        if (emailExists) {
            return res.status(409).json({message: 'E-mail já cadastrado.'})
        }

        const encryptedPassword = await encryptPassword(password)

        await createUser({
            name,
            email,
            password: encryptedPassword,
        })

        return res.status(201).json({message: 'Usuário cadastrado com sucesso.'})
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error)
        return res.status(500).json({message: 'Erro interno do servidor.'})
    }
}

export default registerUser
