import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`, `idade`, `rua`, `bairro`, `estado`, `biografia`, `imagem`) VALUES(?)";
    const values = [
        req.body.nome,
        req.body.idade,
        req.body.rua,
        req.body.bairro,
        req.body.estado,
        req.body.biografia,
        req.file ? `/public/images/${req.file.filename}` : null
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const q = "UPDATE usuarios SET `nome` = ?, `idade` = ?, `rua` = ?, `bairro` = ?, `estado` = ?, `biografia` = ?, `imagem` = ? WHERE `id` = ?";
    const values = [
        req.body.nome,
        req.body.idade,
        req.body.rua,
        req.body.bairro,
        req.body.estado,
        req.body.biografia,
        req.file ? `/public/images/${req.file.filename}` : req.body.imagem
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";
    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);
        return res.status(200).json("Usuário deletado com sucesso.");
    });
};
