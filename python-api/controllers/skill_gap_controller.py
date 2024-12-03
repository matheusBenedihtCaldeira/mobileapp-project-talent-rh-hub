from fastapi import HTTPException
import pandas as pd
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from core.db_connection import get_connection, close_connection

nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('wordnet')
nltk.download('omw-1.4')

class SkillGapController:

    @classmethod
    def process_skill_gap(cls, vagas_df, funcionarios_df):
        # Obter stopwords em inglês
        stop_words = set(stopwords.words('english'))

        def extract_keywords(text):
            """ Tira todas as palavras que não nos interessam da descrição das vagas em aberto """
            tokens = word_tokenize(text.lower())
            return set([token for token in tokens if token.isalpha() and token not in stop_words])

        # Extrair habilidades das descrições das vagas
        vagas_df['job_skills'] = vagas_df['job_description'].apply(
            lambda desc: extract_keywords(desc) if pd.notnull(desc) else set()
        )

        # Transformar as habilidades dos funcionários em conjuntos
        funcionarios_df['skills'] = funcionarios_df['skills'].apply(
            lambda skills: set(skills) if isinstance(skills, list) else set()
        )

        # Identificar gaps por departamento
        results = []
        for dept in vagas_df['department'].unique():
            vagas_skills = set.union(*vagas_df[vagas_df['department'] == dept]['job_skills'])
            funcionarios_skills = set.union(
                *funcionarios_df[funcionarios_df['department'] == dept]['skills']
            )
            skill_gap = vagas_skills - funcionarios_skills
            results.append({"department": dept, "skill_gap": list(skill_gap)})
        return results

    @classmethod
    def get_skill_gap(cls):
        try:
            # Extrai informações do banco de dados
            connection = get_connection()
            with connection.cursor() as conn:
                vagas_query = """
                    SELECT d.name AS department, v.descricao AS job_description
                    FROM tb_vacancies v
                    JOIN tb_departments d ON v.departamento_id = d.id;
                    """
                conn.execute(vagas_query)
                vagas = conn.fetchall()
                vagas_df = pd.DataFrame(vagas, columns=["department", "job_description"])

                # Query para obter habilidades dos funcionários
                funcionarios_query = """
                    SELECT d.name AS department, p.skills
                    FROM tb_profiles p
                    JOIN tb_departments d ON p.department_id = d.id;
                    """
                conn.execute(funcionarios_query)
                funcionarios = conn.fetchall()
                funcionarios_df = pd.DataFrame(funcionarios, columns=["department", "skills"])

                # Processando os dados de funcionarios por departamentos e vagas
                resultados = cls.process_skill_gap(vagas_df, funcionarios_df)
                return {"data": resultados}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
        finally:
            close_connection()
