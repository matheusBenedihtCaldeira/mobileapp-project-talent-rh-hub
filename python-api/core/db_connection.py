import psycopg2
from psycopg2.extras import RealDictCursor
from core.config import DB_CONFIG

_connection = None
def get_connection():
    global _connection
    if not _connection:
        try:
            _connection = psycopg2.connect(**DB_CONFIG)
            print("Conexão com o banco de dados estabelecida!")
        except psycopg2.Error as e:
            print(f"Erro ao conectar ao banco de dados: {e}")
            raise
    return _connection

def close_connection():
    global _connection
    if _connection:
        _connection.close()
        _connection = None
        print("Conexão com o banco de dados foi fechada.")
