"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _VacanciesModelsjs = require('../../models/vacancies/VacanciesModels.js');

//selecioa tudo
 const index = async (req,res) => {
    try {
        const vacancies = await _VacanciesModelsjs.getAllVacancies.call(void 0, );
        res.json(vacancies); // cria uma lista com a resposta
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving vacancies",
            error: err.message
        });
    }
}; exports.index = index

//seleciona por id
 const getById = async (req,res) =>{
    
    try {
        const vacancies = await _VacanciesModelsjs.getVacancyById.call(void 0, req.params.id); // params vem da url
        res.json(vacancies);
        
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving vacancies",
            error: err.message
        });
    }
    
   
}; exports.getById = getById



 const create = async (req, res) => {
    try {
        const vacancy = await _VacanciesModelsjs.insertVacancies.call(void 0, req.body); // body vem do form
        res.status(201).json(vacancy); // 201 created
    } catch (err) {
        res.status(500).json({
            message: "Error creating vacancy",
            error: err.message
        });
    }
}; exports.create = create



 const deleteById = async(req, res) =>{
    try{
        await _VacanciesModelsjs.deleteVacancies.call(void 0, req.params.id);
        res.status(204).send(); // 204 no content
    } catch(err){
        res.status(500).json({
            message: "Error deleting vacancy",
            error: err.message
        });
    }
}; exports.deleteById = deleteById

 const update = async (req, res) => {
    try{
        const vacancy = await _VacanciesModelsjs.updateVacancies.call(void 0, req.params.id, req.body); // recebe a data por form e data por form
        res.json(vacancy);
    } catch(err){
        res.status(500).json({
            message: "Error updating vacancy",
            error: err.message
        });
    }
 
}; exports.update = update