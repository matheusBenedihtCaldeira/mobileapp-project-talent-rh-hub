const users = [
    {
        'id': 1,
        'name': 'Albertão dos Pneus',
        'email': 'albertao@pneu.com'
    },
    {
        'id': 2,
        'name': 'Carlos dos Pneus',
        'email': 'carlos@pneu.com'
    },
    {
        'id': 3,
        'name': 'Maria dos Pneus',
        'email': 'maria@pneu.com'
    },
]

export const indexUsers = (req, res) => {
    res.json(users)
}