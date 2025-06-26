import bcrypt from 'bcrypt'

const encryptPassword = async (password, saltOrRounds = 10) => {
    const encryptedPassword = await bcrypt.hash(password, saltOrRounds)

    return encryptedPassword
}

export default encryptPassword
