import { getAllVacancies,deleteVacancies,insertVacancies,updateVacancies,getVacancyById } from "../../models/vacancies/VacanciesModels.js";

//selecioa tudo
export const index = async (req,res) => {
    try {
        const vacancies = await getAllVacancies();
        res.json(vacancies); // cria uma lista com a resposta
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving vacancies",
            error: err.message
        });
    }
}

//seleciona por id
export const getById = async (req,res) =>{
    
    try {
        const vacancies = await getVacancyById(req.params.id); // params vem da url
        res.json(vacancies);
        
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving vacancies",
            error: err.message
        });
    }
    
   
}



export const create = async (req, res) => {
    try {
        const vacancy = await insertVacancies(req.body); // body vem do form
        res.status(201).json(vacancy); // 201 created
    } catch (err) {
        res.status(500).json({
            message: "Error creating vacancy",
            error: err.message
        });
    }
}



export const deleteById = async(req, res) =>{
    try{
        await deleteVacancies(req.params.id);
        res.status(204).send(); // 204 no content
    } catch(err){
        res.status(500).json({
            message: "Error deleting vacancy",
            error: err.message
        });
    }
}

export const update = async (req, res) => {
    try{
        const vacancy = await updateVacancies(req.params.id, req.body); // recebe a data por form e data por form
        res.json(vacancy);
    } catch(err){
        res.status(500).json({
            message: "Error updating vacancy",
            error: err.message
        });
    }
 
}