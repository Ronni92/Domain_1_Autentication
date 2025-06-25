from pydantic import BaseModel, EmailStr

class Profile(BaseModel):
    email: EmailStr
    name: str | None = None
    phone: str | None = None
