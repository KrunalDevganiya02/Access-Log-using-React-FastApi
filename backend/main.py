from fastapi import FastAPI
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

location='/var/log/nginx/access.log'

@app.get("/access-logs/")
async def read_access_log():
    try:
        with open(location, 'r') as file:
            log_data = file.readlines()  
        return {"logData": log_data}
    except Exception as e:
        return {print(e)}
